import MainContainer from "../../components/MainContainer/MainContainer";
import { useEffect } from "react";
import { StyledSkillsContainer, StyledParagraph } from "./Skills.style";

export default function Skills({ setTheme }) {
  useEffect(() => {
    setTheme({ bg: "#FF0000" });
  }, []);

  return (
    <MainContainer>
      <StyledSkillsContainer>
        <StyledParagraph>Skills</StyledParagraph>
      </StyledSkillsContainer>
    </MainContainer>
  );
}
