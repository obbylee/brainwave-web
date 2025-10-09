"use client";

import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Orbit from "@/components/Orbit";
import { Fragment, useState } from "react";
import { twMerge } from "tailwind-merge";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
] satisfies {
  buttonVariant: "primary" | "secondary" | "tertiary";
  name: string;
  href: string;
}[];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <header className="border-b border-red-200/20 z-50">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="h-18 lg:h-20 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <Logo />
              <div className="font-extrabold text-2xl">sphereal.ai</div>
            </div>

            <div className="h-full hidden lg:block">
              <nav className="h-full">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="h-full inline-flex items-center px-10 relative font-bold text-xs tracking-widest text-gray-400 uppercase
                  before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-px before:h-2 before:bg-gray-200/20
                  last:after:content-[''] last:after:absolute last:after:bottom-0 last:after:right-0 last:after:w-px last:after:h-2 last:after:bg-gray-200/20
                  "
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="hidden lg:flex gap-4">
              {loginItems.map(({ buttonVariant, name }) => (
                <Button key={name} variant={buttonVariant}>
                  {name}
                </Button>
              ))}
            </div>
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="size-10 
            rounded-lg 
            relative 
            border-2 
            border-transparent 
            [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_padding-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 -translate-y-1 transition-all duration-300",
                      isMenuOpen && "translate-y-0 rotate-45"
                    )}
                  ></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 translate-y-1 transition-all duration-300",
                      isMenuOpen && "translate-y-0 -rotate-45"
                    )}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={twMerge(
          "fixed top-19 left-0 right-0 bottom-0 z-30 overflow-hidden transform transition-all duration-300 ease-in-out bg-gray-950/90 backdrop-blur-lg",
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        {/* Orbits */}
        {[200, 350, 500, 650, 800].map((size) => (
          <div key={size} className="absolute-center isolate -z-10">
            <Orbit className={`size-[${size}px]`} />
          </div>
        ))}

        <div className="container mx-auto px-5 lg:px-20 h-screen">
          <nav className="flex flex-col items-center justify-center gap-4 py-8 h-full">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="h-10 text-sm text-gray-400 font-bold uppercase tracking-widest"
              >
                {item.name}
              </a>
            ))}
            {loginItems.map(({ buttonVariant, name, href }) => (
              <a href={href} key={name} className="w-full">
                <Button
                  block={true}
                  variant={buttonVariant}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </Button>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
