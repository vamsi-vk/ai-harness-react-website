import { cn } from "../../lib/cn";

type MosaicTile = {
  src: string;
  alt: string;
  /** left / top / width / height as % of the mosaic canvas */
  box: string;
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
    // a — 4:5 portrait, top inset
    src: "/illustrations/custom/home-hero-clean-cafe.png",
    alt: "Cafe and restaurants",
    box: "left-[27%] top-[0%] h-[23%] w-[22.2%]",
  },
  {
    // b — 3:4 portrait
    src: "/illustrations/custom/home-hero-clean-marketing.png",
    alt: "Marketing posts",
    box: "left-[50.6%] top-[0%] h-[26.3%] w-[23.8%]",
  },
  {
    // c — 4:3 landscape, flush right
    src: "/illustrations/custom/home-hero-clean-real-estate.png",
    alt: "Real estate",
    box: "left-[75.8%] top-[0%] h-[15.8%] w-[24.2%]",
  },
  {
    // d — 16:9 wide, left edge of collage
    src: "/illustrations/custom/home-hero-life-content-calendar.png",
    alt: "Content calendar",
    box: "left-[0%] top-[27.7%] h-[23.7%] w-[50.7%]",
  },
  {
    // e — 2:3 portrait
    src: "/illustrations/custom/home-hero-clean-dental.png",
    alt: "Dental care",
    box: "left-[52.1%] top-[27.7%] h-[29.6%] w-[23.8%]",
  },
  {
    // f — 3:4 under c (starts higher than d/e)
    src: "/illustrations/custom/home-hero-clean-beauty.png",
    alt: "Beauty and wellness",
    box: "left-[77.3%] top-[17.2%] h-[26.3%] w-[22.7%]",
  },
  {
    // g — tall 3:4 spanning lower two bands
    src: "/illustrations/custom/home-hero-life-barista.png",
    alt: "Barista serving coffee",
    box: "left-[0%] top-[52.8%] h-[47.2%] w-[25.1%]",
  },
  {
    // h — 4:3 beside g
    src: "/illustrations/custom/home-hero-clean-review.png",
    alt: "Customer reviews",
    box: "left-[26.5%] top-[52.8%] h-[19.7%] w-[24.2%]",
  },
  {
    // i — 16:9 under e/f
    src: "/illustrations/custom/home-hero-life-highfive.png",
    alt: "Team celebrating success",
    box: "left-[52.1%] top-[58.7%] h-[22.6%] w-[47.9%]",
  },
  {
    // j — 3:4 under h
    src: "/illustrations/custom/home-hero-clean-listings.png",
    alt: "Local business listings",
    box: "left-[26.5%] top-[74%] h-[26%] w-[23.8%]",
  },
  {
    // k — 1:1 square under i
    src: "/illustrations/custom/home-hero-clean-social-post.png",
    alt: "Social media post",
    box: "left-[52.1%] top-[82.7%] h-[17.3%] w-[17.5%]",
  },
  {
    // l — 4:3 flush right under i
    src: "/illustrations/custom/home-hero-clean-home-services.png",
    alt: "Bright lounge interior",
    box: "left-[71%] top-[82.7%] h-[17.3%] w-[29%]",
  },
];

export default function HomeHeroMosaic() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(56vw,900px)] lg:block"
    >
      <div className="flex h-full items-center py-10 pr-4 pl-4 xl:py-14 xl:pr-6 xl:pl-6">
        <div className="relative ml-auto aspect-[1892/2280] h-[min(82vh,760px)] w-auto max-w-full xl:h-[min(86vh,820px)]">
          {TILES.map((tile) => (
            <div
              key={tile.src + tile.box}
              className={cn(
                "absolute overflow-hidden rounded-2xl bg-ink-100 shadow-sm ring-1 ring-black/[0.04]",
                tile.box,
              )}
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
