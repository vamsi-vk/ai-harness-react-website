import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/cn";
import { HERO_GALLERY_IMAGES } from "../data/industryImages";

const ROTATE_MS = 5000;

export default function AgentHeroGallery() {
  const [active, setActive] = useState(0);
  const total = HERO_GALLERY_IMAGES.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [total]);

  const goTo = (index: number) => {
    setActive((index + total) % total);
  };

  const current = HERO_GALLERY_IMAGES[active];

  return (
    <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
      <div aria-hidden className="absolute inset-x-4 top-1/2 h-40 -translate-y-1/2 rounded-full bg-brand-500/12 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-ink-200/80 bg-white shadow-lift ring-1 ring-black/[0.03]">
        <div className="relative aspect-[3/2] w-full">
          {HERO_GALLERY_IMAGES.map((image, index) => (
            <img
              key={image.label}
              src={image.src}
              alt={image.alt}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                index === active ? "opacity-100" : "opacity-0",
              )}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/80 via-ink-950/35 to-transparent px-5 pb-4 pt-12">
            <p className="text-sm font-semibold text-white sm:text-base">{current.label}</p>
          </div>

          <button
            type="button"
            onClick={() => goTo(active - 1)}
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink-700 shadow-sm transition hover:bg-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink-700 shadow-sm transition hover:bg-white"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-6 gap-2">
        {HERO_GALLERY_IMAGES.map((image, index) => (
          <button
            key={image.label}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition",
              index === active
                ? "border-brand-500 ring-2 ring-brand-500/25"
                : "border-transparent opacity-70 hover:opacity-100",
            )}
            aria-label={`Show ${image.label}`}
            aria-current={index === active}
          >
            <img
              src={image.src}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
