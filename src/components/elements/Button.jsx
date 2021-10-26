import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <ButtonCustom>{children}</ButtonCustom>;
};

export default Button;

const ButtonCustom = styled.button`
  width: 192px;
  height: 56px;
  background: #ef3340;
  border-radius: 8px;
  border: none;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  @media (max-width: 991px) {
    width: 100%;
  }
`;
