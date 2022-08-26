import MainContainer from "../../components/MainContainer";
import { useEffect } from "react";
import { StyledSkillsContainer, StyledParagraph } from "./Skills.style";

export default function Skills({ setTheme }) {
  useEffect(() => {
    setTheme({ bg: "red" });
  }, []);

  return (
    <MainContainer>
      <StyledSkillsContainer>
        <StyledParagraph>Skills</StyledParagraph>
      </StyledSkillsContainer>
    </MainContainer>
  );
}
