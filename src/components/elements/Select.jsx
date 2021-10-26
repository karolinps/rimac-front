import React from "react";
import styled from "styled-components";
import arrowSvg from "@assets/icons/chevrot.svg";

const Select = () => {
  return (
    <SelectCustom>
      <option value="dni">DNI</option>
      <option value="ce">Carné extranjería</option>
      <option value="passport">Pasaporte</option>
    </SelectCustom>
  );
};

export default Select;

const SelectCustom = styled.select`
  background: #ffffff;
  border: 1px solid #c5cbe0;
  box-sizing: border-box;
  border-radius: 4px;
  height: 56px;
  width: 288px;
  font-size: 16px;
  font-family: Lato;
  color: #494f66;
  padding: 1em;
  margin: 0.6em 0;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(${arrowSvg});
  background-repeat: no-repeat;
  background-position-x: 80%;
  background-position-y: 50%;
`;
