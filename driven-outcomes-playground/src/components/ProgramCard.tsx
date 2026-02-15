import { Link } from "react-router-dom";
import type { Program } from "../data/programs";
import { formatYearLevels } from "../utils/formatYearLevels";

export interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const yearLevelsDisplay = formatYearLevels(program.yearLevels);

  return (
    <Link to={`/programs/${program.slug}`}>
      <article
        className={`group rounded-xl border bg-white transition-all duration-200 border-primary-brand-200/80 hover:border-primary-brand-300 overflow-hidden`}
      >
        {program.imageUrl && (
          <img src={program.imageUrl} alt={program.name} className="" />
        )}
        <div className="p-4 sm:p-6 md:p-7">
          <div className="flex flex-wrap items-center gap-2 sm:mb-4">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary-brand-100 text-primary-brand-700`}
            >
              By {program.provider}
            </span>
            {program.yearLevels && program.yearLevels.length > 0 && (
              <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-secondary-brand-100 text-secondary-brand-700">
                Years: {yearLevelsDisplay}
              </span>
            )}
            {program.isNew && (
              <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-highlight-100 text-highlight-700">
                New
              </span>
            )}
            {program.isPopular && (
              <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-highlight-100 text-highlight-700">
                Popular
              </span>
            )}
          </div>
          <div className="mb-3 text-xl font-bold tracking-tight text-primary-brand-700 sm:mb-4 sm:text-2xl">
            {program.name}
          </div>

          <p className="mb-5 text-sm leading-relaxed text-neutral-600 sm:mb-6 sm:text-base">
            {program.description}
          </p>
          <div className="mb-5 text-sm font-bold leading-relaxed text-neutral-600 sm:mb-3">
            This program focuses on:
          </div>
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
        </div>
      </article>
    </Link>
  );
}
