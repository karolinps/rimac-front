import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
`;

export const LeftStyled = styled.div`
  height: 100vh;
  width: 408px;
  background: #f7f8fc;
`;
export const CenterStyled = styled.div`
  display: block;
  margin: 2em 5em;
`;
export const RightStyled = styled.div``;

export const WrapperFlexStyled = styled.div`
  display: flex;
  align-items: center;
`;
const TitlePather = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  color: #494f66;
  margin: 0;
`;

const TitleWelcomeStyled = styled(TitlePather)`
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.6px;
  margin: 0.5em 0 0.2em;
`;

export const TitleGreetingStyled = styled(TitleWelcomeStyled)`
  color: #494f66;
`;

export const TitleNameStyled = styled(TitleWelcomeStyled)`
  color: #ef3340;
  margin-left: 0.2em;
`;
const BodyDescription = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  margin: 0;
`;
export const BodyGreetingStyled = styled(BodyDescription)`
  font-size: 16px;
  line-height: 28px;
  color: #676f8f;
`;

export const BodyIndicateTheSumStyled = styled.div``;

export const TitleIndicateTheSumStyled = styled(TitlePather)`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2px;
  margin: 0;
`;

export const TitleMinAndMaxStyled = styled(TitleIndicateTheSumStyled)`
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #676f8f;
  font-size: 12px;
`;

export const DividerVerticalStyled = styled.div`
  width: 1px;
  height: 16px;
  background: #e4e8f7;
  margin: 0 0.5em;
`;

export const DividerHorizontalStyled = styled.div`
  width: 100%;
  height: 1px;
  background: #e4e8f7;
  margin: 2.5em 0;
`;

export const TitleAmountStyled = styled(TitlePather)`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

export const TitlePriceStyled = styled(TitlePather)`
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.2px;
`;

export const DescriptionStyled = styled(BodyDescription)`
  font-size: 12px;
  line-height: 20px;
  color: #676f8f;
`;

export const AmountAndPriceStyled = styled.div`
  margin: 10em 0;
  button {
    margin-top: 1.5em;
  }
`;

export const TitleCoverageStyled = styled(TitlePather)`
  font-size: 20px;
`;
