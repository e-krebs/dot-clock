import { Reducer, useReducer } from "react";
import { Char } from "./components";
import { getTime, type Time, useRepeatEvery } from "./utils";

interface State {
  on: boolean;
  time: Time;
}

const initialState = { on: false, time: ["", "", "", "", "", ""] } satisfies State;
const stateReducer: Reducer<State, Time> = (state, time): State => ({
  on: !state.on,
  time,
});

export const App = () => {
  const [{ on, time }, setTime] = useReducer<State, [Time]>(stateReducer, initialState);

  useRepeatEvery(() => setTime(getTime(new Date())), "second");

  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div
        className="relative
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
