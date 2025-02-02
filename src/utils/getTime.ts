import { type Digit, type Chars } from "../types";

export type Time = [Chars, Chars, Chars, Chars, Chars, Chars];

const getTwoDigits = (timePart: number): [Digit, Digit] => [
  Math.trunc(timePart / 10) as Digit, // ten
  (timePart % 10) as Digit, // unit
];

export const getTime = (time: Date): Time => [
  ...getTwoDigits(time.getHours()),
  ...getTwoDigits(time.getMinutes()),
  ...getTwoDigits(time.getSeconds()),
];
