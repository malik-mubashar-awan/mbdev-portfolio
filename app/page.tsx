import { ArrowDown, ArrowUpRight, CheckCircle2, Code2, Layers3, Sparkles, Workflow } from "lucide-react";
import { projects, capabilities, stackGroups } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";

const nav = [
  { label: "Work", href: "#work" },
  { label: "What I do", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function Home() {
  return (
    <main id="top" className="noise relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] grid-bg" />
      <div className="pointer-events-none absolute -top-56 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/[0.055] blur-[120px]" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
        <a href="#top" className="text-sm font-semibold tracking-[0.12em] text-white">MUDASSAR<span className="text-accent">.DEV</span></a>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => <a key={item.label} href={item.href} className="text-sm text-zinc-400 transition hover:text-white">{item.label}</a>)}
        </nav>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:border-accent/60 hover:text-accent">Let’s talk <ArrowUpRight size={14} /></a>
      </header>

      <section className="relative mx-auto grid min-h-[690px] max-w-6xl items-center gap-12 px-5 pb-24 pt-20 sm:px-8 md:grid-cols-[1.25fr_.75fr] lg:px-10 lg:pb-32 lg:pt-24">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" /><span className="relative inline-flex h-2 w-2 rounded-full bg-accent" /></span>
            Full-stack engineer · SaaS builder
          </div>
          <h1 className="max-w-3xl text-5xl font-medium leading-[1.04] tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl">
            I turn complex ideas into <span className="text-zinc-500">software that works.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
            I build reliable web applications, SaaS products, and AI-powered experiences — connecting thoughtful interfaces with solid backend systems.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink transition hover:bg-lime-200">Explore my work <ArrowDown size={15} /></a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-white/35">Get in touch <ArrowUpRight size={15} /></a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.14em] text-zinc-500">
            <span>React / Next.js</span><span>Node.js / NestJS</span><span>PostgreSQL / MongoDB</span>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-[2rem] bg-accent/[0.05] blur-2xl" />
          <div className="relative rounded-2xl border border-white/10 bg-[#101115]/90 p-5 shadow-glow">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div><p className="text-sm font-medium text-white">Building in public</p><p className="mt-1 text-xs text-zinc-500">A little about my process</p></div>
              <span className="rounded-lg border border-white/10 p-2 text-accent"><Code2 size={17} /></span>
            </div>
            <div className="space-y-3 py-5 font-mono text-xs sm:text-sm">
              <p className="text-zinc-600">// product-minded engineering</p>
              <p><span className="text-violet-300">const</span> <span className="text-white">approach</span> = {"{"}</p>
              <p className="pl-4 text-zinc-300">product: <span className="text-accent">"first"</span>,</p>
              <p className="pl-4 text-zinc-300">systems: <span className="text-accent">"thoughtful"</span>,</p>
              <p className="pl-4 text-zinc-300">quality: <span className="text-accent">"non-negotiable"</span></p>
              <p>{"}"}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3"><Layers3 size={16} className="mb-3 text-accent" /><p className="text-sm font-medium text-white">End to end</p><p className="mt-1 text-xs leading-5 text-zinc-500">UI to database</p></div>
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3"><Workflow size={16} className="mb-3 text-accent" /><p className="text-sm font-medium text-white">Built to scale</p><p className="mt-1 text-xs leading-5 text-zinc-500">Systems that last</p></div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-panel px-4 py-3 shadow-xl sm:block"><div className="flex items-center gap-2 text-xs text-zinc-300"><CheckCircle2 size={14} className="text-accent" /> Product-minded. Detail-driven.</div></div>
        </Reveal>
      </section>

      <div className="relative border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-7 sm:px-8 md:grid-cols-4 lg:px-10">
          {[
            ["Product thinking", "Not just features"],
            ["Full-stack delivery", "Frontend to backend"],
            ["SaaS foundations", "Auth, billing, data"],
            ["Practical engineering", "Maintainable systems"]
          ].map(([title, subtitle]) => <div key={title}><p className="text-sm font-medium text-zinc-200">{title}</p><p className="mt-1 text-xs text-zinc-500">{subtitle}</p></div>)}
        </div>
      </div>

      <section id="work" className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <Reveal><SectionHeading eyebrow="Selected work" title="Real products. Thoughtful engineering." description="A few examples of the products and platforms I've helped build. Each project is an opportunity to solve a real problem with clean, dependable software." /></Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => <Reveal key={project.number} delay={index * 0.08} className={index === 0 ? "lg:col-span-2" : ""}><ProjectCard project={project} /></Reveal>)}
        </div>
        <p className="mt-5 text-xs leading-5 text-zinc-600">Project descriptions are starting copy. Review each detail, contribution, and link before publishing.</p>
      </section>

      <section id="services" className="scroll-mt-20 border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
          <Reveal><SectionHeading eyebrow="What I bring" title="More than shipping components." description="I like working across the product lifecycle: understanding the problem, choosing a practical approach, and delivering something people can rely on." /></Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability, index) => <Reveal key={capability.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-panel p-6 transition hover:border-white/20 sm:p-7">
                <span className="mb-6 inline-flex rounded-xl border border-white/10 bg-white/[0.03] p-3 text-accent"><Sparkles size={18} /></span>
                <h3 className="text-lg font-medium text-white">{capability.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{capability.description}</p>
              </div>
            </Reveal>)}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-32">
        <Reveal><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">A bit about me</p><h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">An engineer who cares about the whole product.</h2></div></Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>I’m a full-stack developer focused on building web products that are useful, reliable, and pleasant to use. My work spans frontend experiences, backend APIs, databases, third-party integrations, and SaaS functionality.</p>
            <p>I enjoy the problems that sit between product and engineering: turning an unclear requirement into a clear flow, making integrations dependable, and helping data become useful to the people who need it.</p>
            <p className="text-zinc-300">I work best with teams and clients who value clear communication, thoughtful trade-offs, and software built for the long term.</p>
          </div>
          <div className="mt-8 space-y-5">
            {stackGroups.map((group) => <div key={group.label} className="grid gap-3 border-t border-line pt-4 sm:grid-cols-[150px_1fr]">
              <p className="text-sm text-zinc-400">{group.label}</p>
              <div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-md bg-white/[0.04] px-2.5 py-1.5 text-xs text-zinc-300">{item}</span>)}</div>
            </div>)}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-panel p-8 sm:p-12">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-accent/[0.07] blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Open to good opportunities</p>
              <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">Need an engineer who can see the bigger picture?</h2>
              <p className="mt-4 leading-7 text-muted">I’m interested in meaningful freelance projects and teams building thoughtful software. If there’s a fit, I’d love to hear what you’re working on.</p>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-accent hover:text-accent">Start a conversation <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </Reveal>
      </section>
      <SiteFooter />
    </main>
  );
}
