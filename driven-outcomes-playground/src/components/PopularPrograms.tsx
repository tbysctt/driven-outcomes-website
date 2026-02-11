import { programs } from "../data/programs";
import { ProgramCard } from "./ProgramCard";

export function PopularPrograms() {
  return (
    <section id="programs" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-neutral-900">
            Our most popular programs
          </h2>
          <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 rounded-full mx-auto"></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2 sm:px-0">
            We deliver incursions across all age groups. Here are the programs
            people are loving at the moment!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {programs
            .filter((program) => program.isTrending)
            .map((program) => (
              <ProgramCard
                key={program.slug}
                targetAudience={program.provider}
                name={program.name}
                description={program.description}
                focusedSkills={program.focusedSkills}
                slug={program.slug}
                isNew={program.isNew}
                isTrending={program.isTrending}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
