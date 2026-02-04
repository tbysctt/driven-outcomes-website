const variantStyles = {
  "cool-steel": {
    card: "bg-gradient-to-br from-cool-steel-100 to-cool-steel-50 border-cool-steel-200 hover:shadow-cool-steel-200/50",
    badge: "bg-cool-steel-200 text-cool-steel-700",
    link: "text-cool-steel-600 hover:text-cool-steel-800",
  },
  "pearl-aqua": {
    card: "bg-gradient-to-br from-pearl-aqua-100 to-pearl-aqua-50 border-pearl-aqua-200 hover:shadow-pearl-aqua-200/50",
    badge: "bg-pearl-aqua-200 text-pearl-aqua-700",
    link: "text-pearl-aqua-600 hover:text-pearl-aqua-800",
  },
} as const;

export type ProgramCardVariant = keyof typeof variantStyles;

export interface ProgramCardProps {
  targetAudience: string;
  title: string;
  description: string;
  focusedSkills: string[];
  variant: ProgramCardVariant;
}

export function ProgramCard(props: ProgramCardProps) {
  const styles = variantStyles[props.variant];

  return (
    <div
      className={`rounded-2xl p-6 sm:p-7 md:p-8 border hover:shadow-xl transition-shadow ${styles.card}`}
    >
      <div
        className={`inline-block px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 ${styles.badge}`}
      >
        {props.targetAudience}
      </div>
      <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-grey-900 mb-3 sm:mb-4">
        {props.title}
      </h3>
      <p className="text-sm sm:text-base text-slate-grey-600 mb-5 sm:mb-6 leading-relaxed">
        {props.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
        {props.focusedSkills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 sm:px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
