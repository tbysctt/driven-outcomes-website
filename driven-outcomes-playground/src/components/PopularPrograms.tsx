import { useRef, useEffect } from "react";
import { programs } from "../data/programs";

export function PopularPrograms() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const popularPrograms = programs
    .filter((program) => program.isPopular)
    .slice(0, 10);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      container.style.cursor = "grabbing";
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      container.style.cursor = "grab";
    };

    const handleMouseUp = () => {
      isDown = false;
      container.style.cursor = "grab";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
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
                Top 10 Programs Now
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
            className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden pb-6 scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {popularPrograms.map((program, index) => (
              <div
                key={program.slug}
                className="shrink-0 group relative flex"
                style={{ width: "400px" }}
              >
                <div
                  className="shrink-0 flex items-center justify-center z-10 number-container"
                  style={{ width: "80px" }}
                >
                  <span className="text-white font-black leading-none number-text">
                    {index + 1}
                  </span>
                </div>
                <div
                  className="relative overflow-hidden rounded-r-md bg-neutral-800 transition-all duration-300 ease-out group-hover:scale-110 z-20 group-hover:z-30 shadow-lg group-hover:shadow-2xl group-hover:shadow-black/50 -ml-3 flex-1 image-container"
                  style={{ aspectRatio: "16/9" }}
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
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-6 w-20 bg-linear-to-r from-neutral-900 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-6 w-20 bg-linear-to-l from-neutral-900 to-transparent pointer-events-none z-10" />
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .number-container {
            align-self: stretch;
          }
          .number-text {
            font-size: calc((400px - 80px) * 9 / 16);
            line-height: 1;
          }
        `}</style>
      </div>
    </section>
  );
}
