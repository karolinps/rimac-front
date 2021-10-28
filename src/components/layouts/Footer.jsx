import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <WrapperFooterStyled>
      © 2021 RIMAC Seguros y Reaseguros.
    </WrapperFooterStyled>
  );
};

export default Footer;
const WrapperFooterStyled = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  color: #a3abcc;
  height: 76px;
  border-top: 1px solid #e4e8f7;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0 2em;
  @media (min-width: 992px) {
    display: none;
  }
`;
