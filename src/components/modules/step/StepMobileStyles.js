import styled from "styled-components";

export const WrapperStepMobileStyled = styled.div`
  display: flex;
  background: white;
  height: 48px;
  border-top: 1px solid #e4e8f7;
  border-bottom: 1px solid #e4e8f7;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const CircleIconStyled = styled.div`
  border: 1px solid #f0f2fa;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  text-align: center;
  color: #e4e8f7;
  line-height: 28px;
  cursor: pointer;
`;

export const TitleStepSTyled = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #676f8f;
`;

export const TimeLineStyled = styled.div`
  width: 176px;
  height: 6px;
  background: #6769ff;
  border-radius: 20px;
`;
