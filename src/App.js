import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import HeroTitle from "./pages/HeroTitle";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<HeroTitle />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
