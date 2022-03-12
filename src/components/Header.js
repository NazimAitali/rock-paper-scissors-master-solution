import React from "react";
import logo from "../assets/images/logo.svg";

import {
  HeaderStyles,
  SectionStyles,
  Title,
  Result,
  Logo,
  Score,
} from "./styles/Header-Styles";

const Header = ({ result }) => {
  return (
    <HeaderStyles>
      <SectionStyles>
        <Logo src={logo} alt="logo" />
        <Score>
          <Title>SCORE</Title>
          <Result>{result.point}</Result>
        </Score>
      </SectionStyles>
    </HeaderStyles>
  );
};

export default Header;
