export interface TherapistLocationConfig {
  slug: string;
  location: string;
  therapistType: string;
  primaryResult: string;
  hero: {
    headline: string;
    subheadline: string;
  };
  localRelevance: {
    title: string;
    points: string[];
    stat: { value: string; label: string };
  };
  problems: {
    title: string;
    desc: string;
  }[];
  testimonials: {
    quote: string;
    name: string;
    title: string;
  }[];
}

const baseProblems = (location: string) => [
  {
    title: "Over-relying on referrals",
    desc: `Your practice in ${location} shouldn't depend on other people remembering to mention you. You need a system that brings clients to you consistently.`,
  },
  {
    title: "Invisible online",
    desc: `When potential clients search for a therapist in ${location}, they can't find you. Your competitors are showing up instead.`,
  },
  {
    title: "No easy booking system",
    desc: `Clients in ${location} expect to book online instantly. If they have to call or email, most will find someone easier to reach.`,
  },
  {
    title: "Website doesn't convert",
    desc: `You might have a website, but it's not turning ${location} visitors into booked sessions. It looks generic and doesn't build trust.`,
  },
];

const baseTestimonials = (location: string): TherapistLocationConfig["testimonials"] => [
  {
    quote: `Within two weeks of launching my new website, I got 8 new client inquiries — more than I'd gotten in the previous 3 months combined.`,
    name: "Dr. Amina W.",
    title: `Clinical Psychologist, ${location}`,
  },
  {
    quote: "They understood exactly what I needed. The design feels warm and professional — my clients love it. The booking system alone has saved me hours every week.",
    name: "James K.",
    title: `CBT Therapist, ${location}`,
  },
  {
    quote: "I was skeptical about investing in a website, but the free demo convinced me. Now I'm fully booked and getting new inquiries daily.",
    name: "Sarah M.",
    title: "Marriage & Family Therapist",
  },
];

export const therapistLocations: Record<string, TherapistLocationConfig> = {
  kenya: {
    slug: "kenya",
    location: "Kenya",
    therapistType: "therapist",
    primaryResult: "more client bookings",
    hero: {
      headline: "Get More Client Bookings With a Website That Works for You",
      subheadline:
        "We build conversion-focused websites specifically for therapists in Kenya — designed to attract ideal clients, build trust instantly, and fill your calendar without chasing referrals.",
    },
    localRelevance: {
      title: "Why Therapists in Kenya Need a Strategic Website",
      points: [
        "Over 80% of Kenyans searching for therapy use their smartphones — your site must be mobile-first.",
        "WhatsApp is the preferred communication tool. We integrate it directly into your booking flow.",
        "Mental health awareness is growing rapidly in Kenya. The therapists who show up online first will win.",
        "Local SEO helps you rank for searches like 'therapist in Kenya' or 'counselor near me'.",
      ],
      stat: { value: "80%", label: "of therapy searches in Kenya happen on mobile" },
    },
    problems: baseProblems("Kenya"),
    testimonials: baseTestimonials("Kenya"),
  },
  nairobi: {
    slug: "nairobi",
    location: "Nairobi",
    therapistType: "therapist",
    primaryResult: "more client bookings",
    hero: {
      headline: "Nairobi Therapists: Get More Clients With a Website That Actually Converts",
      subheadline:
        "We build high-converting websites exclusively for therapists in Nairobi — designed to attract ideal clients from across the city and fill your calendar consistently.",
    },
    localRelevance: {
      title: "Why Nairobi Therapists Need a Strategic Online Presence",
      points: [
        "Nairobi is Kenya's most competitive market for therapy services — standing out online is essential.",
        "Clients in Nairobi expect instant WhatsApp communication and easy online booking.",
        "With growing mental health awareness in the city, demand for therapy is surging — but so is competition.",
        "Ranking for 'therapist in Nairobi' or 'psychologist Westlands' can fill your calendar within weeks.",
      ],
      stat: { value: "3x", label: "more therapy searches in Nairobi vs. other Kenyan cities" },
    },
    problems: baseProblems("Nairobi"),
    testimonials: baseTestimonials("Nairobi"),
  },
  kisumu: {
    slug: "kisumu",
    location: "Kisumu",
    therapistType: "therapist",
    primaryResult: "more client bookings",
    hero: {
      headline: "Kisumu Therapists: Fill Your Calendar With a Website Built to Convert",
      subheadline:
        "We create conversion-focused websites for therapists in Kisumu — helping you attract local clients, build instant trust, and grow your practice without relying solely on referrals.",
    },
    localRelevance: {
      title: "Why Therapists in Kisumu Need a Professional Website Now",
      points: [
        "Kisumu's therapy market is growing fast — the first therapists to build an online presence will dominate.",
        "Most Kisumu residents use mobile phones and WhatsApp as their primary tools — your website must meet them there.",
        "There are very few therapist websites optimized for Kisumu — this is your competitive advantage.",
        "Local SEO for terms like 'therapist in Kisumu' has almost no competition right now.",
      ],
      stat: { value: "Low", label: "online competition for therapy services in Kisumu" },
    },
    problems: baseProblems("Kisumu"),
    testimonials: baseTestimonials("Kisumu"),
  },
  mombasa: {
    slug: "mombasa",
    location: "Mombasa",
    therapistType: "therapist",
    primaryResult: "more client bookings",
    hero: {
      headline: "Mombasa Therapists: Get More Clients With a Website That Works 24/7",
      subheadline:
        "We build strategic, conversion-focused websites for therapists in Mombasa — designed to attract clients from the coast, build trust, and keep your schedule full.",
    },
    localRelevance: {
      title: "Why Mombasa Therapists Need to Go Digital Now",
      points: [
        "Mombasa's growing urban population is increasingly searching for mental health support online.",
        "WhatsApp-first communication is standard on the coast — we make it your primary booking channel.",
        "Tourism and expat communities in Mombasa create demand for English-speaking therapists with professional websites.",
        "Ranking for 'therapist Mombasa' or 'counselor near Nyali' can bring consistent leads.",
      ],
      stat: { value: "Growing", label: "demand for therapy services in coastal Kenya" },
    },
    problems: baseProblems("Mombasa"),
    testimonials: baseTestimonials("Mombasa"),
  },
};

export const getLocationConfig = (slug: string): TherapistLocationConfig | undefined =>
  therapistLocations[slug.toLowerCase()];

export const getAllLocationSlugs = (): string[] =>
  Object.keys(therapistLocations);
