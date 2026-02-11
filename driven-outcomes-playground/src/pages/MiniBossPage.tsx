import { GradientBorderButton } from "../components/GradientBorderButton";
import mbLogo from "../assets/brand-logos/miniboss-incursions/MiniBoss_Incursions_White_Text_Circle_Transparent_BG.png";
import { ProgramCard } from "../components/ProgramCard";
import { miniBossProgramFaqs } from "../data/miniboss-faqs";
import { Link } from "react-router-dom";
import { programs } from "../data/programs";
import { BrandPageTemplate } from "../page-templates/BrandPageTemplate";

export function MiniBossPage() {
  return (
    <>
      <BrandPageTemplate
        faqs={miniBossProgramFaqs}
        cta={{
          title: "Looking for a primary school incursion?",
          description:
            "We'd love to hear from you. Enquire now to discuss dates and programs.",
        }}
        hero={{
          logo: mbLogo,
          subtitle: "Primary Schools",
          title: "Primary School Incursions",
          description:
            "Hands-on incursions designed to inspire primary students with creativity and learning",
        }}
      >
        <section className="py-12 sm:py-16 md:py-20 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-neutral-900">
                  MiniBOSS Incursions
                </h2>
                <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 rounded-full mx-auto" />
                <p className="mt-4 text-lg sm:text-xl font-semibold text-primary-brand-600">
                  Inspiring primary students with hands-on learning and creativity
                </p>
              </div>
              <div className="space-y-6 text-neutral-700">
                <p className="text-base sm:text-lg leading-relaxed">
                  MiniBOSS incursions are designed to inspire primary students
                  with hands-on learning and creativity. Our programs help
                  students explore key skills like critical and creative
                  thinking, teamwork, problem solving, communication skills and
                  resilience, through engaging activities aligned with the
                  Australian Curriculum.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Our incursions can be booked by primary schools. Minimum
                  numbers apply.
                </p>
              </div>
              <div className="mt-10 text-center">
                <p className="text-neutral-600 mb-5">
                  Reach out today to find out more!
                </p>
                <GradientBorderButton
                  href="/contact"
                  size="md"
                  variant="rounded"
                >
                  Enquire now
                </GradientBorderButton>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-neutral-900">
                Our Primary School Incursions
              </h2>
              <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 rounded-full mx-auto"></div>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2 sm:px-0">
                Hands-on, engaging programs designed for primary schools.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {programs
                .filter((program) => program.provider === "MiniBOSS")
                .map((program) => (
                  <ProgramCard key={program.name} program={program} />
                ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-neutral-900 mb-2">
                MiniBOSS Incursions Resources
              </h2>
              <p className="text-neutral-600 mb-6 sm:mb-8">
                Description Description
              </p>
              FLYERS GO HERE
              <div>
                <Link
                  to={"/miniboss/resources"}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold transition-colors text-highlight-600 hover:text-highlight-800"
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
      </BrandPageTemplate>
    </>
  );
}
