import React from "react";
import { FooterStyles, Button } from "./styles/Footer-Styles";

const Footer = ({ player, setRules }) => {
  return (
    <FooterStyles bottom={player.status && "-5px"}>
      <Button onClick={() => setRules(true)}>RULES</Button>
    </FooterStyles>
  );
};

export default Footer;
