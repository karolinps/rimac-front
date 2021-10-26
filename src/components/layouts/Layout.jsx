import React from "react";
import styled from "styled-components";
import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div``;
