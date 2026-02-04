import { Link } from "react-router-dom";
import { useTypingAnimation } from "../hooks/useTypingAnimation";
// import heroVideo from "../assets/vecteezy_two-girls-run-to-play-with-extend-the-arms-and_9171699.mp4";
import heroVideo from "../assets/Video-Header-2.mp4";

const headingOptions: string[] = [
  "Curious Minds",
  "Primary Students",
  "Secondary Students",
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
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Dark Overlay for Text Readability - Stronger on mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-grey-900/85 via-slate-grey-800/75 to-slate-grey-950/85 sm:from-slate-grey-900/80 sm:via-slate-grey-800/70 sm:to-slate-grey-950/80 z-[1]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-[2] w-full">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-pearl-aqua-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
            Australia's Most Engaging Incursions
          </span>
          <h1 className="leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-balance text-white uppercase mb-4 sm:mb-6">
            <span className="block sm:inline">Hands-On Learning</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline">
              for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pearl-aqua-400 via-cool-steel-400 to-thistle-400">
                {animatedText}
                <span className="animate-pulse">|</span>
              </span>
            </span>
          </h1>
          <p className="my-4 sm:my-6 text-base sm:text-lg md:text-xl text-slate-grey-200 sm:text-slate-grey-300 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
            Hands-on learning for Prep to Year 12 that sparks creativity, confidence and real-world skills. Our interactive, curriculum-aligned incursions empower students to lead, build, solve, design, and grow — from STEM and entrepreneurship to wellbeing and teamwork.
          </p>
          <p className="text-base text-xl text-white/90 font-semibold mt-8 sm:mt-10 mb-10 sm:mb-8">
            I'm looking for...
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <Link
              to="/miniboss"
              className="inline-flex justify-center items-center rounded-none px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-bold uppercase tracking-wide transition-all duration-200 text-white border-2 border-white !no-underline hover:bg-white hover:text-slate-grey-900"
            >
              Primary School Incursions
            </Link>
            <Link
              to="/tripod"
              className="inline-flex justify-center items-center rounded-none px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-bold uppercase tracking-wide transition-all duration-200 text-white border-2 border-white !no-underline hover:bg-white hover:text-slate-grey-900"
            >
              Secondary School Incursions
            </Link>
            <Link
              to="/miniboss-holiday"
              className="inline-flex justify-center items-center rounded-none px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-bold uppercase tracking-wide transition-all duration-200 text-white border-2 border-white !no-underline hover:bg-white hover:text-slate-grey-900"
            >
              Holiday Program Incursions
            </Link>
            <Link
              to="/talknow"
              className="inline-flex justify-center items-center rounded-none px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-bold uppercase tracking-wide transition-all duration-200 text-white border-2 border-white !no-underline hover:bg-white hover:text-slate-grey-900"
            >
              Partnerships (TalkNOW)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
