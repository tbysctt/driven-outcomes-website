import { Link } from "react-router-dom";
import { useTypingAnimation } from "../hooks/useTypingAnimation";

const headingOptions: string[] = [
  "Curious Minds",
  "Future Leaders",
  "Problem Solvers",
  "Team Players"
];

export function LandingHero() {
  const animatedText = useTypingAnimation({
    words: headingOptions,
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000,
    loop: true,
  });

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32 min-h-125 sm:min-h-150 md:min-h-175 flex items-center">
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
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-primary-brand-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
            Australia's Most Engaging Incursions
          </span>
          <h1 className="leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-balance text-white uppercase mb-4 sm:mb-6">
            <span className="block sm:inline">Hands-On Learning</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline">
              for{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-brand-400 via-secondary-brand-400 to-highlight-400">
                {animatedText}
                <span className="animate-pulse">|</span>
              </span>
            </span>
          </h1>
          {/* <p className="my-4 sm:my-6 text-base sm:text-lg md:text-xl text-neutral-200 sm:text-neutral-300 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0"> */}
          {/*   Hands-on learning for Prep to Year 12 that sparks creativity, confidence and real-world skills. Our interactive, curriculum-aligned incursions empower students to lead, build, solve, design, and grow — from STEM and entrepreneurship to wellbeing and teamwork. */}
          {/* </p> */}
          <p className="text-base text-white/90 font-semibold mt-8 sm:mt-10 mb-10 sm:mb-8">
            I'm looking for...
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <Link
              to="/primary-school"
              className="inline-flex justify-center items-center rounded-none px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-bold uppercase tracking-wide transition-all duration-200 text-white border-2 border-white no-underline! hover:bg-white hover:text-neutral-900"
            >
              Primary School Incursions
            </Link>
            <Link
              to="/secondary-school"
              className="inline-flex justify-center items-center rounded-none px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-bold uppercase tracking-wide transition-all duration-200 text-white border-2 border-white no-underline! hover:bg-white hover:text-neutral-900"
            >
              Secondary School Incursions
            </Link>
            <Link
              to="/oshc-and-holidays"
              className="inline-flex justify-center items-center rounded-none px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-bold uppercase tracking-wide transition-all duration-200 text-white border-2 border-white no-underline! hover:bg-white hover:text-neutral-900"
            >
              Holiday Program Incursions
            </Link>
            <Link
              to="/talknow"
              className="inline-flex justify-center items-center rounded-none px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-bold uppercase tracking-wide transition-all duration-200 text-white border-2 border-white no-underline! hover:bg-white hover:text-neutral-900"
            >
              Partnerships (TalkNOW)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
