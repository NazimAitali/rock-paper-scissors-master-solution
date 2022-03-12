import React, { useEffect } from "react";
import {
  DisplayPikeStyles,
  Text,
  DisplayContainer,
  Loading,
  Pulse,
  LayerSmall,
  LayerMedium,
  LayerLarge,
} from "./styles/Pike-Styles";
import { theme } from "./styles/Theme";
import { pikeDisplay, battle } from "../functions";
import Result from "./Result";
const Display = ({
  player,
  computer,
  setResult,
  result,
  setComputer,
  setPlayer,
}) => {
  const pikePlayer = pikeDisplay(player.piked).pike;
  const pikeComputer = pikeDisplay(computer.piked).pike;
  const startBattle = () => {
    battle(player.piked, computer.piked, setResult, result);
    console.log("battle");
  };
  useEffect(() => {
    setTimeout(startBattle, 2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const width = window.screen.width;
  return (
    <>
      <DisplayContainer align={true && "align-items:flex-start"}>
        <DisplayPikeStyles
          img={pikePlayer}
          right={true && "margin-right:27px"}
          bg={
            (player.piked === "Paper" &&
              theme.colors.pikes.paper.paperNeutral) ||
            (player.piked === "Scissors" &&
              theme.colors.pikes.scissors.scissorsNeutral) ||
            (player.piked === "Rock" && theme.colors.pikes.rock.rockNeutral)
          }
          shadow={
            (player.piked === "Paper" &&
              theme.colors.pikes.paper.paperPrimary) ||
            (player.piked === "Scissors" &&
              theme.colors.pikes.scissors.scissorsPrimary) ||
            (player.piked === "Rock" && theme.colors.pikes.rock.rockPrimary)
          }
        />
        {result.result === "playerWin" ? (
          <>
            <LayerSmall />
            <LayerMedium />
            <LayerLarge />
          </>
        ) : null}

        <Text>YOU PICKED</Text>
      </DisplayContainer>
      {result.result ? (
        <Result
          player={player}
          computer={player}
          setResult={setResult}
          result={result}
          setComputer={setComputer}
          setPlayer={setPlayer}
        />
      ) : null}

      {result.result ? (
        <>
          <DisplayContainer>
            <DisplayPikeStyles
              img={pikeComputer}
              bg={
                (computer.piked === "Paper" &&
                  theme.colors.pikes.paper.paperNeutral) ||
                (computer.piked === "Scissors" &&
                  theme.colors.pikes.scissors.scissorsNeutral) ||
                (computer.piked === "Rock" &&
                  theme.colors.pikes.rock.rockNeutral)
              }
              shadow={
                (computer.piked === "Paper" &&
                  theme.colors.pikes.paper.paperPrimary) ||
                (computer.piked === "Scissors" &&
                  theme.colors.pikes.scissors.scissorsPrimary) ||
                (computer.piked === "Rock" &&
                  theme.colors.pikes.rock.rockPrimary)
              }
            />
            <Text left={"-24px"}>THE HOUSE PICKED</Text>
            {result.result === "computerWin" ? (
              <>
                <LayerSmall
                  right={
                    width < 768
                      ? result.result === "computerWin" && "0px"
                      : result.result === "computerWin" && "-5px"
                  }
                />
                <LayerMedium
                  right={
                    width < 768
                      ? result.result === "computerWin" && "-19px"
                      : result.result === "computerWin" && "-57px"
                  }
                />
                <LayerLarge
                  right={
                    width < 768
                      ? result.result === "computerWin" && "-42px"
                      : result.result === "computerWin" && "-108px"
                  }
                />
              </>
            ) : null}
          </DisplayContainer>
        </>
      ) : (
        <>
          <DisplayContainer>
            <Loading>
              <Pulse />
            </Loading>
            <Text left={"-24px"}>THE HOUSE PICKED</Text>
          </DisplayContainer>
        </>
      )}
    </>
  );
};

export default Display;
