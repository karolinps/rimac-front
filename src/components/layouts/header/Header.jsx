import React from "react";
import { MdCall } from "react-icons/md";
import logo from "@assets/logo/logo.svg";
import {
  WrapperStyled,
  LeftStyled,
  RightStyled,
  LogoStyled,
  PhoneStyled,
  NumberPhoneStyled,
  CallUsStyled,
  SubTitleStyled,
} from "./HeaderStyles";

const Header = () => {
  return (
    <WrapperStyled>
      <LeftStyled>
        <LogoStyled src={logo} lt="logo" />
      </LeftStyled>
      <RightStyled>
        <SubTitleStyled>¿Tienes alguna duda?</SubTitleStyled>
        <PhoneStyled>
          <MdCall style={{ fontSize: 20, marginRight: 6 }} />
          <NumberPhoneStyled>(01) 411 6001</NumberPhoneStyled>
          <CallUsStyled>Llámanos</CallUsStyled>
        </PhoneStyled>
      </RightStyled>
    </WrapperStyled>
  );
};

export default Header;
