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
    title: "Support",
    subtitle: "Send us a message",
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
      <section className="relative py-16 sm:py-20 md:py-24 bg-neutral-800">
        <div className="absolute inset-0 bg-linear-to-br from-primary-brand-900/40 via-transparent to-secondary-brand-900/40" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase mb-4">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
              Reach out to discover how we can help your students develop essential life
              skills and capabilities
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {CONTACT_CARDS.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  card.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block p-6 sm:p-8 bg-white border border-neutral-200/40 rounded-sm hover:border-primary-brand-200 transition-all text-left no-underline!"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-brand-100 text-primary-brand-600">
                    {card.icon === "phone" && (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    )}
                    {card.icon === "email" && (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    {card.icon === "location" && (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-1">
                      {card.title}
                    </h3>
                    <p className="text-base font-semibold text-neutral-900 mb-0.5">
                      {card.subtitle}
                    </p>
                    <p className="text-neutral-700">{card.value}</p>
                  </div>
                </div>
              </a>
            ))}
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
    </>
  );
}
