import { Link } from "react-router-dom";
import { useTypingAnimation } from "../hooks/useTypingAnimation";

import miniBossLogo from "../assets/brand-logos/miniboss-incursions/Mini BOSS Incursions logo White Circle.png";

import miniBossHolidayProgramsLogo from "../assets/brand-logos/miniboss-holiday-programs/MBHP_PurpleTransparent.png";
import talkNowLogo from "../assets/brand-logos/talknow/Talk Now - LOGO - WHITE with WHITE slogan.png";
import tripodLogo from "../assets/brand-logos/tripod/Tripod_Circle_Logos/Tripod_White.png";

const headingOptions: string[] = [
  "Curious Minds",
  "Future Leaders",
  "Problem Solvers",
  "Team Players",
];

const HERO_BUTTONS = [
  {
    linkPath: "/primary-school",
    imgSrc: miniBossLogo,
    label: "MiniBOSS",
    subtitle: "Incursions for Primary Schools",
  },
  {
    linkPath: "/secondary-school",
    imgSrc: tripodLogo,
    label: "Tripod",
    subtitle: "Incursions for Secondary Schools",
  },
  {
    linkPath: "/oshc-and-holidays",
    imgSrc: miniBossHolidayProgramsLogo,
    label: "MiniBOSS Holidays",
    subtitle: "Incursions and Excursions for OSHC and Vacation Care",
  },
  {
    linkPath: "/talknow",
    imgSrc: talkNowLogo,
    label: "TalkNOW!",
    subtitle: "Respectful Relationship Education (RRE)",
  },
] as const;

function LandingHeroButton(props: {
  linkPath: string;
  imgSrc: string;
  label: string;
  subtitle: string;
}) {
  return (
    <Link
      to={props.linkPath}
      className="group flex w-full max-w-xs flex-col items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-6 py-5 sm:px-8 sm:py-6 backdrop-blur-sm no-underline! transition-all duration-200 hover:border-white/30 hover:bg-white/10 sm:max-w-none"
    >
      <span className="flex h-32 w-32 sm:h-32 sm:w-32 shrink-0 items-center justify-center">
        <img
          src={props.imgSrc}
          alt=""
          className="max-h-32 sm:max-h-32 object-contain"
        />
      </span>
      <span className="flex w-full h-full flex-col gap-0.5">
        <span className="text-lg sm:text-xl font-bold text-white mt-3 mb-1">
          {props.label}
        </span>
        <div></div>
        <span className="text-sm sm:text-base italic text-white/60">
          {props.subtitle}
        </span>
      </span>
    </Link>
  );
}

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
        <div className="max-w-5xl mx-auto text-center">
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
          <p className="text-lg text-white/90 font-semibold mt-8 sm:mt-10 mb-10 sm:mb-8">
            I'm looking for...
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 justify-items-center">
            {HERO_BUTTONS.map((btn) => (
              <LandingHeroButton
                key={btn.linkPath}
                linkPath={btn.linkPath}
                imgSrc={btn.imgSrc}
                label={btn.label}
                subtitle={btn.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
