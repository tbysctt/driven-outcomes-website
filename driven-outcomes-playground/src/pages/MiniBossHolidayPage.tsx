import { BrandPageHero } from "../components/BrandPageHero";
import { FaqSection } from "../components/FaqSection";
import { GradientBorderButton } from "../components/GradientBorderButton";
import mbhpLogo from "../assets/brand-logos/miniboss-holiday-programs/MBHP_PurpleTransparent.png";
import { ProgramCard, type ProgramCardProps } from "../components/ProgramCard";
import { CTA } from "../components/CTA";
import { miniBossHolidayProgramFaqs } from "../data/miniboss-holiday-faqs";
import { Link } from "react-router-dom";

const incursionPrograms: ProgramCardProps[] = [
  {
    targetAudience: "OSHC & Vacation Care",
    title: "Bombs Away",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: [
      "Experimentation",
      "Teamwork",
      "Cause & effect",
      "Problem solving",
    ],
    linkPath: "#",
  },
  {
    targetAudience: "OSHC & Vacation Care",
    title: "Smoothie Time",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: [
      "Nutrition",
      "Healthy eating",
      "Creativity",
      "Hands-on learning",
    ],
    linkPath: "#",
  },
  {
    targetAudience: "OSHC & Vacation Care",
    title: "Code Busters",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Coding", "Logic", "Problem solving", "Digital skills"],
    linkPath: "#",
  },
  {
    targetAudience: "OSHC & Vacation Care",
    title: "Super Sleuths",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: [
      "Investigation",
      "Critical thinking",
      "Deduction",
      "Teamwork",
    ],
    linkPath: "#",
  },
  {
    targetAudience: "OSHC & Vacation Care",
    title: "The Mystery Bag",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Curiosity", "Discovery", "Problem solving", "Creativity"],
    linkPath: "#",
  },
  {
    targetAudience: "OSHC & Vacation Care",
    title: "The Chocolate Boss",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: [
      "Enterprise",
      "Creativity",
      "Teamwork",
      "Real-world skills",
    ],
    linkPath: "#",
  },
  {
    targetAudience: "OSHC & Vacation Care",
    title: "Superhero",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Resilience", "Confidence", "Teamwork", "Creativity"],
    linkPath: "#",
  },
];

export function MiniBossHolidayPage() {
  return (
    <>
      <BrandPageHero
        logo={mbhpLogo}
        subTitle="OSHC & Vacation Care"
        title="Holiday Incursions"
        description="Incursions for Outside School Hours Care (OSHC) & Vacation Care providers"
      />

      <section className="py-12 sm:py-16 md:py-20 bg-slate-grey-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-grey-900">
                MiniBOSS Holiday Programs
              </h2>
              <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-linear-to-r from-pearl-aqua-500 to-cool-steel-500 rounded-full mx-auto" />
              <p className="mt-4 text-lg sm:text-xl font-semibold text-pearl-aqua-600">
                More than just fun!
              </p>
            </div>
            <div className="space-y-6 text-slate-grey-700">
              <p className="text-base sm:text-lg leading-relaxed">
                MiniBOSS holiday incursions are super fun adaptations of our
                MiniBOSS primary school incursions and have been specifically
                designed as hands-on programs that are{" "}
                <strong className="font-semibold text-slate-grey-900">
                  more than just fun
                </strong>
                . As well as having fun, our incursions help children explore
                key skills like critical and creative thinking, curiosity,
                teamwork, problem solving, communication skills and resilience.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Our incursions can be booked by Outside School Hours Care (OSHC)
                & Vacation Care providers. Minimum numbers apply.
              </p>
            </div>
            <div className="mt-10 text-center">
              <p className="text-slate-grey-600 mb-5">
                Reach out today to find out more!
              </p>
              <GradientBorderButton href="/contact" size="md" variant="rounded">
                Enquire now
              </GradientBorderButton>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-grey-900">
              Our Holiday Incursions and Excursions
            </h2>
            <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-linear-to-r from-pearl-aqua-500 to-cool-steel-500 rounded-full mx-auto"></div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-grey-600 max-w-2xl mx-auto px-2 sm:px-0">
              Hands-on, fun programs designed for OSHC and vacation care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {incursionPrograms.map((program) => (
              <ProgramCard
                key={program.title}
                targetAudience={program.targetAudience}
                title={program.title}
                description={program.description}
                focusedSkills={program.focusedSkills}
                linkPath={program.linkPath}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-slate-grey-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-slate-grey-900 mb-2">
              MiniBOSS Holiday Program Resources
            </h2>
            <p className="text-slate-grey-600 mb-6 sm:mb-8">
              Decription Description
            </p>
            FLYERS GO HERE
            <div>
              <Link
                to={"/miniboss-holiday-programs/resources"}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold transition-colors text-thistle-600 hover:text-thistle-800"
              >
                See all
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={miniBossHolidayProgramFaqs} />

      <CTA
        title="Looking for an incursion or excursion these holidays?"
        description="We’d love to hear from you. Enquire now to discuss dates and programs."
      />
    </>
  );
}
