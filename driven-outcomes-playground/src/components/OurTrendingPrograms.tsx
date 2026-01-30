import { ProgramCard } from "./ProgramCard";

export function OurTrendingPrograms() {
  return (
    <section id="programs" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-grey-900">
            Here's what's trending
          </h2>
          <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-gradient-to-r from-pearl-aqua-500 to-cool-steel-500 rounded-full mx-auto"></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-grey-600 max-w-2xl mx-auto px-2 sm:px-0">
            We deliver incursions across all age groups. Here are the programs people are loving at the moment!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <ProgramCard
            badge="Primary School"
            title="INCURSION/PROGRAM NAME"
            description="Description here. Description here. Description here. Description here. Description here."
            tags={["Critical thinking", "Creativity", "Teamwork", "Problem solving"]}
            variant="cool-steel"
          />
          <ProgramCard
            badge="Secondary School"
            title="INCURSION/PROGRAM NAME"
            tags={["Enterprise", "Leadership", "Real-world skills", "Collaboration"]}
            description="Description here. Description here. Description here. Description here. Description here."
            variant="pearl-aqua"
          />
        </div>
      </div>
    </section>
  );
}
