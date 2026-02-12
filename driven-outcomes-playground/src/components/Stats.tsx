import { useInView } from "../hooks/useInView";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";
import { programs } from "../data/programs";

interface StatItemProps {
  target: number;
  suffix?: string;
  label: string;
  colorClass: string;
  isInView: boolean;
}

function StatItem({
  target,
  suffix = "",
  label,
  colorClass,
  isInView,
}: StatItemProps) {
  const displayValue = useAnimatedCounter({
    target,
    suffix,
    enabled: isInView,
  });

  return (
    <div>
      <div
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold ${colorClass}`}
      >
        {displayValue}
      </div>
      <div className="mt-2 sm:mt-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-neutral-600 px-2">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.3 });

  const stats = [
    {
      target: 205,
      suffix: "K+",
      label: "Students reached",
      colorClass: "text-secondary-brand-600",
    },
    {
      target: 515,
      label: "Schools we've worked with",
      colorClass: "text-primary-brand-600",
    },
    {
      target: 30,
      label: "Organisations we've worked with",
      colorClass: "text-neutral-800",
    },
    {
      target: programs.length,
      suffix: "+",
      label: "Programs to choose from",
      colorClass: "text-highlight-600",
    },
  ];

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              colorClass={stat.colorClass}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
