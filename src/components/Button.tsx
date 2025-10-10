"use client";

import { cva } from "class-variance-authority";
import { HTMLAttributes, useState } from "react";
import { motion } from "motion/react";

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
  variant,
  block = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={button({ block, variant, className })}
    >
      {children}
    </motion.button>
  );
}
