import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyle";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  const [theme, setTheme] = useState({});

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="*" element={<Hero setTheme={setTheme} />} />
          <Route path="/About" element={<About setTheme={setTheme} />} />
          <Route path="/Projects" element={<Projects setTheme={setTheme} />} />
          <Route path="/Skills" element={<Skills setTheme={setTheme} />} />
        </Routes>
        <Navbar />
      </ThemeProvider>
    </>
  );
}

export default App;
