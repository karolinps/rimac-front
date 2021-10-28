import styled from "styled-components";

export const WrapperCardStyled = styled.div`
  background: #ffffff;
  border: 3px solid #f0f2fa;
  box-sizing: border-box;
  border-radius: 12px;
  height: 172px;
  width: 384px;
  margin: 3.5em 0;
  display: flex;
  @media (max-width: 991px) {
    border: none;
    width: 340px;
    margin: 1.5em 0;
  }
`;

export const LeftStyled = styled.div`
  padding: 2.5em 1.5em;
`;

export const RightStyled = styled.div``;
export const TitleSmall = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.2px;
  margin: 0;
  color: #a3abcc;
`;

export const TitleBig = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #494f66;
  margin: 0;
  width: 200px;
`;

export const Image = styled.img`
  margin-top: -0.45em;
`;
