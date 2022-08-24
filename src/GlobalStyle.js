import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
   margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
  font-family: "Inter", sans-serif;
}

#root {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 8fr 2fr;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
} 

body {
   --bg-color: teal;
   background: linear-gradient(to bottom left, #000000, var(--bg-color));
    min-height: 100vh;
    &::-webkit-scrollbar {
    display: none;
  }
}`;

export default GlobalStyle;
