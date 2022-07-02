import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  font-size: 32px;
  font-weight: bold;
  align-self: center;
  margin-left: 48px;
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
