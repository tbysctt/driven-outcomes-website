import { Link } from "react-router-dom";

export interface ProgramCardProps {
  targetAudience: string;
  title: string;
  description: string;
  focusedSkills: string[];
  linkPath: string;
}

export function ProgramCard(props: ProgramCardProps) {
  return (
    <article
      className={`group rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 sm:p-7 md:p-8 border-pearl-aqua-200/80 hover:border-pearl-aqua-300 hover:shadow-lg`}
    >
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider sm:mb-4 bg-pearl-aqua-100 text-pearl-aqua-700`}
      >
        {props.targetAudience}
      </span>
      <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-grey-900 sm:mb-4 sm:text-2xl">
        {props.title}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-slate-grey-600 sm:mb-6 sm:text-base">
        {props.description}
      </p>
      <div className="mb-6 flex flex-wrap gap-2 sm:mb-7">
        {props.focusedSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-grey-100 px-3 py-1 text-xs font-medium text-slate-grey-700"
          >
            {skill}
          </span>
        ))}
      </div>
      <Link
        to={props.linkPath}
        className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors text-pearl-aqua-600 hover:text-pearl-aqua-800`}
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
