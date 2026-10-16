import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "@/data/projects";

const accentMap = {
  lime: "from-lime-300/20 via-lime-300/5",
  violet: "from-violet-400/20 via-violet-400/5",
  orange: "from-orange-300/20 via-orange-300/5"
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-panel transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <div className={`relative flex min-h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${accentMap[project.accent]} to-transparent p-6`}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative w-full max-w-sm rounded-xl border border-white/10 bg-[#0B0C0F]/90 p-4 shadow-2xl transition duration-500 group-hover:scale-[1.02]">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-xs text-zinc-400">{project.name}</span>
            </div>
            <Code2 size={15} className="text-zinc-500" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Overview", "Performance", "Reports"].map((label, index) => (
              <div key={label} className="rounded-lg border border-white/[0.07] bg-white/[0.025] p-2">
                <div className="mb-3 h-1.5 w-10 rounded bg-white/10" />
                <div className={`text-sm font-medium ${index === 0 ? "text-accent" : "text-zinc-300"}`}>{["Live", "Data", "12+"][index]}</div>
                <div className="mt-1 text-[10px] text-zinc-600">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-12 items-end gap-1.5 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 pt-2">
            {[35, 55, 42, 76, 50, 88, 65, 100, 72, 90, 58, 80].map((height, i) => (
              <div key={i} className="flex-1 rounded-t-sm bg-accent/70" style={{ height: `${height}%`, opacity: 0.35 + (i / 20) }} />
            ))}
          </div>
        </div>
        <span className="absolute left-5 top-5 text-xs tracking-widest text-white/45">{project.number} / SELECTED WORK</span>
      </div>
      <div className="p-6 sm:p-7">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">{project.category}</p>
            <h3 className="text-xl font-medium tracking-tight text-white">{project.name}</h3>
          </div>
          {project.href && (
            <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`} className="rounded-full border border-line p-2 text-zinc-400 transition hover:border-accent hover:text-accent">
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
        <p className="leading-7 text-muted">{project.description}</p>
        <p className="mt-3 text-sm leading-6 text-zinc-400"><span className="text-zinc-200">Focus:</span> {project.contribution}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => <span key={item} className="rounded-full border border-white/[0.08] px-2.5 py-1 text-xs text-zinc-400">{item}</span>)}
        </div>
      </div>
    </article>
  );
}
