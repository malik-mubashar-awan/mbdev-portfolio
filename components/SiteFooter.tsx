import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Have a good problem?</p>
            <h2 className="max-w-xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl">Let’s build something useful.</h2>
            <p className="mt-4 max-w-lg leading-7 text-muted">Have a product idea, a team that needs another engineer, or a tricky integration to solve? Let’s talk.</p>
            <a href="mailto:hello@example.com" className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink transition hover:bg-lime-200">Email me <ArrowUpRight size={16} /></a>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm text-zinc-300 transition hover:border-white/30 hover:text-white"><Github size={16} /> GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm text-zinc-300 transition hover:border-white/30 hover:text-white"><Linkedin size={16} /> LinkedIn</a>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm text-zinc-300 transition hover:border-white/30 hover:text-white"><Mail size={16} /> Email</a>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Mudassar Hasan. Built with care.</span>
          <a href="#top" className="transition hover:text-zinc-300">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
