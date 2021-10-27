import React from "react";
import Step from "@modules/step/Step";
import BackPage from "@modules/backPage/BackPage";

import { WrapperStyled, LeftStyled, RightStyled } from "./YourPlanStyles";

const YourPlan = () => {
  return (
    <WrapperStyled>
      <LeftStyled>
        <Step />
      </LeftStyled>
      <RightStyled>
        <BackPage />
      </RightStyled>
    </WrapperStyled>
  );
};

export default YourPlan;
