import { useTypingAnimation } from "../hooks/useTypingAnimation";
import heroVideo from "../assets/vecteezy_two-girls-run-to-play-with-extend-the-arms-and_9171699.mp4";

const headingOptions: string[] = [
  "Curious Minds",
  "Primary Students",
  "Secondary Students",
  "Future Leaders",
  "Problem Solvers",
  "Team Players"
];

export function Hero() {
  const animatedText = useTypingAnimation({
    words: headingOptions,
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000,
    loop: true,
  });

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
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
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-grey-900/80 via-slate-grey-800/70 to-slate-grey-950/80 z-[1]"></div>

      <div className="container mx-auto relative z-[2]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-pearl-aqua-300 text-sm font-semibold uppercase tracking-wider mb-6">
            Australia's Most Engaging Incursions
          </span>
          <h1 className="leading-tight text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance text-white uppercase mb-6">
            <span className="whitespace-nowrap">Hands-On Learning</span>
            <br />
            <span className="whitespace-nowrap">
              for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pearl-aqua-400 via-cool-steel-400 to-thistle-400">
                {animatedText}
                <span className="animate-pulse">|</span>
              </span>
            </span>
          </h1>
          <p className="my-6 text-lg md:text-xl text-slate-grey-300 leading-relaxed max-w-2xl mx-auto">
            {/* Prep to Year 12 programs that spark creativity, confidence and */}
            {/* real-world skills. Our interactive, curriculum-aligned incursions */}
            {/* empower students to lead, build, solve, design, and grow. */}

            Hands-on learning for Prep to Year 12 that sparks creativity, confidence and real-world skills. Our interactive, curriculum-aligned incursions empower students to lead, build, solve, design, and grow — from STEM and entrepreneurship to wellbeing and teamwork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="#programs"
              className="inline-flex justify-center rounded-none px-8 py-3 text-base font-bold uppercase tracking-wide transition text-gradient-to-r from-pearl-aqua-500 to-cool-steel-500 text-white hover:opacity-90 !no-underline"
            >
              Explore Programs
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center rounded-full px-8 py-3 text-base font-bold uppercase tracking-wide transition bg-white/10 text-white border border-white/20 hover:bg-white/20 !no-underline"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
