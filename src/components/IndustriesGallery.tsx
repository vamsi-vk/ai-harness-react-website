import { cn } from "../lib/cn";
import ScrollReveal from "./ScrollReveal";

type IndustryTile = {
  type: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
};

const INDUSTRY_TILES: IndustryTile[] = [
  {
    type: "Restaurants & cafes",
    summary:
      "Automatically collects reviews from happy customers and replies to every review using AI.",
    imageSrc: "/illustrations/custom/industries-founder-restaurants.png",
    imageAlt: "Café founder in her United States coffee shop",
  },
  {
    type: "Home & field services",
    summary:
      "Captures after-hours calls and web leads, sends quotes in minutes, and nudges quiet leads automatically.",
    imageSrc: "/illustrations/custom/industries-founder-home-services.png",
    imageAlt: "Home services business owner beside his service van",
  },
  {
    type: "Salons, spas & fitness",
    summary:
      "Books appointments around the clock and asks for a review after each visit.",
    imageSrc: "/illustrations/custom/industries-founder-salon.png",
    imageAlt: "Salon founder in her styling studio",
  },
  {
    type: "Auto repair & dealerships",
    summary:
      "Captures service requests, follows up on estimates, and turns finished jobs into fresh 5-star reviews.",
    imageSrc: "/illustrations/custom/industries-founder-auto.png",
    imageAlt: "Automotive services founder in his customer waiting area",
  },
  {
    type: "Professional & financial services",
    summary:
      "Turns inquiries into same-day proposals and keeps every prospect warm until they are ready to buy.",
    imageSrc: "/illustrations/custom/industries-founder-professional.png",
    imageAlt: "Financial services founder in her office",
  },
  {
    type: "Retail & e-commerce",
    summary:
      "Answers product questions, recovers quiet leads, and keeps your ratings strong across every channel.",
    imageSrc: "/illustrations/custom/industries-founder-retail.png",
    imageAlt: "Boutique retail founder in her store",
  },
  {
    type: "Real estate",
    summary:
      "Responds to listing inquiries in seconds and nurtures buyers until they book a tour.",
    imageSrc: "/illustrations/custom/industries-founder-real-estate.png",
    imageAlt: "Real estate founder at a listing in a suburban neighborhood",
  },
  {
    type: "IT & technology services",
    summary:
      "Captures project inquiries, follows up fast, and turns scopes into ready-to-send proposals.",
    imageSrc: "/illustrations/custom/industries-founder-it.png",
    imageAlt: "IT services founder in his technology office",
  },
];

function IndustryCard({ item, index }: { item: IndustryTile; index: number }) {
  return (
    <ScrollReveal
      as="article"
      delay={index * 35}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100/90 bg-white shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] transition duration-300 hover:border-brand-200/80 hover:shadow-[0_16px_40px_-14px_rgba(124,58,237,0.18)]"
    >
      <div className="relative aspect-[5/4] shrink-0 overflow-hidden bg-ink-100">
        <img
          src={item.imageSrc}
          alt={item.imageAlt}
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
          loading={index < 4 ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-inter text-[17px] font-medium leading-snug tracking-[-0.02em] text-ink-900 sm:text-lg">
          {item.type}
        </h3>
        <p className="font-inter mt-2.5 text-sm font-normal leading-[1.65] text-ink-600 sm:text-[15px]">
          {item.summary}
        </p>
      </div>
    </ScrollReveal>
  );
}

type IndustriesGalleryProps = {
  compact?: boolean;
  showHeading?: boolean;
};

export default function IndustriesGallery({
  compact = false,
  showHeading = true,
}: IndustriesGalleryProps) {
  return (
    <div className={cn(compact ? "mt-8" : "mt-10 sm:mt-12")}>
      {showHeading ? (
        <ScrollReveal className="font-inter mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink-900">
            Built for <span className="text-gradient">businesses like yours</span>
          </h2>
          <p className="mt-4 text-base font-normal leading-relaxed text-ink-600 sm:text-lg">
            Owners across industries use AI-Harness for reviews, leads, and follow-up.
          </p>
        </ScrollReveal>
      ) : null}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
        {INDUSTRY_TILES.map((item, index) => (
          <IndustryCard key={item.type} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
