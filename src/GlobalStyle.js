import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
   margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

#root {
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

} 

body {
   --bg-color: teal;
   background: linear-gradient(to bottom left, #000000, var(--bg-color));
    min-height: 100vh;
}`;

export default GlobalStyle;
