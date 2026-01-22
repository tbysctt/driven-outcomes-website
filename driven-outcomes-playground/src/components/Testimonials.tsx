import { useState, useEffect, useCallback } from "react";

type Testimonial = {
  program: string;
  title: string;
  testimonial: string;
};

const testimonials: Testimonial[] = [
  {
    program: "Online Program",
    title: "Secondary Student",
    testimonial:
      "I really enjoyed this, I just wanted to say thank you. It has been really really miraculous.",
  },
  {
    program: "MiniBOSS Incursions",
    title: "Primary Teacher",
    testimonial:
      "The students were completely engaged from start to finish. It was wonderful to see them so excited about learning.",
  },
  {
    program: "Tripod Enterprise",
    title: "Year 10 Student",
    testimonial:
      "This program changed my perspective on what I can achieve. I never thought I could run my own business idea.",
  },
  {
    program: "School Partnership",
    title: "Principal",
    testimonial:
      "Driven Outcomes has become an essential part of our curriculum. The impact on student confidence is remarkable.",
  },
  {
    program: "MiniBOSS Incursions",
    title: "Year 4 Student",
    testimonial:
      "It was the best day ever! I loved creating my own product and presenting it to my class.",
  },
  {
    program: "Tripod Enterprise",
    title: "Careers Coordinator",
    testimonial:
      "The practical skills students gain are invaluable. We've seen a real shift in how they approach problem-solving.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg border border-slate-grey-100 h-full flex flex-col">
      <div className="flex-1">
        <svg
          className="w-10 h-10 text-pearl-aqua-300 mb-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
        </svg>
        <p className="text-slate-grey-700 text-lg leading-relaxed italic">
          "{testimonial.testimonial}"
        </p>
      </div>
      <div className="mt-6 pt-6 border-t border-slate-grey-100">
        <p className="font-semibold text-slate-grey-900">{testimonial.title}</p>
        <p className="text-sm text-pearl-aqua-600 font-medium">
          {testimonial.program}
        </p>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Number of testimonials to show at once
  const itemsPerView = 2;
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Get current testimonials to display
  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * itemsPerView;
    return testimonials.slice(startIndex, startIndex + itemsPerView);
  };

  return (
    <section className="py-20 bg-slate-grey-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-grey-900">
            What People Say
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-pearl-aqua-500 to-cool-steel-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-lg text-slate-grey-600 max-w-2xl mx-auto">
            Hear from students, teachers, and schools about their experiences
            with our programs.
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-grey-200 flex items-center justify-center text-slate-grey-600 hover:text-pearl-aqua-600 hover:border-pearl-aqua-300 transition-colors"
            aria-label="Previous testimonials"
          >
            <svg
              className="w-5 h-5"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-grey-200 flex items-center justify-center text-slate-grey-600 hover:text-pearl-aqua-600 hover:border-pearl-aqua-300 transition-colors"
            aria-label="Next testimonials"
          >
            <svg
              className="w-5 h-5"
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

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {getCurrentTestimonials().map((testimonial, index) => (
              <div
                key={currentIndex * itemsPerView + index}
                className="transition-opacity duration-500"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-pearl-aqua-500 w-8"
                    : "bg-slate-grey-300 hover:bg-slate-grey-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
