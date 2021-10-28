import styled from "styled-components";

export const WrapperCollapseStyled = styled.div`
  display: block;
  @media (max-width: 991px) {
    padding: 0 2em;
  }
`;

export const WrapperFlexStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em 0;
  margin-left: 4.5em;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const CardCollapseStyled = styled.div`
  margin: 1em 0;
  border-bottom: 1px solid #e4e8f7;
`;

export const HeaderCollapseStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1em;
  @media (max-width: 991px) {
    padding-bottom: 0;
  }
`;
export const BodyCollapseStyled = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #676f8f;
  width: 279px;
  margin: 0 auto;
  padding-bottom: 1.5em;
  @media (max-width: 991px) {
    width: 240px;
    margin-left: 5em;
    padding: 0.2em 0;
  }
`;

export const IconStyled = styled.img``;

export const TitleStyled = styled.p`
  margin: 0 1em;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  color: #494f66;
  width: 255px;
  @media (max-width: 991px) {
    width: auto;
    font-size: 16px;
  }
`;

export const LeftStyled = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const RightStyled = styled.div``;

export const AddOrRemoveStyled = styled.div`
  display: flex;
  align-items: center;
  width: 279px;
  margin: 0 auto;
  cursor: pointer;
  margin: 0.2em auto 1.5em;
  @media (max-width: 991px) {
    display: none;
  }
`;

const Text = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  margin: 0;
`;

export const TextAddOrRemoveStyled = styled(Text)`
  font-size: 12px;
  color: #6f7dff;
  margin-left: 1em;
`;

export const TextLookMoreOrLessStyled = styled(Text)`
  font-size: 10px;
  color: #a3abcc;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const ShowIconDesktopStyled = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
`;
