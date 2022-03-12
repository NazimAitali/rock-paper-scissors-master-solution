import React from "react";
import { ResultStyles, Text, Again } from "./styles/Result-Styles";
import { statusDispaly } from "../functions";
const Result = ({
  player,
  computer,
  setResult,
  result,
  setComputer,
  setPlayer,
}) => {
  return (
    <ResultStyles>
      {result.result ? (
        <>
          <Text>{statusDispaly(result.result)}</Text>
          <Again
            onClick={() => {
              setComputer((prevState) => ({
                ...prevState,
                piked: null,
                status: false,
                show: false,
              }));
              setPlayer((prevState) => ({
                ...prevState,
                piked: null,
                status: false,
              }));
              setResult((prevState) => ({
                ...prevState,
                result: null,
              }));
            }}
          >
            PLAY AGAIN
          </Again>
        </>
      ) : null}
    </ResultStyles>
  );
};

export default Result;
