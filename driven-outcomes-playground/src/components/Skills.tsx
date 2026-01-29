import type { JSX } from "react";

type Skill = {
  name: string;
  icon: JSX.Element;
  colorTheme: "pearl-aqua" | "cool-steel" | "thistle" | "lavender-grey";
};

const skills: Skill[] = [
  {
    name: "Critical Thinking",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
    colorTheme: "pearl-aqua",
  },
  {
    name: "Creativity",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    ),
    colorTheme: "cool-steel",
  },
  {
    name: "Teamwork",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
    colorTheme: "thistle",
  },
  {
    name: "Problem Solving",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
      />
    ),
    colorTheme: "lavender-grey",
  },
  {
    name: "Communication",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
    colorTheme: "pearl-aqua",
  },
  {
    name: "Presentation Skills",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
      />
    ),
    colorTheme: "cool-steel",
  },
  {
    name: "Digital Literacy",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    colorTheme: "thistle",
  },
  {
    name: "Financial Literacy",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    colorTheme: "lavender-grey",
  },
];

interface SkillCardProps {
  name: string;
  icon: JSX.Element;
  colorTheme: Skill["colorTheme"];
}

function SkillCard({ name, icon, colorTheme }: SkillCardProps) {
  const colorClasses = {
    "pearl-aqua": {
      bg: "bg-pearl-aqua-500/20",
      text: "text-pearl-aqua-400",
    },
    "cool-steel": {
      bg: "bg-cool-steel-500/20",
      text: "text-cool-steel-400",
    },
    thistle: {
      bg: "bg-thistle-500/20",
      text: "text-thistle-400",
    },
    "lavender-grey": {
      bg: "bg-lavender-grey-500/20",
      text: "text-lavender-grey-400",
    },
  };

  const colors = colorClasses[colorTheme];

  return (
    <div className="text-center p-4 sm:p-5 md:p-6 rounded-xl bg-cool-steel-400/10 hover:bg-cool-steel-400/20 transition-colors">
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full ${colors.bg} flex items-center justify-center`}
      >
        <svg
          className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
      </div>
      <h4 className="font-bold uppercase text-xs sm:text-sm leading-tight px-1">{name}</h4>
    </div>
  );
}

function SkillsHeader() {
  return (
    <div className="text-center mb-10 sm:mb-12 md:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
        Curriculum-Focused Learning
      </h2>
      <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-gradient-to-r from-pearl-aqua-500 to-cool-steel-500 rounded-full mx-auto"></div>
      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-grey-400 max-w-2xl mx-auto px-4 sm:px-0">
        Our incursions are designed to achieve critical real world learning
        outcomes for young people as per the Victoria Curriculum. These include:
      </p>
    </div>
  );
}

export function Skills() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <SkillsHeader />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              colorTheme={skill.colorTheme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
