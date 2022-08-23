import styled from "styled-components";

export const StyledProjectsCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  border: 3px solid black;
  border: black solid 3px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 2rem;
  overflow: hidden;
  width: 600px;
`;

export const StyledProjectsTitle = styled.h3`
  font-size: 28px;
  margin-top: 1rem;
`;

export const StyledImg = styled.img`
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const StyledDescription = styled.p`
  padding: 1rem;
  font-size: 18px;
`;

export const StyledIconGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  padding: 0.3rem;
`;

export const StyledIcon = styled.img`
  height: 3rem;
  object-fit: contain;
`;
