import {
  Briefcase,
  Building2,
  Car,
  Coffee,
  Monitor,
  Scissors,
  ShoppingBag,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../lib/cn";
import ScrollReveal from "./ScrollReveal";

type IndustryImage = {
  src: string;
  label: string;
  alt: string;
};

type IndustryCardData = {
  type: string;
  summary: string;
  icon: LucideIcon;
  image: IndustryImage;
};

const INDUSTRY_CARDS: IndustryCardData[] = [
  {
    type: "Restaurants & cafes",
    summary:
      "Automatically collects reviews from happy customers and replies to every review using AI.",
    icon: Coffee,
    image: {
      src: "/illustrations/custom/restaurants-cafe-card.png",
      label: "Restaurants & cafes",
      alt: "Stylized lavender coffee cup illustration for restaurants and cafes",
    },
  },
  {
    type: "Home & field services",
    summary:
      "Captures after-hours calls and web leads, sends quotes in minutes, and nudges quiet leads automatically.",
    icon: Wrench,
    image: {
      src: "/illustrations/custom/home-field-services-card.png",
      label: "Home & field services",
      alt: "Stylized purple house and toolbox illustration for home and field services",
    },
  },
  {
    type: "Salons, spas & fitness",
    summary:
      "Books appointments around the clock and asks for a review after each visit.",
    icon: Scissors,
    image: {
      src: "/illustrations/custom/salon-spa-card.png",
      label: "Salons, spas & fitness",
      alt: "Stylized purple salon chair and styling tools illustration",
    },
  },
  {
    type: "Auto repair & dealerships",
    summary:
      "Captures service requests, follows up on estimates, and turns finished jobs into fresh 5-star reviews.",
    icon: Car,
    image: {
      src: "/illustrations/custom/auto-repair-dealerships.png",
      label: "Auto repair & dealerships",
      alt: "Stylized purple auto repair garage with car and wrench emblem",
    },
  },
  {
    type: "Professional & financial services",
    summary:
      "Turns inquiries into same-day proposals and keeps every prospect warm until they are ready to buy.",
    icon: Briefcase,
    image: {
      src: "/illustrations/custom/professional-financial-services.png",
      label: "Professional & financial services",
      alt: "Stylized purple classical bank building with gold accents",
    },
  },
  {
    type: "Retail & e-commerce",
    summary:
      "Answers product questions, recovers quiet leads, and keeps your ratings strong across every channel.",
    icon: ShoppingBag,
    image: {
      src: "/illustrations/custom/retail-ecommerce-card.png",
      label: "Retail & e-commerce",
      alt: "Stylized purple mobile storefront with shopping bags and gift boxes",
    },
  },
  {
    type: "Real estate",
    summary:
      "Responds to listing inquiries in seconds and nurtures buyers until they book a tour.",
    icon: Building2,
    image: {
      src: "/illustrations/custom/real-estate.png",
      label: "Real estate",
      alt: "Stylized purple apartment buildings and location pin illustration",
    },
  },
  {
    type: "IT & technology services",
    summary:
      "Captures project inquiries, follows up fast, and turns scopes into ready-to-send proposals.",
    icon: Monitor,
    image: {
      src: "/illustrations/custom/it-services.png",
      label: "IT & technology services",
      alt: "Stylized purple monitor, servers, and cloud illustration for IT services",
    },
  },
];

function IndustryCard({ item, index }: { item: IndustryCardData; index: number }) {
  const CardIcon = item.icon;

  return (
    <ScrollReveal
      as="article"
      delay={index * 50}
      className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl border-2 border-white/30 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-[border-color,box-shadow] duration-200 hover:border-brand-300 hover:shadow-[0_20px_48px_rgba(124,58,237,0.28)]"
    >
      <div className="p-3 pb-0 sm:p-4 sm:pb-0">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-brand-50 via-[#f7f4ff] to-brand-100/80">
          <img
            src={item.image.src}
            alt={item.image.alt}
            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="px-4 pb-5 pt-4 sm:px-5 sm:pb-6 sm:pt-5">
        <div className="flex items-start gap-3.5">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
            <CardIcon className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h3 className="font-inter pt-1 text-lg font-medium leading-snug tracking-[-0.02em] text-ink-900 sm:text-[1.35rem]">
            {item.type}
          </h3>
        </div>

        <p className="font-inter mt-4 text-base font-normal leading-[1.65] tracking-[-0.01em] text-ink-700 sm:text-[17px]">
          {item.summary}
        </p>
      </div>
    </ScrollReveal>
  );
}

export default function IndustriesGallery({ compact = false }: { compact?: boolean }) {
  return (
    <ScrollReveal>
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl bg-[#000b5e] bg-cover bg-center bg-no-repeat p-3 sm:p-5",
          compact ? "mt-8" : "mt-12",
        )}
        style={{
          backgroundImage: "url('/illustrations/custom/industries-gallery-bg.png')",
        }}
      >
        <div
          className={cn(
            "columns-1 gap-4 [column-gap:1rem]",
            compact ? "sm:columns-2" : "sm:columns-2 lg:columns-3 xl:columns-4",
          )}
        >
          {INDUSTRY_CARDS.map((item, index) => (
            <IndustryCard key={item.type} item={item} index={index} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
