import { BookingAvailability } from "../components/BookingAvailability";
import { EnquiryForm } from "../components/EnquiryForm";

const CONTACT_CARDS = [
  {
    title: "Phone",
    subtitle: "Call us now!",
    value: "03 9415 6327",
    href: "tel:+61394156327",
    icon: "phone",
  },
  {
    title: "Email",
    subtitle: "Send us an email",
    value: "info@drivenoutcomes.com.au",
    href: "mailto:info@drivenoutcomes.com.au",
    icon: "email",
  },
  {
    title: "Address",
    subtitle: "Visit us",
    value: "3 Abbott St, Alphington VIC 3078",
    href: "https://maps.google.com/?q=3+Abbott+St+Alphington+VIC+3078",
    icon: "location",
  },
] as const;

export function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-neutral-800) 0%, var(--color-primary-brand-800) 30%, var(--color-secondary-brand-700) 60%, var(--color-highlight-700) 85%, var(--color-neutral-800) 100%)",
          }}
        />
        <div
          className="hero-glow absolute inset-0 z-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 50% -10%, var(--color-primary-brand-400), transparent 55%)",
          }}
        />
        <div
          className="hero-glow hero-glow-delay-2 absolute inset-0 z-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 110% 40%, var(--color-secondary-brand-400), transparent 50%)",
          }}
        />
        <div
          className="hero-glow hero-glow-delay-3 absolute inset-0 z-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at -10% 90%, var(--color-highlight-400), transparent 50%)",
          }}
        />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--color-neutral-800/60)_100%)]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-2 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase mb-4">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
              Reach out to discover how we can help your students develop
              essential life skills and capabilities
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 md:divide-x md:divide-neutral-200">
              {CONTACT_CARDS.map((card) => {
                const isLink = !!card.href;
                const Wrapper = isLink ? "a" : "div";
                return (
                  <Wrapper
                    key={card.title}
                    {...(isLink
                      ? {
                          href: card.href,
                          target: card.href.startsWith("http")
                            ? "_blank"
                            : undefined,
                          rel: card.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined,
                        }
                      : {})}
                    className="group flex flex-col items-center text-center py-8 px-6 md:py-10 md:px-8 no-underline!"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-200/80 text-neutral-600 group-hover:bg-primary-brand-500 group-hover:text-white transition-colors duration-200 mb-4">
                      {card.icon === "phone" && (
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.8}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      )}
                      {card.icon === "email" && (
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.8}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                      {card.icon === "location" && (
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.8}
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
                      )}
                    </span>
                    <span className="text-xs font-medium tracking-wide text-neutral-400 uppercase mb-1.5">
                      {card.title}
                    </span>
                    <span className="text-sm text-neutral-500 mb-2">
                      {card.subtitle}
                    </span>
                    <span className="text-base font-semibold text-neutral-900 group-hover:text-primary-brand-600 transition-colors wrap-break-word">
                      {card.value}
                    </span>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <BookingAvailability />

      <section
        className="py-12 sm:py-16 md:py-20 bg-neutral-50"
        id="enquiry-form"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900 text-center mb-2">
              Enquiry Form
            </h2>
            <p className="text-center text-neutral-600 mb-8">
              Fill out the form below and we&apos;ll be in touch!
            </p>
            <div className="bg-white border border-neutral-200/40 rounded-md p-6 sm:p-8">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900 text-center mb-6">
              Find us
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
              <iframe
                title="Driven Outcomes – 3 Abbott St, Alphington VIC 3078"
                src="https://www.google.com/maps?q=3+Abbott+St,+Alphington+VIC+3078,+Australia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
            <p className="mt-3 text-center text-sm text-neutral-600">
              3 Abbott St, Alphington VIC 3078
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
