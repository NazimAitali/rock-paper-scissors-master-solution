import React from "react";
import { RulesStyles, Title, Close, Rule } from "./styles/Footer-Styles";
import closeIcon from "../assets/images/icon-close.svg";
const Rules = ({ setRules }) => {
  return (
    <RulesStyles>
      <Rule>
        <Title>RULES</Title>
        <Close src={closeIcon} alt="X" onClick={() => setRules(false)} />
      </Rule>
    </RulesStyles>
  );
};

export default Rules;
