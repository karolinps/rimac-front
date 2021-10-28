import React from "react";
import styled from "styled-components";

const Input = ({ value, placeholder, onChange, name }) => {
  return (
    <InputCustom
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  );
};

export default Input;

const InputCustom = styled.input`
  background: #ffffff;
  border: 1px solid #c5cbe0;
  box-sizing: border-box;
  border-radius: 4px;
  height: 56px;
  width: 288px;
  font-size: 16px;
  font-family: Lato;
  color: #a3abcc;
  padding: 1em;
  margin: 0.6em 0;
  outline: none;
  @media (max-width: 991px) {
    width: 100%;
  }
`;
