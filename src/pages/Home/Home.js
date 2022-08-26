import { useEffect } from "react";
import { HomeSpan, HomeWrapper, HomeText } from "./Home.style";

export default function HomeTitle({ setTheme }) {
  useEffect(() => {
    setTheme({ bg: "green" });
  }, []);

  return (
    <HomeWrapper>
      <HomeText>
        <HomeSpan>JOE</HomeSpan>
        <br />
        FRONT END
        <br />
        <HomeSpan>WEB</HomeSpan> DEVELOPER
      </HomeText>
    </HomeWrapper>
  );
}
