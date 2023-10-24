import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { getDate } from "../../../libs/utils/date";
import QNAAnswerPage from "./edit";

export default function QNADetail() {
  const { boardId } = useParams();
  const [detailData, setDetailData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const getQnaDetailData = async () => {
    // 1) http 통신 전/후에 isLoading을 적용해주세요.
    // 2) async/await 패턴을 써서 작성해주세요.
  };
  useEffect(() => {
    // => getQnaDetailData()
    axios
      .get(
        `https://vercel-express-pied-kappa.vercel.app/qna/${String(boardId)}`
      )
      .then((response) => {
        setDetailData(response.data.data);
      })
      .catch(() => {
        console.log("에러");
      });
  }, []);

  return (
    <main>
      <h1>QNA Detail</h1>
      {isLoading && <div>Loading....</div>}
      {!isLoading && (
        <>
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
        </>
      )}

      <br />

      <nav>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-slate-400"
        >
          목록으로 돌아가기
        </button>
      </nav>
    </main>
  );
}
