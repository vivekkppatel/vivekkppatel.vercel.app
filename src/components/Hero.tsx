import { ArrowDown, FileText } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-14"
    >
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-8">

          {/* Photo */}
          <div className="shrink-0 w-64 h-64 sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border-4 border-neutral-200 dark:border-neutral-700 shadow-xl relative -ml-0 sm:-ml-16">
            <Image
              src="/profile-auto.jpeg"
              alt="Vivek Patel"
              fill
              className="object-cover"
              style={{ objectPosition: "center 12%" }}
              priority
            />
          </div>

          {/* Text */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4 tracking-wide uppercase">
              Hello, world —
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-neutral-900 dark:text-white leading-tight tracking-tight mb-5">
              I&apos;m Vivek Patel
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
              Fintech &amp; Big Data Analytics @ Virginia Tech
            </p>
            <p className="text-base text-neutral-500 dark:text-neutral-500 max-w-xl leading-relaxed mb-8">
              Dual B.S. in Fintech and Big Data Analytics (Quantitative
              Finance) and Finance (Investment Management &amp; CFA) at Virginia
              Tech&apos;s Pamplin College of Business, with minors in Artificial
              Intelligence and Statistics. I build AI systems, data pipelines,
              and full-stack applications at the intersection of finance and
              technology.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
              >
                See My Projects
                <ArrowDown size={15} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
              >
                View Resume
                <FileText size={15} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
