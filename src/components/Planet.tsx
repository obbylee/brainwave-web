import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const classes = cva("bg-gradient-to-b to-gray-950 rounded-full", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-6",
      lg: "size-8",
    },
    color: {
      violet: "from-violet-400",
      teal: "from-teal-400",
      fuchsia: "from-fuchsia-400",
    },
  },
  defaultVariants: { size: "md", color: "violet" },
});

export default function Planet({
  size,
  color,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
  color?: "violet" | "teal" | "fuchsia";
}) {
  return (
    <div
      className={classes({ size: size, color: color, className: className })}
    ></div>
  );
}
