import React from "react";
import Step from "@modules/step/Step";
import BackPage from "@modules/backPage/BackPage";
import Card from "@modules/card/Card";

import {
  WrapperStyled,
  LeftStyled,
  RightStyled,
  TitleGreetings,
  TitleName,
  WrapperFlex,
  BodyGreetings,
  CenterStyled,
  BodyIndicateTheSum,
  TitleIndicateTheSum,
  TitleMinAndMax,
  DividerVertical,
  DividerHorizontal,
} from "./YourPlanStyles";
import ButtonCounter from "@modules/buttonCounter/ButtonCounter";

const YourPlan = () => {
  const SectionWelcome = () => {
    return (
      <>
        <WrapperFlex>
          <TitleGreetings>¡Hola,</TitleGreetings> <TitleName> Juan!</TitleName>
        </WrapperFlex>
        <BodyGreetings>Conoce las coberturas para tu plan</BodyGreetings>
      </>
    );
  };

  const SectionIndicateTheSum = () => {
    return (
      <WrapperFlex style={{ justifyContent: "space-between" }}>
        <BodyIndicateTheSum>
          <TitleIndicateTheSum>Indica la suma asegurada</TitleIndicateTheSum>
          <WrapperFlex>
            <TitleMinAndMax>MIN $12,500</TitleMinAndMax>
            <DividerVertical />
            <TitleMinAndMax>MAX $16,500</TitleMinAndMax>
          </WrapperFlex>
        </BodyIndicateTheSum>
        <ButtonCounter />
      </WrapperFlex>
    );
  };

  return (
    <WrapperStyled>
      <LeftStyled>
        <Step />
      </LeftStyled>
      <CenterStyled>
        <BackPage />
        <SectionWelcome />
        <Card />
        <SectionIndicateTheSum />
        <DividerHorizontal />
      </CenterStyled>
      <RightStyled></RightStyled>
    </WrapperStyled>
  );
};

export default YourPlan;
