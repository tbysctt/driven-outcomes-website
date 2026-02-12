import { CTA } from "../components/CTA";
import { GradientBorderButton } from "../components/GradientBorderButton";
import { FaqSection } from "../components/FaqSection";
import { Link } from "react-router-dom";
import type { Program, ProgramProvider } from "../data/programs";
import { formatYearLevels } from "../utils/formatYearLevels";
import miniBossLogo from "../assets/brand-logos/miniboss-incursions/MiniBoss_Incursions_White_Text_Circle_Transparent_BG.png";
import miniBossHolidaysLogo from "../assets/brand-logos/miniboss-holiday-programs/MBHP_LightPurpleTransparent.png";
import tripodLogo from "../assets/brand-logos/tripod/Tripod_Circle_Logos/Tripod_White.png";
import talkNowLogo from "../assets/brand-logos/talknow/Talk Now - LOGO - WHITE with WHITE slogan.png";

export type ProgramVariant = {
  name: string;
  yearRange: string;
  description: string;
};

type Props = {
  program: Program;
};

function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-neutral-900 pb-3 mb-6 relative ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute bottom-0 left-0 h-1 w-16 bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 rounded-full"></div>
    </h2>
  );
}

export function ProgramInfoPageTemplate({ program }: Props) {
  const tagline = program.tagline || program.description.split(".")[0] || "";
  const introHeading =
    program.pageDetails.introHeading || `About ${program.name}`;
  const introParagraphs = program.pageDetails.introParagraphs || [
    program.description,
  ];
  const variants = program.pageDetails.variants || [];
  const pricingLines = program.pageDetails.pricingLines || [
    "Pricing information available upon request. Please contact us for details.",
  ];
  const informationHTML =
    program.pageDetails.informationHTML ||
    `
    <p>"${program.name}" is available for ${program.provider}.</p>
    <p>Minimum numbers apply. Please contact us for more information.</p>
  `;
  const ongoingConnection = program.pageDetails.ongoingConnection || {
    title: "Ongoing Support",
    body: "We provide ongoing support and resources to help you get the most out of this program.",
  };
  const curriculumYears = formatYearLevels(program.yearLevels);
  const focusedSkills = program.focusedSkills || [
    "Personal and Social Capability",
    "Critical and Creative Thinking",
  ];
  const availabilityStatus =
    program.pageDetails.availabilityStatus || "Contact us for availability";
  const showCalendar = program.pageDetails.showCalendar || false;
  const faqs = program.pageDetails.faqs || [];

  function getBrandLogo(brand: ProgramProvider) {
    if (brand == "MiniBOSS") return miniBossLogo;
    if (brand == "MiniBOSS Holidays") return miniBossHolidaysLogo;
    if (brand == "Tripod Education") return tripodLogo;
    else {
      return talkNowLogo;
    }
  }

  const brandLogo = getBrandLogo(program.provider);

  return (
    <>
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-linear-to-br from-primary-brand-50 via-neutral-50 to-secondary-brand-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(73,182,168,0.1),transparent)]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-block px-3 py-1.5 rounded-full bg-primary-brand-100 text-primary-brand-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
                    {program.provider}
                  </span>
                  {program.isNew && (
                    <span className="inline-block px-3 py-1.5 rounded-full bg-highlight-100 text-highlight-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
                      New
                    </span>
                  )}
                  {program.isTrending && (
                    <span className="inline-block px-3 py-1.5 rounded-full bg-secondary-brand-100 text-secondary-brand-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
                      Trending
                    </span>
                  )}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-neutral-900 mb-3">
                  {program.name}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-primary-brand-600 font-semibold mb-6 leading-relaxed">
                  {tagline}
                </p>
                <div className="flex flex-wrap gap-4">
                  <GradientBorderButton
                    to="/contact"
                    size="md"
                    variant="rounded"
                  >
                    Enquire Now
                  </GradientBorderButton>
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-center lg:items-end text-center lg:text-right">
                <img
                  src={brandLogo}
                  alt={`${program.provider} logo`}
                  className="h-24 sm:h-32 md:h-40 w-auto object-contain drop-shadow-lg mb-2"
                />
                <p className="text-sm text-neutral-600 font-medium">
                  by Driven Outcomes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-12 sm:h-16 md:h-20"
            aria-hidden="true"
          >
            <path
              fill="white"
              d="M0 60 C400 9 800 111 1200 60 L1200 120 L0 120 Z"
            />
          </svg>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-10">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 mb-6 leading-tight">
                    {introHeading}
                  </h2>
                  <div className="space-y-4 text-neutral-700 text-base sm:text-lg leading-relaxed">
                    {introParagraphs.map((p, i) => (
                      <p key={i} className="text-neutral-700">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                {variants.length > 0 && (
                  <div>
                    <SectionHeading>
                      One Purpose. Three Programs.
                    </SectionHeading>
                    <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                      {variants.map((v) => (
                        <div
                          key={v.name}
                          className="group p-5 sm:p-6 rounded-xl bg-linear-to-br from-neutral-50 to-white border-2 border-neutral-200 hover:border-primary-brand-300 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="font-bold text-primary-brand-600 text-sm sm:text-base uppercase tracking-wide mb-2">
                            {v.name}
                          </div>
                          <div className="text-xs sm:text-sm text-neutral-500 mb-3 font-medium">
                            {v.yearRange}
                          </div>
                          <div className="text-sm text-neutral-700 leading-relaxed">
                            {v.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {informationHTML && (
                  <div>
                    <SectionHeading>Program Information</SectionHeading>
                    <div
                      className="prose prose-lg max-w-none text-neutral-700"
                      dangerouslySetInnerHTML={{ __html: informationHTML }}
                    />
                  </div>
                )}

                {ongoingConnection && (
                  <div className="p-6 sm:p-8 rounded-xl bg-linear-to-br from-primary-brand-50 via-white to-secondary-brand-50 border-2 border-primary-brand-200 shadow-sm">
                    <SectionHeading className="text-xl sm:text-2xl">
                      Ongoing Classroom Connection
                    </SectionHeading>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3">
                      {ongoingConnection.title}
                    </h3>
                    <p className="text-base text-neutral-700 leading-relaxed">
                      {ongoingConnection.body}
                    </p>
                  </div>
                )}

                <div className="pt-8 border-t-2 border-neutral-200 text-center">
                  <Link
                    to="/programs"
                    className="group inline-flex items-center gap-2 text-base font-semibold text-primary-brand-600 hover:text-primary-brand-800 transition-colors"
                  >
                    Browse All Programs
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-8 space-y-6">
                  <div className="p-5 sm:p-6 rounded-xl bg-linear-to-br from-neutral-50 to-white border-2 border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                    <SectionHeading className="text-lg sm:text-xl">
                      Pricing
                    </SectionHeading>
                    <ul className="space-y-3 text-sm sm:text-base text-neutral-700">
                      {pricingLines.map((line, i) => (
                        <li
                          key={i}
                          className="leading-relaxed flex items-start"
                        >
                          <span className="text-primary-brand-500 mr-2 mt-1.5">
                            •
                          </span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 sm:p-6 rounded-xl bg-linear-to-br from-neutral-50 to-white border-2 border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary-brand-100 text-primary-brand-700 text-xs font-semibold uppercase tracking-wider mb-4">
                      Years: {curriculumYears}
                    </div>
                    <SectionHeading className="text-lg sm:text-xl">
                      Curriculum Links
                    </SectionHeading>
                    <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                      {program.name} aligns with the Australian Curriculum,
                      supporting the following curriculum areas and
                      capabilities:
                    </p>
                    <ul className="space-y-2 text-sm text-neutral-700 mb-4">
                      {focusedSkills.map((link, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-brand-500 mr-2 mt-1 shrink-0">
                            •
                          </span>
                          <span className="leading-relaxed">{link}</span>
                        </li>
                      ))}
                    </ul>
                    {program.pageDetails.canBeCustomised && (
                      <p className="text-xs sm:text-sm text-neutral-600 italic border-t border-neutral-200 pt-3">
                        This program can be customised to meet your school's
                        desired learning outcomes.
                      </p>
                    )}
                  </div>

                  <div className="p-5 sm:p-6 rounded-xl bg-linear-to-br from-primary-brand-50 via-white to-secondary-brand-50 border-2 border-primary-brand-300 shadow-lg">
                    <SectionHeading className="text-lg sm:text-xl">
                      Booking Availability
                    </SectionHeading>
                    <p className="text-base text-neutral-800 font-semibold mb-4">
                      {availabilityStatus}
                    </p>
                    {showCalendar && (
                      <div className="mt-4 p-4 rounded-lg bg-white border border-neutral-200 shadow-sm">
                        <h3 className="text-sm font-bold text-neutral-900 mb-2">
                          School Holidays
                        </h3>
                        <div className="text-xs text-neutral-500">
                          Calendar placeholder – integrate booking widget or
                          dates here.
                        </div>
                      </div>
                    )}
                    <div className="mt-6">
                      <GradientBorderButton
                        to="/contact"
                        size="sm"
                        variant="rounded"
                        className="w-full"
                      >
                        Book Now
                      </GradientBorderButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <FaqSection
          items={faqs}
          title={`FAQs About ${program.name}`}
          id="faq"
        />
      )}

      <CTA
        title="Ready to book this program?"
        description="Enquire now to discuss dates, group size, and tailor the session to your school."
      />
    </>
  );
}
