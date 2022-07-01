import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
   margin: 0;
  padding: 0;
  box-sizing: border-box;
}


#root {
   display: grid;
   grid-template-columns: 4fr minmax(1fr, 255px);
   height: 100vh;
    max-width: 100vw;
   background: linear-gradient(to bottom left, #000000, teal) ;
}`;

export default GlobalStyle;
