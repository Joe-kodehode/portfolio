import styled from "styled-components";

const HeroWrapper = styled.article`
  grid-column: span 12;
  height: 100vh;
`;

const HeroText = styled.h1`
  font-size: 80px;
`;

export default function HeroTitle() {
  return (
    <HeroWrapper>
      <HeroText>Joe Glendenning</HeroText>
    </HeroWrapper>
  );
}
