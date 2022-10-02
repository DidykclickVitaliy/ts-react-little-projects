import React from "react";
import { useSelector } from "react-redux";

import { Block } from "../components/Block";
import { useAppDispatch } from "../redux/store";

import { fetchRates } from "../redux/convertor/asyncActions";
import { selectConvertor } from "../redux/convertor/selectors";
import {
  setFromCurrency,
  setFromPrice,
  setToCurrency,
  setToPrice,
} from "../redux/convertor/slice";

const Home = () => {
  const { rates, fromCurrency, toCurrency, fromPrice, toPrice } =
    useSelector(selectConvertor);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    try {
      dispatch(fetchRates());
    } catch (error) {
      alert(error);
    }
  }, []);

  React.useEffect(() => {
    onChangeToPrice(toPrice);
  }, [fromCurrency]);

  React.useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [toCurrency]);

  const onChangeFromPrice = (value: number) => {
    const price = value / rates[fromCurrency];
    const result = price * rates[toCurrency];

    dispatch(setFromPrice(value));
    dispatch(setToPrice(Number(result.toFixed(3))));
  };

  const onChangeToPrice = (value: number) => {
    const result = (rates[fromCurrency] / rates[toCurrency]) * value;

    dispatch(setToPrice(value));
    dispatch(setFromPrice(Number(result.toFixed(3))));
  };

  return (
    <>
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </>
  );
};

export default Home;
