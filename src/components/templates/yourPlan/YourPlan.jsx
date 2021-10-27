import React from "react";
import Step from "@modules/step/Step";
import BackPage from "@modules/backPage/BackPage";

import {
  WrapperStyled,
  LeftStyled,
  RightStyled,
  TitleGreetings,
  TitleName,
  WrapperTitleWelcome,
  BodyGreetings,
  CenterStyled,
} from "./YourPlanStyles";

const YourPlan = () => {
  const SectionWelcome = () => {
    return (
      <>
        <WrapperTitleWelcome>
          <TitleGreetings>¡Hola,</TitleGreetings> <TitleName> Juan!</TitleName>
        </WrapperTitleWelcome>
        <BodyGreetings>Conoce las coberturas para tu plan</BodyGreetings>
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
        <SectionWelcome />
      </CenterStyled>
      <RightStyled></RightStyled>
    </WrapperStyled>
  );
};

export default YourPlan;
