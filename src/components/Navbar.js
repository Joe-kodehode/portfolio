import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  grid-column: 2;
  display: block;
  height: 100vh;
  max-width: 260x;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: end;
  padding: 30px;
  font-size: 40px;
  font-weight: bold;
`;

const NavItem = styled(Link)`
  padding: 10px 0px;
  color: white;
  font-family: "Inter", sans-serif;
  text-decoration: none;
`;

export default function Navbar() {
  return (
    <Nav className="Nav">
      <NavItem to="/About">ABOUT ME</NavItem>
      <NavItem to="/Skills">SKILLS</NavItem>
      <NavItem to="/Projects">PROJECTS</NavItem>
      <NavItem to="/Contact">CONTACT</NavItem>
    </Nav>
  );
}
