import { useEffect } from "react";
import { StyledTitle, StyledAbout } from "./About.style";
import MainContainer from "./../../components/MainContainer";
import Text from "./Text";

export default function About({ setTheme }) {
  useEffect(() => {
    setTheme({ bg: "#78005E" });
  }, []);

  return (
    <>
      <MainContainer>
        <StyledAbout>
          <StyledTitle>{Text.Current.Title}</StyledTitle>
          {Text.Current.Body}
          <StyledTitle>{Text.Title2}</StyledTitle>
          {Text.History.Body}
          <StyledTitle>{Text.Title3}</StyledTitle>
          {Text.Future.Body}
        </StyledAbout>
      </MainContainer>
    </>
  );
}
