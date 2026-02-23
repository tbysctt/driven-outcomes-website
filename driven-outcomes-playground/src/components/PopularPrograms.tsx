import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { programs } from "../data/programs";

function PopularProgram({
  program,
  index,
}: {
  program: (typeof programs)[0];
  index: number;
}) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(180);

  useEffect(() => {
    const updateFontSize = () => {
      if (imageRef.current) {
        const height = imageRef.current.offsetHeight;
        setFontSize(height);
      }
    };

    updateFontSize();
    const resizeObserver = new ResizeObserver(updateFontSize);
    if (imageRef.current) {
      resizeObserver.observe(imageRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <Link
      to={`/programs/${program.slug}`}
      className="shrink-0 group relative flex no-underline"
      style={{ width: "400px" }}
    >
      <div
        className="shrink-0 z-10 number-container"
        style={{ width: "100px" }}
      >
        <svg
          width="100%"
          height="100%"
          className="number-svg"
          viewBox="0 0 100 180"
          preserveAspectRatio="none"
        >
          <text
            x="50"
            y="90"
            textAnchor="middle"
            dominantBaseline="central"
            fill="currentColor"
            className="number-text text-white/30"
            fontSize={fontSize}
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontWeight: "900",
            }}
          >
            {index + 1}
          </text>
        </svg>
      </div>
      <div
        ref={imageRef}
        className="relative overflow-hidden rounded-r-md bg-neutral-800 transition-all duration-300 ease-out group-hover:scale-110 z-20 group-hover:z-30 shadow-lg group-hover:shadow-2xl group-hover:shadow-black/50 -ml-3 flex-1 image-container aspect-768/550"
      >
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={program.imageUrl}
            alt={program.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-linear-to-t from-black via-black/98 to-transparent">
          <h3 className="text-white font-bold text-lg mb-2 line-clamp-1">
            {program.name}
          </h3>
          {program.tagline && (
            <p className="text-neutral-300 text-sm line-clamp-2 mb-2">
              {program.tagline}
            </p>
          )}
          {program.description && (
            <p className="text-neutral-400 text-xs line-clamp-2">
              {program.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export function PopularPrograms() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const popularPrograms = programs
    .filter((program) => program.isPopular)
    .slice(0, 10);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      id="programs"
      className="relative bg-neutral-900 py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Top {popularPrograms.length} Programs Now
              </h2>
            </div>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base">
            We deliver incursions across all age groups. Here are the programs
            people are loving right now!
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden pb-6 scrollbar-hide"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {popularPrograms.map((program, index) => (
              <PopularProgram
                key={program.slug}
                program={program}
                index={index}
              />
            ))}
          </div>
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .number-container {
            align-self: stretch;
          }
          .number-svg {
            display: block;
          }
          .number-text {
            font-size: 220px;
          }
        `}</style>
      </div>
    </section>
  );
}
