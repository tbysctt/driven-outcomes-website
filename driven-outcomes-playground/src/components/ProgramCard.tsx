import { Link } from "react-router-dom";
import type { Program } from "../data/programs";

export interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article
      className={`group rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 sm:p-7 md:p-8 border-primary-brand-200/80 hover:border-primary-brand-300 hover:shadow-lg`}
    >
      <div className="flex flex-wrap items-center gap-2 sm:mb-4">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary-brand-100 text-primary-brand-700`}
        >
          {program.provider}
        </span>
        {program.isNew && (
          <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-highlight-100 text-highlight-700">
            New
          </span>
        )}
        {program.isTrending && (
          <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-secondary-brand-100 text-secondary-brand-700">
            Trending
          </span>
        )}
      </div>
      <div className="mb-3">
        <Link
          className="text-xl font-bold tracking-tight text-primary-brand-700 sm:mb-4 sm:text-2xl"
          to={`/programs/${program.slug}`}
        >
          {program.name}
        </Link>
      </div>
      <p className="mb-5 text-sm leading-relaxed text-neutral-600 sm:mb-6 sm:text-base">
        {program.description}
      </p>
      <div className="mb-6 flex flex-wrap gap-2 sm:mb-7">
        {program.focusedSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
          >
            {skill}
          </span>
        ))}
      </div>
      <Link
        to={`/programs/${program.slug}`}
        className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors text-primary-brand-600 hover:text-primary-brand-800`}
      >
        Learn more
        <span
          aria-hidden
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </Link>
    </article>
  );
}
