import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="flex justify-around w-full h-auto bg-gray-50 font-bold">
      <Link to="/">자기소개 내용</Link>
      <Link to="/skill">개발 관련 기술 나열</Link>
      <Link to="/contact">연락처</Link>
    </header>
  )
}