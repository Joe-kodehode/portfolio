import { useEffect } from "react";
import { StyledTitle, StyledAbout } from "./About.style";
import MainContainer from "../../components/MainContainer/MainContainer";
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
          <StyledTitle>{Text.History.Title}</StyledTitle>
          {Text.History.Body}
          <StyledTitle>{Text.Future.Title}</StyledTitle>
          {Text.Future.Body}
        </StyledAbout>
      </MainContainer>
    </>
  );
}
