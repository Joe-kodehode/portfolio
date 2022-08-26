import styled from "styled-components";

export const StyledAbout = styled.article`
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 1px;
  padding: 0 1.2rem;

  @media only screen and (max-width: 900px) {
    font-size: 1.3rem;
    line-height: 1.3;
    padding: 0 0.2rem;
  }
`;

export const StyledTitle = styled.h2`
  color: cornflowerblue;
  margin-bottom: 8px;
  margin-top: 20px;
`;
