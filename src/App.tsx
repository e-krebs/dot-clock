import { Reducer, useReducer } from "react";
import { Char } from "./components";
import { getCurrentTime, type Time, useRepeatEvery } from "./utils";
import { type Chars } from "./types";

interface State extends Time {
  _state: boolean;
  colon: Chars;
}

const initialState = {
  _state: false,
  colon: "",
  hour: ["", ""],
  minutes: ["", ""],
  seconds: ["", ""],
} satisfies State;

const stateReducer: Reducer<State, Time> = ({ _state }, time): State => ({
  ...time,
  _state: !_state,
  colon: !_state ? "colon" : "",
});

export const App = () => {
  const [{ colon, hour, minutes, seconds }, setTime] = useReducer<State, [Time]>(
    stateReducer,
    initialState
  );

  useRepeatEvery(() => setTime(getCurrentTime()), "second");

  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div
        className="relative
          scale-50 xs:scale-75 s:scale-90 m:scale-95 l:scale-none
          landscape:xs:scale-31 landscape:s:scale-38 landscape:m:scale-40 landscape:l:scale-42 landscape:xl:scale-none
          p-14 grid grid-cols-2 grid-rows-2 xl:flex landscape:flex gap-14 min-w-max
          *:nth-3:hidden xl:*:nth-3:grid landscape:*:nth-3:grid"
      >
        <Char char={hour[0]} key="first" />
        <Char char={hour[1]} key="second" />
        <Char char={colon} key="third" />
        <Char char={minutes[0]} key="fourth" />
        <Char char={minutes[1]} key="fifth" />
        <div className="absolute -bottom-35 right-14 flex gap-7">
          <Char char={seconds[0]} size="s" key="sixth" />
          <Char char={seconds[1]} size="s" key="seventh" />
        </div>
      </div>
    </div>
  );
};
