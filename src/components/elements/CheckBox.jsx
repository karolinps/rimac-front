import React from "react";
import styled from "styled-components";

const CheckBox = () => {
  const [accept, setAccept] = React.useState(true);
  const handleChange = (e) => {
    setAccept(e.target.checked);
  };
  return (
    <CheckBoxCustom checked={accept} type="checkbox" onChange={handleChange} />
  );
};

export default CheckBox;

const CheckBoxCustom = styled.input`
  border-radius: 4px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  background: lightgray;
  border: 1px solid white;
  :after {
    content: "";
    position: relative;
    left: 38%;
    top: 20%;
    width: 15%;
    height: 40%;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    display: none;
  }
  :checked:after {
    display: block;
  }
  :checked {
    background: #43b748;
  }
`;
