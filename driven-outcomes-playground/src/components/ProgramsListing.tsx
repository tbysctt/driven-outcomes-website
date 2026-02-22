import type { Program } from "../data/programs";
import { ProgramCard } from "./ProgramCard";

interface Props {
  programs: Program[];
}

export function ProgramsListing({ programs }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto items-stretch">
      {programs.map((program) => (
        <ProgramCard key={program.slug} program={program} />
      ))}
    </div>
  );
}
