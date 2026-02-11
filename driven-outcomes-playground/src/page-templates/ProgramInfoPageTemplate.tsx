import { CTA } from "../components/CTA";
import { GradientBorderButton } from "../components/GradientBorderButton";
import { Link } from "react-router-dom";

export type ProgramVariant = {
  name: string;
  yearRange: string;
  description: string;
};

export type HowItWorksSegment = {
  title: string;
  body: string;
  focus: string;
};

export type ProgramInfoPageData = {
  category: string;
  programName: string;
  tagline: string;
  introHeading: string;
  introParagraphs: string[];
  variants: ProgramVariant[];
  pricingLines: string[];
  programInfoBullets: string[];
  howItWorksSegments: HowItWorksSegment[];
  ongoingConnection: { title: string; body: string };
  prevProgram?: { name: string; path: string };
  nextProgram?: { name: string; path: string };
  provider: string;
  curriculumYears: string;
  focusedSkills: string[];
  availabilityStatus: string;
  showCalendar?: boolean;
  isNew?: boolean;
  isTrending?: boolean;
};

type Props = {
  data: ProgramInfoPageData;
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
      className={`text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-neutral-900 border-b-2 border-primary-brand-500 pb-2 mb-4 ${className}`}
    >
      {children}
    </h2>
  );
}

export function ProgramInfoPageTemplate({ data }: Props) {
  return (
    <>
      <section className="relative overflow-hidden py-6 sm:py-8 bg-neutral-50 border-b-2 border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex-1 min-w-70">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-block px-2 py-0.5 rounded bg-primary-brand-100 text-primary-brand-700 text-xs font-semibold uppercase tracking-wider">
                    {data.category}
                  </span>
                  {data.isNew && (
                    <span className="inline-block px-2 py-0.5 rounded bg-highlight-100 text-highlight-700 text-xs font-semibold uppercase tracking-wider">
                      New
                    </span>
                  )}
                  {data.isTrending && (
                    <span className="inline-block px-2 py-0.5 rounded bg-secondary-brand-100 text-secondary-brand-700 text-xs font-semibold uppercase tracking-wider">
                      Trending
                    </span>
                  )}
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-neutral-900 mb-1">
                  {data.programName}
                </h1>
                <p className="text-base sm:text-lg text-primary-brand-600 font-semibold">
                  {data.tagline}
                </p>
              </div>
              <div className="shrink-0">
                <GradientBorderButton to="/contact" size="md" variant="rounded">
                  Enquire Now
                </GradientBorderButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-neutral-800 mb-3">
                    {data.introHeading}
                  </h2>
                  <div className="space-y-3 text-neutral-700 text-sm leading-relaxed">
                    {data.introParagraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>

                {data.variants.length > 0 && (
                  <div>
                    <SectionHeading>
                      One Purpose. Three Programs.
                    </SectionHeading>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {data.variants.map((v) => (
                        <div
                          key={v.name}
                          className="p-3 rounded-lg bg-neutral-50 border border-neutral-200"
                        >
                          <div className="font-bold text-primary-brand-600 text-sm uppercase tracking-wide mb-1">
                            {v.name}
                          </div>
                          <div className="text-xs text-neutral-500 mb-2">
                            {v.yearRange}
                          </div>
                          <div className="text-xs text-neutral-700">
                            {v.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <SectionHeading>How It Works</SectionHeading>
                  <p className="text-sm text-neutral-600 mb-4">
                    Each session is split into three high-impact segments that
                    build momentum and classroom culture:
                  </p>
                  <div className="space-y-4">
                    {data.howItWorksSegments.map((seg, i) => (
                      <div
                        key={i}
                        className="border-l-3 border-primary-brand-500 pl-4"
                      >
                        <h3 className="text-base font-bold text-neutral-900 mb-1">
                          {i + 1}. {seg.title}
                        </h3>
                        <p className="text-sm text-neutral-700 mb-1">
                          {seg.body}
                        </p>
                        <p className="text-xs text-primary-brand-700 font-medium">
                          Focus: {seg.focus}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionHeading>Ongoing Classroom Connection</SectionHeading>
                  <h3 className="text-base font-bold text-neutral-800 mb-2">
                    {data.ongoingConnection.title}
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {data.ongoingConnection.body}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200 text-center">
                  <Link
                    to="/programs"
                    className="text-sm font-semibold text-primary-brand-600 hover:text-primary-brand-800 transition-colors"
                  >
                    Browse All Programs
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-6 space-y-6">
                  <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                    <SectionHeading className="text-lg">Pricing</SectionHeading>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      {data.pricingLines.map((line, i) => (
                        <li key={i} className="leading-relaxed">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                    <SectionHeading className="text-lg">
                      Program Information
                    </SectionHeading>
                    <ul className="space-y-1.5 text-sm text-neutral-700 list-disc list-inside">
                      {data.programInfoBullets.map((bullet, i) => (
                        <li key={i} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                    <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                      Years: {data.curriculumYears}
                    </div>
                    <SectionHeading className="text-lg">
                      Curriculum Links
                    </SectionHeading>
                    <p className="text-xs text-neutral-600 mb-3">
                      {data.programName} aligns with the Australian Curriculum,
                      supporting the following curriculum areas and
                      capabilities:
                    </p>
                    <ul className="space-y-1 text-sm text-neutral-700">
                      {data.focusedSkills.map((link, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-brand-500 mr-2">•</span>
                          <span>{link}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-xs text-neutral-600">
                      This program can be customised to meet your school's
                      desired learning outcomes.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-white border-2 border-primary-brand-200">
                    <SectionHeading className="text-lg">
                      Booking Availability
                    </SectionHeading>
                    <p className="text-sm text-neutral-700 font-medium mb-3">
                      {data.availabilityStatus}
                    </p>
                    {data.showCalendar && (
                      <div className="mt-3 p-3 rounded bg-neutral-50 border border-neutral-200">
                        <h3 className="text-sm font-bold text-neutral-800 mb-2">
                          School Holidays
                        </h3>
                        <div className="text-xs text-neutral-500">
                          Calendar placeholder – integrate booking widget or
                          dates here.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to book this program?"
        description="Enquire now to discuss dates, group size, and tailor the session to your school."
      />
    </>
  );
}
