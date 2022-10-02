import { AnyAction } from "@reduxjs/toolkit";
import React from "react";
import { Rates } from "../../redux/convertor/types";
import { useAppDispatch } from "../../redux/store";

type BlockProps = {
  value: number;
  currency: string;
  onChangeCurrency: (currency: string) => AnyAction;
  onChangeValue: (value: number) => void;
};

const defaultCurrencies = ["UAH", "USD", "EUR", "GBP"];

export const Block: React.FC<BlockProps> = ({
  value,
  currency,
  onChangeCurrency,
  onChangeValue,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="block">
      <ul className="currencies">
        {defaultCurrencies.map((cur, index) => (
          <li
            className={cur === currency ? "active" : ""}
            key={index}
            onClick={() => dispatch(onChangeCurrency(cur))}
          >
            {cur}
          </li>
        ))}

        <li>
          <svg height="50px" viewBox="0 0 50 50" width="50px">
            <rect fill="none" height="50" width="50" />
            <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
          </svg>
        </li>
      </ul>
      <input
        type="number"
        placeholder={"0"}
        value={value}
        onChange={(event) => onChangeValue(Number(event.target.value))}
      />
    </div>
  );
};
