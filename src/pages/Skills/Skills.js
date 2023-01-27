import MainContainer from "../../components/MainContainer/MainContainer";
import { useEffect } from "react";
import {
  StyledSkillsContainer,
  SkillsHexagon,
  SkillsHexagonBorder,
  StyledImg,
} from "./Skills.style";
import htmlIcon from "../../images/htmlIcon.png";
import cssIcon from "../../images/cssIcon.png";
import jsIcon from "../../images/jsIcon.png";
import reactIcon from "../../images/reactIcon.png";
import figmaIcon from "../../images/figmaIcon.png";

const skillImages = [htmlIcon, cssIcon, jsIcon, reactIcon, figmaIcon];

const names = ["HTML", "CSS", "JavaScript", "React", "Figma"];

export default function Skills({ setTheme }) {
  useEffect(() => {
    setTheme({ bg: "#FF0000" });
  }, []);

  return (
    <MainContainer>
      <StyledSkillsContainer>
        {skillImages.map((skill, idx) => (
          <SkillsHexagonBorder className="tooltip" key={idx}>
            <SkillsHexagon title={names[idx]}>
              <StyledImg src={skill} alt="" />
            </SkillsHexagon>
          </SkillsHexagonBorder>
        ))}
      </StyledSkillsContainer>
    </MainContainer>
  );
}
