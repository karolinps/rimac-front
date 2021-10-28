import React from "react";
import styled from "styled-components";
import SwitchLib from "react-switch";

const Switch = () => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  return (
    <WrapperSwitchStyled>
      <SwitchLib
        onChange={handleChange}
        checked={checked}
        className="react-switch"
        uncheckedIcon={false}
        checkedIcon={false}
        height={31}
        offHandleColor="#FFF"
        onHandleColor="#FFF"
        offColor="#E4E8F7"
        onColor="#7CC954"
      />
    </WrapperSwitchStyled>
  );
};

export default Switch;

const WrapperSwitchStyled = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;
