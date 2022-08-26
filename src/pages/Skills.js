import MainContainer from "../components/MainContainer";
import styled from "styled-components";
import { useEffect } from "react";

const StyledParagraph = styled.p``;

const StyledSkillsContainer = styled.div`
  /* width: 500px; */
`;

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
