import { Link } from "react-router-dom";
import type { TargetAudience } from "../data/programs";

export interface ProgramCardProps {
  targetAudience: TargetAudience;
  name: string;
  description: string;
  focusedSkills: string[];
  linkPath: string;
}

export function ProgramCard(props: ProgramCardProps) {
  return (
    <article
      className={`group rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 sm:p-7 md:p-8 border-primary-brand-200/80 hover:border-primary-brand-300 hover:shadow-lg`}
    >
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider sm:mb-4 bg-primary-brand-100 text-primary-brand-700`}
      >
        {props.targetAudience}
      </span>
      <div className="mb-3">
        <Link
          className="text-xl font-bold tracking-tight text-primary-brand-700 sm:mb-4 sm:text-2xl"
          to={props.linkPath}
        >
          {props.name}
        </Link>
      </div>
      <p className="mb-5 text-sm leading-relaxed text-neutral-600 sm:mb-6 sm:text-base">
        {props.description}
      </p>
      <div className="mb-6 flex flex-wrap gap-2 sm:mb-7">
        {props.focusedSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
          >
            {skill}
          </span>
        ))}
      </div>
      <Link
        to={props.linkPath}
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
