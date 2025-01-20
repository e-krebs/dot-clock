import { useEffect } from "react";

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

interface RepeatOptions {
  repeatedFunction: Function;
  condition?: boolean;
}

export const useRepeatEverySecond = ({ repeatedFunction, condition = true }: RepeatOptions) => {
  useEffect(() => {
    let interval = undefined;
    if (condition) {
      interval = repeatEverySecond(repeatedFunction);
    }
    return () => {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    };
  }, []);
};
