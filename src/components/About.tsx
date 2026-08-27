function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  link?: string;
}

const experiences: Experience[] = [
  {
    role: "Accounting Intern",
    company: "Chirag Patel CPA PLLC",
    period: "May 2026 – Jul 2026",
    description:
      "Prepared individual and corporate tax returns alongside the lead CPA — 10+ filings including S-corp, partnership, and 1040 extensions, identifying $100K+ in deductions across the client base. Ran variance analysis on client cash flows to support data-driven wealth management strategies.",
  },
  {
    role: "Self-Taught College Barber",
    company: "Entrepreneurial Venture",
    period: "Dec 2024 – Present",
    description:
      "Built a recurring client base of 85–90, averaging 10–15 cuts a week while handling scheduling, pricing, and relationships. Grew ~30% through referrals and social media with no paid ads — $15,000+ in revenue and clients retained 18+ months.",
    link: "https://www.instagram.com/vivblendz.va",
  },
  {
    role: "Co-founder",
    company: "Arcanium Labs",
    period: "Aug 2024 – May 2025",
    description:
      "Co-founded an AI startup automating construction cost estimating; raised $800K and earned admission to Microsoft for Startups with $350K in Azure credits. Led the engineering team behind the estimating agents, then returned all capital to investors to attend college full-time.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          About
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-10">
          Background and experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              Dual-degree student at{" "}
              <span className="font-medium text-neutral-900 dark:text-white">
                Virginia Tech
              </span>
              &apos;s Pamplin College of Business (Class of 2028), studying
              Fintech &amp; Big Data Analytics (Quantitative Finance) and Finance
              (Investment Management &amp; CFA), with minors in Artificial
              Intelligence and Statistics.
            </p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              I build AI systems and quantitative finance applications.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
              Outside of work: tennis, sports analytics, cooking Indian food,
              DaVinci Resolve editing, RnB music, and hiking.
            </p>
            <div className="space-y-1">
              <p className="text-xs text-neutral-400 dark:text-neutral-500 font-medium uppercase tracking-widest mb-2">
                Certifications
              </p>
              {[
                "Bloomberg Market Concepts",
                "Claude Education (Anthropic)",
                "JPMorgan IB Forage Simulation",
                "HackerRank SQL",
              ].map((cert) => (
                <p
                  key={cert}
                  className="text-xs text-neutral-600 dark:text-neutral-400"
                >
                  · {cert}
                </p>
              ))}
            </div>
            <div className="space-y-1 mt-6">
              <p className="text-xs text-neutral-400 dark:text-neutral-500 font-medium uppercase tracking-widest mb-2">
                Languages
              </p>
              {["English", "Gujarati", "Hindi"].map((lang) => (
                <p
                  key={lang}
                  className="text-xs text-neutral-600 dark:text-neutral-400"
                >
                  · {lang}
                </p>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            {experiences.map((exp) => (
              <ExperienceItem key={`${exp.role}-${exp.company}`} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp }: { exp: Experience }) {
  return (
    <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-4">
      <div className="flex items-baseline justify-between gap-2 mb-1">
        <div>
          <span className="text-sm font-semibold text-neutral-900 dark:text-white">
            {exp.role}
          </span>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {" "}
            — {exp.company}
          </span>
        </div>
        <span className="text-xs text-neutral-400 dark:text-neutral-500 shrink-0">
          {exp.period}
        </span>
      </div>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
        {exp.description}
      </p>
      {exp.link && (
        <a
          href={exp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-2 text-xs text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors"
        >
          <InstagramIcon />
          @vivblendz.va
        </a>
      )}
    </div>
  );
}
