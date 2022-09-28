import React from "react";
import { AppContext } from "../App";

type Question = {
  title: string;
  variants: string[];
  correct: number;
};

export const questions: Question[] = [
  {
    title: "What is useState?",
    variants: [
      "This is a function to store component data",
      "This is a global state",
      "That's when no one needs you",
    ],
    correct: 0,
  },
  {
    title: "React - is ... ?",
    variants: ["library", "framework", "application"],
    correct: 0,
  },
  {
    title: "Component - is ... ",
    variants: [
      "application",
      "part of an application or page",
      "what I don't know what is",
    ],
    correct: 1,
  },
  {
    title: "What is JSX?",
    variants: [
      "This is plain HTML",
      "This is a function",
      "This is the same HTML, but with the ability to execute JS code",
    ],
    correct: 2,
  },
];

export const Game: React.FC = () => {
  const { step, correct, setCorrect, setStep } = React.useContext(AppContext);

  const percentage: number = Math.round((step / questions.length) * 100);
  const question = questions[step];

  const onClickQuestion = (index: number) => {
    if (index === question.correct) {
      setCorrect(correct + 1);
    }

    setStep(step + 1);
  };

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>

      <div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((variant, index) => {
            return (
              <li key={index} onClick={() => onClickQuestion(index)}>
                {variant}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
