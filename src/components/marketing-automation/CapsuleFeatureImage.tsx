import { cn } from "../../lib/cn";

type CapsuleFeatureImageProps = {
  src: string;
  alt: string;
  pillSide: "left" | "right";
  /** Extra classes on the img, e.g. translate-x-4 to reveal left-edge artwork */
  imageClassName?: string;
};

/** One-sided capsule (pill) frame for agent feature images */
export function CapsuleFeatureImage({ src, alt, pillSide, imageClassName }: CapsuleFeatureImageProps) {
  const plateRound =
    pillSide === "right"
      ? "rounded-l-[1.5rem] rounded-r-[999px] sm:rounded-l-[1.75rem]"
      : "rounded-r-[1.5rem] rounded-l-[999px] sm:rounded-r-[1.75rem]";
  const innerRound =
    pillSide === "right"
      ? "rounded-l-[calc(1.5rem-2px)] rounded-r-[999px] sm:rounded-l-[calc(1.75rem-2px)]"
      : "rounded-r-[calc(1.5rem-2px)] rounded-l-[999px] sm:rounded-r-[calc(1.75rem-2px)]";

  return (
    <div
      className={cn(
        "relative pb-3 sm:pb-4",
        pillSide === "right" ? "pl-3 sm:pl-4" : "pr-3 sm:pr-4",
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 bg-[#E5E7EB] shadow-[0_18px_30px_-10px_rgba(15,23,42,0.16)] ring-1 ring-[#D1D5DB]",
          plateRound,
          pillSide === "right" ? "right-3 sm:right-4" : "left-3 sm:left-4",
        )}
      />
      <div
        className={cn("relative z-10 overflow-hidden p-[1.5px]", plateRound)}
        style={{
          background:
            "linear-gradient(to bottom right, rgba(124,58,237,0.35), rgba(154,111,240,0.3), rgba(196,161,255,0.35))",
          boxShadow: "0 18px 40px -24px rgba(124,58,237,0.18)",
        }}
      >
        <div className={cn("overflow-hidden bg-white p-1 sm:p-1.5", innerRound)}>
          <img
            src={src}
            alt={alt}
            className={cn(
              "block h-auto w-full object-contain",
              imageClassName ?? "object-center",
            )}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}
