import { InfoPageTemplate } from "../page-templates/InfoPageTemplate";

const BENEFITS = [
  {
    title: "Flexible Work",
    description:
      "Work around your schedule with flexible hours and locations that fit your lifestyle.",
  },
  {
    title: "Professional Development",
    description:
      "Ongoing training and support to help you grow your skills and advance your career.",
  },
  {
    title: "Meaningful Impact",
    description:
      "Make a real difference in the lives of students and educators across Australia.",
  },
  {
    title: "Collaborative Team",
    description:
      "Join a passionate team of educators and facilitators who support each other.",
  },
  {
    title: "Competitive Rates",
    description:
      "Fair compensation for your expertise and dedication to education.",
  },
  {
    title: "Diverse Programs",
    description:
      "Work across a variety of engaging programs from primary to secondary education.",
  },
] as const;

const OPEN_POSITIONS = [
  {
    title: "Program Facilitator",
    department: "Delivery",
    location: "Melbourne & Regional Victoria",
    type: "Casual/Part-time",
    description:
      "We're looking for enthusiastic facilitators to deliver our engaging programs to schools across Victoria. Ideal candidates will have experience working with children, excellent communication skills, and a passion for education.",
  },
  {
    title: "Program Developer",
    department: "Content & Development",
    location: "Melbourne (Hybrid)",
    type: "Part-time/Full-time",
    description:
      "Join our content development team to create innovative educational programs. We're seeking creative educators with curriculum design experience and a passion for enterprise education.",
  },
  {
    title: "Administrative Support",
    department: "Operations",
    location: "Alphington, Melbourne",
    type: "Part-time",
    description:
      "Support our team with administrative tasks, bookings coordination, and customer service. Perfect for someone with strong organisational skills and attention to detail.",
  },
] as const;

export function CareersPage() {
  return (
    <InfoPageTemplate
      heroTitle="Join our team"
      heroDescription="Be part of a team that's transforming education and inspiring the next generation"
    >
      <section className="py-14 sm:py-20 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-brand-600 mb-2">
              Why work with us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-10">
              Make a Difference in Education
            </h2>
            <div className="space-y-6 text-neutral-700 text-base sm:text-lg leading-relaxed">
              <p>
                At Driven Outcomes, we&apos;re more than just a
                company—we&apos;re a community of passionate educators,
                facilitators, and innovators dedicated to transforming how
                students learn. Since 2016, we&apos;ve partnered with over 500
                schools and impacted more than 200,000 students across
                Australia.
              </p>
              <p>
                We believe that great education happens when passionate people
                come together. Whether you&apos;re facilitating programs in
                schools, developing new content, or supporting our operations,
                you&apos;ll be part of a team that values creativity,
                collaboration, and making a real impact.
              </p>
              <p>
                If you&apos;re looking for a role where you can grow
                professionally, work flexibly, and contribute to meaningful
                educational experiences, we&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-brand-600 mb-2 text-center">
              What we offer
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mb-12 text-center">
              Benefits & Perks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-primary-brand-300 hover:shadow-md transition-all duration-200"
                >
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-brand-600 mb-2 text-center">
              Current opportunities
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mb-12 text-center">
              Open Positions
            </h2>
            <div className="space-y-6">
              {OPEN_POSITIONS.map((position) => (
                <div
                  key={position.title}
                  className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 hover:border-primary-brand-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-neutral-600">
                        <span className="inline-flex items-center gap-1.5">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          {position.department}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {position.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {position.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    {position.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-brand-600 mb-2 text-center">
              Get in touch
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mb-6 text-center">
              Interested in Joining Us?
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed text-center mb-8">
              We&apos;re always looking for passionate people to join our team.
              Even if you don&apos;t see a position that matches your skills
              right now, we&apos;d love to hear from you. Send us your resume
              and a brief introduction, and we&apos;ll keep you in mind for
              future opportunities.
            </p>
            <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 sm:p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-brand-100 text-primary-brand-600">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                      Send us an email
                    </h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      Include your resume and tell us why you&apos;re interested
                      in joining our team.
                    </p>
                    <a
                      href="mailto:info@drivenoutcomes.com.au?subject=Career Inquiry"
                      className="text-primary-brand-600 hover:text-primary-brand-700 font-medium text-sm inline-flex items-center gap-1.5"
                    >
                      info@drivenoutcomes.com.au
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-brand-100 text-primary-brand-600">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                      Give us a call
                    </h3>
                    <p className="text-neutral-600 text-sm mb-2">
                      Prefer to chat? We&apos;d love to hear from you.
                    </p>
                    <a
                      href="tel:+61394156327"
                      className="text-primary-brand-600 hover:text-primary-brand-700 font-medium text-sm inline-flex items-center gap-1.5"
                    >
                      03 9415 6327
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InfoPageTemplate>
  );
}
