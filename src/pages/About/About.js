import { useEffect } from "react";
import {
  StyledTitle,
  StyledAbout,
  StyledJoePic,
  PicHexagon,
  PicHexagonBorder,
} from "./About.style";
import MainContainer from "../../components/MainContainer/MainContainer";
import Text from "./Text";
import joePic from "../../images/joePic.jpg";

export default function About({ setTheme }) {
  useEffect(() => {
    setTheme({ bg: "#78005E" });
  }, []);

  return (
    <>
      <MainContainer>
        <StyledAbout>
          <StyledTitle>{Text.Current.Title}</StyledTitle>
          <PicHexagonBorder>
            <PicHexagon>
              <StyledJoePic src={joePic}></StyledJoePic>
            </PicHexagon>
          </PicHexagonBorder>
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
