import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  font-size: 40px;
  font-weight: bold;
  padding: 10px;
  @media only screen and (max-width: 900px) {
    flex-direction: row;
    font-size: 16px;
    width: 100%;
    justify-content: space-around;
  }
`;

export const NavItem = styled(NavLink)`
  border: 1px solid red;
  padding: var(--padding-nav-item);
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
  }

  @media only screen and (max-width: 900px) {
    ${({ active }) => active && `transform: translate(0px, 4px);`}
    white-space: nowrap;

    font-size: 4vw;

    &:hover {
      transform: translate(0px, 4px);
    }
  }
`;

export const NavContainer = styled.aside`
  display: flex;
  align-items: center;
  align-self: flex-start;
  position: var(--position-nav);
  width: var(--width-nav);
  height: var(--height-nav);
  margin-top: var(--margin-top-nav);
`;
