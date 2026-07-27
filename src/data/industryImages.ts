export const INDUSTRY_IMAGES = [
  {
    src: "/illustrations/custom/hero-cafe.png",
    label: "Restaurants & cafes",
    alt: "Barista serving coffee in a local cafe",
  },
  {
    src: "/illustrations/custom/hero-retail.png",
    label: "Retail & boutiques",
    alt: "Retail associate helping a customer in a clothing boutique",
  },
  {
    src: "/illustrations/custom/hero-salon.png",
    label: "Salons & spas",
    alt: "Stylist working with a client in a hair salon",
  },
  {
    src: "/illustrations/custom/hero-dental.png",
    label: "Healthcare practices",
    alt: "Dental team providing care to a patient",
  },
  {
    src: "/illustrations/custom/hero-construction.png",
    label: "Home & field services",
    alt: "Construction professionals reviewing plans on site",
  },
  {
    src: "/illustrations/custom/hero-office.png",
    label: "Professional services",
    alt: "Business team collaborating in a modern office",
  },
] as const;

/** Hero carousel on /ai-agents — Home & field services leads. */
export const HERO_GALLERY_IMAGES = [
  INDUSTRY_IMAGES[4],
  INDUSTRY_IMAGES[0],
  INDUSTRY_IMAGES[1],
  INDUSTRY_IMAGES[2],
  INDUSTRY_IMAGES[3],
  INDUSTRY_IMAGES[5],
] as const;
