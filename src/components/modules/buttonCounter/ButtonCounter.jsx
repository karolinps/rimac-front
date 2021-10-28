import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";

import {
  WrapperStyled,
  LeftStyled,
  RightStyled,
  CenterStyled,
} from "./ButtonCounterStyles";

const ButtonCounter = () => {
  return (
    <WrapperStyled>
      <LeftStyled>
        <MdRemove />
      </LeftStyled>
      <CenterStyled>$ 14,300</CenterStyled>
      <RightStyled>
        <MdAdd />
      </RightStyled>
    </WrapperStyled>
  );
};
export default ButtonCounter;
