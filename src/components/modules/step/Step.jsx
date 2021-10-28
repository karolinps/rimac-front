import React from "react";
import {TitleBottom, 
  CircleStyled,
  LeftStyled,
  LineVerticalStyled,
  RightStyled,
  TitleTop,
  WrapperStyled,
} from "./StepStyles";

const Step = () => {
  return (
    <WrapperStyled>
      <LeftStyled>
        <CircleStyled style={{ color: "#C5CBE0" }}>1</CircleStyled>
        <LineVerticalStyled />
        <CircleStyled style={{ background: "#6F7DFF" }}>2</CircleStyled>
      </LeftStyled>
      <RightStyled>
        <TitleTop>Datos</TitleTop>
        <TitleBottom>Arma tu plan</TitleBottom>
      </RightStyled>
    </WrapperStyled>
  );
};

export default Step;
