import { useEffect } from "react";

var ONE_SECOND = 1000;
interface RepeatOptions {
  repeatedFunction: Function;
}

export const useRepeatEverySecond = ({ repeatedFunction }: RepeatOptions) => {
  useEffect(() => {
    let interval: number;

    // Delay execution until it's an even interval
    const now = new Date();
    const delay = ONE_SECOND - now.getMilliseconds();

    const initInterval = setTimeout(() => {
      interval = setInterval(repeatedFunction, ONE_SECOND);
    }, delay);

    return () => {
      clearInterval(initInterval);
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);
};
