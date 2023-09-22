import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const getDate = (date) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = _date.getMonth() + 1;
  const dd = _date.getDate();
  return `${yyyy}-${mm}-${dd}`;
};

export default function QNAList() {
  const navigate = useNavigate()

  const onClickMoveToBoardDetail = (event) => {
    navigate(`/qna/${event.currentTarget.id}`);
    alert("이동 완료")
  };
  const [data, setData] = useState([])

  useEffect( () =>  {
    axios({
      method: 'get',
      url: 'https://vercel-express-pied-kappa.vercel.app/qna',
      params: {
      }
    }).then(response => {
      console.log(response.data)
      const temporary = response.data.data.contents
      temporary && temporary.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt)
      })
      setData(temporary)
    }).catch(() => {
      console.log("에러")
    });
  },[])

  return(
      <main className="w-1200px m-100px">
        <p>QNA List</p>    
        <div className="mt-20px border-2 border-gray-400 border-solid" />
        <section className="flex flex-row h-52px leading-52px border-b-1 border-b-gray-400 border-b-solid">
          <div className="w-1/12 text-center">No</div>
          <div className="w-7/12 text-center">제목</div>
          <div className="w-2/12 text-center">생성일</div>
          <div className="w-2/12 text-center">답변 완료 여부</div>
        </section>

        {data.map((el) => (
          <section className="flex flex-row h-52px leading-52px border-b-1 border-b-gray-400 border-b-solid hover:text-blue-400" key={el?.id} id={el?.id}>
            <div className="w-1/12 text-center">{el?.id}</div>
            <div className="w-7/12 text-center cursor-pointer" onClick={onClickMoveToBoardDetail}>{el?.title}</div>
            <div className="w-2/12 text-center">{getDate(el?.createdAt)}</div>
            <div className="w-2/12 text-center">{(el?.isDone) ? "답변 완료" : "미답변"}</div>
          </section>
        ))}

        <div className=" border-2 border-gray-400 border-solid" />
      </main>
  );
}