import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  margin: 2em 8em;
  @media (max-width: 991px) {
    margin: 1em 2em;
  }
`;

export const ImageStyled = styled.img``;

export const LeftStyled = styled.div``;

export const RightStyled = styled.div`
  display: flex;
  align-items: center;
  color: #676f8f;
  font-family: "Roboto";
`;

export const SubTitleStyled = styled.p`
  font-size: 12px;
  margin-right: 16px;
  letter-spacing: 0.2px;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const PhoneStyled = styled.p`
  color: #676f8f;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  font-family: Roboto;
`;

export const NumberPhoneStyled = styled.span`
  @media (max-width: 991px) {
    display: none;
  }
`;

export const CallUsStyled = styled.span`
  @media (min-width: 992px) {
    display: none;
  }
`;
