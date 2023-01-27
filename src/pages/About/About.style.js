import styled from "styled-components";

export const StyledAbout = styled.article`
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 1px;
  padding: 0 1.2rem;
  text-align: justify;

  @media only screen and (max-width: 900px) {
    font-size: 1.3rem;
    line-height: 1.3;
    padding: 0 0.2rem;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 40px;
  color: green;
  margin-bottom: 8px;
  margin-top: 20px;
  text-align: justify;
`;

export const StyledJoePic = styled.img`
  width: 200px;
  object-fit: contain;
`;

export const PicHexagon = styled.div`
  display: flex;
  place-items: center;
  width: 200px;
  height: 200px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  contain: content;
`;

export const PicHexagonBorder = styled.div`
  float: right;
  display: flex;
  place-items: center;
  place-content: center;
  margin: 0.5em;
  background: white;
  width: 208px;
  height: 208px;
  shape-outside: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;
