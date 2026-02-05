import { ProgramInfoPageTemplate } from "../page-templates/ProgramInfoPageTemplate";
import type { ProgramInfoPageData } from "../page-templates/ProgramInfoPageTemplate";

const kickStartData: ProgramInfoPageData = {
  category: "Junior Program",
  programName: "Kick Start",
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
      description:
        "Building confidence, kindness, and connection",
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
  prevProgram: { name: "Create It", path: "/programs/create-it" },
  nextProgram: { name: "The Smoothie Bar", path: "/programs/the-smoothie-bar" },
  brandLabel: "MiniBOSS",
  curriculumYears: "F–6",
  curriculumLinks: [
    "Personal and Social Capability",
    "Critical and Creative Thinking",
    "Ethical Capability",
    "Intercultural Capability",
    "Health and Physical Education (Personal, Social and Community Health)",
    "English (Speaking and Listening)",
  ],
  availabilityStatus: "Open for Bookings",
  showCalendar: true,
};

export function KickStartProgramPage() {
  return <ProgramInfoPageTemplate data={kickStartData} />;
}
