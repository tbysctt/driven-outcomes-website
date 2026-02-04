const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];

const AVAILABILITY_LEVELS = [
  { label: "Open for Bookings", color: "bg-primary-brand-500", textColor: "text-white" },
  { label: "Moderate Availability", color: "bg-primary-brand-300", textColor: "text-white" },
  { label: "Limited Availability", color: "bg-secondary-brand-400", textColor: "text-white" },
  {
    label: "Fully Booked / Check for Cancellations",
    color: "bg-highlight-500",
    textColor: "text-white",
  },
  { label: "Unavailable - Contact Us", color: "bg-neutral-400", textColor: "text-white" },
] as const;

export type AvailabilityStatus = 0 | 1 | 2 | 3 | 4;

function dateKey(year: number, month: number, day: number): string {
  const m = String(month).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

function buildAvailabilityByDate(): Record<string, AvailabilityStatus> {
  const result: Record<string, AvailabilityStatus> = {};
  const months = [
    { year: 2026, month: 2, days: 28 },
    { year: 2026, month: 3, days: 31 },
    { year: 2026, month: 4, days: 30 },
  ];
  for (const { year, month, days } of months) {
    for (let day = 1; day <= days; day++) {
      const d = new Date(year, month - 1, day);
      const dayOfWeek = d.getDay();
      const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
      if (isWeekday) {
        result[dateKey(year, month, day)] = 0;
      }
    }
  }
  result["2026-02-11"] = 1;
  result["2026-03-04"] = 1;
  result["2026-04-08"] = 1;
  result["2026-02-19"] = 3;
  result["2026-03-25"] = 3;
  return result;
}

const AVAILABILITY_BY_DATE = buildAvailabilityByDate();

function getCalendarDays(year: number, month: number) {
  const first = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const startPadding = (first.getDay() + 6) % 7;
  const padding = Array(startPadding).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  return [...padding, ...days];
}

interface MonthCalendarProps {
  year: number;
  month: number;
  availabilityByDate: Record<string, AvailabilityStatus>;
}

function MonthCalendar({ year, month, availabilityByDate }: MonthCalendarProps) {
  const days = getCalendarDays(year, month);
  const monthName = new Date(year, month - 1, 1).toLocaleString("default", {
    month: "long",
  });

  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-600 mb-2">
        {monthName} {year}
      </h4>
      <div className="grid grid-cols-7 gap-0.5 text-center">
        {WEEKDAYS.map((d, i) => (
          <span key={i} className="text-xs font-semibold text-neutral-500 py-1">
            {d}
          </span>
        ))}
        {days.map((d, i) => {
          if (d === null) {
            return <span key={i} className="py-1" />;
          }
          const key = dateKey(year, month, d);
          const status = availabilityByDate[key];
          const level = status !== undefined ? AVAILABILITY_LEVELS[status] : null;
          const bgClass = level ? level.color : "bg-neutral-100";
          const textClass = level ? level.textColor : "text-neutral-700";

          return (
            <span
              key={i}
              className={`py-1 text-sm rounded ${bgClass} ${textClass}`}
              title={level ? level.label : undefined}
            >
              {d}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function BookingAvailability() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900 text-center mb-6">
            Booking Availability
          </h2>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {AVAILABILITY_LEVELS.map(({ label, color }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-sm text-neutral-700"
              >
                <span className={`h-3 w-3 rounded-full shrink-0 ${color}`} />
                {label}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14">
            <MonthCalendar
              year={2026}
              month={2}
              availabilityByDate={AVAILABILITY_BY_DATE}
            />
            <MonthCalendar
              year={2026}
              month={3}
              availabilityByDate={AVAILABILITY_BY_DATE}
            />
            <MonthCalendar
              year={2026}
              month={4}
              availabilityByDate={AVAILABILITY_BY_DATE}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
