import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  color: white;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
} 

body {
  /* colors */
  --bg-color: ${({ theme }) => theme.bg};

  /* fonts */
  --font-size-h1: 80px;
  
  /* grids */
  --grid-root: auto / 8fr 2fr;

  /* Nav */
  --position-nav: sticky;
  --height-nav: 100vh;
  --padding-nav-item: 10px 0px;

  /* Projects */
  --width-projects-card: 600px;

  /* Background */

  background: linear-gradient(to bottom left, #000000, var(--bg-color));
  min-height: 100vh;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Mobile styling */
  @media only screen and (max-width: 900px) {
    --font-size-h1: 8vw;
    --grid-root: 1fr 3rem / auto;

    /* Nav */
    --position-nav: absolute;
    --height-nav: 30px;
    --width-nav: 100vw;
    --margin-top-nav: 1rem;
    --padding-nav-item: 2px;

    /* Main */
    --main-width: 99vw;
    --main-margin-top: 70px;

    /* Projects */
    
    --width-projects-card: 100%;
  }
}

#root {
  align-items: center;
  display: grid;
  grid: var( --grid-root );
  justify-content: center;
  min-height: 100vh;
}`;
