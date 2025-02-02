import { useEffect } from "react";

var ONE_SECOND = 1000;
var ONE_MINUTE = 1000 * 60;

type Frequency = "second" | "minute";

const frequencyData: Record<Frequency, { timeout: number; getNextTick: () => number }> = {
  second: {
    timeout: ONE_SECOND,
    getNextTick: () => {
      const now = new Date();
      return ONE_SECOND - now.getMilliseconds();
    },
  },
  minute: {
    timeout: ONE_MINUTE,
    getNextTick: () => {
      const now = new Date();
      return ONE_MINUTE - now.getMilliseconds() - now.getSeconds() * ONE_SECOND;
    },
  },
};

export const useRepeatEvery = (repeatedFunction: () => void, frequency: Frequency) => {
  useEffect(() => {
    let interval: number;

    // Delay execution until it's an even interval
    const delay = frequencyData[frequency].getNextTick();

    const initInterval = setTimeout(() => {
      interval = setInterval(repeatedFunction, frequencyData[frequency].timeout);
    }, delay);

    return () => {
      clearInterval(initInterval);
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);
};
