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
  brandLabel?: string;
  curriculumYears: string;
  curriculumLinks: string[];
  availabilityStatus: string;
  showCalendar?: boolean;
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
      className={`text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-neutral-900 ${className}`}
    >
      {children}
    </h2>
  );
}

function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 rounded-full ${className}`}
    />
  );
}

export function ProgramInfoPageTemplate({ data }: Props) {
  return (
    <>
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-brand-100 text-primary-brand-700 text-xs font-semibold uppercase tracking-wider mb-4">
              {data.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 mb-2">
              {data.programName}
            </h1>
            <p className="text-lg sm:text-xl text-primary-brand-600 font-semibold mb-8">
              {data.tagline}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-800 mb-6">
              {data.introHeading}
            </h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              {data.introParagraphs.map((p, i) => (
                <p key={i} className="text-base sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {data.variants.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <SectionHeading>One Purpose. Three Programs.</SectionHeading>
              <SectionDivider className="mx-auto" />
            </div>
            <ul className="max-w-4xl mx-auto space-y-6 md:space-y-8">
              {data.variants.map((v) => (
                <li
                  key={v.name}
                  className="flex flex-col sm:flex-row sm:items-start gap-3 p-5 sm:p-6 rounded-xl bg-neutral-50 border border-neutral-200"
                >
                  <span className="shrink-0 font-bold text-primary-brand-600 uppercase tracking-wide">
                    {v.name} ({v.yearRange})
                  </span>
                  <span className="text-neutral-700">{v.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeading className="mb-6">Pricing</SectionHeading>
            <SectionDivider />
            <ul className="mt-6 space-y-3 text-neutral-700">
              {data.pricingLines.map((line, i) => (
                <li key={i} className="text-base sm:text-lg">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeading className="mb-6">Program Information</SectionHeading>
            <SectionDivider />
            <ul className="mt-6 space-y-2 list-disc list-inside text-neutral-700">
              {data.programInfoBullets.map((bullet, i) => (
                <li key={i} className="text-base sm:text-lg">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeading className="mb-8">How It Works</SectionHeading>
            <SectionDivider />
            <p className="mt-6 text-neutral-600 mb-10">
              Each session is split into three high-impact segments that build
              momentum and classroom culture:
            </p>
            <ol className="space-y-8">
              {data.howItWorksSegments.map((seg, i) => (
                <li key={i}>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">
                    {i + 1}. {seg.title}
                  </h3>
                  <p className="text-neutral-700 mb-2">{seg.body}</p>
                  <p className="text-sm text-primary-brand-700 font-medium">
                    (Focus: {seg.focus})
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeading className="mb-6">
              Ongoing Classroom Connection
            </SectionHeading>
            <SectionDivider />
            <h3 className="mt-6 text-lg font-bold text-neutral-800 mb-2">
              {data.ongoingConnection.title}
            </h3>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              {data.ongoingConnection.body}
            </p>
          </div>
        </div>
      </section>

      {(data.prevProgram || data.nextProgram) && (
        <section className="py-8 sm:py-10 border-t border-neutral-200 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6">
            <nav
              className="max-w-3xl mx-auto flex items-center justify-between gap-4"
              aria-label="Program navigation"
            >
              <div className="flex-1 flex items-center">
                {data.prevProgram ? (
                  <Link
                    to={data.prevProgram.path}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-brand-600 hover:text-primary-brand-800 transition-colors"
                  >
                    <span aria-hidden>←</span>
                    {data.prevProgram.name}
                  </Link>
                ) : (
                  <span />
                )}
              </div>
              {data.brandLabel && (
                <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wide shrink-0">
                  {data.brandLabel}
                </span>
              )}
              <div className="flex-1 flex items-center justify-end">
                {data.nextProgram ? (
                  <Link
                    to={data.nextProgram.path}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-brand-600 hover:text-primary-brand-800 transition-colors"
                  >
                    {data.nextProgram.name}
                    <span aria-hidden>→</span>
                  </Link>
                ) : (
                  <span />
                )}
              </div>
            </nav>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
              Years: {data.curriculumYears}
            </p>
            <SectionHeading className="mb-6">Curriculum Links</SectionHeading>
            <SectionDivider />
            <p className="mt-6 text-neutral-600 mb-6">
              {data.programName} aligns with the Australian Curriculum,
              supporting the following curriculum areas and capabilities:
            </p>
            <ul className="space-y-2 text-neutral-700">
              {data.curriculumLinks.map((link, i) => (
                <li key={i} className="text-base sm:text-lg">
                  {link}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-neutral-600">
              This program can be customised to meet your school's desired
              learning outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <GradientBorderButton to="/contact" size="lg" variant="rounded">
              Enquire Now
            </GradientBorderButton>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeading className="mb-6">Booking Availability</SectionHeading>
            <SectionDivider />
            <p className="mt-6 text-neutral-700 font-medium">
              {data.availabilityStatus}
            </p>
            {data.showCalendar && (
              <div className="mt-8 p-6 rounded-xl bg-white border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-800 mb-4">
                  School Holidays
                </h3>
                <div className="text-neutral-500 text-sm">
                  Calendar placeholder – integrate booking widget or dates here.
                </div>
              </div>
            )}
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
