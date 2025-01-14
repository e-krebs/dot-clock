interface DotProps {
  variant?: "up" | "down";
}

export const Dot = ({ variant = "down" }: DotProps) => (
  <div
    data-variant={variant}
    className="size-10 rounded-full
    bg-linear-45 from-theme-bg to-theme-bg-lighter
    data-[variant=up]:shadow-dot-up
    data-[variant=down]:shadow-dot-down
    transition-all duration-1000"
  />
);
