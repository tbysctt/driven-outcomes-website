import { useState, useMemo } from "react";
import { programs, type YearLevel } from "../data/programs";
import { ProgramCard } from "../components/ProgramCard";
import { InfoHero } from "../components/InfoHero";
import { FadeInSection } from "../components/FadeInSection";

const STICKY_HEADER_OFFSET = "6rem";

export function BrowseProgramsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYearLevels, setSelectedYearLevels] = useState<YearLevel[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const allYearLevels = useMemo(() => {
    const yearLevelsSet = new Set<YearLevel>();
    programs.forEach((program) => {
      if (program.yearLevels) {
        program.yearLevels.forEach((level) => yearLevelsSet.add(level));
      }
    });
    return Array.from(yearLevelsSet).sort((a, b) => {
      if (a === "F") return -1;
      if (b === "F") return 1;

      const aIsSpecial = a === "OSHC" || a === "VCE Vocational Major";
      const bIsSpecial = b === "OSHC" || b === "VCE Vocational Major";

      if (aIsSpecial && bIsSpecial) {
        if (a === "OSHC") return -1;
        if (b === "OSHC") return 1;
        return 0;
      }

      if (aIsSpecial) return 1;
      if (bIsSpecial) return -1;

      return parseInt(a, 10) - parseInt(b, 10);
    });
  }, []);

  const allSkills = useMemo(() => {
    const skillsSet = new Set<string>();
    programs.forEach((program) => {
      program.focusedSkills.forEach((skill) => skillsSet.add(skill));
    });
    return Array.from(skillsSet).sort();
  }, []);

  const filteredPrograms = useMemo(() => {
    let filtered = programs;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (program) =>
          program.name.toLowerCase().includes(query) ||
          program.description.toLowerCase().includes(query),
      );
    }

    if (selectedYearLevels.length > 0) {
      filtered = filtered.filter((program) =>
        selectedYearLevels.some((level) => program.yearLevels?.includes(level)),
      );
    }

    if (selectedSkills.length > 0) {
      filtered = filtered.filter((program) =>
        selectedSkills.some((skill) => program.focusedSkills.includes(skill)),
      );
    }

    return filtered;
  }, [searchQuery, selectedYearLevels, selectedSkills]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );
  };

  const toggleYearLevel = (yearLevel: YearLevel) => {
    setSelectedYearLevels((prev) =>
      prev.includes(yearLevel)
        ? prev.filter((level) => level !== yearLevel)
        : [...prev, yearLevel],
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedYearLevels([]);
    setSelectedSkills([]);
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedYearLevels.length > 0 ||
    selectedSkills.length > 0;

  const uniquePrograms = useMemo(() => {
    const seen = new Set<string>();
    const deduplicated = filteredPrograms.filter((program) => {
      if (seen.has(program.slug)) {
        return false;
      }
      seen.add(program.slug);
      return true;
    });

    return deduplicated.sort((a, b) => {
      const aIsNew = a.isNew === true;
      const bIsNew = b.isNew === true;
      const aIsTrending = a.isPopular === true && !aIsNew;
      const bIsTrending = b.isPopular === true && !bIsNew;

      if (aIsNew && !bIsNew) return -1;
      if (!aIsNew && bIsNew) return 1;
      if (aIsNew && bIsNew) {
        return a.name.localeCompare(b.name);
      }

      if (aIsTrending && !bIsTrending) return -1;
      if (!aIsTrending && bIsTrending) return 1;
      if (aIsTrending && bIsTrending) {
        return a.name.localeCompare(b.name);
      }

      return a.name.localeCompare(b.name);
    });
  }, [filteredPrograms]);

  return (
    <>
      <InfoHero
        heroTitle="Browse Programs"
        heroDescription="Discover our range of educational programs and incursions"
      />
      <section className="py-8 sm:py-12">
        <FadeInSection>
          <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            <aside className="lg:col-span-1">
              <div
                className="lg:sticky space-y-6"
                style={{ top: STICKY_HEADER_OFFSET }}
              >
                <div>
                  <label
                    htmlFor="search"
                    className="block text-sm font-semibold text-neutral-900 mb-2"
                  >
                    Search
                  </label>
                  <input
                    id="search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name..."
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-brand-500 focus:border-transparent"
                  />
                </div>

                {allYearLevels.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900 mb-3">
                      Year Levels
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {allYearLevels.map((yearLevel) => {
                        const isSelected =
                          selectedYearLevels.includes(yearLevel);
                        return (
                          <label
                            key={yearLevel}
                            className="relative flex items-center cursor-pointer group"
                          >
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => toggleYearLevel(yearLevel)}
                              className="sr-only"
                            />
                            <span
                              className={`inline-flex items-center justify-center min-w-10 h-10 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                isSelected
                                  ? "bg-primary-brand-600 text-white shadow-sm"
                                  : "bg-neutral-100 text-neutral-700 border border-neutral-300 hover:bg-neutral-200 hover:border-neutral-400"
                              }`}
                            >
                              {yearLevel}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-3">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto">
                    {allSkills.map((skill) => {
                      const isSelected = selectedSkills.includes(skill);
                      return (
                        <label
                          key={skill}
                          className="relative flex items-center cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleSkill(skill)}
                            className="sr-only"
                          />
                          <span
                            className={`inline-block rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${
                              isSelected
                                ? "bg-primary-brand-600 text-white"
                                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                            }`}
                          >
                            {skill}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="w-full px-4 py-2 text-sm font-semibold text-neutral-700 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-neutral-600">
                  {uniquePrograms.length === 1
                    ? "1 program found"
                    : `${uniquePrograms.length} programs found`}
                </p>
              </div>

              {uniquePrograms.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-neutral-600 mb-4">
                    No programs match your filters.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-2 bg-primary-brand-600 text-white font-semibold rounded-lg hover:bg-primary-brand-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {uniquePrograms.map((program) => (
                    <ProgramCard key={program.slug} program={program} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        </FadeInSection>
      </section>
    </>
  );
}
