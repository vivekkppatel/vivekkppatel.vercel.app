import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  date: string;
  link: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "CONDUIT",
    image: "/conduit-preview.png",
    description:
      "Five-pillar composite engine trained on 34+ real hyperscale deployments. Bidirectional LSTM and XGBoost across 16 commodity markets, improving directional accuracy from ~62% to ~76%.",
    tags: ["React", "Supabase", "LSTM", "XGBoost"],
    date: "5/1/26",
    link: "https://conduit-vivek-patel.vercel.app/",
  },
  {
    title: "AI Zoning Agent",
    image: "/zoning-preview.png",
    description:
      "Conversational AI using IBM watsonx.ai and Google APIs to query municipal zoning regulations in natural language, cutting research time by 50–60%.",
    tags: ["IBM watsonx.ai", "RAG", "Python"],
    date: "3/1/26",
    link: "https://zoning-agent-app-web.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          Projects
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-10">
          Things I&apos;ve built at the intersection of AI, finance, and data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isExternal = project.link !== "#";
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
      {/* Image */}
      <div className="relative w-full h-44 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900/40 to-neutral-900 flex items-center justify-center">
            <span className="text-3xl font-bold text-white/10">{project.title[0]}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-snug">
            {project.title}
          </h3>
        </div>

        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-neutral-200 dark:bg-white/10 text-neutral-600 dark:text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {isExternal ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold tracking-widest uppercase transition-all"
          >
            View
          </a>
        ) : (
          <div className="block w-full text-center py-2.5 rounded-lg bg-neutral-200 dark:bg-white/10 text-neutral-400 dark:text-neutral-500 text-sm font-bold tracking-widest uppercase cursor-default">
            Coming Soon
          </div>
        )}
      </div>
    </div>
  );
}
