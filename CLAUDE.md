# mbdev-portfolio

Mubashar's personal portfolio: Next.js 15 (App Router) + TypeScript + Tailwind CSS 3 + Framer Motion + Lucide icons. Content lives in `data/projects.ts`, `app/page.tsx`, `components/SiteFooter.tsx`; metadata in `app/layout.tsx`. Started from a downloaded "premium dark portfolio" template, so the repo stays private.

## Hosting
- Live target: https://mbdev.site, deployed with Coolify (https://coolify.mbdev.site) on Mubashar's personal VPS.
- Server: SSH alias `personal-vps` (root, key `~/.ssh/personal_vps`). Ubuntu 24.04, key-only SSH, ufw allows 22/80/443.
- DNS at Namecheap: `A @` and `A *` point to the VPS, so any `*.mbdev.site` subdomain works without DNS changes.
- Coolify admin credentials are never stored in this repo.

## GitHub
- Repo: `malik-mubashar-awan/mbdev-portfolio`, pushed over SSH via the `github-mubashar` alias (key `~/.ssh/github_mubashar`).
- On this laptop, `gh` and plain `git@github.com` are logged in as Abaid's account (`abaidullahhu-boop`). Never use them for this repo.

## Laptop context
This laptop belongs to Abaid, Mubashar's lead. Keep personal projects away from the work servers (`prod-be`, `staging`) and Abaid's GitHub.
