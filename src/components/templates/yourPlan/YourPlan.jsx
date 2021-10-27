import React from "react";
import Step from "@modules/step/Step";
import BackPage from "@modules/backPage/BackPage";
import Card from "@modules/card/Card";

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
} from "./YourPlanStyles";
import ButtonCounter from "@modules/buttonCounter/ButtonCounter";

const YourPlan = () => {
  const SectionWelcome = () => {
    return (
      <>
        <WrapperFlexStyled>
          <TitleGreetingStyled>¡Hola,</TitleGreetingStyled>
          <TitleNameStyled> Juan!</TitleNameStyled>
        </WrapperFlexStyled>
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
          <WrapperFlexStyled>
            <TitleMinAndMaxStyled>MIN $12,500</TitleMinAndMaxStyled>
            <DividerVerticalStyled />
            <TitleMinAndMaxStyled>MAX $16,500</TitleMinAndMaxStyled>
          </WrapperFlexStyled>
        </BodyIndicateTheSumStyled>
        <ButtonCounter />
      </WrapperFlexStyled>
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
        <DividerHorizontalStyled />
      </CenterStyled>
      <RightStyled></RightStyled>
    </WrapperStyled>
  );
};

export default YourPlan;
