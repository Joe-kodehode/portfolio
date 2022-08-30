import styled from "styled-components";

export const HomeWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 5rem;
  min-height: 80%;
  padding: 20px;
`;

export const HomeText = styled.h1`
  font-size: var(--font-size-h1);
  text-align: left;
`;

export const HomeSpan = styled.span`
  color: red;
`;

// Toggle button for Impostor Styndrome
export const CheckBoxWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  opacity: 0.1;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const HexagonContainer1 = styled.div`
  position: absolute;
  top: 0;
  justify-self: center;
  width: 700px;
  height: 500px;
`;
