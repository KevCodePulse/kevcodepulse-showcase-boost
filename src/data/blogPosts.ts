import blogWebsiteLosing from "@/assets/blog-website-losing.jpg";
import blogDesignKenya from "@/assets/blog-design-kenya.jpg";
import blogSeoRank from "@/assets/blog-seo-rank.jpg";
import blogLandingPage from "@/assets/blog-landing-page.jpg";
import blogSlowWebsite from "@/assets/blog-slow-website.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  content: string[];
}

const posts: BlogPost[] = [
  {
    slug: "website-losing-clients",
    title: "How to Know If Your Website Is Losing Clients",
    excerpt:
      "5 signs your website is costing you business — and what to do about it.",
    date: "Mar 2026",
    author: "Kelvin Munene",
    category: "Business Growth",
    image: blogWebsiteLosing,
    readTime: "5 min read",
    content: [
      "Your website is often the first impression a potential customer gets of your business. If it's outdated, slow, or confusing, visitors leave — and they don't come back.",
      "Here are 5 warning signs your website is silently driving customers away:",
      "## 1. Your bounce rate is above 60%",
      "A high bounce rate means visitors are landing on your site and immediately leaving. This usually happens when the design looks unprofessional, the page loads too slowly, or the content doesn't match what they expected.",
      "## 2. You're not getting inquiries or calls",
      "If your website gets traffic but no one contacts you, your calls-to-action are probably weak or buried. Every page should guide visitors toward a clear next step — whether that's calling, filling out a form, or booking a consultation.",
      "## 3. Your site isn't mobile-friendly",
      "Over 70% of web traffic in Kenya comes from mobile devices. If your website doesn't look and work great on a phone, you're losing the majority of your potential customers.",
      "## 4. It takes more than 3 seconds to load",
      "Speed matters. Studies show that 53% of mobile visitors abandon a site that takes longer than 3 seconds to load. Every second of delay costs you real money.",
      "## 5. Your competitors' websites look better",
      "When a potential customer is comparing options, they'll often choose the business that looks more professional and trustworthy online. If your competitor's site is cleaner, faster, and more modern — they win.",
      "## What You Can Do About It",
      "The good news is that all of these problems are fixable. A professional website redesign focused on speed, clarity, and conversion can transform your online presence and start bringing in real results.",
      "At KevCodePulse, we specialize in building websites that don't just look good — they perform. Every site we build is optimized for speed, mobile experience, and lead generation.",
    ],
  },
  {
    slug: "website-design-practices-kenya",
    title: "Best Website Design Practices for Businesses in Kenya",
    excerpt:
      "What Kenyan businesses need to know about modern web design in 2026.",
    date: "Feb 2026",
    author: "Mary Hadasah",
    category: "Web Design",
    image: blogDesignKenya,
    readTime: "6 min read",
    content: [
      "The digital landscape in Kenya is evolving rapidly. More consumers are searching for products and services online, making your website one of your most important business assets.",
      "Here are the design practices that separate high-performing Kenyan business websites from the rest:",
      "## Mobile-First Design Is Non-Negotiable",
      "With mobile internet usage dominating in Kenya, your website must be designed for phones first, then scaled up for larger screens. This isn't just about responsiveness — it's about optimizing the entire experience for thumb-friendly navigation and fast loading on mobile networks.",
      "## Speed Wins Every Time",
      "Kenyan internet speeds vary widely. Your website needs to load fast even on slower connections. This means optimizing images, minimizing code, and using efficient hosting. Every second of load time you save translates to more visitors staying on your site.",
      "## Clear, Action-Oriented Messaging",
      "Don't make visitors guess what you do. Your headline should immediately communicate your value proposition, and every page should have a clear call-to-action. The best Kenyan business websites make it incredibly easy for visitors to take the next step.",
      "## Local Trust Signals",
      "Include elements that build trust with your local audience — phone numbers with Kenyan dialing codes, physical addresses, M-Pesa payment options, and testimonials from local clients. These details make your business feel accessible and real.",
      "## Professional Photography",
      "Stock photos are fine as placeholders, but nothing beats authentic imagery of your team, office, or products. Kenyan consumers respond better to businesses that feel genuine and relatable.",
      "## SEO for Local Search",
      "Make sure your website is optimized for local search terms. Include location-specific keywords naturally in your content, set up Google My Business, and ensure your NAP (Name, Address, Phone) information is consistent across the web.",
    ],
  },
  {
    slug: "rank-on-google-fast",
    title: "How to Rank on Google Fast",
    excerpt:
      "Proven SEO strategies that help small businesses get found online quickly.",
    date: "Jan 2026",
    author: "Kelvin Munene",
    category: "SEO",
    image: blogSeoRank,
    readTime: "7 min read",
    content: [
      "Ranking on Google doesn't have to take years. While SEO is a long-term strategy, there are proven tactics that can help small businesses see results much faster than they might expect.",
      "## Start With Low-Competition Keywords",
      "Instead of trying to rank for broad terms like 'web design,' target specific long-tail keywords like 'affordable web design in Nairobi' or 'best website designer for clinics in Kenya.' These phrases have less competition and attract visitors who are closer to making a buying decision.",
      "## Optimize Your Google Business Profile",
      "For local businesses, this is the single fastest way to appear in search results. Complete every section of your Google Business Profile, add photos regularly, collect reviews, and post updates. Businesses with optimized profiles appear in the local map pack — the top 3 results shown on Google Maps.",
      "## Create Content That Answers Questions",
      "Google rewards websites that provide genuine value. Write blog posts and pages that answer the questions your potential customers are actually asking. Use tools like Google's 'People Also Ask' feature to find these questions.",
      "## Fix Technical SEO Issues",
      "Technical problems can prevent Google from properly indexing your site. Make sure your site loads fast, is mobile-friendly, has proper meta tags, uses HTTPS, and has a clean URL structure. These foundational elements are essential for ranking.",
      "## Build Quality Backlinks",
      "Links from other reputable websites signal to Google that your content is trustworthy. Focus on getting listed in local directories, partnering with complementary businesses, and creating content that others naturally want to reference.",
      "## Be Consistent",
      "SEO rewards consistency. Publish content regularly, keep your website updated, and continuously optimize based on what's working. Businesses that commit to a consistent SEO strategy see compounding results over time.",
    ],
  },
  {
    slug: "why-business-needs-landing-page",
    title: "Why Your Business Needs a Landing Page",
    excerpt:
      "Landing pages convert 3x better than generic websites. Here's why.",
    date: "Dec 2025",
    author: "David Kim",
    category: "Conversion",
    image: blogLandingPage,
    readTime: "4 min read",
    content: [
      "If you're running ads, promoting a service, or trying to capture leads online, sending traffic to your homepage is one of the biggest mistakes you can make.",
      "## What Is a Landing Page?",
      "A landing page is a standalone web page designed for a single purpose — usually to get a visitor to take one specific action. Unlike your homepage, which serves multiple audiences and purposes, a landing page is laser-focused on conversion.",
      "## Why Landing Pages Convert Better",
      "Landing pages remove distractions. There's no navigation menu pulling visitors in different directions. No competing messages. Just one clear offer, one clear benefit, and one clear call-to-action.",
      "Research shows that landing pages convert at 3-5x the rate of regular website pages. For businesses running paid advertising, this difference can mean the difference between profit and loss.",
      "## When You Need a Landing Page",
      "You should consider a landing page when you're running Google Ads or social media campaigns, launching a new service or product, offering a free consultation or download, promoting a limited-time offer, or trying to build an email list.",
      "## What Makes a Landing Page Effective",
      "The best landing pages share common elements: a compelling headline that matches the ad or link that brought the visitor there, clear benefits (not just features), social proof such as testimonials or results, a strong call-to-action that stands out visually, and minimal distractions.",
      "## The Bottom Line",
      "If you're spending money or effort to drive traffic online, you owe it to your business to send that traffic somewhere designed to convert. A well-built landing page is one of the highest-ROI investments you can make in your digital marketing.",
    ],
  },
  {
    slug: "true-cost-slow-website",
    title: "The True Cost of a Slow Website",
    excerpt:
      "Every second of delay costs you customers. Learn how speed impacts your bottom line.",
    date: "Nov 2025",
    author: "Kelvin Munene",
    category: "Performance",
    image: blogSlowWebsite,
    readTime: "5 min read",
    content: [
      "Website speed isn't a technical detail — it's a business metric. Every second your website takes to load directly impacts your revenue, reputation, and search rankings.",
      "## The Numbers Don't Lie",
      "A 1-second delay in page load time leads to a 7% reduction in conversions. If your website generates KES 100,000 per month, that's KES 7,000 lost every month from just one second of delay. Over a year, that's KES 84,000 — more than enough to pay for a complete website optimization.",
      "## Speed Affects Your Google Rankings",
      "Google has officially confirmed that page speed is a ranking factor. Slow websites get pushed down in search results, meaning fewer people find you. With Google's Core Web Vitals update, speed and user experience metrics are more important than ever for SEO.",
      "## Mobile Users Are Especially Impatient",
      "53% of mobile visitors abandon a website that takes more than 3 seconds to load. In Kenya, where mobile browsing dominates and internet speeds can vary, a fast-loading website isn't a luxury — it's essential.",
      "## Slow Websites Destroy Trust",
      "When a website loads slowly, visitors subconsciously associate that sluggishness with the business itself. If your website feels slow and clunky, potential customers assume your service will be the same. First impressions matter, and your website's speed is part of that impression.",
      "## Common Causes of Slow Websites",
      "The most common culprits include unoptimized images, too many plugins, cheap hosting, bloated code, and no caching. The good news is that most of these issues can be fixed relatively quickly with the right expertise.",
      "## How to Fix It",
      "Start by testing your website speed using Google PageSpeed Insights. If your score is below 80 on mobile, there's significant room for improvement. Optimize your images, enable caching, minimize code, upgrade your hosting, and consider a professional performance audit.",
      "At KevCodePulse, every website we build is optimized for speed from the ground up. We don't just make websites look good — we make them fast.",
    ],
  },
];

export default posts;
