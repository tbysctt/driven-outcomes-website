import { GradientBorderButton } from "../components/GradientBorderButton";
import tripodLogo from "../assets/brand-logos/tripod/Tripod_Circle_Logos/Tripod_All_black.png";
import { ProgramCard } from "../components/ProgramCard";
import { tripodProgramFaqs } from "../data/tripod-faqs";
import { Link } from "react-router-dom";
import { programs } from "../data/programs";
import { BrandPageTemplate } from "../page-templates/BrandPageTemplate";
import { FadeInSection } from "../components/FadeInSection";

export function TripodPage() {
  return (
    <>
      <BrandPageTemplate
        faqs={tripodProgramFaqs}
        cta={{
          title: "Looking for a secondary school incursion?",
          description:
            "We'd love to hear from you. Enquire now to discuss dates and programs.",
        }}
        hero={{
          logo: tripodLogo,
          subtitle: "Secondary Schools",
          title: "Secondary School Incursions",
          description:
            "Empowering secondary students with engaging programs and experiences",
        }}
      >
        <section className="py-12 sm:py-16 md:py-20 bg-neutral-50">
          <FadeInSection>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-neutral-900">
                  Tripod Education Incursions
                </h2>
                <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 rounded-full mx-auto" />
                <p className="mt-4 text-lg sm:text-xl font-semibold text-primary-brand-600">
                  Empowering secondary students with engaging programs and
                  experiences
                </p>
              </div>
              <div className="space-y-6 text-neutral-700">
                <p className="text-base sm:text-lg leading-relaxed">
                  Tripod Education incursions are designed to empower secondary
                  students with engaging programs and experiences. Our programs
                  help students explore key skills like critical and creative
                  thinking, teamwork, problem solving, communication skills and
                  resilience, through hands-on activities aligned with the
                  Australian Curriculum.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Our incursions can be booked by secondary schools. Minimum
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
          </FadeInSection>
        </section>

        <section id="programs" className="py-12 sm:py-16 md:py-20">
          <FadeInSection delay={200}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-neutral-900">
                Our Secondary School Incursions
              </h2>
              <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 rounded-full mx-auto"></div>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2 sm:px-0">
                Engaging programs designed for secondary schools.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {programs
                .filter((program) => program.provider === "Tripod Education")
                .map((program) => (
                  <ProgramCard key={program.name} program={program} />
                ))}
            </div>
          </div>
          </FadeInSection>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-neutral-50">
          <FadeInSection delay={300}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-neutral-900 mb-2">
                Tripod Education Resources
              </h2>
              <p className="text-neutral-600 mb-6 sm:mb-8">
                Description Description
              </p>
              FLYERS GO HERE
              <div>
                <Link
                  to={"/tripod/resources"}
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
          </FadeInSection>
        </section>
      </BrandPageTemplate>
    </>
  );
}
