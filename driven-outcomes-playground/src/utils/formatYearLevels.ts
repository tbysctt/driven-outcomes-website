import type { YearLevel } from "../data/programs";

function formatRange(start: YearLevel, end: YearLevel): string {
  if (start === end) {
    return start === "F" ? "F" : start;
  }
  if (start === "F") {
    return `F-${end}`;
  }
  return `${start}-${end}`;
}

export function formatYearLevels(yearLevels: YearLevel[] | undefined): string {
  if (!yearLevels || yearLevels.length === 0) return "F-6";
  
  const sorted = [...yearLevels].sort((a, b) => {
    if (a === "F") return -1;
    if (b === "F") return 1;
    if (a === "VCE Vocational Major") return 1;
    if (b === "VCE Vocational Major") return -1;
    return parseInt(a, 10) - parseInt(b, 10);
  });

  const parts: string[] = [];
  let rangeStart: YearLevel | null = null;
  let rangeEnd: YearLevel | null = null;

  for (let i = 0; i < sorted.length; i++) {
    const current = sorted[i];
    
    if (current === "VCE Vocational Major") {
      if (rangeStart) {
        parts.push(formatRange(rangeStart, rangeEnd!));
        rangeStart = null;
        rangeEnd = null;
      }
      parts.push("VCE Vocational Major");
      continue;
    }

    const currentNum = current === "F" ? 0 : parseInt(current, 10);
    const prevNum = rangeEnd === "F" ? 0 : rangeEnd ? parseInt(rangeEnd, 10) : null;

    if (rangeStart === null) {
      rangeStart = current;
      rangeEnd = current;
    } else if (prevNum !== null && currentNum === prevNum + 1) {
      rangeEnd = current;
    } else {
      parts.push(formatRange(rangeStart, rangeEnd!));
      rangeStart = current;
      rangeEnd = current;
    }
  }

  if (rangeStart) {
    parts.push(formatRange(rangeStart, rangeEnd!));
  }

  return parts.join(" & ");
}
