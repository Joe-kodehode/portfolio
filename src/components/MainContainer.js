import styled from "styled-components";

const ContentWrapper = styled.main`
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  border: black 1px solid;
  display: flex;
  margin: 1rem;
  max-width: 1200px;
  min-height: 80%;
  padding: 20px;
`;

export default function MainContainer({ children }) {
  return <ContentWrapper>{children}</ContentWrapper>;
}
