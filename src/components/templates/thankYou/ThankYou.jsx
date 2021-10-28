import React from "react";

import Button from "@elements/Button";

import menFinallyDesktop from "@assets/images/men-finally.svg";
import menFinallyMobile from "@assets/images/men-finally-mobile.svg";

import {
  BannerMobileStyled,
  DescriptionStyled,
  ImageStyled,
  WrapperStyled,
  LeftStyled,
  RightStyled,
  TitleGrayStyled,
  TitleRedStyled,
  StrongStyled,
} from "./ThankYouStyles";
import Footer from "../../layouts/Footer";

const Login = () => {
  const TopBannerMobile = () => {
    return (
      <BannerMobileStyled>
        <ImageStyled src={menFinallyMobile} alt="men" />
      </BannerMobileStyled>
    );
  };

  return (
    <>
      <WrapperStyled>
        <LeftStyled>
          <ImageStyled src={menFinallyDesktop} alt="men" />
        </LeftStyled>
        <TopBannerMobile />
        <RightStyled>
          <TitleRedStyled>¡Te damos la bienvenida!</TitleRedStyled>
          <TitleGrayStyled>
            Cuenta con nosotros para proteger tu vehículo
          </TitleGrayStyled>
          <DescriptionStyled>
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
            tu correo:
          </DescriptionStyled>
          <StrongStyled>joel.sanchez@gmail.com</StrongStyled>
          <Button width="255px">cómo usar mi seguro</Button>
        </RightStyled>
      </WrapperStyled>
      <Footer />
    </>
  );
};

export default Login;
