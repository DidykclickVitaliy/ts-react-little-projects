import React from "react";

import { Game, questions } from "./components/Game";
import { Result } from "./components/Result";
import "./index.scss";

type AppContextType = {
  step: number;
  correct: number;
  setStep: (index: number) => void;
  setCorrect: (index: number) => void;
};

export const AppContext = React.createContext<AppContextType>({
  step: 0,
  correct: 0,
  setStep: () => {},
  setCorrect: () => {},
});

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  return (
    <div className="App">
      <AppContext.Provider value={{ step, correct, setStep, setCorrect }}>
        {step < questions.length ? <Game /> : <Result />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
