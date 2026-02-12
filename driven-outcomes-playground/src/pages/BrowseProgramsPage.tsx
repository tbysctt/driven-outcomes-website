import { useState, useMemo } from "react";
import { programs, type YearLevel } from "../data/programs";
import { ProgramCard } from "../components/ProgramCard";
import { InfoHero } from "../components/InfoHero";

export function BrowseProgramsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYearLevel, setSelectedYearLevel] = useState<YearLevel | "All">("All");
  const [selectedProvider, setSelectedProvider] = useState<string>("All");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [showTrendingOnly, setShowTrendingOnly] = useState(false);

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
      if (a === "VCE Vocational Major") return 1;
      if (b === "VCE Vocational Major") return -1;
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

  const allProviders = useMemo(() => {
    const providersSet = new Set<string>();
    programs.forEach((program) => {
      providersSet.add(program.provider);
    });
    return Array.from(providersSet).sort();
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

    if (selectedYearLevel !== "All") {
      filtered = filtered.filter(
        (program) => program.yearLevels?.includes(selectedYearLevel),
      );
    }

    if (selectedProvider !== "All") {
      filtered = filtered.filter(
        (program) => program.provider === selectedProvider,
      );
    }

    if (selectedSkills.length > 0) {
      filtered = filtered.filter((program) =>
        selectedSkills.some((skill) => program.focusedSkills.includes(skill)),
      );
    }

    if (showNewOnly) {
      filtered = filtered.filter((program) => program.isNew === true);
    }

    if (showTrendingOnly) {
      filtered = filtered.filter((program) => program.isTrending === true);
    }

    return filtered;
  }, [
    searchQuery,
    selectedYearLevel,
    selectedProvider,
    selectedSkills,
    showNewOnly,
    showTrendingOnly,
  ]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedYearLevel("All");
    setSelectedProvider("All");
    setSelectedSkills([]);
    setShowNewOnly(false);
    setShowTrendingOnly(false);
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedYearLevel !== "All" ||
    selectedProvider !== "All" ||
    selectedSkills.length > 0 ||
    showNewOnly ||
    showTrendingOnly;

  const uniquePrograms = useMemo(() => {
    const seen = new Set<string>();
    return filteredPrograms.filter((program) => {
      if (seen.has(program.slug)) {
        return false;
      }
      seen.add(program.slug);
      return true;
    });
  }, [filteredPrograms]);

  return (
    <>
      <InfoHero
        heroTitle="Browse Programs"
        heroDescription="Discover our range of educational programs and incursions"
      />
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-6 space-y-6">
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
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="yearLevel"
                          checked={selectedYearLevel === "All"}
                          onChange={() => setSelectedYearLevel("All")}
                          className="w-4 h-4 text-primary-brand-600 focus:ring-primary-brand-500"
                        />
                        <span className="text-sm text-neutral-700">All</span>
                      </label>
                      {allYearLevels.map((yearLevel) => (
                        <label
                          key={yearLevel}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="yearLevel"
                            checked={selectedYearLevel === yearLevel}
                            onChange={() => setSelectedYearLevel(yearLevel as YearLevel)}
                            className="w-4 h-4 text-primary-brand-600 focus:ring-primary-brand-500"
                          />
                          <span className="text-sm text-neutral-700">
                            {yearLevel}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {allProviders.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900 mb-3">
                      Provider
                    </h3>
                    <select
                      value={selectedProvider}
                      onChange={(e) => setSelectedProvider(e.target.value)}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-brand-500 focus:border-transparent text-sm"
                    >
                      <option value="All">All Providers</option>
                      {allProviders.map((provider) => (
                        <option key={provider} value={provider}>
                          {provider}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-3">
                    Skills
                  </h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {allSkills.map((skill) => (
                      <label
                        key={skill}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedSkills.includes(skill)}
                          onChange={() => toggleSkill(skill)}
                          className="w-4 h-4 text-primary-brand-600 focus:ring-primary-brand-500 rounded"
                        />
                        <span className="text-sm text-neutral-700">
                          {skill}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-3">
                    Filters
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showNewOnly}
                        onChange={(e) => setShowNewOnly(e.target.checked)}
                        className="w-4 h-4 text-primary-brand-600 focus:ring-primary-brand-500 rounded"
                      />
                      <span className="text-sm text-neutral-700">
                        New Programs
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showTrendingOnly}
                        onChange={(e) => setShowTrendingOnly(e.target.checked)}
                        className="w-4 h-4 text-primary-brand-600 focus:ring-primary-brand-500 rounded"
                      />
                      <span className="text-sm text-neutral-700">Trending</span>
                    </label>
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
      </section>
    </>
  );
}
