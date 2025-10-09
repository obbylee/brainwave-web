import { twMerge } from "tailwind-merge";

type SectionContentProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionContent({
  children,
  className,
}: SectionContentProps) {
  return (
    <div
      className={twMerge(
        "container mx-auto py-24 md:py-36 lg:py-48 px-4 lg:px-8 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
