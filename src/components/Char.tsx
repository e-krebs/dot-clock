import { Fragment } from "react/jsx-runtime";
import { chars, Chars } from "./CharDef";
import { Dot } from "./Dot";
import { useEffect, useReducer } from "react";

interface CharProps {
  char: Chars;
  blink?: boolean;
}

var ONE_SECOND = 1000;

const repeatEverySecond = (func: Function) => {
  let interval;
  const start = () => {
    // Execute function now...
    func();
    // ... and every interval
    interval = setInterval(func, ONE_SECOND);
  };

  func();
  // Delay execution until it's an even interval
  const now = new Date();
  const delay = ONE_SECOND - now.getMilliseconds();
  interval = setTimeout(start, delay);
  return interval;
};

export const Char = ({ char = "", blink = false }: CharProps) => {
  const [on, toggleBlink] = useReducer((val) => (val ? false : true), !blink);

  useEffect(() => {
    let interval = undefined;
    if (blink) {
      interval = repeatEverySecond(() => {
        toggleBlink();
      });
    }
    return () => {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-5 gap-2 w-fit">
      {chars[char].map(([a, b, c, d, e], index) => (
        <Fragment key={`line-${index}`}>
          <Dot variant={a === 1 && on ? "up" : "down"} key={`line-${index}-0`} />
          <Dot variant={b === 1 && on ? "up" : "down"} key={`line-${index}-1`} />
          <Dot variant={c === 1 && on ? "up" : "down"} key={`line-${index}-2`} />
          <Dot variant={d === 1 && on ? "up" : "down"} key={`line-${index}-3`} />
          <Dot variant={e === 1 && on ? "up" : "down"} key={`line-${index}-4`} />
        </Fragment>
      ))}
    </div>
  );
};
