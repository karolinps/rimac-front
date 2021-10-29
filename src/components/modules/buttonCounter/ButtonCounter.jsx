import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "@lib/slices/counterSlice";

import {
  WrapperStyled,
  LeftStyled,
  RightStyled,
  CenterStyled,
} from "./ButtonCounterStyles";

const ButtonCounter = () => {
  const count = useSelector((state) => state.counter.total);
  const dispatch = useDispatch();
  return (
    <WrapperStyled>
      <LeftStyled>
        <MdRemove onClick={() => dispatch(decrement())} cursor="pointer" />
      </LeftStyled>
      <CenterStyled>${count}</CenterStyled>
      <RightStyled>
        <MdAdd onClick={() => dispatch(increment())} cursor="pointer" />
      </RightStyled>
    </WrapperStyled>
  );
};
export default ButtonCounter;
