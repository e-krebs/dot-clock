import { useEffect, useState } from "react";
import { Char } from "./components";
import { Chars, DigitDef } from "./components/CharDef";

var ONE_MINUTE = 60 * 1000;

const repeatEveryMinute = (func: Function) => {
  let interval;
  const start = () => {
    // Execute function now...
    func();
    // ... and every interval
    interval = setInterval(func, ONE_MINUTE);
  };

  func();
  // Delay execution until it's an even interval
  const now = new Date();
  const delay = ONE_MINUTE - 1000 * now.getSeconds() - now.getMilliseconds();
  interval = setTimeout(start, delay);
  return interval;
};

export const App = () => {
  const [time, setTime] = useState<[Chars, Chars, Chars, Chars, Chars]>([, , , , ,]);
  useEffect(() => {
    const interval = repeatEveryMinute(() => {
      const now = new Date();
      const first = Math.trunc(now.getHours() / 10) as DigitDef;
      const second = (now.getHours() % 10) as DigitDef;
      const third = Math.trunc(now.getMinutes() / 10) as DigitDef;
      const fourth = (now.getMinutes() % 10) as DigitDef;
      setTime([first, second, "colon", third, fourth]);
    });
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div
        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]
          scale-50 xs:scale-75 s:scale-90 m:scale-95 l:scale-none
          p-14 grid grid-cols-2 grid-rows-2 xl:flex gap-14 min-w-max
          *:nth-3:hidden xl:*:nth-3:grid"
      >
        <Char char={time[0]} key="first" />
        <Char char={time[1]} key="second" />
        <Char char={time[2]} key="third" blink />
        <Char char={time[3]} key="fourth" />
        <Char char={time[4]} key="fifth" />
      </div>
    </div>
  );
};
