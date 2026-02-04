import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
  id?: string;
}

export function FaqSection({
  items,
  title = "Frequently asked questions",
  id = "faq",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 md:py-20" id={id}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-neutral-900 text-center mb-10 sm:mb-12">
            {title}
          </h2>
          <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white divide-y divide-neutral-200">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 px-5 sm:px-6 text-left font-semibold text-neutral-900 hover:bg-neutral-50 transition-colors"
                  >
                    <span className="text-base sm:text-lg">
                      {item.question}
                    </span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="pb-5 px-5 sm:px-6 pt-0 text-neutral-600 text-sm sm:text-base leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
