import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const Main = styled.main`
  background: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  border: black 3px solid;
  align-self: center;
  justify-self: center;
  max-height: 80%;
  overflow-y: auto;
  max-width: 80ch;
  padding: 20px;
`;

function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Main>
      <Navbar />
    </>
  );
}

export default App;
