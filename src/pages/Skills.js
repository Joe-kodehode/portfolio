import MainContainer from "../components/MainContainer";
import styled from "styled-components";

const StyledParagraph = styled.p``;

const StyledSkillsContainer = styled.div`
  /* width: 500px; */
`;

export default function Skills() {
  return (
    <MainContainer>
      <StyledSkillsContainer>
        <StyledParagraph>Skills</StyledParagraph>
      </StyledSkillsContainer>
    </MainContainer>
  );
}
