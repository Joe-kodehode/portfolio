import styled from "styled-components";

export const StyledSkillsContainer = styled.div`
  /* width: 500px; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledImg = styled.img`
  object-fit: contain;
  height: 70%;
`;

export const SkillsHexagon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: 200px;
  height: 200px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  contain: content;
`;

export const SkillsHexagonBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: 208px;
  height: 208px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  margin: 0 auto;
`;
