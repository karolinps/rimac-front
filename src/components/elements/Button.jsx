import React from "react";
import styled from "styled-components";

const Button = ({ children, height, width, onClick }) => {
  return (
    <ButtonCustom height={height} width={width} onClick={onClick}>
      {children}
    </ButtonCustom>
  );
};

export default Button;

const ButtonCustom = styled.button.attrs((props) => ({
  width: props.width || "192px",
  height: props.height || "56px",
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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
