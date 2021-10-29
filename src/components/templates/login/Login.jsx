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
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "@lib/slices/authSlice";

const Login = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const { plate } = useSelector((state) => state.auth.user);

  const [datos, setDatos] = React.useState({
    nro_doc: "",
    phone: "",
    plate: "",
  });

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

  React.useEffect(() => {
    if (plate) push("/your-plan");
  }, [plate, push]);

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    dispatch(setAuth(datos));
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
            <Input
              placeholder="Nro. de doc"
              value={datos.nro_doc}
              onChange={handleChange}
              name="nro_doc"
            />
          </FlexSelectInputStyled>
          <Input
            placeholder="Celular"
            value={datos.phone}
            onChange={handleChange}
            name="phone"
          />
          <Input
            placeholder="Placa"
            value={datos.plate}
            onChange={handleChange}
            name="plate"
          />
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
