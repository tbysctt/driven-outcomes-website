import { useState, useEffect, useCallback, useRef } from "react";
import { testimonials, type Testimonial } from "../data/testimonials";
import { FadeInSection } from "./FadeInSection";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Check if text overflows the max height
    if (textRef.current) {
      const maxHeight = 144; // 9rem = 144px
      const isOverflowing = textRef.current.scrollHeight > maxHeight;
      setShowReadMore(isOverflowing);
    }
  }, [testimonial.testimonial]);

  return (
    <div className="bg-white rounded-lg p-5 sm:p-6 md:p-8 shadow-lg border border-neutral-100 h-full flex flex-col">
      <div className="flex-1 flex flex-col">
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-primary-brand-300 mb-3 sm:mb-4 shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
        </svg>
        <div className="flex-1 flex flex-col min-h-0 relative">
          <p
            ref={textRef}
            className="text-neutral-700 text-base sm:text-lg leading-relaxed italic"
            style={{
              maxHeight: isExpanded ? "none" : "9rem",
              overflow: isExpanded ? "visible" : "hidden",
              transition: "max-height 0.3s ease-in-out",
            }}
          >
            "{testimonial.testimonial}"
          </p>
          {!isExpanded && showReadMore && (
            <div
              className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent pointer-events-none"
              aria-hidden="true"
            />
          )}
          {showReadMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`mt-3 text-xs sm:text-sm font-medium text-primary-brand-600 hover:text-primary-brand-700 transition-colors self-start ${
                !isExpanded ? "relative z-10" : ""
              }`}
              aria-expanded={isExpanded}
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>
      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-neutral-100 shrink-0">
        <p className="font-semibold text-sm sm:text-base text-neutral-900">
          {testimonial.title}
        </p>
        {testimonial.program && (
          <p className="text-xs sm:text-sm text-primary-brand-600 font-medium mt-1">
            Program: {testimonial.program}
          </p>
        )}
      </div>
    </div>
  );
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Detect screen size for responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth >= 768 ? 2 : 1);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Calculate total slides: we can scroll until the last items are visible
  const totalSlides = Math.max(1, testimonials.length - itemsPerView + 1);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    if (currentIndex >= totalSlides - 1) return; // Stop at the last slide

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= totalSlides - 1) {
          setIsAutoPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, totalSlides]);

  // Calculate transform values - responsive based on itemsPerView
  // On mobile (itemsPerView = 1): move by 100% + gap (1rem = gap-4)
  // On desktop (itemsPerView = 2): move by 50% + gap (0.75rem)
  const translatePercentage = currentIndex * (100 / itemsPerView);
  const translateGap =
    itemsPerView === 1
      ? currentIndex * 1 // gap-4 = 1rem on mobile
      : currentIndex * 0.75; // gap-6 = 0.75rem on desktop (but we use 0.75 for calc)

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-neutral-50">
      <FadeInSection>
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-neutral-900">
              What are students and teachers saying?
            </h2>
            <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 rounded-full mx-auto"></div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2 sm:px-0">
              Hear from students and teachers about their experiences with our
              incursions and programs.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={() => {
                prevSlide();
                setIsAutoPlaying(false);
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-primary-brand-600 hover:border-primary-brand-300 transition-colors"
              aria-label="Previous testimonials"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                nextSlide();
                setIsAutoPlaying(false);
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-primary-brand-600 hover:border-primary-brand-300 transition-colors"
              aria-label="Next testimonials"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Testimonials Carousel */}
            <div className="overflow-hidden px-2 sm:px-4">
              <div
                className="flex gap-4 sm:gap-5 md:gap-6 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(calc(-${translatePercentage}% - ${translateGap}rem))`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="shrink-0 w-full md:w-[calc(50%-0.75rem)]"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary-brand-500 w-6 sm:w-8"
                      : "bg-neutral-300 hover:bg-neutral-400 w-2 sm:w-3"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
