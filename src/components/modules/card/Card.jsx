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
import { useSelector } from "react-redux";

const Card = () => {
  const { plate } = useSelector((state) => state.auth.user);

  React.useEffect(() => {}, [plate]);
  return (
    <WrapperCardStyled>
      <LeftStyled>
        <TitleSmall> Placa: {plate}</TitleSmall>
        <TitleBig>Wolkswagen 2019 Golf</TitleBig>
      </LeftStyled>
      <RightStyled>
        <Image src={menSvg} alt="men" />
      </RightStyled>
    </WrapperCardStyled>
  );
};
export default Card;
