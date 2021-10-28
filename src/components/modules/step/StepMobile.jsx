import React from "react";
import {
  WrapperStepMobileStyled,
  CircleIconStyled,
  TitleStepSTyled,
  TimeLineStyled,
} from "./StepMobileStyles";
import { MdKeyboardArrowLeft } from "react-icons/md";

const StepMobile = () => {
  return (
    <WrapperStepMobileStyled>
      <CircleIconStyled>
        <MdKeyboardArrowLeft />
      </CircleIconStyled>
      <TitleStepSTyled>Paso 2 de 2</TitleStepSTyled>
      <TimeLineStyled />
    </WrapperStepMobileStyled>
  );
};

export default StepMobile;
