import { useEffect, useState } from "react";
import {
  HomeSpan,
  HomeWrapper,
  HomeText,
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBox,
} from "./Home.style";

export default function HomeTitle({ setTheme }) {
  useEffect(() => {
    setTheme({ bg: "#004756" });
  }, []);

  const [title, setTitle] = useState(true);

  return (
    <HomeWrapper>
      <HomeText>
        <HomeSpan>JOE,</HomeSpan>
        <br />
        {title ? "FRONT END" : "FRANTIC"}
        <br />
        <HomeSpan>WEB</HomeSpan> {title ? "DEVELOPER" : "GOOGLER"}
      </HomeText>
      <CheckBoxWrapper>
        <CheckBox
          id="checkbox"
          type="checkbox"
          onClick={() => setTitle((prev) => !prev)}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </HomeWrapper>
  );
}
