import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
import Header from './pages/Header';
import { commonFunctionPath } from './common/commonFunction';
export default function App() {
  const [content, setContent] = useState("");
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home content={content} setContent={setContent} />} />
        <Route path="/skill" element={<Skill content={content} setContent={setContent} />} />
        <Route path="/contact" element={<Contact content={content} setContent={setContent} />} />
      </Routes>
    </Router>
  );
}
function Home(props) {
  useEffect(() => {
    commonFunctionPath()
    props.setContent("이름: 주현정,MBTI: INTJ")
  }, []);
  return (
    <section>
      {props.content.split(",").map(function(el){
        return <h2>{el}</h2>
      })}
    </section>
  );
}

function Skill(props) {
  useEffect(() => {
    commonFunctionPath()
    props.setContent("React,Typescript,Graphql,Styled Component")
  }, []);
  return (
    <section>
      {props.content.split(",").map(function(el){
        return <h2>{el}</h2>
      })}
    </section>
  );
}

function Contact(props) {
  useEffect(() => {
    commonFunctionPath()
    props.setContent("이메일: twincornjr@gmail.com,카카오톡 아이디: xmdnls0505")
  }, []);
  return (
    <section>
      {props.content.split(",").map(function(el){
        return <h2>{el}</h2>
      })}
    </section>
  );
}