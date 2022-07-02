import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
   margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

#root, body, html{
   height: 100%;
} `;

export default GlobalStyle;
