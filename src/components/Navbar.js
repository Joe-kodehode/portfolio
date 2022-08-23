import styled from "styled-components";
import { useLocation, NavLink } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  font-weight: bold;
  padding: 10px;
  border: green 1px solid;
`;

const NavItem = styled(NavLink)`
  padding: 10px 0px;
  text-decoration: none;
  ${({ linkcolor }) => `color: ${linkcolor}`}
`;

const NavContainer = styled.aside`
  height: 100vh;
  border: blue 1px solid;
  display: flex;
  align-items: center;
  align-self: flex-start;
  position: sticky;
  inset: 0;
`;

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <NavContainer>
      <Nav className="Nav">
        <NavItem
          linkcolor={pathname === "/" ? "green" : "white"}
          boxshadow={pathname === "/" ? "" : "none"}
          to="/"
        >
          HOME
        </NavItem>
        <NavItem
          linkcolor={pathname === "/About" ? "purple" : "white"}
          boxshadow={pathname === "/About" ? "" : "none"}
          to="/About"
        >
          ABOUT ME
        </NavItem>
        <NavItem
          linkcolor={pathname === "/Skills" ? "red" : "white"}
          to="/Skills"
        >
          SKILLS
        </NavItem>
        <NavItem
          linkcolor={pathname === "/Projects" ? "blue" : "white"}
          to="/Projects"
        >
          PROJECTS
        </NavItem>
      </Nav>
    </NavContainer>
  );
}
