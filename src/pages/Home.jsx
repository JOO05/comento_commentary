const intros = "이름: 주현정,MBTI: INTJ";

const Home = () => {
  return (
    <div>
      {intros.split(",").map((intro, index) => (
        <div key={`intro-${index}`}>{intro}</div>
      ))}
    </div>
  );
};
export default Home;
