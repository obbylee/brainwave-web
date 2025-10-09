import React from "react";
import { twMerge } from "tailwind-merge";

type LogoProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export default function Logo({ className, style, children }: LogoProps) {
  return (
    <div
      className={twMerge(
        "size-10 bg-gray-200 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]",
        className
      )}
      style={{
        maskImage: `url(/sphereal-logo.svg)`,
        WebkitMaskImage: `url(/sphereal-logo.svg)`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
