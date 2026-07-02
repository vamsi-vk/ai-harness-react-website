import { cn } from "../lib/cn";
import ScrollReveal from "./ScrollReveal";
import { INDUSTRY_IMAGES } from "../data/industryImages";const INDUSTRY_CARDS = [
  {
    type: "Restaurants & cafes",
    detail:
      "The Automated Review Agent invites every happy diner to leave a review, and the Reputation & Sentiment Agent replies to each one in your voice.",
    image: INDUSTRY_IMAGES[0],
    size: "h-72 sm:h-80",
  },
  {
    type: "Home & field services",
    detail:
      "The Sales Pipeline & CRM Agent captures after-hours calls and web leads, sends quotes in minutes, and nudges quiet leads.",
    image: INDUSTRY_IMAGES[4],
    size: "h-52 sm:h-60",
  },
  {
    type: "Salons, spas & fitness",
    detail:
      "The Sales Pipeline & CRM Agent books appointments around the clock, and the Automated Review Agent asks for a review after each visit.",
    image: INDUSTRY_IMAGES[2],
    size: "h-64 sm:h-72",
  },
  {
    type: "Auto repair & dealerships",
    detail:
      "The Sales Pipeline & CRM Agent captures service requests and follows up on estimates, while the Automated Review Agent turns finished jobs into fresh 5-star reviews.",
    image: {
      src: "/illustrations/custom/auto-repair-dealerships.png",
      label: "Auto repair & dealerships",
      alt: "Auto repair shop team serving customers and working on vehicles in a professional garage",
    },
    size: "h-80 sm:h-[22rem]",
  },
  {
    type: "Professional & financial services",
    detail:
      "The Proposal Drafting Agent turns inquiries into same-day proposals and the Sales Pipeline & CRM Agent keeps every prospect warm.",
    image: {
      src: "/illustrations/custom/professional-financial-services.png",
      label: "Professional & financial services",
      alt: "Financial professionals reviewing business data and growth metrics in a modern office",
    },
    size: "h-48 sm:h-52",
  },
  {
    type: "Retail & e-commerce",
    detail:
      "The Sales Pipeline & CRM Agent answers product questions and recovers quiet leads, and the Reputation & Sentiment Agent keeps your ratings strong.",
    image: INDUSTRY_IMAGES[1],
    size: "h-56 sm:h-64",
  },
  {
    type: "Real estate",
    detail:
      "The Sales Pipeline & CRM Agent responds to listing inquiries in seconds and nurtures buyers until they tour.",
    image: {
      src: "/illustrations/custom/real-estate.png",
      label: "Real estate",
      alt: "Real estate professional presenting a modern home model",
    },
    size: "h-60 sm:h-[17rem]",
  },
  {
    type: "IT & technology services",
    detail:
      "The Sales Pipeline & CRM Agent captures project inquiries and follows up fast, and the Proposal Drafting Agent turns scopes into ready-to-send proposals.",
    image: {
      src: "/illustrations/custom/it-services.png",
      label: "IT & technology services",
      alt: "IT services team delivering cloud, software, cybersecurity, and consulting solutions",
    },
    size: "h-64 sm:h-72",
  },
] as const;

type IndustryCard = (typeof INDUSTRY_CARDS)[number];

function IndustryCard({ item, index }: { item: IndustryCard; index: number }) {
  return (
    <ScrollReveal
      as="article"
      delay={index * 50}
      className="group mb-3 break-inside-avoid overflow-hidden rounded-xl border border-ink-200/70 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow] duration-200 hover:border-brand-300 hover:shadow-[0_12px_32px_rgba(124,58,237,0.12)]"
    >      <div className={cn("relative w-full overflow-hidden", item.size)}>
        <img
          src={item.image.src}
          alt={item.image.alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-brand-950/0 transition duration-300 group-hover:bg-brand-950/10" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/85 via-ink-900/35 to-transparent px-3 pb-3 pt-12">
          <p className="text-sm font-semibold text-white">{item.type}</p>
        </div>
      </div>
      <p className="border-t border-ink-100 bg-white px-3 py-3 text-xs leading-relaxed text-ink-600">
        {item.detail}
      </p>
    </ScrollReveal>
  );
}
export default function IndustriesGallery() {
  return (
    <ScrollReveal>
      <div
        className="relative mt-12 overflow-hidden rounded-3xl bg-[#000b5e] bg-cover bg-center bg-no-repeat p-3 sm:p-5"
        style={{
          backgroundImage: "url('/illustrations/custom/industries-gallery-bg.png')",
        }}
      >
        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 [column-gap:0.875rem]">
          {INDUSTRY_CARDS.map((item, index) => (
            <IndustryCard key={item.type} item={item} index={index} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}