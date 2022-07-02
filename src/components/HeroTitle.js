import styled from "styled-components";

const HeroWrapper = styled.article`
  grid-column: span 10;
`;

export default function HeroTitle() {
  return (
    <HeroWrapper>
      <h1>Joe Glendenning</h1>
    </HeroWrapper>
  );
}
