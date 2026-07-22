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
    body: "Fill the quiet nights, answer every booking question in moments, and turn a great meal into a five-star review before the table is cleared.",
    eyebrow: "AI-Harness for Restaurants",
    quote:
      "Our managers finally see every review and booking question in one place. The agents draft replies in our voice while we run the floor.",
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
      "New arrivals go live everywhere the same day, and DMs about sizes get answered before the customer walks to another store.",
    quoteAuthor: "Sarah L.",
    quoteCompany: "Northline Boutique, Denver CO",
    integrationCaption: "Syncs catalog, social, and local listings",
    integrationsIn: ["Google", "Facebook", "Instagram", "Shopify"],
    integrationsOut: ["Square", "Lightspeed", "TikTok", "Pinterest"],
    body: "Launch new arrivals across every channel, answer stock questions the second they land, and keep every store detail right wherever customers look.",
  },
  {
    name: "Real Estate",
    tabLabel: "Real Estate",
    image: "/illustrations/custom/home-page-industry-real-estate.png",
    imageAlt: "Agent showing buyers a home interior",
    body: "Reply to every enquiry in minutes, book the viewing, and follow up the buyers still deciding while your reviews keep working between deals.",
    eyebrow: "AI-Harness for Real Estate",
    quote:
      "Leads get a reply in minutes, showings land on the calendar, and our reviews keep working between listings without me living in my inbox.",
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
    body: "Keep the schedule full, cut no-shows with smart reminders, and grow the reviews new patients rely on when choosing care.",
    eyebrow: "AI-Harness for Dental & Medical",
    quote:
      "Reminders cut no-shows, and every Google review gets a thoughtful reply even when we are chair-side all day.",
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
    body: "Catch every missed-call enquiry, get the quote out same day, and chase the invoice so no job and no payment slips.",
    eyebrow: "AI-Harness for Home Services",
    quote:
      "Missed calls turn into booked jobs, quotes go out the same day, and invoices do not sit unpaid because follow-up runs on its own.",
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
    body: "Keep the chairs and rooms full, keep your feed alive with the work that sells, and turn happy regulars into referrals.",
    eyebrow: "AI-Harness for Beauty & Wellness",
    quote:
      "Chairs stay fuller, our feed actually shows the work we do, and happy clients leave reviews without us chasing them.",
    quoteAuthor: "Jessica M.",
    quoteCompany: "Glow Studio Salon, Seattle WA",
    integrationCaption: "Books appointments and grows reviews from every visit",
    integrationsIn: ["Google", "Instagram", "Facebook", "TikTok"],
    integrationsOut: ["Vagaro", "Mindbody", "Square", "Booksy"],
  },
];
