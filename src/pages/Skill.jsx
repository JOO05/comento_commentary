const skills = "React,Typescript,Graphql,Styled Component";

const Skill = () => {
  return (
    <div>
      {skills.split(",").map((skill, index) => (
        <div key={`skill-${index}`}>{skill}</div>
      ))}
    </div>
  );
};
export default Skill;
