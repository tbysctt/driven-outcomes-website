export type Program = {
  targetAudience: TargetAudience;
  name: string;
  description: string;
  focusedSkills: string[];
  linkPath: string;
  slug: string;

  isNew?: boolean;
  isTrending?: boolean;
};

export type TargetAudience = "OSHC & Vacation Care" | "Primary Schools";

export const programs: Program[] = [
  {
    targetAudience: "OSHC & Vacation Care",
    name: "Bombs Away",
    description:
      "description here. Description here. Description here. Description here. Description here.",
    focusedSkills: [
      "Critical thinking",
      "Creativity",
      "Teamwork",
      "Problem solving",
    ],
    linkPath: "#",
    slug: "bombs-away",
    isNew: true,
    isTrending: true,
  },
  {
    targetAudience: "Primary Schools",
    name: "Smoothie Bar",
    description:
      "description here. Description here. Description here. Description here. Description here.",
    focusedSkills: [
      "Enterprise",
      "Leadership",
      "Real-world skills",
      "Collaboration",
    ],
    linkPath: "#",
    slug: "smoothie-bar",
    isNew: true,
  },

  {
    targetAudience: "Primary Schools",
    name: "Smoothie Bar",
    description:
      "description here. Description here. Description here. Description here. Description here.",
    focusedSkills: [
      "Enterprise",
      "Leadership",
      "Real-world skills",
      "Collaboration",
    ],
    linkPath: "#",
    slug: "smoothie-bar",
    isTrending: true,
  },

  {
    targetAudience: "OSHC & Vacation Care",
    name: "Smoothie Time",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: [
      "Nutrition",
      "Healthy eating",
      "Creativity",
      "Hands-on learning",
    ],
    linkPath: "#",
    slug: "smoothie-time",
  },
  {
    targetAudience: "OSHC & Vacation Care",
    name: "Code Busters",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Coding", "Logic", "Problem solving", "Digital skills"],
    linkPath: "#",
    slug: "code-busters",
  },
  {
    targetAudience: "OSHC & Vacation Care",
    name: "Super Sleuths",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: [
      "Investigation",
      "Critical thinking",
      "Deduction",
      "Teamwork",
    ],
    linkPath: "#",
    slug: "super-sleuths",
  },
  {
    targetAudience: "OSHC & Vacation Care",
    name: "The Mystery Bag",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Curiosity", "Discovery", "Problem solving", "Creativity"],
    linkPath: "#",
    slug: "the-mystery-bag",
  },
  {
    targetAudience: "OSHC & Vacation Care",
    name: "The Chocolate Boss",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: [
      "Enterprise",
      "Creativity",
      "Teamwork",
      "Real-world skills",
    ],
    linkPath: "#",
    slug: "the-chocolate-boss",
  },
  {
    targetAudience: "OSHC & Vacation Care",
    name: "Superhero",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Resilience", "Confidence", "Teamwork", "Creativity"],
    linkPath: "#",
    slug: "superhero",
  },
];
