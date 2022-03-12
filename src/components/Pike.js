import React from "react";
import { PikeStyles } from "./styles/Pike-Styles";
import { theme } from "./styles/Theme";
import { pikeDisplay, playerPlay, computerPlay } from "../functions";
const Pike = ({ choices, setPlayer, setComputer }) => {
  const width = window.screen.width;
  return (
    <>
      {choices.map((item, i) => (
        <PikeStyles
          key={i}
          img={pikeDisplay(item).pike}
          top={
            width < 768
              ? i === 2 && "margin: 19px auto"
              : i === 2 && "margin: 28px auto"
          }
          right={
            width < 768
              ? i === 0 && "margin-right:26px"
              : i === 0 && "margin-right:51px"
          }
          left={
            width < 768
              ? i === 1 && "margin-left:26px"
              : i === 1 && "margin-left:26px"
          }
          bg={
            (i === 0 && theme.colors.pikes.paper.paperNeutral) ||
            (i === 1 && theme.colors.pikes.scissors.scissorsNeutral) ||
            (i === 2 && theme.colors.pikes.rock.rockNeutral)
          }
          shadow={
            (i === 0 && theme.colors.pikes.paper.paperPrimary) ||
            (i === 1 && theme.colors.pikes.scissors.scissorsPrimary) ||
            (i === 2 && theme.colors.pikes.rock.rockPrimary)
          }
          onClick={() => {
            playerPlay(item, setPlayer);
            computerPlay(setComputer, choices);
          }}
        />
      ))}
    </>
  );
};

export default Pike;
