export type Program = {
  targetAudience: TargetAudience;
  name: string;
  description: string;
  focusedSkills: string[];
  linkPath: string;

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
  },
  {
    targetAudience: "OSHC & Vacation Care",
    name: "Code Busters",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Coding", "Logic", "Problem solving", "Digital skills"],
    linkPath: "#",
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
  },
  {
    targetAudience: "OSHC & Vacation Care",
    name: "The Mystery Bag",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Curiosity", "Discovery", "Problem solving", "Creativity"],
    linkPath: "#",
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
  },
  {
    targetAudience: "OSHC & Vacation Care",
    name: "Superhero",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Resilience", "Confidence", "Teamwork", "Creativity"],
    linkPath: "#",
  },
];
