"use client";

import {
  SiPython,
  SiJavascript,
  SiReact,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiPlotly,
  SiR,
} from "react-icons/si";
import { FaJava, FaFileExcel, FaDatabase } from "react-icons/fa";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  Icon: IconType;
  color: string;
}

interface CustomSkill {
  name: string;
  svg: React.ReactNode;
}

const languages: Skill[] = [
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Java", Icon: FaJava, color: "#ED8B00" },
  { name: "SQL", Icon: FaDatabase, color: "#4479A1" },
  { name: "R", Icon: SiR, color: "#276DC3" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
];

const frameworks: Skill[] = [
  { name: "pandas", Icon: SiPandas, color: "#150458" },
  { name: "NumPy", Icon: SiNumpy, color: "#4DABCF" },
  { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
  { name: "Plotly", Icon: SiPlotly, color: "#8292b5" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
];

const dataTools: CustomSkill[] = [
  {
    name: "Excel",
    svg: (
      <FaFileExcel size={48} color="#217346" />
    ),
  },
  {
    name: "Tableau",
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="21" y="4" width="6" height="40" rx="2" fill="#E8762D" />
        <rect x="4" y="21" width="40" height="6" rx="2" fill="#E8762D" />
        <rect x="14" y="11" width="4" height="26" rx="1.5" fill="#4E79A7" />
        <rect x="30" y="11" width="4" height="26" rx="1.5" fill="#4E79A7" />
        <rect x="11" y="14" width="26" height="4" rx="1.5" fill="#4E79A7" />
        <rect x="11" y="30" width="26" height="4" rx="1.5" fill="#4E79A7" />
        <circle cx="24" cy="24" r="4" fill="#59A14F" />
      </svg>
    ),
  },
  {
    name: "Power BI",
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="28" width="8" height="14" rx="2" fill="#F2C811" />
        <rect x="17" y="20" width="8" height="22" rx="2" fill="#F2C811" opacity="0.85" />
        <rect x="28" y="12" width="8" height="30" rx="2" fill="#F2C811" opacity="0.7" />
        <rect x="39" y="6" width="8" height="36" rx="2" fill="#F2C811" opacity="0.55" />
        <circle cx="10" cy="10" r="6" fill="#F2C811" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: "Bloomberg",
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="6" fill="#000000" />
        <text
          x="24"
          y="32"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="26"
          fontWeight="700"
          fill="#FF6600"
        >
          B
        </text>
      </svg>
    ),
  },
];

const methods: string[] = [
  "Financial Modeling",
  "Time Series Analysis",
  "Machine Learning",
  "Statistical Modeling",
  "Risk Analysis",
  "Data Visualization",
  "hmmlearn",
  "yfinance",
];

function SkillIcon({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-default">
      <skill.Icon size={48} color={skill.color} />
      <span className="text-xs text-neutral-600 dark:text-neutral-300 text-center leading-tight">
        {skill.name}
      </span>
    </div>
  );
}

function CustomSkillIcon({ skill }: { skill: CustomSkill }) {
  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-default">
      {skill.svg}
      <span className="text-xs text-neutral-600 dark:text-neutral-300 text-center leading-tight">
        {skill.name}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          Skills
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-10">
          Technologies and tools I work with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {/* Languages */}
          <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6">
            <h3 className="text-base font-bold text-neutral-900 dark:text-white text-center mb-6">
              Languages
            </h3>
            <div className="grid grid-cols-2 gap-1">
              {languages.map((skill) => (
                <SkillIcon key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6">
            <h3 className="text-base font-bold text-neutral-900 dark:text-white text-center mb-6">
              Frameworks &amp; Libraries
            </h3>
            <div className="grid grid-cols-3 gap-1">
              {frameworks.map((skill) => (
                <SkillIcon key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Data Tools — Excel, Tableau, Power BI */}
        <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 mb-5">
          <h3 className="text-base font-bold text-neutral-900 dark:text-white text-center mb-6">
            Data Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 max-w-md mx-auto">
            {dataTools.map((skill) => (
              <CustomSkillIcon key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Methods — text pills */}
        <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6">
          <h3 className="text-base font-bold text-neutral-900 dark:text-white text-center mb-5">
            Methods
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {methods.map((m) => (
              <span
                key={m}
                className="text-sm px-3 py-1.5 rounded-full border border-neutral-300 dark:border-white/10 text-neutral-600 dark:text-neutral-300 bg-neutral-200/60 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors cursor-default"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
