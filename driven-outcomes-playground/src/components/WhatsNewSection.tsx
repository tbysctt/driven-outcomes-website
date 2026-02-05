import { programs } from "../data/programs";
import { ProgramCard } from "./ProgramCard";

export function WhatsNewSection() {
  return (
    <section id="programs" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-neutral-900">
            What's new for 2026
          </h2>
          <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 rounded-full mx-auto"></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2 sm:px-0">
            Fresh programs and initiatives designed for impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {programs
            .filter((program) => program.isNew)
            .map((program) => {
              return (
                <ProgramCard
                  targetAudience={program.targetAudience}
                  name={program.name}
                  description={program.description}
                  focusedSkills={program.focusedSkills}
                  linkPath={program.linkPath}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
