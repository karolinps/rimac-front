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
import Footer from "@components/layouts/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchByUserThunk } from "@lib/slices/authSlice";

const ThankYou = () => {
  const { email } = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchByUserThunk(3));
  }, [dispatch, email]);

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
          <StrongStyled>{email}</StrongStyled>
          <Button width="255px">cómo usar mi seguro</Button>
        </RightStyled>
      </WrapperStyled>
      <Footer />
    </>
  );
};

export default ThankYou;
