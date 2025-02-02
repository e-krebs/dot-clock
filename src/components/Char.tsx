import { type Chars, type DotSize } from "../types";

interface CharProps {
  char: Chars;
  size?: DotSize;
}

const dotClassName = `shadow-dot-down in-data-[size=m]:size-10 in-data-[size=s]:size-4.5 rounded-full
                      bg-linear-45 from-theme-bg to-theme-bg-lighter transition-all duration-1000`;

export const Char = ({ char, size = "m" }: CharProps) => (
  <div
    className="grid grid-cols-5 data-[size=m]:gap-2 data-[size=s]:gap-1 w-fit"
    data-size={size}
    data-char={char}
  >
    {/* line n°1 */}
    <div
      className={`
        ${dotClassName}
        in-data-[char=5]:shadow-dot-up in-data-[char=7]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=2]:shadow-dot-up in-data-[char=3]:shadow-dot-up in-data-[char=5]:shadow-dot-up in-data-[char=6]:shadow-dot-up in-data-[char=7]:shadow-dot-up in-data-[char=8]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=1]:shadow-dot-up in-data-[char=2]:shadow-dot-up in-data-[char=3]:shadow-dot-up in-data-[char=5]:shadow-dot-up in-data-[char=6]:shadow-dot-up in-data-[char=7]:shadow-dot-up in-data-[char=8]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=2]:shadow-dot-up in-data-[char=3]:shadow-dot-up in-data-[char=4]:shadow-dot-up in-data-[char=5]:shadow-dot-up in-data-[char=6]:shadow-dot-up in-data-[char=7]:shadow-dot-up in-data-[char=8]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=5]:shadow-dot-up in-data-[char=7]:shadow-dot-up
      `}
    />
    {/* line n°2 */}
    <div
      className={`
        ${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=2]:shadow-dot-up in-data-[char=3]:shadow-dot-up in-data-[char=5]:shadow-dot-up in-data-[char=6]:shadow-dot-up in-data-[char=8]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=1]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=1]:shadow-dot-up in-data-[char=4]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=4]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=2]:shadow-dot-up in-data-[char=3]:shadow-dot-up in-data-[char=6]:shadow-dot-up in-data-[char=7]:shadow-dot-up in-data-[char=8]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    {/* line n°3 */}
    <div
      className={`
        ${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=1]:shadow-dot-up in-data-[char=5]:shadow-dot-up in-data-[char=6]:shadow-dot-up in-data-[char=8]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=4]:shadow-dot-up in-data-[char=5]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=colon]:shadow-dot-up in-data-[char=1]:shadow-dot-up in-data-[char=5]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=4]:shadow-dot-up in-data-[char=5]:shadow-dot-up in-data-[char=7]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=2]:shadow-dot-up in-data-[char=3]:shadow-dot-up in-data-[char=8]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    {/* line n°4 */}
    <div
      className={`
        ${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=4]:shadow-dot-up in-data-[char=6]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=6]:shadow-dot-up in-data-[char=8]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=1]:shadow-dot-up in-data-[char=3]:shadow-dot-up in-data-[char=6]:shadow-dot-up in-data-[char=7]:shadow-dot-up in-data-[char=8]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=2]:shadow-dot-up in-data-[char=3]:shadow-dot-up in-data-[char=4]:shadow-dot-up in-data-[char=6]:shadow-dot-up in-data-[char=8]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=5]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    {/* line n°5 */}
    <div
      className={`
        ${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=4]:shadow-dot-up in-data-[char=6]:shadow-dot-up in-data-[char=8]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=4]:shadow-dot-up in-data-[char=7]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=colon]:shadow-dot-up in-data-[char=1]:shadow-dot-up in-data-[char=2]:shadow-dot-up in-data-[char=4]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=4]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=3]:shadow-dot-up in-data-[char=4]:shadow-dot-up in-data-[char=5]:shadow-dot-up in-data-[char=6]:shadow-dot-up in-data-[char=8]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    {/* line n°6 */}
    <div
      className={`
        ${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=3]:shadow-dot-up in-data-[char=5]:shadow-dot-up in-data-[char=6]:shadow-dot-up in-data-[char=8]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=2]:shadow-dot-up in-data-[char=7]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=1]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=4]:shadow-dot-up
      `}
    />
    <div
      className={`
        ${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=3]:shadow-dot-up in-data-[char=5]:shadow-dot-up in-data-[char=6]:shadow-dot-up in-data-[char=8]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    {/* line n°7 */}
    <div
      className={`${dotClassName}
        in-data-[char=1]:shadow-dot-up in-data-[char=2]:shadow-dot-up
      `}
    />
    <div
      className={`${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=1]:shadow-dot-up in-data-[char=2]:shadow-dot-up in-data-[char=3]:shadow-dot-up in-data-[char=5]:shadow-dot-up in-data-[char=6]:shadow-dot-up in-data-[char=7]:shadow-dot-up in-data-[char=8]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    <div
      className={`${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=1]:shadow-dot-up in-data-[char=2]:shadow-dot-up in-data-[char=3]:shadow-dot-up in-data-[char=5]:shadow-dot-up in-data-[char=6]:shadow-dot-up in-data-[char=8]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    <div
      className={`${dotClassName}
        in-data-[char=0]:shadow-dot-up in-data-[char=1]:shadow-dot-up in-data-[char=2]:shadow-dot-up in-data-[char=3]:shadow-dot-up in-data-[char=4]:shadow-dot-up in-data-[char=5]:shadow-dot-up in-data-[char=6]:shadow-dot-up in-data-[char=8]:shadow-dot-up in-data-[char=9]:shadow-dot-up
      `}
    />
    <div
      className={`${dotClassName}
        in-data-[char=1]:shadow-dot-up in-data-[char=2]:shadow-dot-up
      `}
    />
  </div>
);
