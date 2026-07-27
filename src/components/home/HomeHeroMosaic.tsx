import { cn } from "../../lib/cn";

type MosaicTile = {
  src: string;
  alt: string;
  /** left / top / width / height as % of the mosaic canvas */
  box: string;
  /** Horizontal position used to stagger: rightmost tiles lead */
  leftPct: number;
};

/**
 * Right-anchored 12-frame collage matching the home-hero wireframe.
 * Boxes are % of a ~1892×2280 design canvas (uniform ~1.4% gaps).
 *
 * Layout:
 *        [a 4:5] [b 3:4] [c 4:3]
 * [d 16:9 ......] [e 2:3] [f 3:4]
 * [g 3:4] [h 4:3] [i 16:9 ......]
 * [g ....] [j 3:4] [k 1:1] [l 4:3]
 */
const TILES: MosaicTile[] = [
  {
    src: "/illustrations/custom/home-hero-product-calendar.png",
    alt: "Content calendar product UI",
    box: "left-[27%] top-[0%] h-[26%] w-[22.2%]",
    leftPct: 27,
  },
  {
    src: "/illustrations/custom/home-hero-clean-marketing.png",
    alt: "Marketing posts",
    box: "left-[50.6%] top-[0%] h-[26.3%] w-[23.8%]",
    leftPct: 50.6,
  },
  {
    src: "/illustrations/custom/home-hero-life-revenue-growth.png",
    alt: "Revenue growth",
    box: "left-[75.8%] top-[0%] h-[15.8%] w-[24.2%]",
    leftPct: 75.8,
  },
  {
    src: "/illustrations/custom/home-hero-life-highfive.png",
    alt: "Team celebrating success",
    box: "left-[0%] top-[27.7%] h-[23.7%] w-[50.7%]",
    leftPct: 0,
  },
  {
    src: "/illustrations/custom/home-hero-clean-dental.png",
    alt: "Dental care",
    box: "left-[52.1%] top-[27.7%] h-[29.6%] w-[23.8%]",
    leftPct: 52.1,
  },
  {
    src: "/illustrations/custom/home-hero-life-social-icons.png",
    alt: "Social media platforms",
    box: "left-[77.3%] top-[17.2%] h-[40%] w-[22.7%]",
    leftPct: 77.3,
  },
  {
    src: "/illustrations/custom/home-hero-life-barista.png",
    alt: "Barista serving coffee",
    box: "left-[0%] top-[52.8%] h-[47.2%] w-[25.1%]",
    leftPct: 0,
  },
  {
    src: "/illustrations/custom/home-hero-clean-review.png",
    alt: "Customer reviews",
    box: "left-[26.5%] top-[52.8%] h-[19.7%] w-[24.2%]",
    leftPct: 26.5,
  },
  {
    src: "/illustrations/custom/home-hero-clean-calendar.png",
    alt: "Content calendar",
    box: "left-[52.1%] top-[58.7%] h-[22.6%] w-[47.9%]",
    leftPct: 52.1,
  },
  {
    src: "/illustrations/custom/home-hero-clean-social-post.png",
    alt: "Social media post",
    box: "left-[26.5%] top-[74%] h-[26%] w-[23.8%]",
    leftPct: 26.5,
  },
  {
    src: "/illustrations/custom/home-hero-clean-listings.png",
    alt: "Local business listings",
    box: "left-[52.1%] top-[82.7%] h-[17.3%] w-[17.5%]",
    leftPct: 52.1,
  },
  {
    src: "/illustrations/custom/home-hero-clean-home-services.png",
    alt: "Bright lounge interior",
    box: "left-[71%] top-[82.7%] h-[17.3%] w-[29%]",
    leftPct: 71,
  },
];

/** Rightmost tiles start first; cascade continues toward the left. */
function tileDelay(leftPct: number) {
  return `${((100 - leftPct) / 100) * 0.9 + 0.12}s`;
}

export default function HomeHeroMosaic() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-end px-6 sm:px-8">
        <div className="relative aspect-[1892/2280] h-[min(78vh,720px)] w-[min(48%,560px)] max-w-[560px] overflow-visible xl:h-[min(82vh,780px)] xl:w-[min(50%,600px)] xl:max-w-[600px]">
          {TILES.map((tile) => (
            <div
              key={tile.src + tile.box}
              className={cn(
                "home-hero-tile-in absolute overflow-hidden rounded-2xl bg-ink-100 shadow-sm ring-1 ring-black/[0.04]",
                tile.box,
              )}
              style={{ ["--tile-delay" as string]: tileDelay(tile.leftPct) }}
            >
              <img
                src={tile.src}
                alt=""
                className="h-full w-full object-cover"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
