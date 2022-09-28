import React from "react";

import { AppContext } from "../App";
import { questions } from "./Game";

export const Result: React.FC = () => {
  const { correct, setStep, setCorrect } = React.useContext(AppContext);

  const onClickReturn = () => {
    setStep(0);
    setCorrect(0);
  };

  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        You guessed {correct} answers out of {questions.length}
      </h2>
      <button onClick={onClickReturn}>Try again</button>
    </div>
  );
};
