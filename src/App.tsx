import { useCallback, useReducer, useState } from "react";
import { Char } from "./components";
import { useRepeatEverySecond } from "./utils";
import { type Chars, type DigitDef } from "./types";

export const App = () => {
  const [on, toggleBlink] = useReducer((val) => (val ? false : true), false);
  const [time, setTime] = useState<[Chars, Chars, Chars, Chars, Chars, Chars]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const updateTime = useCallback(() => {
    const now = new Date();
    const hourOne = Math.trunc(now.getHours() / 10) as DigitDef;
    const hourTwo = (now.getHours() % 10) as DigitDef;
    const minuteOne = Math.trunc(now.getMinutes() / 10) as DigitDef;
    const minuteTwo = (now.getMinutes() % 10) as DigitDef;
    const secondsOne = Math.trunc(now.getSeconds() / 10) as DigitDef;
    const secondsTwo = (now.getSeconds() % 10) as DigitDef;
    setTime([hourOne, hourTwo, minuteOne, minuteTwo, secondsOne, secondsTwo]);
    toggleBlink();
  }, []);

  useRepeatEverySecond({ repeatedFunction: updateTime });

  return (
    <div className="flex flex-col gap-8">
      <div
        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]
          scale-50 xs:scale-75 s:scale-90 m:scale-95 l:scale-none
          landscape:xs:scale-31 landscape:s:scale-38 landscape:m:scale-40 landscape:l:scale-42 landscape:xl:scale-none
          p-14 grid grid-cols-2 grid-rows-2 xl:flex landscape:flex gap-14 min-w-max
          *:nth-3:hidden xl:*:nth-3:grid landscape:*:nth-3:grid"
      >
        <Char char={time[0]} size="m" key="first" />
        <Char char={time[1]} size="m" key="second" />
        <Char char={on ? "colon" : ""} size="m" key="third" />
        <Char char={time[2]} size="m" key="fourth" />
        <Char char={time[3]} size="m" key="fifth" />
        <div className="absolute -bottom-35 right-14 flex gap-7">
          <Char char={time[4]} size="s" key="sixth" />
          <Char char={time[5]} size="s" key="seventh" />
        </div>
      </div>
    </div>
  );
};
