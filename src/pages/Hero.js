import { useEffect } from "react";
import styled from "styled-components";

const HeroWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 5rem;
  min-height: 80%;
  padding: 20px;
`;

const HeroText = styled.h1`
  font-size: var(--font-size-h1);
`;

const HeroSpan = styled.span`
  color: red;
`;

export default function HeroTitle({ setTheme }) {
  useEffect(() => {
    setTheme({ bg: "green" });
  }, []);

  return (
    <HeroWrapper>
      <HeroText>
        <HeroSpan>JOE</HeroSpan>
        <br />
        FRONT END
        <br />
        <HeroSpan>WEB</HeroSpan> DEVELOPER
      </HeroText>
    </HeroWrapper>
  );
}
