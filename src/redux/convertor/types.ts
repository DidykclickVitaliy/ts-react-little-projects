export type Rates = Record<string, number>;

export interface ConvertorState {
  rates: Rates;
  fromCurrency: string;
  toCurrency: string;
  fromPrice: number;
  toPrice: number;
}
