"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";

/* ── Role Data ── */
interface Role {
  id: string;
  title: string;
  team: string;
  type: "full-time" | "internship";
  location: string;
  experience: string;
  tagColor: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

const roles: Role[] = [
  {
    id: "sde1-backend",
    title: "SDE 1 — Backend",
    team: "Platform Engineering",
    type: "full-time",
    location: "Remote (India)",
    experience: "1–3 years",
    tagColor: "#6C9CFF",
    summary:
      "Own and ship backend services powering 20fourr's real-time booking engine, compliance modules, and payment pipelines. You'll work with Node.js, TypeScript, MongoDB, and Redis at scale.",
    responsibilities: [
      "Design and implement RESTful APIs and real-time Socket.IO channels for the 20fourr platform",
      "Build and maintain GST/TDS compliance engines that process thousands of invoices daily",
      "Integrate with Razorpay, SMS gateways, and third-party verification APIs (Aadhaar, PSARA)",
      "Write comprehensive unit and integration tests; target >80% coverage on critical paths",
      "Participate in code reviews, architecture discussions, and on-call rotation",
      "Optimize MongoDB queries and Redis caching strategies for sub-100ms response times",
    ],
    requirements: [
      "1–3 years of production experience with Node.js and TypeScript",
      "Strong understanding of REST API design, authentication (JWT), and authorization patterns",
      "Hands-on experience with MongoDB (aggregation pipelines, indexing) and Redis",
      "Familiarity with Docker, CI/CD pipelines, and cloud deployments (AWS preferred)",
      "Solid grasp of data structures, algorithms, and system design fundamentals",
      "Excellent written and verbal communication in English",
    ],
    niceToHave: [
      "Experience with Indian regulatory/financial systems (GST, TDS, PSARA)",
      "Familiarity with Socket.IO or WebSocket-based real-time architectures",
      "Contributions to open-source projects",
      "Experience with monitoring tools (Datadog, Grafana, CloudWatch)",
    ],
  },
  {
    id: "sde1-frontend",
    title: "SDE 1 — Frontend",
    team: "Product Engineering",
    type: "full-time",
    location: "Remote (India)",
    experience: "1–3 years",
    tagColor: "#A78BFA",
    summary:
      "Craft pixel-perfect, performant interfaces that serve both consumers and enterprise admins on the 20fourr platform. You'll work with React, Next.js, and TypeScript to build experiences that handle India's diverse device and network landscape.",
    responsibilities: [
      "Build and iterate on consumer-facing booking flows, dashboards, and admin panels using React & Next.js",
      "Implement responsive, accessible UI components that work across low-end Android devices and modern desktops",
      "Integrate with backend APIs and real-time WebSocket channels for live tracking features",
      "Set up and maintain frontend testing (Jest, React Testing Library) with focus on critical user journeys",
      "Collaborate closely with designers to translate Figma specs into production-quality interfaces",
      "Optimize bundle size, LCP, and FID for users on 3G/4G networks",
    ],
    requirements: [
      "1–3 years of professional experience with React and TypeScript",
      "Proficiency with Next.js (App Router, SSR/SSG, API routes)",
      "Strong CSS skills — comfortable with Flexbox, Grid, responsive design, and animations",
      "Experience integrating with RESTful APIs and managing client-side state",
      "Understanding of web performance, Core Web Vitals, and browser dev tools",
      "Eye for detail and a passion for great user experiences",
    ],
    niceToHave: [
      "Experience building PWAs or hybrid mobile experiences",
      "Familiarity with design systems and component libraries (Radix, Headless UI)",
      "Knowledge of accessibility standards (WCAG 2.1)",
      "Experience with animation libraries (Framer Motion, GSAP)",
    ],
  },
  {
    id: "intern-backend",
    title: "Backend Engineering Intern",
    team: "Platform Engineering",
    type: "internship",
    location: "Remote (India)",
    experience: "0–1 year / Students",
    tagColor: "#34D399",
    summary:
      "Kick-start your engineering career by working on production backend systems. You'll ship real code that powers a compliance-heavy marketplace serving thousands of users across India.",
    responsibilities: [
      "Write and maintain API endpoints under guidance from senior engineers",
      "Help build internal tooling and automation scripts for the engineering team",
      "Assist with database migrations, data cleanup tasks, and query optimization",
      "Write unit tests and contribute to improving overall code coverage",
      "Participate in daily stand-ups, sprint planning, and code reviews",
      "Document APIs and internal processes for the engineering knowledge base",
    ],
    requirements: [
      "Currently pursuing or recently completed a B.Tech/B.E./MCA in Computer Science or related field",
      "Solid fundamentals in at least one backend language (Node.js/Python/Java preferred)",
      "Understanding of HTTP, REST APIs, and basic database concepts (SQL or NoSQL)",
      "Familiarity with Git and version control workflows",
      "Strong problem-solving skills and eagerness to learn",
      "Available for a minimum 3-month commitment",
    ],
    niceToHave: [
      "Personal projects or hackathon experience with backend technologies",
      "Basic understanding of Docker or cloud services",
      "Contributions to open-source projects or active GitHub profile",
      "Interest in fintech, compliance, or Indian regulatory systems",
    ],
  },
  {
    id: "intern-frontend",
    title: "Frontend Engineering Intern",
    team: "Product Engineering",
    type: "internship",
    location: "Remote (India)",
    experience: "0–1 year / Students",
    tagColor: "#F472B6",
    summary:
      "Build real user-facing features from day one. You'll learn to craft production-grade React interfaces while working alongside experienced engineers on a platform used by thousands of customers.",
    responsibilities: [
      "Build UI components and page layouts from Figma designs using React and TypeScript",
      "Assist with bug fixes, UI polish, and responsive design improvements",
      "Write component-level tests using React Testing Library",
      "Help integrate frontend components with backend APIs",
      "Participate in design reviews and provide input on UX improvements",
      "Learn and apply frontend performance optimization techniques",
    ],
    requirements: [
      "Currently pursuing or recently completed a B.Tech/B.E./MCA in Computer Science or related field",
      "Basic proficiency with React (functional components, hooks)",
      "Understanding of HTML, CSS (Flexbox, Grid), and JavaScript fundamentals",
      "Familiarity with Git and collaborative development workflows",
      "Attention to visual detail and a desire to build great interfaces",
      "Available for a minimum 3-month commitment",
    ],
    niceToHave: [
      "Portfolio or personal projects showcasing UI work",
      "Familiarity with TypeScript and Next.js",
      "Understanding of responsive design and mobile-first approaches",
      "Experience with Figma or design tools",
    ],
  },
  {
    id: "bde-fulltime",
    title: "Business Development Executive",
    team: "Growth & Partnerships",
    type: "full-time",
    location: "Remote (India)",
    experience: "1–3 years",
    tagColor: "#F59E0B",
    summary:
      "Drive 20fourr's commercial growth by identifying, qualifying, and closing enterprise clients across India's private security market. You'll own the sales pipeline end-to-end — from outbound prospecting to contract signing.",
    responsibilities: [
      "Identify and qualify B2B leads in the private security, facility management, and enterprise services sectors",
      "Conduct product demos and articulate 20fourr's value proposition to C-suite and operations leaders",
      "Own and manage the full sales cycle: prospecting → discovery → proposal → negotiation → close",
      "Build and maintain a healthy pipeline in the CRM; provide accurate revenue forecasts",
      "Collaborate with Product and Engineering to relay customer feedback and feature requests",
      "Represent Indorse at industry events, trade shows, and security conferences across India",
    ],
    requirements: [
      "1–3 years in B2B sales, business development, or account management (SaaS/marketplace preferred)",
      "Strong consultative selling skills — able to understand complex client needs and map solutions",
      "Excellent communication and presentation skills in English and Hindi",
      "Self-starter mentality; comfortable with outbound prospecting and cold outreach",
      "Familiarity with CRM tools (HubSpot, Salesforce, or equivalent)",
      "Willingness to travel occasionally for client meetings and events",
    ],
    niceToHave: [
      "Experience selling into security, facility management, or compliance-heavy industries",
      "Understanding of PSARA regulations and India's private security landscape",
      "Previous startup or early-stage company experience",
      "Existing network in the enterprise services or security sectors",
    ],
  },
  {
    id: "marketing-fulltime",
    title: "Marketing Executive",
    team: "Brand & Growth",
    type: "full-time",
    location: "Remote (India)",
    experience: "1–3 years",
    tagColor: "#EC4899",
    summary:
      "Own Indorse's brand voice and growth marketing engine. From content strategy and SEO to performance campaigns and social media — you'll shape how thousands of customers and enterprise clients discover 20fourr.",
    responsibilities: [
      "Plan and execute multi-channel marketing campaigns (SEO, SEM, social media, email) to drive user acquisition",
      "Create compelling content — blog posts, case studies, whitepapers, and social media assets",
      "Manage and optimize paid ad campaigns on Google Ads, Meta, and LinkedIn",
      "Track, analyze, and report on campaign performance; own key metrics (CAC, LTV, conversion rates)",
      "Collaborate with the design team on brand collateral, landing pages, and product launch materials",
      "Build and nurture the company's presence on LinkedIn, Twitter/X, and industry forums",
    ],
    requirements: [
      "1–3 years of experience in digital marketing, growth marketing, or content marketing",
      "Proven track record of running successful SEO and paid acquisition campaigns",
      "Strong writing skills — able to produce clear, engaging, and professional content",
      "Hands-on experience with analytics tools (Google Analytics, Search Console, Meta Ads Manager)",
      "Understanding of marketing funnels, A/B testing, and conversion optimization",
      "Self-driven with strong project management skills; comfortable working independently",
    ],
    niceToHave: [
      "Experience marketing B2B SaaS or marketplace products in India",
      "Familiarity with design tools (Figma, Canva) for creating quick assets",
      "Knowledge of marketing automation platforms (Mailchimp, HubSpot)",
      "Experience with video content creation or short-form video marketing",
    ],
  },
  {
    id: "intern-business",
    title: "Business Development Intern",
    team: "Growth & Partnerships",
    type: "internship",
    location: "Remote (India)",
    experience: "0–1 year / Students",
    tagColor: "#FB923C",
    summary:
      "Get hands-on experience in B2B sales and partnerships at an early-stage startup. You'll learn the entire sales process while helping build the commercial foundation for a compliance-grade marketplace.",
    responsibilities: [
      "Research and build targeted prospect lists of potential enterprise clients in the security and FM sectors",
      "Assist with outbound outreach via email, LinkedIn, and phone calls",
      "Help prepare pitch decks, proposals, and client-facing presentations",
      "Maintain and update the CRM with accurate lead information and activity logs",
      "Support senior team members in client meetings and demo calls",
      "Analyze competitor offerings and market trends to inform positioning strategy",
    ],
    requirements: [
      "Currently pursuing or recently completed a degree in Business, Marketing, MBA, or related field",
      "Strong verbal and written communication skills in English and Hindi",
      "Proactive, self-motivated attitude with a hunger to learn sales fundamentals",
      "Basic proficiency with MS Office/Google Workspace (Sheets, Slides, Docs)",
      "Comfortable with cold outreach and speaking to new people",
      "Available for a minimum 3-month commitment",
    ],
    niceToHave: [
      "Previous internship or project experience in sales, BD, or client servicing",
      "Familiarity with CRM tools (HubSpot, Zoho, Salesforce)",
      "Interest in B2B SaaS, marketplaces, or India's service economy",
      "Participation in case competitions, entrepreneurship cells, or startup events",
    ],
  },
  {
    id: "intern-marketing",
    title: "Marketing Intern",
    team: "Brand & Growth",
    type: "internship",
    location: "Remote (India)",
    experience: "0–1 year / Students",
    tagColor: "#E879F9",
    summary:
      "Learn digital marketing by doing — create real campaigns, write real content, and see real metrics move. You'll work alongside the marketing team to grow Indorse's brand and drive user acquisition for 20fourr.",
    responsibilities: [
      "Draft and schedule social media posts across LinkedIn, Twitter/X, and Instagram",
      "Assist with writing blog posts, email newsletters, and product update communications",
      "Help set up and monitor paid ad campaigns on Google and social platforms",
      "Research SEO keywords and help optimize website content for search rankings",
      "Compile weekly/monthly marketing performance reports with key metrics",
      "Support the team in creating visual assets using Canva or similar tools",
    ],
    requirements: [
      "Currently pursuing or recently completed a degree in Marketing, Communications, Business, or related field",
      "Genuine interest in digital marketing, content creation, and social media",
      "Good writing skills in English — clear, concise, and grammatically sound",
      "Basic familiarity with social media platforms and their business features",
      "Eagerness to learn analytics tools and data-driven marketing",
      "Available for a minimum 3-month commitment",
    ],
    niceToHave: [
      "Personal blog, social media account, or content portfolio to showcase",
      "Basic experience with Canva, Figma, or Adobe Creative Suite",
      "Familiarity with Google Analytics, Search Console, or any ads platform",
      "Interest in startups, technology, or India's service/compliance sectors",
    ],
  },
];

const perks = [
  {
    icon: "🏠",
    title: "Remote-First",
    desc: "Work from anywhere in India. We care about output, not office hours.",
  },
  {
    icon: "🚀",
    title: "Ship Real Products",
    desc: "No toy projects — your code powers a live marketplace serving real customers.",
  },
  {
    icon: "📈",
    title: "Growth Path",
    desc: "Clear leveling framework. Interns have converted to full-time engineers.",
  },
  {
    icon: "💰",
    title: "Competitive Pay",
    desc: "Market-rate compensation with equity options for full-time roles.",
  },
  {
    icon: "🧠",
    title: "Learn Fast",
    desc: "Small team, big scope. You'll touch payments, compliance, infra, and UX.",
  },
  {
    icon: "🛡️",
    title: "Impact-Driven",
    desc: "Build software for regulated markets that directly improves worker livelihoods.",
  },
];

/* ── Expandable Role Card ── */
function RoleCard({ role }: { role: Role }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id={`role-${role.id}`}
      style={{
        background: "var(--bg-elevated)",
        border: `1px solid ${expanded ? "var(--border-hover)" : "var(--border)"}`,
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: expanded ? "var(--shadow-md)" : "none",
      }}
    >
      {/* Card Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "28px 32px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "8px",
              flexWrap: "wrap",
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              {role.title}
            </h3>
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                padding: "4px 10px",
                borderRadius: "var(--radius-pill)",
                background:
                  role.type === "full-time"
                    ? "rgba(108, 156, 255, 0.12)"
                    : "rgba(52, 211, 153, 0.12)",
                color: role.type === "full-time" ? "#6C9CFF" : "#34D399",
              }}
            >
              {role.type === "full-time" ? "Full-Time" : "Internship"}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              fontSize: "0.8125rem",
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
              flexWrap: "wrap",
            }}
          >
            <span>{role.team}</span>
            <span>·</span>
            <span>{role.location}</span>
            <span>·</span>
            <span>{role.experience}</span>
          </div>
        </div>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "var(--bg-hover)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "transform 0.3s ease, background 0.3s ease",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="var(--text-secondary)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 6L8 10L12 6" />
          </svg>
        </div>
      </button>

      {/* Expanded Content */}
      <div
        style={{
          maxHeight: expanded ? "2000px" : "0",
          opacity: expanded ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.5s ease, opacity 0.4s ease",
        }}
      >
        <div
          style={{
            padding: "0 32px 32px",
            borderTop: "1px solid var(--border)",
          }}
        >
          {/* Summary */}
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1rem",
              lineHeight: 1.7,
              marginTop: "24px",
              marginBottom: "32px",
            }}
          >
            {role.summary}
          </p>

          {/* Responsibilities */}
          <div style={{ marginBottom: "28px" }}>
            <h4
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: role.tagColor,
                marginBottom: "16px",
              }}
            >
              What You'll Do
            </h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {role.responsibilities.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    color: "var(--text-secondary)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      color: role.tagColor,
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      marginTop: "3px",
                      flexShrink: 0,
                    }}
                  >
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div style={{ marginBottom: "28px" }}>
            <h4
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-primary)",
                marginBottom: "16px",
              }}
            >
              Requirements
            </h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {role.requirements.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    color: "var(--text-secondary)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      color: "var(--accent)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      marginTop: "3px",
                      flexShrink: 0,
                    }}
                  >
                    ✦
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Nice to Have */}
          <div style={{ marginBottom: "28px" }}>
            <h4
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginBottom: "16px",
              }}
            >
              Nice to Have
            </h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {role.niceToHave.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    color: "var(--text-muted)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      marginTop: "3px",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Apply CTA */}
          <a
            href={`mailto:arpitrautela01@indorsetech.com?subject=Application: ${role.title}&body=Hi Indorse team,%0A%0AI'd like to apply for the ${role.title} position.%0A%0AName: %0AResume link: %0AGitHub/Portfolio: %0A%0AThank you!`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              background: role.tagColor,
              color: "#0A0E11",
              fontWeight: 600,
              fontSize: "0.875rem",
              borderRadius: "var(--radius-pill)",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.opacity = "1";
            }}
          >
            Apply for this role
            <span style={{ fontSize: "1rem" }}>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Main Page ── */
export default function Careers() {
  const [filter, setFilter] = useState<"all" | "full-time" | "internship">(
    "all"
  );

  const filteredRoles = roles.filter((r) =>
    filter === "all" ? true : r.type === filter
  );

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "120px", minHeight: "100vh" }}>
      <div className="container">
        {/* ── Hero ── */}
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            marginBottom: "80px",
            textAlign: "center",
          }}
        >
          <div className="section-label">WE&apos;RE HIRING</div>
          <h1 className="section-title" style={{ textAlign: "center" }}>
            Build software that{" "}
            <span className="text-accent">actually matters</span>.
          </h1>
          <p
            className="section-subtitle"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Join a small, high-output engineering team shipping compliance-grade
            software for India&apos;s regulated markets. Real users. Real scale.
            Real impact.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "48px",
              marginTop: "48px",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "8", label: "Open Roles" },
              { value: "100%", label: "Remote" },
              { value: "India", label: "Based" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Why Indorse ── */}
        <div style={{ maxWidth: "900px", margin: "0 auto 80px" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Why Indorse?
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {perks.map((perk) => (
              <div
                key={perk.title}
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px",
                  transition: "border-color 0.3s ease, transform 0.3s ease",
                  cursor: "default",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "12px",
                  }}
                >
                  {perk.icon}
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "6px",
                    fontSize: "0.9375rem",
                  }}
                >
                  {perk.title}
                </div>
                <div
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.8125rem",
                    lineHeight: 1.6,
                  }}
                >
                  {perk.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Open Positions ── */}
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "32px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              Open Positions
            </h2>

            {/* Filter Tabs */}
            <div
              style={{
                display: "flex",
                gap: "4px",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-pill)",
                padding: "4px",
              }}
            >
              {(
                [
                  { key: "all", label: "All" },
                  { key: "full-time", label: "Full-Time" },
                  { key: "internship", label: "Internship" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  style={{
                    padding: "8px 16px",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    border: "none",
                    borderRadius: "var(--radius-pill)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    background:
                      filter === tab.key
                        ? "var(--accent-muted)"
                        : "transparent",
                    color:
                      filter === tab.key
                        ? "var(--accent)"
                        : "var(--text-muted)",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Role Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {filteredRoles.map((role) => (
              <RoleCard key={role.id} role={role} />
            ))}
          </div>

          {/* No results */}
          {filteredRoles.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "64px 24px",
                color: "var(--text-muted)",
              }}
            >
              No open positions in this category right now.
            </div>
          )}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          style={{
            maxWidth: "700px",
            margin: "100px auto 0",
            textAlign: "center",
            padding: "56px 40px",
            background:
              "linear-gradient(135deg, var(--bg-elevated) 0%, var(--bg-secondary) 100%)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle glow */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "300px",
              height: "200px",
              background:
                "radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "12px",
              position: "relative",
            }}
          >
            Don&apos;t see your role?
          </h3>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1rem",
              lineHeight: 1.7,
              marginBottom: "28px",
              position: "relative",
            }}
          >
            We&apos;re always looking for exceptional engineers. Send us your
            resume and tell us what excites you about building for regulated
            Indian markets.
          </p>
          <a
            href="mailto:arpitrautela01@indorsetech.com?subject=Open Application — Indorse Technologies&body=Hi Indorse team,%0A%0AI'm interested in joining your engineering team.%0A%0AName: %0AResume link: %0AGitHub/Portfolio: %0AWhat excites me about Indorse: %0A%0AThank you!"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
              fontWeight: 600,
              fontSize: "0.875rem",
              borderRadius: "var(--radius-pill)",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              position: "relative",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.opacity = "1";
            }}
          >
            Send an open application →
          </a>
        </div>
      </div>
    </div>
  );
}
