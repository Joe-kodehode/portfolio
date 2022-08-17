import styled from "styled-components";

export const StyledProjectsCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  border: 3px solid black;
  width: 700px;
  height: 700px;
  border: red solid 1px;
`;

export const StyledImgContainer = styled.div`
  border: blue 1px solid;
  height: 24rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  & img {
    height: 90%;
    width: 90%;
    object-fit: contain;
    transition: transform 0.2s;
  }
`;
