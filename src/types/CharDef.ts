type DotDef = 1 | 0 | undefined;
type DotLine = [DotDef, DotDef, DotDef, DotDef, DotDef];
type CharDef = [DotLine, DotLine, DotLine, DotLine, DotLine, DotLine, DotLine];

const blank: CharDef = [
  [, , , , ,],
  [, , , , ,],
  [, , , , ,],
  [, , , , ,],
  [, , , , ,],
  [, , , , ,],
  [, , , , ,],
] as const;

const colon: CharDef = [
  [, , , , ,],
  [, , , , ,],
  [, , 1, , ,],
  [, , , , ,],
  [, , 1, , ,],
  [, , , , ,],
  [, , , , ,],
] as const;

const zero: CharDef = [
  [, 1, 1, 1, ,],
  [1, , , , 1],
  [1, , , 1, 1],
  [1, , 1, , 1],
  [1, 1, , , 1],
  [1, , , , 1],
  [, 1, 1, 1, ,],
] as const;

const one: CharDef = [
  [, , 1, , ,],
  [, 1, 1, , ,],
  [1, , 1, , ,],
  [, , 1, , ,],
  [, , 1, , ,],
  [, , 1, , ,],
  [1, 1, 1, 1, 1],
] as const;

const two: CharDef = [
  [, 1, 1, 1, ,],
  [1, , , , 1],
  [, , , , 1],
  [, , , 1, ,],
  [, , 1, , ,],
  [, 1, , , ,],
  [1, 1, 1, 1, 1],
] as const;

const three: CharDef = [
  [, 1, 1, 1, ,],
  [1, , , , 1],
  [, , , , 1],
  [, , 1, 1, ,],
  [, , , , 1],
  [1, , , , 1],
  [, 1, 1, 1, ,],
] as const;

const four: CharDef = [
  [, , , 1, ,],
  [, , 1, 1, ,],
  [, 1, , 1, ,],
  [1, , , 1, ,],
  [1, 1, 1, 1, 1],
  [, , , 1, ,],
  [, , , 1, ,],
] as const;

const five: CharDef = [
  [1, 1, 1, 1, 1],
  [1, , , , ,],
  [1, 1, 1, 1, ,],
  [, , , , 1],
  [, , , , 1],
  [1, , , , 1],
  [, 1, 1, 1, ,],
] as const;

const six: CharDef = [
  [, 1, 1, 1, ,],
  [1, , , , 1],
  [1, , , , ,],
  [1, 1, 1, 1, ,],
  [1, , , , 1],
  [1, , , , 1],
  [, 1, 1, 1, ,],
] as const;

const seven: CharDef = [
  [1, 1, 1, 1, 1],
  [, , , , 1],
  [, , , 1, ,],
  [, , 1, , ,],
  [, 1, , , ,],
  [, 1, , , ,],
  [, 1, , , ,],
] as const;

const eight: CharDef = [
  [, 1, 1, 1, ,],
  [1, , , , 1],
  [1, , , , 1],
  [, 1, 1, 1, ,],
  [1, , , , 1],
  [1, , , , 1],
  [, 1, 1, 1, ,],
] as const;

const nine: CharDef = [
  [, 1, 1, 1, ,],
  [1, , , , 1],
  [1, , , , 1],
  [, 1, 1, 1, 1],
  [, , , , 1],
  [1, , , , 1],
  [, 1, 1, 1, ,],
] as const;

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Chars = Digit | "" | "colon";

export const chars = {
  "": blank,
  0: zero,
  1: one,
  2: two,
  3: three,
  4: four,
  5: five,
  6: six,
  7: seven,
  8: eight,
  9: nine,
  colon,
} satisfies Record<Chars, CharDef>;
