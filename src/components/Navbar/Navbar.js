import { useLocation } from "react-router-dom";
import { Nav, NavContainer, NavItem } from "./Navbar.style";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <NavContainer>
      <Nav className="Nav">
        <NavItem
          linkcolor={"#004756"}
          active={pathname === "/" ? "active" : ""}
          to="/"
        >
          HOME
        </NavItem>
        <NavItem
          linkcolor={"#78005E"}
          active={pathname === "/About" ? "active" : ""}
          to="/About"
        >
          ABOUT ME
        </NavItem>
        <NavItem
          linkcolor={"#FF0000"}
          active={pathname === "/Skills" ? "active" : ""}
          to="/Skills"
        >
          SKILLS
        </NavItem>
        <NavItem
          linkcolor={"blue"}
          active={pathname === "/Projects" ? "active" : ""}
          to="/Projects"
        >
          PROJECTS
        </NavItem>
      </Nav>
    </NavContainer>
  );
}
