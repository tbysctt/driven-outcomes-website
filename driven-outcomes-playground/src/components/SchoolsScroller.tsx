import { useRef, useEffect } from "react";
import { schools } from "../data/schools-and-organisations";

const ROWS = 5;
const COLUMN_WIDTH = 280;

function buildColumns(schoolList: string[]): string[][] {
  const columns: string[][] = [];
  for (let i = 0; i < schoolList.length; i += ROWS) {
    columns.push(schoolList.slice(i, i + ROWS));
  }
  return columns;
}

const AUTO_SPEED_PX_PER_SEC = 30;

export function SchoolsScroller() {
  const columns = buildColumns(schools);
  const duplicatedColumns = [...columns, ...columns];

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const singleSetWidthRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let lastTime = performance.now();

    function tick(now: number) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      const content = contentRef.current;
      if (
        content &&
        content.scrollWidth > 0 &&
        singleSetWidthRef.current === 0
      ) {
        singleSetWidthRef.current = content.scrollWidth / 2;
      }

      const singleSet = singleSetWidthRef.current;
      if (singleSet > 0) {
        if (!isDraggingRef.current) {
          offsetRef.current += AUTO_SPEED_PX_PER_SEC * dt;
        }
        const displayOffset =
          ((offsetRef.current % singleSet) + singleSet) % singleSet;
        content?.style.setProperty(
          "transform",
          `translateX(-${displayOffset}px)`,
        );
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onWheel = (e: React.WheelEvent) => {
    if (e.deltaX === 0) return;
    offsetRef.current += e.deltaX;
    e.preventDefault();
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    if (containerRef.current) containerRef.current.style.cursor = "grabbing";
    e.preventDefault();
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      offsetRef.current =
        dragStartOffsetRef.current + (dragStartXRef.current - e.clientX);
    };
    const onMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        if (containerRef.current) containerRef.current.style.cursor = "grab";
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <section className="py-8 sm:py-8 bg-slate-grey-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-grey-900 mb-2">
            Schools We've Worked With
          </h2>
          <p className="text-lg text-slate-grey-600">
            Hundreds of schools  and organisations trust us across Australia
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-linear-to-r from-slate-grey-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-linear-to-l from-slate-grey-100 to-transparent z-10 pointer-events-none" />

          <div
            ref={containerRef}
            className="overflow-hidden cursor-grab select-none"
            onWheel={onWheel}
            onMouseDown={onMouseDown}
            style={{ touchAction: "none" }}
          >
            <div
              ref={contentRef}
              className="flex gap-x-10 sm:gap-x-12 will-change-transform"
              style={{ width: "max-content" }}
            >
              {duplicatedColumns.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className="flex flex-col gap-y-4 sm:gap-y-5 shrink-0"
                  style={{ width: COLUMN_WIDTH }}
                >
                  {column.map((name, rowIndex) => (
                    <div
                      key={`${colIndex}-${rowIndex}`}
                      className="text-sm sm:text-base font-medium text-slate-grey-700 whitespace-nowrap truncate pointer-events-none"
                      title={name}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center">
          <a
            href={"schools-and-organisations"}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold transition-colors text-thistle-600 hover:text-thistle-800"
          >
            See all
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </p>
      </div>
    </section>
  );
}
