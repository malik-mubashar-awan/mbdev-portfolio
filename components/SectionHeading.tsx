type Props = { eyebrow: string; title: string; description?: string; };

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 max-w-xl text-base leading-7 text-muted">{description}</p>}
    </div>
  );
}
