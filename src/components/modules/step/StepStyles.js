import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  margin: 3em 8em;
`;

export const LeftStyled = styled.div``;
export const RightStyled = styled.div`
  margin-left: 1em;
  display: grid;
  align-content: space-between;
`;

export const Title = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  letter-spacing: 0.2px;
`;
export const TitleTop = styled(Title)`
  color: #a3abcc;
`;
export const TitleBottom = styled(Title)`
  color: #494f66;
`;

export const CircleStyled = styled.div`
  border: 1px solid #c5cbe0;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  text-align: center;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
  color: white;
`;

export const LineVerticalStyled = styled.div`
  border: 1px dashed #e4e8f7;
  box-sizing: border-box;
  transform: rotate(-90deg);
  margin: 1em 0;
`;
