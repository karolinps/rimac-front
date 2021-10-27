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

export const WrapperTitleWelcome = styled.div`
  display: flex;
`;

const TitleWelcome = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.6px;
  color: #494f66;
  margin: 0.5em 0 0.2em;
`;

export const TitleGreetings = styled(TitleWelcome)`
  color: #494f66;
`;

export const TitleName = styled(TitleWelcome)`
  color: #ef3340;
  margin-left: 0.2em;
`;

export const BodyGreetings = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #676f8f;
  margin: 0;
`;
