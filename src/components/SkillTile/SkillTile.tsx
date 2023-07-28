import "./SkillTile.css";

interface skillData {
  skillName: string;
  srcPath: string;
  alt: string;
}

function SkillTile({ skillName, srcPath, alt }: skillData) {
  return (
    <div className="skill">
      <span className="skill-title">{skillName}</span>
      <div className="skill-imgCont">
        <img src={srcPath} width="100%" alt={alt} />
      </div>
    </div>
  );
}

export default SkillTile;
