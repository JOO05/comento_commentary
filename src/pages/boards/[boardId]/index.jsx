import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { getDate } from "../../../commons/utils";
import QNAAnswerPage from "./edit";

export default function QNADetail() {
  const boardId = useParams();
  const [detailData, setDetailData] = useState([])

  const navigate = useNavigate()
  useEffect(() =>  {
    axios.get(`https://vercel-express-pied-kappa.vercel.app/qna/${String(boardId.boardId)}`)
    .then(response => {
      setDetailData(response.data.data) 
    }).catch(() => {
      console.log("에러")
    });
  },[])

  return (
    <main>

      <h1>QNA Detail</h1>

      <section>
        <p>번호: {detailData?.id}</p>
        <p>제목: {detailData?.title}</p>
        <p>생성일: {getDate(detailData?.createdAt)}</p>
        <br />
        <p>상세내용</p>
        <div className="bg-slate-200 w-1/2 my-0 mx-auto">
          {detailData?.content}
        </div>
      </section>

      <br />

      <section>
        <QNAAnswerPage detailData={detailData} />
      </section>

      <br />

      <nav>
        <button onClick={()=>{navigate("/")}} className="bg-slate-400">
          목록으로 돌아가기
        </button>
      </nav>

    </main>
  );
}