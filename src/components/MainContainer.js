import styled from "styled-components";

const ContentWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  border: black 1px solid;
  margin: 5rem;
  min-height: 80%;
  padding: 20px;

  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
`;

export default function MainContainer({ children }) {
  return <ContentWrapper>{children}</ContentWrapper>;
}
