import { cn } from "../../lib/cn";

type MosaicTile = {
  src: string;
  alt: string;
  className: string;
  fadeLeft?: boolean;
};

/** Frame positions match the original hero collage layout (percent of mosaic box). */
const TILES: MosaicTile[] = [
  {
    src: "/illustrations/custom/home-hero-mosaic-restaurants.png",
    alt: "Restaurant dining",
    className: "left-[0%] top-[0%] h-[14%] w-[18%]",
  },
  {
    src: "/illustrations/custom/home-hero-mosaic-home-services.png",
    alt: "Home services",
    className: "left-[0%] top-[15%] h-[16%] w-[32%]",
  },
  {
    src: "/illustrations/custom/home-hero-mosaic-marketing.png",
    alt: "Marketing posts",
    className: "left-[22%] top-[0%] h-[38%] w-[22%]",
  },
  {
    src: "/illustrations/custom/home-hero-mosaic-reviews.png",
    alt: "Customer reviews",
    className: "left-[46%] top-[0%] h-[11%] w-[18%]",
  },
  {
    src: "/illustrations/custom/home-hero-mosaic-real-estate.png",
    alt: "Real estate",
    className: "left-[46%] top-[12%] h-[30%] w-[18%]",
  },
  {
    src: "/illustrations/custom/home-hero-mosaic-beauty.png",
    alt: "Beauty and wellness",
    className: "left-[0%] top-[32%] h-[52%] w-[20%]",
    fadeLeft: true,
  },
  {
    src: "/illustrations/custom/home-hero-mosaic-dental.png",
    alt: "Dental care",
    className: "left-[22%] top-[39%] h-[14%] w-[16%]",
  },
  {
    src: "/illustrations/custom/home-hero-mosaic-retail.png",
    alt: "Retail",
    className: "left-[22%] top-[54%] h-[18%] w-[16%]",
  },
  {
    src: "/illustrations/custom/home-hero-mosaic-analytics.png",
    alt: "Sales analytics",
    className: "left-[40%] top-[42%] h-[22%] w-[42%]",
  },
  {
    src: "/illustrations/custom/home-hero-mosaic-gbp.png",
    alt: "Google Business Profile listings",
    className: "left-[66%] top-[66%] h-[18%] w-[16%]",
  },
  {
    src: "/illustrations/custom/home-hero-mosaic-restaurants-2.png",
    alt: "Cafe and restaurants",
    className: "left-[84%] top-[66%] h-[14%] w-[16%]",
  },
];

export default function HomeHeroMosaic() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(58vw,920px)] lg:block"
    >
      <div className="relative mx-auto h-full w-full max-w-[920px] py-10 pr-8 pl-2 xl:py-14 xl:pr-12">
        <div className="relative h-full min-h-[520px] w-full xl:min-h-[600px]">
          {TILES.map((tile) => (
            <div
              key={tile.src}
              className={cn(
                "absolute overflow-hidden rounded-2xl bg-ink-100 shadow-sm ring-1 ring-black/[0.04]",
                tile.className,
              )}
            >
              <img
                src={tile.src}
                alt=""
                className={cn(
                  "h-full w-full object-cover",
                  tile.fadeLeft && "[mask-image:linear-gradient(to_right,transparent,black_22%)]",
                )}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
