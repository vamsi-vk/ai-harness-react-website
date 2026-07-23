export type HomeIndustrySlide = {
  name: string;
  tabLabel: string;
  image: string;
  imageAlt: string;
  body: string;
  eyebrow: string;
  quote: string;
  quoteAuthor: string;
  quoteCompany: string;
  integrationCaption: string;
  integrationsIn: string[];
  integrationsOut: string[];
};

export const HOME_INDUSTRY_SLIDES: HomeIndustrySlide[] = [
  {
    name: "Restaurants",
    tabLabel: "Restaurants",
    image: "/illustrations/custom/home-page-industry-restaurants.png",
    imageAlt: "Restaurant team serving guests in a US dining room",
    body: "Get found by hungry diners searching nearby, keep your social full of tonight’s specials, and turn a great meal into a five-star review before the table is cleared.",
    eyebrow: "AI-Harness for Restaurants",
    quote:
      "Hungry diners find us nearby, tonight’s specials stay on social, and a great meal turns into a five-star review before the table is cleared.",
    quoteAuthor: "Mike R.",
    quoteCompany: "Corner Table Bistro, Austin TX",
    integrationCaption: "Pulls from your POS, reservations, and delivery platforms",
    integrationsIn: ["Google", "Yelp", "Instagram", "OpenTable"],
    integrationsOut: ["Toast", "Square", "DoorDash", "Meta"],
  },
  {
    name: "Retail",
    tabLabel: "Retail",
    image: "/illustrations/custom/home-page-industry-retail.png",
    imageAlt: "Boutique owner helping a customer shop",
    eyebrow: "AI-Harness for Retail",
    quote:
      "We show up first when shoppers search, new arrivals launch across every channel, and every store detail and review works wherever customers look.",
    quoteAuthor: "Sarah L.",
    quoteCompany: "Northline Boutique, Denver CO",
    integrationCaption: "Syncs catalog, social, and local listings",
    integrationsIn: ["Google", "Facebook", "Instagram", "Shopify"],
    integrationsOut: ["Square", "Lightspeed", "TikTok", "Pinterest"],
    body: "Show up first when shoppers search, launch new arrivals across every channel, and keep every store detail and review working wherever customers look.",
  },
  {
    name: "Real Estate",
    tabLabel: "Real Estate",
    image: "/illustrations/custom/home-page-industry-real-estate.png",
    imageAlt: "Agent showing buyers a home interior",
    body: "Get found in local search, keep your feed and profiles active, and let a steady stream of five-star reviews keep working for you between deals.",
    eyebrow: "AI-Harness for Real Estate",
    quote:
      "We get found in local search, the feed and profiles stay active, and five-star reviews keep working for us between deals.",
    quoteAuthor: "James & Elena K.",
    quoteCompany: "Keystone Realty Group, Phoenix AZ",
    integrationCaption: "Connects CRM, listings, and reputation in one flow",
    integrationsIn: ["Zillow", "Google", "Realtor.com", "Facebook"],
    integrationsOut: ["Follow Up Boss", "HubSpot", "Calendly", "DocuSign"],
  },
  {
    name: "Dental & Medical",
    tabLabel: "Dental",
    image: "/illustrations/custom/home-page-industry-dental.png",
    imageAlt: "Dentist speaking with a patient in a modern clinic",
    body: "Be the practice new patients find first, keep your profiles accurate everywhere, and grow the reviews patients rely on when choosing care.",
    eyebrow: "AI-Harness for Dental & Medical",
    quote:
      "New patients find us first, profiles stay accurate everywhere, and the reviews patients rely on keep growing.",
    quoteAuthor: "Dr. Amy Chen",
    quoteCompany: "Bright Smile Dental, Columbus OH",
    integrationCaption: "Works with your practice systems and patient outreach",
    integrationsIn: ["Google", "Healthgrades", "Facebook", "Website"],
    integrationsOut: ["Dentrix", "Open Dental", "Twilio", "NexHealth"],
  },
  {
    name: "Home & Professional Services",
    tabLabel: "Home Services",
    image: "/illustrations/custom/home-page-industry-home-services.png",
    imageAlt: "Field technician meeting a homeowner at the door",
    body: "Get found the moment someone searches, stay visible across every map, and turn finished jobs into the reviews that win the next one.",
    eyebrow: "AI-Harness for Home Services",
    quote:
      "We get found the moment someone searches, stay visible across every map, and finished jobs turn into the reviews that win the next one.",
    quoteAuthor: "Tom W.",
    quoteCompany: "Summit HVAC & Electric, Nashville TN",
    integrationCaption: "Ties field tools, payments, and reviews together",
    integrationsIn: ["Google", "Yelp", "Angi", "Facebook"],
    integrationsOut: ["ServiceTitan", "Jobber", "QuickBooks", "Stripe"],
  },
  {
    name: "Beauty & Wellness",
    tabLabel: "Beauty",
    image: "/illustrations/custom/home-page-industry-beauty.png",
    imageAlt: "Stylist with a client in a bright salon",
    body: "Fill your feed with the work that sells, get found by locals searching nearby, and turn happy regulars into a steady stream of glowing reviews.",
    eyebrow: "AI-Harness for Beauty & Wellness",
    quote:
      "Our feed shows the work that sells, locals find us nearby, and happy regulars leave a steady stream of glowing reviews.",
    quoteAuthor: "Jessica M.",
    quoteCompany: "Glow Studio Salon, Seattle WA",
    integrationCaption: "Books appointments and grows reviews from every visit",
    integrationsIn: ["Google", "Instagram", "Facebook", "TikTok"],
    integrationsOut: ["Vagaro", "Mindbody", "Square", "Booksy"],
  },
];
