import { type DotSize } from "../types";

interface DotProps {
  variant?: "up" | "down";
  size: DotSize;
}

export const Dot = ({ variant = "down", size }: DotProps) => (
  <div
    data-variant={variant}
    data-size={size}
    className="data-[size=m]:size-10 data-[size=s]:size-4.5
    rounded-full
    bg-linear-45 from-theme-bg to-theme-bg-lighter
    data-[variant=up]:shadow-dot-up
    data-[variant=down]:shadow-dot-down
    transition-all duration-1000"
  />
);
