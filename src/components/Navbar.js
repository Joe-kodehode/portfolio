import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  //   display: flex;
  //   flex-direction: column;
  //   align-items: flex-start;
  //   font-size: 32px;
  //   font-weight: bold;
  //   position: fixed;
  //   top: 0;
  //   height: 100vh;
  //   width: 200px;
  //   justify-content: center;
  //   border: green 1px solid;

  display: flex;
  flex-direction: column;
  font-size: 32px;
  font-weight: bold;
  padding: 10px;
  border: green 1px solid;
`;

const NavItem = styled(Link)`
  padding: 10px 0px;
  color: white;
  font-family: "Inter", sans-serif;
  text-decoration: none;
`;

const NavContainer = styled.aside`
  height: 100vh;
  border: blue 1px solid;
  display: flex;
  align-items: center;
  position: sticky;
  inset: 0;
`;

export default function Navbar() {
  return (
    <NavContainer>
      <Nav className="Nav">
        <NavItem to="/About">ABOUT ME</NavItem>
        <NavItem to="/Skills">SKILLS</NavItem>
        <NavItem to="/Projects">PROJECTS</NavItem>
        <NavItem to="/Contact">CONTACT</NavItem>
      </Nav>
    </NavContainer>
  );
}
