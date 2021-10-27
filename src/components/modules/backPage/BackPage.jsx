import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CircleIconStyled, WrapperStyled, TitleBack } from "./BackPageStyles";

const BackPage = () => {
  return (
    <WrapperStyled>
      <CircleIconStyled>
        <MdKeyboardArrowLeft />
      </CircleIconStyled>
      <TitleBack> Volver</TitleBack>
    </WrapperStyled>
  );
};
export default BackPage;
