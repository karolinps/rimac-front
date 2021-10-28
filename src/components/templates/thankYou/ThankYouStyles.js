import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  @media (max-width: 991px) {
    display: grid;
  }
`;

export const LeftStyled = styled.div`
  height: 100vh;
  width: 408px;
  background: #f7f8fc;
  @media (max-width: 991px) {
    display: none;
  }
`;
export const RightStyled = styled.div`
  display: block;
  margin: 0 auto;
  padding: 2em;
  @media (min-width: 992px) {
    width: 480px;
    margin-top: 7em;
  }
`;

export const ImageStyled = styled.img`
  @media (min-width: 992px) and (max-width: 1200px) {
    width: 50vh;
    height: 100vh;
  }
  @media (min-width: 1201px) {
    width: 60vh;
    height: 100vh;
    margin-top: -3.5em;
  }
  width: 100%;
`;

const TitleStyled = styled.p`
  font-size: 36px;
  letter-spacing: -0.2px;
  font-family: Lato;
  font-weight: normal;
  margin: 0;
  @media (max-width: 991px) {
    font-size: 28px;
  }
`;

export const TitleGrayStyled = styled(TitleStyled)`
  color: #494f66;
`;

export const TitleRedStyled = styled(TitleStyled)`
  color: #ef3340;
  margin-bottom: 0.3em;
`;
export const BannerMobileStyled = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;

export const DescriptionStyled = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  color: #676f8f;
  margin-bottom: 1em;
`;

export const StrongStyled = styled(DescriptionStyled)`
  font-weight: bold;
`;
