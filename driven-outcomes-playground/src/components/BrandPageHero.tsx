import heroVideo from "../assets/vecteezy_two-girls-run-to-play-with-extend-the-arms-and_9171699.mp4";

interface Props {
  title: string;
  subTitle: string;
  description: string;
  logo?: string;
}

export function BrandPageHero(props: Props) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 flex items-center">
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
      <div className="absolute inset-0 bg-linear-to-br from-neutral-900/85 via-neutral-800/75 to-neutral-950/85 sm:from-neutral-900/80 sm:via-neutral-800/70 sm:to-neutral-950/80 z-1" />

      {/* Wave bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-2 leading-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-20"
          aria-hidden="true"
        >
          <path
            fill="var(--color-neutral-50)"
            d="M0 60 C400 9 800 111 1200 60 L1200 120 L0 120 Z"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-3 w-full">
        <div
          className={
            props.logo
              ? "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 max-w-6xl mx-auto"
              : "max-w-4xl mx-auto text-center"
          }
        >
          <div className={props.logo ? "text-left max-w-xl" : ""}>
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-primary-brand-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
              {props.subTitle}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase mb-4 sm:mb-6">
              {props.title}
            </h1>
            <p
              className={
                props.logo
                  ? "text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 sm:mb-10"
                  : "text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10"
              }
            >
              {props.description}
            </p>
          </div>
          {props.logo && (
            <div className="shrink-0 lg:self-center ml-auto lg:ml-0 text-right">
              <img
                src={props.logo}
                alt=""
                className="max-w-40 sm:max-w-44 md:max-w-48 lg:max-w-52 w-auto object-contain drop-shadow-lg mx-auto lg:ml-auto lg:mr-0"
                aria-hidden="true"
              />
              {/* <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/80 font-medium"> */}
              {/*   by Driven Outcomes */}
              {/* </p> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
