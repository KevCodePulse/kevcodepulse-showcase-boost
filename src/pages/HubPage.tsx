import React from "react";
import { useParams } from "react-router-dom";
import { nicheHubs, locationHubs } from "../data/hubPages";

export default function HubPage() {
  const { slug } = useParams();

  const page =
    nicheHubs.find((p) => p.slug === slug) ||
    locationHubs.find((p) => p.slug === slug);

  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      {/* HERO */}
      <h1>{page.headline}</h1>
      <p>{page.description}</p>

      <button>Get Free Consultation</button>

      {/* TYPE BADGE */}
      <p style={{ opacity: 0.6 }}>
        {page.type === "niche" ? "Industry Hub" : "Location Hub"}
      </p>

      {/* CONTEXT SECTION */}
      <section>
        <h2>Overview</h2>
        <p>
          {page.type === "niche"
            ? "We specialize in this industry and build websites tailored for conversions and trust."
            : "We provide local web design services focused on businesses in this area."}
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section>
        <h2>Related Pages</h2>
        <ul>
          {page.internalLinks.map((link, i) => (
            <li key={i}>
              <a href={link}>{link}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
