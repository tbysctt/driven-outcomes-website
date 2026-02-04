const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];

function getCalendarDays(year: number, month: number) {
  const first = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const startPadding = (first.getDay() + 6) % 7;
  const padding = Array(startPadding).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  return [...padding, ...days];
}

function MonthCalendar({ year, month }: { year: number; month: number }) {
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
        {days.map((d, i) =>
          d === null ? (
            <span key={i} className="py-1" />
          ) : (
            <span
              key={i}
              className="py-1 text-sm text-neutral-700 bg-neutral-100 rounded"
            >
              {d}
            </span>
          ),
        )}
      </div>
    </div>
  );
}

const AVAILABILITY_LEVELS = [
  { label: "Open for Bookings", color: "bg-primary-brand-500" },
  { label: "Moderate Availability", color: "bg-primary-brand-300" },
  { label: "Limited Availability", color: "bg-secondary-brand-400" },
  {
    label: "Fully Booked / Check for Cancellations",
    color: "bg-highlight-500",
  },
  { label: "Unavailable - Contact Us", color: "bg-neutral-400" },
] as const;

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
          <h3 className="text-lg font-bold text-neutral-800 mb-4 text-center">
            School Holidays
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <MonthCalendar year={2026} month={2} />
            <MonthCalendar year={2026} month={3} />
            <MonthCalendar year={2026} month={4} />
          </div>
        </div>
      </div>
    </section>
  );
}
