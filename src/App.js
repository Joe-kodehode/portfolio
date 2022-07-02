import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const Main = styled.main`
  min-height: 100%;
  width: 100%;
  background: linear-gradient(to bottom left, #000000, teal);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 1400px;
  padding: 24px;
  height: 100%;
`;

function App() {
  return (
    <>
      <Main>
        <Grid>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Navbar />
        </Grid>
      </Main>
    </>
  );
}

export default App;
