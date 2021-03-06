import React from "react";

import { MdOutlineDone } from "react-icons/md";
import { useHistory } from "react-router-dom";

import Step from "@modules/step/Step";
import BackPage from "@modules/backPage/BackPage";
import Card from "@modules/card/Card";
import ButtonCounter from "@modules/buttonCounter/ButtonCounter";
import Tabs from "@modules/tabs/Tabs";
import StepMobile from "@modules/step/StepMobile";

import Button from "@elements/Button";

import {
  WrapperStyled,
  LeftStyled,
  RightStyled,
  TitleGreetingStyled,
  TitleNameStyled,
  WrapperFlexStyled,
  BodyGreetingStyled,
  CenterStyled,
  BodyIndicateTheSumStyled,
  TitleIndicateTheSumStyled,
  TitleMinAndMaxStyled,
  DividerVerticalStyled,
  DividerHorizontalStyled,
  TitlePriceStyled,
  TitleAmountStyled,
  DescriptionStyled,
  AmountAndPriceStyled,
  TitleCoverageStyled,
  WrapperWelcomeStyled,
  WrappetMinAndMaxStyled,
  TitleLookCoverageStyled,
  WrapperMobileAmountAndPriceStyled,
} from "./YourPlanStyles";
import { useDispatch, useSelector } from "react-redux";
import { fetchByUserThunk } from "@lib/slices/authSlice";

const YourPlan = () => {
  const { push } = useHistory();
  const { name } = useSelector((state) => state.auth.currentUser);
  const { amount } = useSelector((state) => state.coverage);
  const dispatch = useDispatch();

  const listOption = [
    { name: "Llanta de respuesto" },
    { name: "Analisis de motor" },
    { name: "Aros gratis" },
  ];

  React.useEffect(() => {
    dispatch(fetchByUserThunk(3));
  }, [dispatch, name, amount]);

  const SectionWelcome = () => {
    return (
      <>
        <WrapperFlexStyled>
          <TitleGreetingStyled>¡Hola,</TitleGreetingStyled>
          <TitleNameStyled> {name}!</TitleNameStyled>
        </WrapperFlexStyled>
        <TitleLookCoverageStyled>Mira las coberturas</TitleLookCoverageStyled>
        <BodyGreetingStyled>
          Conoce las coberturas para tu plan
        </BodyGreetingStyled>
      </>
    );
  };

  const SectionIndicateTheSum = () => {
    return (
      <WrapperFlexStyled style={{ justifyContent: "space-between" }}>
        <BodyIndicateTheSumStyled>
          <TitleIndicateTheSumStyled>
            Indica la suma asegurada
          </TitleIndicateTheSumStyled>
          <WrappetMinAndMaxStyled>
            <TitleMinAndMaxStyled>MIN $12,500</TitleMinAndMaxStyled>
            <DividerVerticalStyled />
            <TitleMinAndMaxStyled>MAX $16,500</TitleMinAndMaxStyled>
          </WrappetMinAndMaxStyled>
        </BodyIndicateTheSumStyled>
        <ButtonCounter />
      </WrapperFlexStyled>
    );
  };

  const iWant = () => {
    push("/thanks");
  };
  const SectionAmountAndPrice = () => {
    return (
      <AmountAndPriceStyled>
        <TitleAmountStyled>Monto</TitleAmountStyled>
        <TitlePriceStyled>${amount}.00</TitlePriceStyled>
        <DescriptionStyled>mensuales</DescriptionStyled>
        <DividerHorizontalStyled style={{ width: 224, margin: "1.5em 0" }} />
        <TitleIndicateTheSumStyled
          style={{ textAlign: "left", marginBottom: "0.5em" }}
        >
          El precio incluye:
        </TitleIndicateTheSumStyled>
        {listOption.map((el, i) => {
          return (
            <WrapperFlexStyled key={i} style={{ padding: "0.5em 0" }}>
              <MdOutlineDone style={{ color: "#43B748" }} />
              <DescriptionStyled style={{ fontSize: 14, marginLeft: "1.5em" }}>
                {el.name}
              </DescriptionStyled>
            </WrapperFlexStyled>
          );
        })}
        <Button height="48px" width="224px" onClick={iWant}>
          Lo quiero
        </Button>
      </AmountAndPriceStyled>
    );
  };

  //Mobile
  const SectionAmountAndPriceMobile = () => {
    return (
      <WrapperMobileAmountAndPriceStyled>
        <div>
          <TitlePriceStyled>${amount}.00</TitlePriceStyled>
          <DescriptionStyled>mensual</DescriptionStyled>
        </div>
        <div>
          <Button height="48px" onClick={iWant}>
            Lo quiero
          </Button>
        </div>
      </WrapperMobileAmountAndPriceStyled>
    );
  };

  const SectionAddOrRemoveCoverage = () => {
    return (
      <>
        <TitleCoverageStyled>Agrega o quita coberturas</TitleCoverageStyled>
        <Tabs />
      </>
    );
  };

  return (
    <WrapperStyled>
      <LeftStyled>
        <Step />
      </LeftStyled>
      <CenterStyled>
        <BackPage />
        {/*Init Mobile*/}
        <StepMobile />
        {/*Finish Mobile*/}
        <WrapperWelcomeStyled>
          <SectionWelcome />
          <Card />
        </WrapperWelcomeStyled>
        <SectionIndicateTheSum />
        <DividerHorizontalStyled />
        <SectionAddOrRemoveCoverage />
        {/*Init Mobile*/}
        <SectionAmountAndPriceMobile />
        {/*Finish Mobile*/}
      </CenterStyled>
      <RightStyled>
        <SectionAmountAndPrice />
      </RightStyled>
    </WrapperStyled>
  );
};

export default YourPlan;
