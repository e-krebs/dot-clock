import { type Digit, type Chars } from "../types";

export interface Time {
  hour: [Chars, Chars];
  minutes: [Chars, Chars];
  seconds: [Chars, Chars];
}

const getTwoDigits = (timePart: number): [Digit, Digit] => [
  Math.trunc(timePart / 10) as Digit, // ten
  (timePart % 10) as Digit, // unit
];

const getTime = (time: Date): Time => ({
  hour: getTwoDigits(time.getHours()),
  minutes: getTwoDigits(time.getMinutes()),
  seconds: getTwoDigits(time.getSeconds()),
});

export const getCurrentTime = (): Time => getTime(new Date());
