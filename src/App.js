import React, { useState } from "react";
import { theme } from "./components/styles/Theme";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Rules from "./components/Rules";

function App() {
  const [result, setResult] = useState({
    result: null,
    point: 0,
  });
  const [player, setPlayer] = useState({
    piked: null,
    status: false,
  });
  const [computer, setComputer] = useState({
    piked: null,
  });

  const [rules, setRules] = useState(false);
  const choices = ["Paper", "Scissors", "Rock"];
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Header result={result} />
          <Main
            choices={choices}
            setPlayer={setPlayer}
            setComputer={setComputer}
            player={player}
            computer={computer}
            setResult={setResult}
            result={result}
          />
          <Footer setRules={setRules} player={player} />
        </Container>
        {rules ? <Rules setRules={setRules} /> : null}
      </>
    </ThemeProvider>
  );
}

export default App;
