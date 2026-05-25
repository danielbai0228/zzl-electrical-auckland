import { Zap } from "lucide-react";

type BrandMarkProps = {
  size?: "sm" | "lg";
};

export function BrandMark({ size = "sm" }: BrandMarkProps) {
  const isLarge = size === "lg";

  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-md bg-slate-950 text-blue-400 ${
        isLarge ? "size-14" : "size-10"
      }`}
      aria-hidden="true"
    >
      <Zap
        className={isLarge ? "size-8" : "size-6"}
        fill="currentColor"
        strokeWidth={2.4}
      />
    </span>
  );
}
