import { useMemo } from "react";
import { schools, organisations } from "../data/schools-and-organisations";

function sortAlphabetically(names: string[]): string[] {
  return [...names].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" }),
  );
}

function groupByFirstLetter(names: string[]): Map<string, string[]> {
  const grouped = new Map<string, string[]>();
  for (const name of names) {
    const first = name.trim().charAt(0).toUpperCase();
    const letter = /[A-Z]/.test(first) ? first : "#";
    if (!grouped.has(letter)) grouped.set(letter, []);
    grouped.get(letter)!.push(name);
  }
  const keys = [...grouped.keys()].sort((a, b) => {
    if (a === "#") return 1;
    if (b === "#") return -1;
    return a.localeCompare(b);
  });
  const sorted = new Map<string, string[]>();
  for (const key of keys) sorted.set(key, grouped.get(key)!);
  return sorted;
}

function LetterSection({
  letter,
  names,
  id,
}: {
  letter: string;
  names: string[];
  id: string;
}) {
  return (
    <section id={id} className="mb-10 scroll-mt-64">
      <h3 className="flex items-center gap-3 mt-10 first:mt-0 mb-4">
        <span className="text-2xl font-bold text-thistle-900 border-b-2 border-slate-grey-200 pb-1">
          {letter === "#" ? "0–9 & symbols" : letter}
        </span>
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2 list-none p-0 m-0">
        {names.map((name, index) => (
          <li
            key={`${name}-${index}`}
            className="text-sm sm:text-base font-medium text-slate-grey-700 py-1"
          >
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}

function AlphabetNav({
  letters,
  idPrefix,
}: {
  letters: string[];
  idPrefix: string;
}) {
  return (
    <nav
      className="hidden sm:flex flex-wrap justify-center gap-1.5 mt-6 p-4 border-b border-slate-grey-200/60"
      aria-label="Jump to letter"
    >
      {letters.map((letter) => (
        <a
          key={letter}
          href={`#${idPrefix}-letter-${letter}`}
          className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-slate-grey-600 hover:text-pearl-aqua-700 hover:bg-pearl-aqua-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pearl-aqua-500 focus:ring-offset-2 focus:ring-offset-white"
        >
          {letter}
        </a>
      ))}
    </nav>
  );
}

const STICKY_HEADER_OFFSET = "4rem";

function ListWithLetterSections({
  items,
  title,
  idPrefix,
}: {
  items: string[];
  title: string;
  idPrefix: string;
}) {
  const sorted = useMemo(() => sortAlphabetically(items), [items]);
  const byLetter = useMemo(() => groupByFirstLetter(sorted), [sorted]);
  const letters = useMemo(() => [...byLetter.keys()], [byLetter]);

  return (
    <section className="mb-14 last:mb-0">
      <div
        className="sticky z-40 py-3 bg-white"
        style={{ top: STICKY_HEADER_OFFSET }}
      >
        <div className="max-w-6xl mx-auto mt-5">
          <h2 className="text-xl sm:text-2xl md:text-3xl uppercase font-extrabold tracking-tight text-slate-grey-900">
            {title}
          </h2>
          <AlphabetNav letters={letters} idPrefix={idPrefix} />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div>
          {letters.map((letter) => (
            <LetterSection
              key={letter}
              letter={letter}
              names={byLetter.get(letter)!}
              id={`${idPrefix}-letter-${letter}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SchoolsAndOrganisationsPage() {
  return (
    <main className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-grey-900 mb-3">
            Who We've Worked With
          </h1>
          <p className="text-lg text-slate-grey-600 max-w-2xl mx-auto">
            We've worked with hundreds of schools and organisations across
            Australia.
          </p>
        </div>

        <ListWithLetterSections
          items={schools}
          title="Schools We've Worked With"
          idPrefix="schools"
        />

        <ListWithLetterSections
          items={organisations}
          title="Organisations We've Worked With"
          idPrefix="orgs"
        />

        <p className="mt-10 text-center text-slate-grey-500 text-sm">
          {schools.length} schools and {organisations.length} organisations
        </p>
      </div>
    </main>
  );
}
