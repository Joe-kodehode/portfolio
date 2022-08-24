import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  font-weight: bold;
  padding: 10px;
  @media only screen and (max-width: 900px) {
    flex-direction: row;
    font-size: 16px;
    width: 100%;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 10px 0px;
  text-decoration: none;
  color: white;
  ${({ linkcolor, active }) => active && `color: ${linkcolor};`}
  ${({ active }) => active && `transform: translate(-10px);`}
  ${({ linkcolor, active }) =>
    active && `text-shadow: 8px 0px 10px ${linkcolor};`}
  transition: transform 200ms, text-shadow 200ms;
  &:hover {
    cursor: pointer;
    ${({ linkcolor }) => `color: ${linkcolor};`}
    ${({ linkcolor }) => `text-shadow: 8px 0px 10px ${linkcolor};`}
    
    transform: translate(-10px);

    @media only screen and (max-width: 900px) {
      width: 60px;

      &:hover {
        transform: translate(0px, 3px);
    }
  }
`;

export const NavContainer = styled.aside`
  height: 100vh;
  display: flex;
  align-items: center;
  align-self: flex-start;
  position: sticky;
  inset: 0;

  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 30px;
    position: absolute;
  }
`;
