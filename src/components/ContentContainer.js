import styled from "styled-components";

const ContentWrapper = styled.article`
  background: rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  border: black 1px solid;
  padding: 20px;
  grid-column: span 10;
  display: flex;
  align-self: center;
`;

export default function ContentContainer({ children }) {
  return <ContentWrapper>{children}</ContentWrapper>;
}
