import React from "react";
import Display from "./Display";
import Pike from "./Pike";
import bg from "../assets/images/bg-triangle.svg";
import { MainStyles, Choises } from "./styles/Main-Styles";

const Main = ({
  choices,
  setPlayer,
  setComputer,
  player,
  computer,
  result,
  setResult,
}) => {
  return (
    <MainStyles width={player.status && "100%"}>
      <Choises
        bg={player.status ? "#" : bg}
        padding={!player.status && "66px 0px 79px"}
      >
        {!player.status ? (
          <Pike
            choices={choices}
            setPlayer={setPlayer}
            setComputer={setComputer}
            player={player}
            computer={computer}
            setResult={setResult}
          />
        ) : (
          <Display
            choices={choices}
            setPlayer={setPlayer}
            setComputer={setComputer}
            player={player}
            computer={computer}
            setResult={setResult}
            result={result}
          />
        )}
      </Choises>
    </MainStyles>
  );
};

export default Main;
