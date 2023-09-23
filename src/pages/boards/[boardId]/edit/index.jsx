import axios from "axios";
import { useState } from "react";
export default function QNAAnswerPage(props) {
  const [answer, setAnswer] = useState("")

  const onClickUpdate = () => {
    axios.patch(`https://vercel-express-pied-kappa.vercel.app/qna`,{
      id:props.detailData.id,answer:answer
    })
    .then(response => {
      alert("수정이 완료되었습니다.")
    }).catch(() => {
      console.log("에러")
    });
  }
  const onChangeAnswer = (event) => {
    setAnswer(event.target.value)
  }
  const answered = props.detailData.answer

  return(
    <>
      <p>답변내용</p>
      <input id="myText" 
      onChange={onChangeAnswer} 
      className="w-1/2 my-0 mx-auto bg-slate-400"
      defaultValue={answered && answered}
      disabled={answered && true} />
      <br /><br />
      <nav>
        <button className="bg-slate-400" onClick={onClickUpdate} disabled={answered && true}>
          {answered ? "답변작성 완료됨" : "답변 작성하기"}
        </button>
      </nav>
      
    </>

  )
}