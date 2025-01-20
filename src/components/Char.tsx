import { Fragment } from "react/jsx-runtime";
import { Dot } from "./Dot";
import { chars, type Chars, type DotSize } from "../types";

interface CharProps {
  char: Chars;
  size: DotSize;
}

export const Char = ({ char, size }: CharProps) => (
  <div className="grid grid-cols-5 data-[size=m]:gap-2 data-[size=s]:gap-1 w-fit" data-size={size}>
    {chars[char].map(([a, b, c, d, e], index) => (
      <Fragment key={`line-${index}`}>
        <Dot variant={a === 1 ? "up" : "down"} size={size} key={`line-${index}-0`} />
        <Dot variant={b === 1 ? "up" : "down"} size={size} key={`line-${index}-1`} />
        <Dot variant={c === 1 ? "up" : "down"} size={size} key={`line-${index}-2`} />
        <Dot variant={d === 1 ? "up" : "down"} size={size} key={`line-${index}-3`} />
        <Dot variant={e === 1 ? "up" : "down"} size={size} key={`line-${index}-4`} />
      </Fragment>
    ))}
  </div>
);
