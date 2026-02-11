import { GradientBorderButton } from "../components/GradientBorderButton";
import mbhpLogo from "../assets/brand-logos/miniboss-holiday-programs/MBHP_PurpleTransparent.png";
import { ProgramCard } from "../components/ProgramCard";
import { miniBossHolidayProgramFaqs } from "../data/miniboss-holiday-faqs";
import { Link } from "react-router-dom";
import { programs } from "../data/programs";
import { BrandPageTemplate } from "../page-templates/BrandPageTemplate";

export function MiniBossHolidayPage() {
  return (
    <>
      <BrandPageTemplate
        faqs={miniBossHolidayProgramFaqs}
        cta={{
          title: "Looking for an incursion or excursion these holidays?",
          description:
            "We’d love to hear from you. Enquire now to discuss dates and programs.",
        }}
        hero={{
          logo: mbhpLogo,
          subtitle: "OSHC & Vacation Care",
          title: "Holiday Incursions and Excursions",
          description:
            "Incursions for Outside School Hours Care (OSHC) & Vacation Care providers",
        }}
      >
        <section className="py-12 sm:py-16 md:py-20 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-neutral-900">
                  MiniBOSS Holiday Programs
                </h2>
                <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 rounded-full mx-auto" />
                <p className="mt-4 text-lg sm:text-xl font-semibold text-primary-brand-600">
                  More than just fun!
                </p>
              </div>
              <div className="space-y-6 text-neutral-700">
                <p className="text-base sm:text-lg leading-relaxed">
                  MiniBOSS holiday incursions are super fun adaptations of our
                  MiniBOSS primary school incursions and have been specifically
                  designed as hands-on programs that are{" "}
                  <strong className="font-semibold text-neutral-900">
                    more than just fun
                  </strong>
                  . As well as having fun, our incursions help children explore
                  key skills like critical and creative thinking, curiosity,
                  teamwork, problem solving, communication skills and
                  resilience.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Our incursions can be booked by Outside School Hours Care
                  (OSHC) & Vacation Care providers. Minimum numbers apply.
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
                Our Holiday Incursions and Excursions
              </h2>
              <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 rounded-full mx-auto"></div>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2 sm:px-0">
                Hands-on, fun programs designed for OSHC and vacation care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {programs
                .filter((program) => program.provider === "MiniBOSS Holidays")
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
                MiniBOSS Holiday Program Resources
              </h2>
              <p className="text-neutral-600 mb-6 sm:mb-8">
                Decription Description
              </p>
              FLYERS GO HERE
              <div>
                <Link
                  to={"/oshc-and-holidays/resources"}
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
