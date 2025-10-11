"use client";

import { cva } from "class-variance-authority";
import { HTMLAttributes, useEffect, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { animate } from "motion";

const button = cva(
  "text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg",
  {
    variants: {
      block: {
        true: "w-full",
      },
      variant: {
        primary: "border-gradient",
        secondary: "bg-gray-100 text-gray-950",
        tertiary: "bg-gray-800 text-gray-200",
      },
    },
    defaultVariants: { variant: "primary", block: false },
  }
);

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  block?: boolean;
  children: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  block = false,
  children,
  className = "",
}: ButtonProps) {
  const [isHover, setIsHover] = useState(false);

  const rotate = useMotionValue(45);
  const background = useMotionTemplate`linear-gradient(var(--color-gray-950),var(--color-gray-950)) padding-box, conic-gradient(from ${rotate}deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400)) border-box`;

  useEffect(() => {
    if (isHover) {
      animate(rotate, rotate.get() + 360, {
        duration: 1,
        ease: "linear",
        repeat: Infinity,
      });
    } else {
      animate(rotate, 45, {
        duration: 0.5,
      });
    }
  }, [isHover, rotate]);

  return (
    <motion.button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={button({ block, variant, className })}
      style={variant === "primary" ? { background: background } : undefined}
    >
      {children}
    </motion.button>
  );
}
