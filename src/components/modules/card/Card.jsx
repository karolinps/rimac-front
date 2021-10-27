import React from "react";
import {
  WrapperCardStyled,
  TitleSmall,
  TitleBig,
  LeftStyled,
  RightStyled,
  Image,
} from "./CardStyles";

import menSvg from "@assets/images/men.svg";

const Card = () => {
  return (
    <WrapperCardStyled>
      <LeftStyled>
        <TitleSmall> Placa: C2U-114</TitleSmall>
        <TitleBig>Wolkswagen 2019 Golf</TitleBig>
      </LeftStyled>
      <RightStyled>
        <Image src={menSvg} alt="men" />
      </RightStyled>
    </WrapperCardStyled>
  );
};
export default Card;
