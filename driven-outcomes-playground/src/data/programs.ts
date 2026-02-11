import type {
  ProgramVariant,
  HowItWorksSegment,
} from "../page-templates/ProgramInfoPageTemplate";

export type Program = {
  provider: ProgramProvider;
  name: string;
  description: string;
  focusedSkills: string[];
  slug: string;

  isNew?: boolean;
  isTrending?: boolean;

  category?: string;
  tagline?: string;
  introHeading?: string;
  introParagraphs?: string[];
  variants?: ProgramVariant[];
  pricingLines?: string[];
  programInfoBullets?: string[];
  howItWorksSegments?: HowItWorksSegment[];
  ongoingConnection?: { title: string; body: string };
  brandLabel?: string;
  curriculumYears?: string;
  availabilityStatus?: string;
  showCalendar?: boolean;
};

export type ProgramProvider =
  | "MiniBOSS"
  | "Tripod Education"
  | "MiniBOSS Holidays"
  | "TalkNOW";

export const programs: Program[] = [
  {
    provider: "MiniBOSS",
    name: "Kick Start",
    description:
      "MiniBOSS's Kick Start Incursion is designed to help every class from Prep to Year 6 start strong, build belonging, and create a shared foundation for the year ahead.",
    focusedSkills: [
      "Personal and Social Capability",
      "Critical and Creative Thinking",
      "Ethical Capability",
      "Intercultural Capability",
      "Health and Physical Education (Personal, Social and Community Health)",
      "English (Speaking and Listening)",
    ],
    slug: "kick-start",
    category: "Junior Program",
    tagline: "Refocus, reset, and kick start together",
    introHeading: "Ready, set, go!",
    introParagraphs: [
      "MiniBOSS's Kick Start Incursion is designed to help every class from Prep to Year 6 start strong, build belonging, and create a shared foundation for the year ahead.",
      "Designed as a hands-on, high-energy experience, Kick Start supports teachers to set classroom culture, routines, and expectations while giving them valuable time to observe their new students in action.",
      "Each program is tailored to the age group—from early years learning through play, to upper primary leadership and teamwork challenges—ensuring every student starts the year feeling connected and ready to learn.",
    ],
    variants: [
      {
        name: "Little Legends",
        yearRange: "Prep–2",
        description: "Building confidence, kindness, and connection",
      },
      {
        name: "Game Changers",
        yearRange: "Years 3–4",
        description: "Exploring teamwork and growth mindset",
      },
      {
        name: "Trailblazers",
        yearRange: "Years 5–6",
        description: "Strengthening leadership and community culture",
      },
    ],
    pricingLines: [
      "Price: $12.00 per student plus GST for 60 MINUTE sessions – As of 1 February 2025",
      "Price: $15.00 per student plus GST for 90 MINUTE sessions – As of 1 February 2025",
      "Price: $20.00 per student plus GST for HALF DAY sessions – As of 1 February 2025",
      "Package rates available for whole school bookings. Minimum numbers apply, get in touch for more information.",
    ],
    programInfoBullets: [
      '"Kick Start" is a Foundation Year to Year 6 incursion.',
      "Each class participates in their own tailored session (60 minutes, 90 minutes, or half-day options available).",
      "A gymnasium, hall, or large open learning space will be required.",
      "Access to powerpoints required.",
      "Student supervision by teachers is required throughout the session.",
      "All worksheets and supplies required to run the program are supplied by MiniBOSS.",
    ],
    howItWorksSegments: [
      {
        title: "Ignite the Spark",
        body: "Students connect, collaborate, and build a sense of belonging through energising challenges that uncover strengths and values.",
        focus: "relationships, identity, growth mindset",
      },
      {
        title: "Full Speed Ahead",
        body: "Classes co-create shared expectations and explore what success looks like for their year. Students engage in hands-on activities that promote teamwork, communication, and problem-solving.",
        focus: "teamwork, routines, collaboration",
      },
      {
        title: "Grow, Glow & Go!",
        body: "Students reflect, set personal and class goals, and create a shared symbol or pledge to represent the year ahead.",
        focus: "goal-setting, reflection, responsibility",
      },
    ],
    ongoingConnection: {
      title: "Kickstart Your Week Pack",
      body: "Every booking includes a Kickstart Your Week Pack: A 5-week mini resource that helps teachers continue the connection with short, 10-minute Monday morning activities designed to strengthen emotional literacy and classroom culture.",
    },
    brandLabel: "MiniBOSS",
    curriculumYears: "F–6",
    availabilityStatus: "Open for Bookings",
    showCalendar: true,
  },
  {
    provider: "MiniBOSS Holidays",
    name: "Bombs Away",
    description:
      "description here. Description here. Description here. Description here. Description here.",
    focusedSkills: [
      "Critical thinking",
      "Creativity",
      "Teamwork",
      "Problem solving",
    ],
    slug: "bombs-away",
    isNew: true,
    isTrending: true,
  },
  {
    provider: "MiniBOSS",
    name: "Smoothie Bar",
    description:
      "description here. Description here. Description here. Description here. Description here.",
    focusedSkills: [
      "Enterprise",
      "Leadership",
      "Real-world skills",
      "Collaboration",
    ],
    slug: "smoothie-bar",
    isTrending: true,
  },
  {
    provider: "MiniBOSS Holidays",
    name: "Smoothie Time",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: [
      "Nutrition",
      "Healthy eating",
      "Creativity",
      "Hands-on learning",
    ],
    slug: "smoothie-time",
  },
  {
    provider: "MiniBOSS Holidays",
    name: "Code Busters",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Coding", "Logic", "Problem solving", "Digital skills"],
    slug: "code-busters",
  },
  {
    provider: "MiniBOSS Holidays",
    name: "Super Sleuths",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: [
      "Investigation",
      "Critical thinking",
      "Deduction",
      "Teamwork",
    ],
    slug: "super-sleuths",
  },
  {
    provider: "MiniBOSS Holidays",
    name: "The Mystery Bag",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Curiosity", "Discovery", "Problem solving", "Creativity"],
    slug: "the-mystery-bag",
  },
  {
    provider: "MiniBOSS Holidays",
    name: "The Chocolate Boss",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: [
      "Enterprise",
      "Creativity",
      "Teamwork",
      "Real-world skills",
    ],
    slug: "the-chocolate-boss",
  },
  {
    provider: "MiniBOSS Holidays",
    name: "Superhero",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Resilience", "Confidence", "Teamwork", "Creativity"],
    slug: "superhero",
  },
];
