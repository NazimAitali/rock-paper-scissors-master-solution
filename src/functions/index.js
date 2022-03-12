import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";

const Scissors = "rgb(181, 124, 19)";
const Paper = "rgb(45, 74, 219)";
const Rock = "rgb(196, 25, 56)";
export const pikeDisplay = (choice) => {
  const choices = {
    Paper: {
      pike: paper,
      class: "Color-ring paperColor",
      color: Paper,
    },
    Rock: { pike: rock, class: "Color-ring rockColor ", color: Rock },
    Scissors: {
      pike: scissors,
      class: "Color-ring scissorsColor ",
      color: Scissors,
    },
  };
  return choices[choice];
};
export const playerPlay = (choice, setPlayer) => {
  setPlayer((prevState) => ({
    ...prevState,
    piked: choice,
    status: true,
  }));
};

export const computerPlay = (setComputer, choices) => {
  setComputer((prevState) => ({
    ...prevState,
    piked: choices[computerChoice(choices, setComputer)],
  }));
};

const hasard = (choices) => {
  return Math.floor(Math.random() * choices);
};
export const computerChoice = (choices) => {
  return hasard(choices.length);
};
export const statusDispaly = (status) => {
  const result = {
    playerWin: "YOU WIN",
    computerWin: " YOU LOSE",
    draw: "DRAW",
  };
  return result[status];
};

export const battle = (player, computer, setResult, result) => {
  return (
    player === computer
      ? setResult((prevState) => ({
          ...prevState,
          result: "draw",
          point: result.point,
        }))
      : null,
    player === "Paper" && computer === "Rock"
      ? setResult((prevState) => ({
          ...prevState,
          result: "playerWin",
          point: result.point + 1,
        }))
      : null,
    player === "Rock" && computer === "Scissors"
      ? setResult((prevState) => ({
          ...prevState,
          result: "playerWin",
          point: result.point + 1,
        }))
      : null,
    player === "Scissors" && computer === "Paper"
      ? setResult((prevState) => ({
          ...prevState,
          result: "playerWin",
          point: result.point + 1,
        }))
      : null,
    player === "Paper" && computer === "Scissors"
      ? setResult((prevState) => ({
          ...prevState,
          result: "computerWin",
          point: result.point - 1,
        }))
      : null,
    player === "Rock" && computer === "Paper"
      ? setResult((prevState) => ({
          ...prevState,
          result: "computerWin",
          point: result.point - 1,
        }))
      : null,
    player === "Scissors" && computer === "Rock"
      ? setResult((prevState) => ({
          ...prevState,
          result: "computerWin",
          point: result.point - 1,
        }))
      : null
  );
};
