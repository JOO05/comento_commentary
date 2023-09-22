import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";

const getDate = (date) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = _date.getMonth() + 1;
  const dd = _date.getDate();
  return `${yyyy}-${mm}-${dd}`;
};

const Page = styled.span`
  margin: 0px 10px;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props) => (props.isActive ? "none" : "pointer")};
`;

export default function QNAList() {
  const navigate = useNavigate()
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const [lastPage, setLastPage] = useState(1)

  const onClickMoveToBoardDetail = (event) => {
    navigate(`/qna/${event.currentTarget.id}`);
    alert("이동 완료")
  };
  const [data, setData] = useState([])

  useEffect(() =>  {
    axios({
      method: 'get',
      url: 'https://vercel-express-pied-kappa.vercel.app/qna',
      params: {
        page:activedPage
      }
    }).then(response => {
      console.log(response.data) 
      setData(response.data.data.contents)
      setLastPage(Math.ceil((response.data.data.totalElements ?? 10) / 10)) // 10개식 자르는 것 기준으로 전체 페이지 수 구하기
    }).catch(() => {
      console.log("에러")
    });
  },[activedPage])

  const onClickPage = (event) => {
    const activedPage = Number(event.currentTarget.id);
    setActivedPage(activedPage);
  };

  const onClickPrevPage = ()  => {
    if (startPage === 1) return; // 있지도 않은 마이너스 페이지로 넘어가지 않도록 한다.

    setStartPage(startPage - 10); // 이전 버튼을 누르면, 만약 11페이지에 있다면 1페이지로 넘어간다.
    setActivedPage(startPage - 10);
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) { // startPage 값은 마지막 페이지 값보다 무조건 작거나 같아야 한다.
      // 따라서 startPage에서 10을 더한 값 lastPage보다 작다면 페이지를 이동 가능하게 조건을 걸어야 한다.

      setStartPage(startPage + 10); // 다음 버튼을 누르면, 1페이지에 있다면 11페이지로 넘어간다.
      setActivedPage(startPage + 10);
    }
  };

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
          <section className="flex flex-row h-52px leading-52px border-b-1 border-b-gray-400 border-b-solid hover:text-blue-400" key={uuidv4()} id={el?.id}>
            <div className="w-1/12 text-center">{el?.id}</div>
            <div className="w-7/12 text-center cursor-pointer" onClick={onClickMoveToBoardDetail}>{el?.title}</div>
            <div className="w-2/12 text-center">{getDate(el?.createdAt)}</div>
            <div className="w-2/12 text-center">{(el?.isDone) ? "답변 완료" : "미답변"}</div>
          </section>
        ))}
        <div className=" border-2 border-gray-400 border-solid" />

        <div>
          <Page onClick={onClickPrevPage}>{`<`}</Page>

          {/* 
            구한 lastPage 값보다 작거나 같을 때만 해당하는 페이지를 보여주기 위해서는 조건부 렌더링을 활용한다.
            Array의 10이란 값은 한 페이지에 보여지는 리스트의 양이다.
             map에 el 값을 사용하지 않을 때 통상적으로 (_, index)로 표기한다.
             isActive를 props 값으로 넘겨 클릭한 페이지 숫자에 bold 설정을 추가한다.
           */}
          {new Array(10).fill(1).map((_, index) => startPage + index <= lastPage && (
            <Page key={startPage + index} onClick={onClickPage} id={String(startPage + index)}
              isActive={startPage + index === activedPage}>
            {startPage + index}
            </Page>
            )
          )}
          <Page onClick={onClickNextPage}>{`>`}</Page>
        </div>
      </main>
  );
}