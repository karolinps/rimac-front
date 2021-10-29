import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  @media (max-width: 991px) {
    display: grid;
  }
`;

export const LeftStyled = styled.div`
  display: block;
  height: 100vh;
  @media (max-width: 991px) {
    display: none;
  }
`;
export const RightStyled = styled.div`
  display: block;
  margin: 0 auto;
  margin-top: 10em;

  @media (max-width: 576px) {
    margin-top: 1em;
    padding-bottom: 2em;
  }
  @media (min-width: 577px) and (max-width: 991px) {
    margin-top: -4em;
  }
`;

export const ImageStyled = styled.img`
  @media (min-width: 992px) {
    width: 100%;
    height: 100vh;
  }
  @media (max-width: 991px) {
    width: 110px;
    position: relative;
    top: 3.5em;
  }
`;

export const FormStyled = styled.form`
  display: grid;
  @media (max-width: 320px) {
    max-width: 320px;
    width: 290px;
  }
  @media (min-width: 321px) and (max-width: 767px) {
    max-width: 320px;
    width: 320px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 550px;
    width: 550px;
  }
`;

export const TitleStyled = styled.h1`
  font-size: 28px;
  letter-spacing: -0.2px;
  color: #494f66;
  font-family: Lato;
  font-weight: normal;
`;

export const FlexSelectInputStyled = styled.div`
  display: flex;
  input {
    width: 188px;
    border-radius: 0 5px 5px 0;
  }
  select {
    width: 100px;
    border-radius: 5px 0px 0px 5px;
  }
  @media (max-width: 991px) {
    input {
      width: 100%;
    }
  }
`;

export const SectionCheckBoxStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5em;
`;

export const TextStyled = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #676f8f;
  width: 254px;
  margin: 0 0.5em;
`;

export const TextUnderlineStyled = styled.span`
  text-decoration: underline;
  font-weight: 400;
  cursor: pointer;
`;

export const FooterButtonStyled = styled.div`
  margin-top: 2em;
`;

export const BannerMobileStyled = styled.div`
  background: #f7f8fc;
  height: 308px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const BodyBannerMobileStyled = styled.div`
  padding: 0 1.5em;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  color: #494f66;
  line-height: 36px;
  top: 2em;
  position: relative;
  @media (min-width: 480px) and (max-width: 991px) {
    padding: 0 5.5em;
  }
`;

export const NewStyled = styled.p`
  font-weight: bold;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin: 1em 0;
`;

export const TitleMobileStyled = styled.p`
  font-size: 28px;
  margin: 0;
  margin-bottom: 0.2em;
  letter-spacing: -0.6px;
`;

export const TitleMobileRedStyled = styled(TitleMobileStyled)`
  color: #ef3340;
`;

export const DescriptionMobileStyled = styled.p`
  font-family: Roboto;
  font-size: 14px;
  line-height: 24px;
  color: #676f8f;
  padding-right: 2em;
`;
