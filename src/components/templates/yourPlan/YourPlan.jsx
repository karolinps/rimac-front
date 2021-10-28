import React from "react";

import { MdOutlineDone } from "react-icons/md";

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
} from "./YourPlanStyles";

const YourPlan = () => {
  const listOption = [
    { name: "Llanta de respuesto" },
    { name: "Analisis de motor" },
    { name: "Aros gratis" },
  ];

  const SectionWelcome = () => {
    return (
      <>
        <WrapperFlexStyled>
          <TitleGreetingStyled>¡Hola,</TitleGreetingStyled>
          <TitleNameStyled> Juan!</TitleNameStyled>
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

  const SectionAmountAndPrice = () => {
    return (
      <AmountAndPriceStyled>
        <TitleAmountStyled>Monto</TitleAmountStyled>
        <TitlePriceStyled>$35.00</TitlePriceStyled>
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
        <Button height="48px" width="224px">
          Lo quiero
        </Button>
      </AmountAndPriceStyled>
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
        <StepMobile />
        <WrapperWelcomeStyled>
          <SectionWelcome />
          <Card />
        </WrapperWelcomeStyled>
        <SectionIndicateTheSum />
        <DividerHorizontalStyled />
        <SectionAddOrRemoveCoverage />
      </CenterStyled>
      <RightStyled>
        <SectionAmountAndPrice />
      </RightStyled>
    </WrapperStyled>
  );
};

export default YourPlan;
