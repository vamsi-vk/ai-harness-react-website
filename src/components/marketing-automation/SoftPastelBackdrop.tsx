import { cn } from "../../lib/cn";
import PictureSet from "../PictureSet";

type SoftPastelBackdropProps = {
  side?: "left" | "right";
  className?: string;
};

export default function SoftPastelBackdrop({
  side = "left",
  className,
}: SoftPastelBackdropProps) {
  const src =
    side === "right"
      ? "/illustrations/custom/marketing-blob-right.png"
      : "/illustrations/custom/marketing-blob-left.png";

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-white" />
      <PictureSet
        base={src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center opacity-100"
        sizes="100vw"
      />
    </div>
  );
}
