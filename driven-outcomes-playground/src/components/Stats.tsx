import { useInView } from "../hooks/useInView";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";

interface StatItemProps {
  target: number;
  suffix?: string;
  label: string;
  colorClass: string;
  isInView: boolean;
}

function StatItem({ target, suffix = "", label, colorClass, isInView }: StatItemProps) {
  const displayValue = useAnimatedCounter({
    target,
    suffix,
    enabled: isInView,
  });

  return (
    <div>
      <div className={`text-4xl md:text-5xl font-extrabold ${colorClass}`}>
        {displayValue}
      </div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-grey-600">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.3 });

  const stats = [
    { target: 515, label: "Schools", colorClass: "text-pearl-aqua-600" },
    { target: 205, suffix: "K+", label: "Students", colorClass: "text-cool-steel-600" },
    { target: 24, suffix: "+", label: "Programs", colorClass: "text-thistle-600" },
    { target: 30, label: "Organisations", colorClass: "text-slate-grey-800" },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-slate-grey-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
