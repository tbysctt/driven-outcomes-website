import { GradientBorderButton } from "../components/GradientBorderButton";
import talkNowLogo from "../assets/brand-logos/talknow/Talk Now - LOGO - BLACK.png";
import { talkNowProgramFaqs } from "../data/talknow-faqs";
import { Link } from "react-router-dom";
import { programs } from "../data/programs";
import { BrandPageTemplate } from "../page-templates/BrandPageTemplate";
import { FadeInSection } from "../components/FadeInSection";
import { ProgramsListing } from "../components/ProgramsListing";

export function TalkNowPage() {
  return (
    <>
      <BrandPageTemplate
        faqs={talkNowProgramFaqs}
        cta={{
          title: "Looking for a partnership program?",
          description:
            "We'd love to hear from you. Enquire now to discuss how we can work together.",
        }}
        hero={{
          logo: talkNowLogo,
          subtitle: "Partnerships",
          title: "Partnership Programs",
          description:
            "Connecting schools and organisations with tailored programs and support",
        }}
      >
        <section className="py-12 sm:py-16 md:py-20 bg-neutral-50">
          <FadeInSection>
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-neutral-900">
                    TalkNOW Programs
                  </h2>
                  <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 rounded-full mx-auto" />
                  <p className="mt-4 text-lg sm:text-xl font-semibold text-primary-brand-600">
                    Connecting schools and organisations with tailored programs
                    and support
                  </p>
                </div>
                <div className="space-y-6 text-neutral-700">
                  <p className="text-base sm:text-lg leading-relaxed">
                    TalkNOW programs are designed to connect schools and
                    organisations with tailored programs and support. Our
                    partnerships help institutions explore key skills and
                    develop meaningful connections through customised programs.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Our programs can be tailored to meet your specific needs.
                    Minimum numbers apply.
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
          <FadeInSection>
            <div className="container mx-auto px-4 sm:px-6">
              <div className="text-center mb-10 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-neutral-900">
                  Our Partnership Programs
                </h2>
                <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 rounded-full mx-auto"></div>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2 sm:px-0">
                  Tailored programs designed for schools and organisations.
                </p>
              </div>
              <ProgramsListing
                programs={programs.filter(
                  (program) => program.provider === "TalkNOW",
                )}
              />
            </div>
          </FadeInSection>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-neutral-50">
          <FadeInSection>
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-neutral-900 mb-2">
                  TalkNOW Program Resources
                </h2>
                <p className="text-neutral-600 mb-6 sm:mb-8">
                  Description Description
                </p>
                FLYERS GO HERE
                <div>
                  <Link
                    to={"/talknow/resources"}
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
