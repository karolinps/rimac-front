import React from "react";

import Input from "@elements/Input";
import Select from "@elements/Select";
import CheckBox from "@elements/CheckBox";
import Button from "@elements/Button";

import womenDesktop from "@assets/images/women-login-desktop.svg";
import womenMobile from "@assets/images/women-login-mobile.svg";

import {
  BannerMobileStyled,
  BodyBannerMobileStyled,
  NewStyled,
  TitleMobileStyled,
  TitleMobileRedStyled,
  DescriptionMobileStyled,
  ImageStyled,
  WrapperStyled,
  LeftStyled,
  RightStyled,
  FormStyled,
  TitleStyled,
  FlexSelectInputStyled,
  SectionCheckBoxStyled,
  TextUnderlineStyled,
  TextStyled,
  FooterButtonStyled,
} from "./LoginStyles";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { push } = useHistory();
  const TopBannerMobile = () => {
    return (
      <BannerMobileStyled>
        <BodyBannerMobileStyled>
          <NewStyled>¡NUEVO!</NewStyled>
          <TitleMobileStyled>Seguro Vehicular </TitleMobileStyled>
          <TitleMobileRedStyled>Tracking</TitleMobileRedStyled>
          <DescriptionMobileStyled>
            Cuentanos donde le haras seguimiento a tu seguro
          </DescriptionMobileStyled>
        </BodyBannerMobileStyled>
        <ImageStyled src={womenMobile} alt="women" />
      </BannerMobileStyled>
    );
  };

  const login = () => {
    push("/your-plan");
  };
  return (
    <WrapperStyled>
      <LeftStyled>
        <ImageStyled src={womenDesktop} alt="women" />
      </LeftStyled>
      <TopBannerMobile />
      <RightStyled>
        <FormStyled onSubmit={login}>
          <TitleStyled>Déjanos tus datos</TitleStyled>
          <FlexSelectInputStyled>
            <Select />
            <Input placeholder="Nro. de doc" />
          </FlexSelectInputStyled>
          <Input placeholder="Celular" />
          <Input placeholder="Placa" />
          <SectionCheckBoxStyled>
            <CheckBox />
            <TextStyled>
              Acepto la
              <TextUnderlineStyled style={{ margin: "0 0.2em" }}>
                Política de Protecciòn de Datos Personales
              </TextUnderlineStyled>
              y los{" "}
              <TextUnderlineStyled> Términos y Condiciones</TextUnderlineStyled>
              .
            </TextStyled>
          </SectionCheckBoxStyled>
          <FooterButtonStyled>
            <Button type="submit">COTÍZALO</Button>
          </FooterButtonStyled>
        </FormStyled>
      </RightStyled>
    </WrapperStyled>
  );
};

export default Login;
