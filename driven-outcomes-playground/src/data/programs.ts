import type { FaqItem } from "../components/FaqSection";
import type { ProgramVariant } from "../page-templates/ProgramInfoPageTemplate";

import inMyCommunity from "../assets/program-images/in-my-community.png";
import theStudioJunior from "../assets/program-images/the-studio-junior.png";
import theStudioSenior from "../assets/program-images/the-studio-senior.webp";
import theBriefJunior from "../assets/program-images/the-brief-junior.png";
import theBriefSenior from "../assets/program-images/the-brief-senior.webp";
import theNewsroom from "../assets/program-images/the-newsroom.png";
import kickStart from "../assets/program-images/kick-start.webp";
import yoghurtMasters from "../assets/program-images/yoghurt-masters.webp";
import solveIt from "../assets/program-images/solve-it.webp";
import theChocolateShop from "../assets/program-images/the-chocolate-shop.webp";
import miniOlympics from "../assets/program-images/mini-olympics.webp";
import superBuddies from "../assets/program-images/super-buddies.webp";
import createIt from "../assets/program-images/create-it.webp";
import letsGrow from "../assets/program-images/lets-grow.webp";
import islandEscape from "../assets/program-images/island-escape.webp";
import crackIt from "../assets/program-images/crack-it.webp";
import theSmoothieBarJunior from "../assets/program-images/the-smoothie-bar-junior.webp";
import theLaunch from "../assets/program-images/the-launch.webp";
import theLab from "../assets/program-images/the-lab.webp";
import leadItJunior from "../assets/program-images/lead-it-junior.png";
import thePitch from "../assets/program-images/the-pitch.webp";
import theSmoothieBarSenior from "../assets/program-images/the-smoothie-bar-senior.webp";
import leadItSenior from "../assets/program-images/lead-it-senior.webp";
import gameOn from "../assets/program-images/game-on.webp";
import futureReadyWorkshops from "../assets/program-images/future-ready-workshops.webp";
import theShowcase from "../assets/program-images/the-showcase.png";
import thePanel from "../assets/program-images/the-panel.webp";
import superhero from "../assets/program-images/superhero.webp";
import superSleuths from "../assets/program-images/super-sleuths.jpg";
import theChocolateBoss from "../assets/program-images/the-chocolate-boss.jpg";
import theMysteryBag from "../assets/program-images/the-mystery-bag.jpg";
import campAtSchool from "../assets/program-images/camp-at-school.webp";
import codeBusters from "../assets/program-images/code-busters.jpg";

export type YearLevel =
  | "OSHC"
  | "F"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "VCE Vocational Major";

export type Program = {
  provider: ProgramProvider;
  name: string;
  description: string;
  tagline?: string;
  focusedSkills: string[];
  slug: string;
  imageUrl: string;

  isNew?: boolean;
  isPopular?: boolean;
  yearLevels: YearLevel[];

  pageDetails: {
    introHeading?: string;
    introParagraphs?: string[];
    variants?: ProgramVariant[];
    pricingLines?: string[];
    informationHTML?: string;
    ongoingConnection?: { title: string; body: string };
    availabilityStatus?: string;
    showCalendar?: boolean;
    faqs?: FaqItem[];
    canBeCustomised?: boolean;
  };
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
    isNew: true,
    description:
      "Designed to help every class from Prep to Year 6 start strong, build belonging, and create a shared foundation for the year ahead.",
    focusedSkills: [
      "Personal and Social Capability",
      "Critical and Creative Thinking",
      "Ethical Capability",
      "Intercultural Capability",
      "Health and Physical Education (Personal, Social and Community Health)",
      "English (Speaking and Listening)",
    ],
    slug: "kick-start",
    imageUrl: kickStart,
    tagline: "Refocus, reset, and kick start together",
    pageDetails: {
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
      informationHTML: `
        <ul>
          <li>"Kick Start" is a Foundation Year to Year 6 incursion.</li>
          <li>Each class participates in their own tailored session (60 minutes, 90 minutes, or half-day options available).</li>
          <li>A gymnasium, hall, or large open learning space will be required.</li>
          <li>Access to powerpoints required.</li>
          <li>Student supervision by teachers is required throughout the session.</li>
          <li>All worksheets and supplies required to run the program are supplied by MiniBOSS.</li>
        </ul>
        
        <h3>How It Works</h3>
        <p>Each session is split into three high-impact segments that build momentum and classroom culture:</p>
        
        <ol>
          <li>
            <strong>Ignite the Spark</strong><br>
            Students connect, collaborate, and build a sense of belonging through energising challenges that uncover strengths and values.<br>
            <em>Focus: relationships, identity, growth mindset</em>
          </li>
          <li>
            <strong>Full Speed Ahead</strong><br>
            Classes co-create shared expectations and explore what success looks like for their year. Students engage in hands-on activities that promote teamwork, communication, and problem-solving.<br>
            <em>Focus: teamwork, routines, collaboration</em>
          </li>
          <li>
            <strong>Grow, Glow & Go!</strong><br>
            Students reflect, set personal and class goals, and create a shared symbol or pledge to represent the year ahead.<br>
            <em>Focus: goal-setting, reflection, responsibility</em>
          </li>
        </ol>
      `,
      ongoingConnection: {
        title: "Kickstart Your Week Pack",
        body: "Every booking includes a Kickstart Your Week Pack: A 5-week mini resource that helps teachers continue the connection with short, 10-minute Monday morning activities designed to strengthen emotional literacy and classroom culture.",
      },
      availabilityStatus: "Open for Bookings",
      showCalendar: true,
    },
    yearLevels: ["F", "1", "2", "3", "4", "5", "6"],
  },
  {
    provider: "MiniBOSS",
    name: "Yoghurt Masters",
    description:
      "Yoghurt Masters is our NEW exciting half-day incursion where students collaborate, innovate, and create their own unique yoghurt bowls—one delicious scoop at a time! Working in teams, they'll explore business, branding, and healthy food design, crafting their ultimate yoghurt bar experience while learning real-world entrepreneurial skills.",
    focusedSkills: [
      "Design and Technologies",
      "Economics and Business",
      "Critical and Creative Thinking",
      "Personal and Social Capability",
      "Health and Physical Education",
      "English",
      "Digital Technologies",
    ],
    slug: "yoghurt-masters",
    imageUrl: yoghurtMasters,
    tagline: "Mix. Master. Thrive!",
    pageDetails: {
      introHeading: "Welcome to Yoghurt Masters",
      introParagraphs: [
        "Imagine stepping into the shoes of a budding entrepreneur!",
        "Yoghurt Masters is our NEW exciting half-day incursion where students collaborate, innovate, and create their own unique yoghurt bowls—one delicious scoop at a time! Working in teams, they'll explore business, branding, and healthy food design, crafting their ultimate yoghurt bar experience while learning real-world entrepreneurial skills.",
        "Best of all, we bring EVERYTHING! With more than 12 delicious toppings to choose from!",
      ],
      pricingLines: [
        "$20.00 per student + GST for a Half-Day Incursion. Minimum numbers apply.",
        "Get in touch to discuss how we can tailor Yoghurt Masters for your school!",
        "Need flexibility? Let's chat! We're happy to work within your budget.",
      ],
      informationHTML: `
        <h3>What Students Will Learn</h3>
        <ul>
          <li><strong>Entrepreneurship & Business:</strong> Students take on the role of business owners, designing and marketing their own yoghurt brand.</li>
          <li><strong>Creative Thinking & Problem-Solving:</strong> Teams brainstorm, test ideas, and refine their final product.</li>
          <li><strong>Collaboration & Leadership:</strong> Students work together to assign roles, pitch ideas, and execute their vision.</li>
          <li><strong>Healthy Living & Nutrition:</strong> Explore food science and make balanced choices while having fun.</li>
        </ul>
        
        <h3>How It Works</h3>
        <ol>
          <li>Students start by selecting ingredients and designing their dream yoghurt bowl.</li>
          <li>They create a brand, logo, and marketing campaign to promote their product.</li>
          <li>The session wraps up with a fun pitch event, where teams present their yoghurt business.</li>
        </ol>
        
        <h3>Why Teachers & Schools Love This Program</h3>
        <ul>
          <li>🌟 <strong>Interactive & Engaging:</strong> Students actively participate in hands-on learning.</li>
          <li>🌟 <strong>Real-World Skills:</strong> Encourages problem-solving, leadership, and creative thinking.</li>
          <li>🌟 <strong>Health-Focused & Fun:</strong> Promotes teamwork while reinforcing healthy food choices.</li>
          <li>🌟 <strong>Hassle-Free for Schools:</strong> We bring all the supplies—no prep needed!</li>
        </ul>
        
        <p>🥄 Teachers, we haven't forgotten about you! There's even enough for you to create your own 'special' teacher bowl—so get ready to mix, match, and enjoy alongside your students!</p>
        
        <h3>Program Information</h3>
        <ul>
          <li><strong>Half-Day Incursion:</strong> A fast-paced, hands-on session where students dive into creativity, teamwork, and business skills.</li>
          <li><strong>Space Requirements:</strong> A large open learning space or multiple classrooms will be needed.</li>
          <li><strong>Outdoor Access:</strong> Not essential, but adds to the fun!</li>
          <li><strong>Tech Setup:</strong> A projector with sound is required for our interactive activities.</li>
          <li><strong>Teacher Supervision:</strong> Teachers will need to supervise students during the session.</li>
          <li><strong>We Bring Everything:</strong> No prep needed! MiniBOSS supplies all materials—including over 12 delicious toppings!</li>
          <li><strong>Large Groups Welcome:</strong> Yoghurt Masters is perfect for large year levels or combined year groups! We can cater for up to 50-60 students per session, with the flexibility to run multiple sessions per day, either back-to-back or concurrently. Whether you're looking to engage an entire year level or mix multiple levels, we'll tailor the experience to fit your school's needs. Let's chat about options!</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
      faqs: [
        {
          question: "Who is this incursion for?",
          answer:
            "Every primary school student—yes, from Prep to Year 6! Yoghurt Masters is designed to engage and excite all ages, making it the perfect whole-school experience.",
        },
        {
          question: "How long is the session?",
          answer:
            "It's a high-energy, hands-on 2-hour incursion where students become food designers, entrepreneurs, and creative thinkers—all while making delicious yoghurt creations.",
        },
        {
          question: "What about allergies?",
          answer:
            "No stress! We provide a comprehensive allergy information booklet, including a detailed risk assessment and everything your school needs before the session. Safety is our top priority!",
        },
        {
          question: "How do we book?",
          answer:
            "Booking is easy! Call us today on 03 9415 6327 or simply hit the Enquiry button above to lock in your session. We'll handle the rest!",
        },
        {
          question: "Don't let budget be a barrier!",
          answer:
            "We're all about making this experience accessible for schools. Call us to find a solution that works for your school's needs.",
        },
      ],
    },
    yearLevels: ["F", "1", "2", "3", "4", "5", "6"],
  },
  {
    provider: "MiniBOSS Holidays",
    name: "Code Busters",
    imageUrl: codeBusters,
    yearLevels: ["OSHC"],
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Coding", "Logic", "Problem solving", "Digital skills"],
    slug: "code-busters",
    pageDetails: {},
  },
  {
    provider: "MiniBOSS Holidays",
    name: "Super Sleuths",
    imageUrl: superSleuths,
    yearLevels: ["OSHC"],
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: [
      "Investigation",
      "Critical thinking",
      "Deduction",
      "Teamwork",
    ],
    slug: "super-sleuths",
    pageDetails: {},
  },
  {
    provider: "MiniBOSS Holidays",
    name: "The Mystery Bag",
    imageUrl: theMysteryBag,
    yearLevels: ["OSHC"],
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Curiosity", "Discovery", "Problem solving", "Creativity"],
    slug: "the-mystery-bag",
    pageDetails: {},
  },
  {
    provider: "MiniBOSS Holidays",
    name: "The Chocolate Boss",
    imageUrl: theChocolateBoss,
    yearLevels: ["OSHC"],
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: [
      "Enterprise",
      "Creativity",
      "Teamwork",
      "Real-world skills",
    ],
    slug: "the-chocolate-boss",
    pageDetails: {},
  },
  {
    provider: "MiniBOSS Holidays",
    name: "Superhero",
    imageUrl: superhero,
    yearLevels: ["OSHC"],
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Resilience", "Confidence", "Teamwork", "Creativity"],
    slug: "superhero",
    pageDetails: {},
  },
  {
    provider: "MiniBOSS",
    name: "Solve It",
    description:
      "A Crime Has Been Committed... Your Class is on the Case! Get ready for your students to become detectives in the Solve It incursion! Students will transform into a detective squad, working together to solve a thrilling mystery.",
    tagline: "Blow the case wide open!",
    focusedSkills: [
      "English",
      "Maths",
      "Science",
      "Critical & Creative Thinking",
      "Personal & Social Capability",
      "STEAM & Inquiry Skills",
    ],
    slug: "solve-it",
    imageUrl: solveIt,
    pageDetails: {
      introHeading: "A Crime Has Been Committed... Your Class is on the Case!",
      introParagraphs: [
        "Get ready for your students to become detectives in the Solve It incursion!",
        "Students will transform into a detective squad, working together to solve a thrilling mystery. With magnifying glasses at the ready, they'll tackle challenges that test their maths, science, and english skills to uncover clues and catch the culprit!",
      ],
      pricingLines: [
        "Price: $20.00 per student plus GST for HALF DAY - As of 1 February 2025.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>Program Overview</h3>
        <ul>
          <li><strong>Team-Based Learning:</strong> Students work in teams with their very own Detective Kit, filled with clues to help solve the crime.</li>
          <li><strong>Interactive Challenges:</strong> Navigate a series of challenges that integrate maths, science, and English skills.</li>
          <li><strong>Engaging Experience:</strong> Students will be totally hooked as they immerse themselves in this exciting, half-day incursion.</li>
        </ul>
        
        <h3>Why Book?</h3>
        <ul>
          <li><strong>Skill Development:</strong> Enhance critical skills such as inquiry, problem-solving, and communication.</li>
          <li><strong>Engaging and Fun:</strong> Turn your classroom into a detective agency, sparking curiosity and engagement.</li>
          <li><strong>Curriculum-Aligned:</strong> Supports key areas of the Victorian Curriculum, including Maths, Science, and English.</li>
          <li><strong>Extended Learning:</strong> Includes pre- and post-incursion activities to deepen creativity and learning, complete with videos, printable worksheets, and a teacher guide.</li>
        </ul>
        
        <p>This highly engaging half-day incursion will have your students totally hooked, just like you on the latest Netflix crime drama 🙂</p>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program is run as a <strong>HALF Day</strong> incursion.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>large open learning space or classroom</strong> will be required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by MiniBOSS.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["F", "1", "2"],
  },
  {
    provider: "MiniBOSS",
    name: 'The "HOT" Chocolate Shop',
    description:
      "Ready to be a chocolate entrepreneur? Did you know that chocolate is the only edible substance that literally melts in your mouth? Get ready to embark on a mouthwatering journey with The Chocolate Shop!",
    tagline: "Be a HOT chocolate BOSS!",
    focusedSkills: [
      "Being Enterprising",
      "Designed Solutions",
      "Financial Literacy",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "STEAM & Inquiry Skills",
    ],
    slug: "the-hot-chocolate-shop",
    imageUrl: theChocolateShop,
    pageDetails: {
      introHeading: "Ready to be a chocolate entrepreneur?",
      introParagraphs: [
        "Did you know that chocolate is the only edible substance that literally melts in your mouth?",
        "Get ready to embark on a mouthwatering journey with The Chocolate Shop! This exciting half-day incursion invites students to team up and explore the world of hot chocolate-making, where they'll learn the art of creating their very own hot chocolate creations.",
      ],
      pricingLines: [
        "Price: $20.00 per student plus GST for HALF DAY - As of 1 February 2025.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>Program Overview</h3>
        <ul>
          <li><strong>Hands-On Experience:</strong> Students dive into the world of chocolate, learning about what goes into making the perfect hot chocolate.</li>
          <li><strong>Team Collaboration:</strong> Working in teams, students will craft and customise their hot chocolate creations, focusing on colours, and look (branding).</li>
          <li><strong>Creative Expression:</strong> Each student will design their own packaging and branding, making their hot chocolate creation a unique keepsake to take home.</li>
          <li><strong>Fun and Engaging:</strong> The program blends learning with fun, ensuring that students are fully engaged and excited throughout the day.</li>
        </ul>
        
        <h3>Why Book?</h3>
        <ul>
          <li><strong>Skill Development:</strong> Build essential skills in creativity, teamwork, and communication.</li>
          <li><strong>Engaging and Fun:</strong> A dynamic program that keeps students excited and motivated.</li>
          <li><strong>Curriculum-Aligned:</strong> Supports key areas of the Victorian Curriculum, including Design and Technologies, and Personal and Social Capability.</li>
          <li><strong>Extended Learning:</strong> Includes a super fun pre- and post-incursion activity to extend the learning experience and keep the excitement going! Complete with videos, printable worksheets and a teacher guide.</li>
        </ul>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program is run as a <strong>HALF Day</strong> incursion.</li>
          <li>This program can be run with up to <strong>60 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>large open learning space or classrooms</strong> will be required.</li>
          <li><strong>Access to powerpoints</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by MiniBOSS.</li>
          <li>The Chocolate Shop is a <strong>nut and egg free</strong> program. Full allergy information and advice will be provided to you prior to the incursion.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["F", "1", "2"],
  },
  {
    provider: "MiniBOSS",
    name: "MiniBOSS Mini Olympics",
    description:
      "WELCOME TO THE MINIBOSS MINI OLYMPICS! Get ready to embark on a global adventure with the Mini Olympics! This engaging incursion takes students on a journey through different cultures, where they'll participate in a series of fun and challenging activities inspired by Olympic sports.",
    tagline: "Let the games begin!",
    focusedSkills: [
      "Health and Physical Education",
      "The Humanities (Geography & History)",
      "Ethical Capabilities",
      "Intercultural Capability",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Resilience & Inquiry Skills",
    ],
    slug: "miniboss-mini-olympics",
    imageUrl: miniOlympics,
    pageDetails: {
      introHeading: "WELCOME TO THE MINIBOSS MINI OLYMPICS!",
      introParagraphs: [
        "Get ready to embark on a global adventure with the Mini Olympics! This engaging incursion takes students on a journey through different cultures, where they'll participate in a series of fun and challenging activities inspired by Olympic sports. As they compete and collaborate, students will discover the power of teamwork, respect, and cultural appreciation.",
        "This program is the perfect blend of educational and active activity. Students will have a blast as they take on the challenges, and earn visas in their passport to success. We will also get students up and being active as they work their way around different games and sports from different places.",
      ],
      variants: [
        {
          name: "Economy Class",
          yearRange: "90-MINUTE (3 countries)",
          description: "Price: $15.00 per student plus GST",
        },
        {
          name: "Business Class",
          yearRange: "HALF DAY (5 countries)",
          description: "Price: $20.00 per student plus GST",
        },
      ],
      pricingLines: [
        "Economy Class Price: $15.00 per student plus GST for 90-MINUTE (3 countries) - As of 1 July 2025.",
        "Business Class Price: $20.00 per student plus GST for HALF DAY (5 countries).",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>Program Overview</h3>
        <ul>
          <li><strong>Cultural Exploration:</strong> Students visit different countries, learning about diverse cultures while collecting "visas" in their personal passports.</li>
          <li><strong>Team Challenges:</strong> Teams work together to complete activities inspired by the traditions and games of each country, fostering collaboration and mutual respect.</li>
          <li><strong>Skill Building:</strong> Through reflection and discussion, students build resilience, self-awareness, and communication skills, all while having fun!</li>
          <li><strong>Olympic Values:</strong> The program emphasises the core values of the Olympics: Excellence, Respect, and Friendship, helping students apply these principles in their daily lives.</li>
        </ul>
        
        <h3>Why Book?</h3>
        <ul>
          <li><strong>Skill Development:</strong> Enhance teamwork, communication, and cultural awareness.</li>
          <li><strong>Engaging and Fun:</strong> A dynamic program that keeps students excited and motivated.</li>
          <li><strong>Curriculum-Aligned:</strong> Supports key areas of the Victorian Curriculum, including Personal and Social Capability, and Health and Physical Education.</li>
        </ul>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program is run as a <strong>90-minute or Half Day</strong> incursion.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>large open learning space or classrooms</strong> will be required.</li>
          <li><strong>Access to an outdoor area</strong> is desired.</li>
          <li><strong>Access to a projector (with sound)</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by MiniBOSS.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["F", "1", "2", "3", "4", "5", "6"],
  },
  {
    provider: "MiniBOSS",
    name: "Super Buddies",
    description:
      "Super Buddies: Building Trust, Connection, and Leadership! Launch your buddies program this year by helping your senior students and their prep buddies form meaningful and trusted relationships with Super Buddies!",
    tagline: "Connect. Mentor. Inspire!",
    focusedSkills: [
      "Critical & Creative Thinking",
      "Ethical Capability",
      "Personal & Social Capability",
      "Civics and Citizenship",
      "Drama",
      "Music",
      "Visual Arts",
      "Literacy",
      "Inquiry Skills",
    ],
    slug: "super-buddies",
    imageUrl: superBuddies,
    pageDetails: {
      introHeading: "The ultimate Super Buddy Program!",
      introParagraphs: [
        "Super Buddies: Building Trust, Connection, and Leadership!",
        "Launch your buddies program this year by helping your senior students and their prep buddies form meaningful and trusted relationships with Super Buddies! This engaging and interactive program fosters connection, leadership, and support between older and younger students. Through shared activities and teamwork, students develop a strong bond that sets the stage for a caring and inclusive school community.",
      ],
      variants: [
        {
          name: "Prep Students",
          yearRange: "Foundation",
          description: "Half-day incursion - $20.00 per student plus GST",
        },
        {
          name: "Year 5/6 Students",
          yearRange: "Years 5-6",
          description:
            "Half-day or full-day incursion - $28.50 per student plus GST for FULL DAY",
        },
      ],
      pricingLines: [
        "Prep Price: $20.00 per student plus GST for HALF DAY - As of 1 July 2025.",
        "Year 5/6 Price: $28.50 per student plus GST for FULL DAY - As of 1 July 2025.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>Program Overview</h3>
        <h4>Block 1: Year 5/6 Students & Prep Students Separately</h4>
        <p><strong>Approx. 1-hour session</strong></p>
        <p>We work with each group separately to explore what it means to be a buddy and how they can support each other throughout the year.</p>
        
        <h4>Block 2: Year 5/6 Students & Prep Students Together</h4>
        <p><strong>Approx. 1.5-hour session</strong></p>
        <p>Buddies collaborate on a shared craft or project, creating their very own 'Buddy Book' while exploring the values of kindness, respect, and support. Each pair creates a pledge to uphold their 'Buddy Values' and a secret handshake unique to them.</p>
        
        <h3>What Students Will Learn</h3>
        <ul>
          <li><strong>Leadership & Mentorship (Year 5/6):</strong> Empowering older students to guide and support their buddies.</li>
          <li><strong>Confidence & Resilience (Prep):</strong> Helping younger students feel welcomed and valued in their school journey.</li>
          <li><strong>Teamwork & Collaboration:</strong> Strengthening bonds through shared challenges and projects.</li>
          <li><strong>Empathy & Emotional Intelligence:</strong> Encouraging understanding and kindness.</li>
          <li><strong>Communication & Relationship-Building:</strong> Developing trust and connection between buddies.</li>
        </ul>
        
        <h3>Program Highlights & Benefits</h3>
        <ul>
          <li>💥 <strong>Foster Lasting Connections:</strong> Build trust and respect between older and younger students through engaging activities.</li>
          <li>💥 <strong>Leadership & Mentorship:</strong> Empower senior students to develop essential leadership skills while supporting their buddies.</li>
          <li>💥 <strong>Boost Confidence for Younger Students:</strong> Ensure younger students feel included and supported in their new school environment.</li>
          <li>💥 <strong>Promote Teamwork & Collaboration:</strong> Strengthen friendships through shared challenges and creative projects.</li>
          <li>💥 <strong>Create an Inclusive School Culture:</strong> Foster a positive and supportive environment built on empathy and shared success.</li>
        </ul>
        
        <p>⚡ Start your Super Buddies journey today and build a stronger school community!</p>
        
        <h3>Program Information</h3>
        <ul>
          <li>The Super Buddies program is a <strong>half-day incursion</strong> for both Year 5/6 students and Prep students. However, for Year 5/6 students, the experience can be extended to a <strong>full-day program</strong>, allowing for deeper engagement and leadership development. Prep students participate in the half-day session only.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>gymnasium, hall, or large open learning space</strong> will be required (Classrooms can be used for smaller groups).</li>
          <li><strong>Access to powerpoints</strong> required.</li>
          <li><strong>Access to a projector</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All worksheets and supplies</strong> required to run the program are supplied by MiniBOSS.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["F", "5", "6"],
  },
  {
    provider: "MiniBOSS",
    name: "Create It",
    description:
      "Step into Create It, where imagination knows no bounds! This hands-on incursion invites students to explore the world of design and creative thinking. Whether they're building, crafting, or designing, students will learn to express their ideas and bring their visions to life.",
    tagline: "Think outside the box!",
    focusedSkills: [
      "Creative & Design Thinking",
      "STEAM Challenges",
      "Being Enterprising",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Innovation & Inquiry Skills",
    ],
    slug: "create-it",
    imageUrl: createIt,
    pageDetails: {
      introHeading: "Ready to Bring Ideas to Life?",
      introParagraphs: [
        "Step into Create It, where imagination knows no bounds! This hands-on incursion invites students to explore the world of design and creative thinking. Whether they're building, crafting, or designing, students will learn to express their ideas and bring their visions to life.",
      ],
      variants: [
        {
          name: "Half Day",
          yearRange: "HALF DAY",
          description:
            "Price: $20.00 per student plus GST - As of 1 February 2025",
        },
        {
          name: "Full Day",
          yearRange: "FULL DAY",
          description: "Price: $28.50 per student plus GST - As of 1 July 2025",
        },
      ],
      pricingLines: [
        "Price: $28.50 per student plus GST for FULL DAY - As of 1 July 2025.",
        "Price: $20.00 per student plus GST for HALF DAY - As of 1 February 2025.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>Program Overview</h3>
        <ul>
          <li><strong>Design and Exploration:</strong> Students experiment with different materials, techniques, and mediums to create unique designs.</li>
          <li><strong>Creative Thinking:</strong> Engage in activities that challenge students to think outside the box and solve creative problems.</li>
          <li><strong>Collaborative Projects:</strong> Students work together to design and build, learning the importance of teamwork and communication.</li>
          <li><strong>Expressive Communication:</strong> Through their creations, students develop the ability to communicate their ideas both visually and verbally.</li>
        </ul>
        
        <h3>Why Book?</h3>
        <ul>
          <li><strong>Skill Development:</strong> Boost creativity, communication, and teamwork.</li>
          <li><strong>Engaging and Fun:</strong> A dynamic program that keeps students excited and motivated while inspiring creativity.</li>
          <li><strong>Curriculum-Aligned:</strong> Supports key areas of the Victorian Curriculum, including Design and Technologies, Critical and Creative Thinking, and Personal and Social Capability.</li>
          <li><strong>Extended Learning:</strong> Includes pre- and post-incursion activities to deepen creativity and learning, complete with videos, printable worksheets, and a teacher guide.</li>
        </ul>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program can be booked as a <strong>HALF or FULL Day</strong> incursion.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>gymnasium, hall, or large open learning space</strong> will be required (Classrooms can be used for smaller groups).</li>
          <li><strong>Access to a projector</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by MiniBOSS.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["F", "1", "2", "3", "4"],
  },
  {
    provider: "MiniBOSS",
    name: "Let's Grow!",
    description:
      "Let's Grow is an engaging half-day or full-day incursion where students collaborate, explore their strengths, and cultivate a positive classroom culture. Through hands-on activities, they'll design, construct, and nurture their own terrariums—each layer representing key values like teamwork, respect, and responsibility that help their community grow.",
    tagline: "Grow. Connect. Thrive!",
    focusedSkills: [
      "Design and Technologies",
      "Critical and Creative Thinking",
      "Personal and Social Capability",
      "Science",
      "Health and Physical Education",
      "English",
      "Visual Arts",
    ],
    slug: "lets-grow",
    imageUrl: letsGrow,
    pageDetails: {
      introHeading: "Welcome to Let's Grow!",
      introParagraphs: [
        "Grow a thriving classroom together!",
        "Let's Grow is an engaging half-day or full-day incursion where students collaborate, explore their strengths, and cultivate a positive classroom culture. Through hands-on activities, they'll design, construct, and nurture their own terrariums—each layer representing key values like teamwork, respect, and responsibility that help their community grow.",
        "Best of all, we bring EVERYTHING! Each team will have their very own terrarium to care for throughout the term and beyond.",
      ],
      variants: [
        {
          name: "Half-Day Incursion",
          yearRange: "Half-Day",
          description: "$20.00 per student + GST",
        },
        {
          name: "Full-Day Incursion",
          yearRange: "Full-Day",
          description: "$29.50 per student + GST - As of 1 July 2025",
        },
      ],
      pricingLines: [
        "$20.00 per student + GST for a Half-Day Incursion.",
        "$29.50 per student + GST for a Full-Day Incursion. - As of 1 July 2025.",
        "Minimum numbers apply.",
        "Get in touch to discuss how we can tailor Let's Grow! for your school!",
        "Need flexibility? Let's chat! We're happy to work within your budget.",
      ],
      informationHTML: `
        <h3>What Students Will Learn</h3>
        <ul>
          <li><strong>Self-Awareness & Reflection:</strong> Students identify their strengths and how they contribute to their class community.</li>
          <li><strong>Teamwork & Collaboration:</strong> Teams work together to design and build terrariums that represent classroom values.</li>
          <li><strong>Critical & Creative Thinking:</strong> Students brainstorm, problem-solve, and bring their ideas to life through hands-on design.</li>
          <li><strong>Sustainability & Responsibility:</strong> Explore ecosystems, sustainability, and how positive behaviours help communities grow.</li>
        </ul>
        
        <h3>How It Works</h3>
        <ol>
          <li>Students start by discovering their strengths and brainstorming key classroom values.</li>
          <li>In teams, they design and build a terrarium where each layer represents a classroom value, such as trust, respect, and inclusivity.</li>
          <li>The session wraps up with a fun role-play and presentation, where students demonstrate how their values will shape their classroom community.</li>
        </ol>
        
        <h3>Why Teachers & Schools Love This Program</h3>
        <ul>
          <li>🌱 <strong>Interactive & Hands-On:</strong> Students actively participate in team-building and creative activities.</li>
          <li>🌱 <strong>Builds a Strong Classroom Culture:</strong> Encourages students to identify and uphold shared values.</li>
          <li>🌱 <strong>Encourages Sustainability:</strong> Connects environmental awareness with personal growth.</li>
          <li>🌱 <strong>Hassle-Free for Schools:</strong> We bring all the materials—no prep needed!</li>
        </ul>
        
        <p>🌿 Teachers, we haven't forgotten about you! You can create your own teacher terrarium—a living reminder of the values your class will nurture together throughout the year.</p>
        
        <h3>Program Information</h3>
        <ul>
          <li><strong>Half-Full Day Incursion:</strong> A fast-paced, hands-on session where students dive into creativity, teamwork, and business skills.</li>
          <li><strong>Space Requirements:</strong> A large open learning space or multiple classrooms will be needed.</li>
          <li><strong>Outdoor Access:</strong> Not essential, but adds to the fun!</li>
          <li><strong>Tech Setup:</strong> A projector with sound is required for our interactive activities.</li>
          <li><strong>Teacher Supervision:</strong> Teachers will need to supervise students during the session.</li>
          <li><strong>We Bring Everything:</strong> No prep needed! MiniBOSS supplies all materials.</li>
          <li><strong>Large Groups Welcome:</strong> Let's Grow is perfect for large year levels or combined year groups! We can cater for up to 120 students per session, with the flexibility to run multiple sessions per day, concurrently. Whether you're looking to engage an entire year level or mix multiple levels, we'll tailor the experience to fit your school's needs. Let's chat about options!</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
      faqs: [
        {
          question: "Who is this incursion for?",
          answer:
            "Let's Grow! is designed for students in Years 3 to 6, making it the perfect incursion for middle and upper primary classrooms looking to build teamwork, shared values, and a strong classroom culture.",
        },
        {
          question: "How long is the session?",
          answer:
            "We offer both Half-Day and Full-Day options, packed with collaboration, problem-solving, and creativity. Teachers can choose the best fit for their classroom!",
        },
        {
          question: "What do students do in the session?",
          answer:
            "Students start by exploring their own strengths and identifying key class values. In teams, they then design and build a terrarium, with each layer representing a different classroom value, such as respect, responsibility, and teamwork.",
        },
        {
          question: "What do we need to provide?",
          answer:
            "Nothing! We bring everything—including all materials for building terrariums. No prep needed!",
        },
        {
          question: "How do we book?",
          answer:
            "Booking is easy! Call us today on 03 9415 6327 or simply hit the Enquiry button above to lock in your session. We'll handle the rest!",
        },
        {
          question: "Don't let budget be a barrier!",
          answer:
            "We're all about making this experience accessible for schools. Call us to find a solution that works for your school's needs.",
        },
      ],
    },
    yearLevels: ["3", "4", "5", "6"],
  },
  {
    provider: "MiniBOSS",
    name: "Island Escape",
    description:
      "Students are trapped on a remote island and must find a way to escape! Your students are the key to our team's success – they must journey to the island, conquer the challenges, earn gold coins and make it back all within a single day! But this isn't a solo quest; teamwork is the secret ingredient to triumph.",
    tagline: "Explorers, Assemble!",
    focusedSkills: [
      "Drama",
      "English",
      "Maths",
      "Design & Technologies",
      "Health & Wellness",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Resilience, STEAM & Inquiry Skills",
    ],
    slug: "island-escape",
    imageUrl: islandEscape,
    pageDetails: {
      introHeading: "WELCOME TO ISLAND ESCAPE!",
      introParagraphs: [
        "Today's the day your students take the plunge and join the MiniBOSS Adventure Team as fearless explorers!",
        "Students are trapped on a remote island and must find a way to escape! Your students are the key to our team's success – they must journey to the island, conquer the challenges, earn gold coins and make it back all within a single day! But this isn't a solo quest; teamwork is the secret ingredient to triumph.",
        "In this immersive incursion, students refine essential teamwork and collaboration skills. Through a series of whirlwind challenges, they'll unlock problem-solving expertise, sharpen critical thinking, and unleash their creativity. Students are rewarded for the individual efforts and how they work as a team.",
        "Will your MiniBOSSES conquer the island, seize the treasure, and return victorious?",
      ],
      variants: [
        {
          name: "Half Day",
          yearRange: "Half Day",
          description: "$20.00 per student + GST - As of 1 February 2025",
        },
        {
          name: "Full Day",
          yearRange: "Full Day",
          description: "$28.50 per student + GST - As of 1 July 2025",
        },
      ],
      pricingLines: [
        "Price: $28.50 per student plus GST for FULL DAY - As of 1 July 2025.",
        "Price: $20.00 per student plus GST for HALF DAY - As of 1 February 2025.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>Program Information</h3>
        <ul>
          <li>This program is run as a <strong>Half or Full Day</strong> incursion.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>large open learning space or classrooms</strong> will be required.</li>
          <li><strong>Access to a projector (with sound)</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by MiniBOSS.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["3", "4"],
  },
  {
    provider: "MiniBOSS",
    name: "Crack It",
    description:
      "Crack It: The Game Show! is a high-octane showdown where students team up in small groups to compete for the coveted MiniBOSS glory through a series of exciting challenges designed to suit all abilities and learning styles. With five rounds of sheer fun, teams will conquer engineering feats, flex their lateral thinking muscles, solve puzzles, master math, ace spelling and grammar, and unleash their creativity.",
    tagline: "Will you Crack It?",
    isPopular: true,
    focusedSkills: [
      "STEAM Challenges",
      "Problem Solving",
      "Designed Solutions",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Resilience & Inquiry Skills",
    ],
    slug: "crack-it",
    imageUrl: crackIt,
    pageDetails: {
      introHeading: "WELCOME TO... Crack IT: The Game Show!",
      introParagraphs: [
        "Time to unleash MiniBOSS mayhem in this epic point-scoring teamwork extravaganza! that is Crack It: The Game Show!",
        "Aimed squarely at Years 3 to 6, this incursion is the ultimate test of teamwork.",
        "Crack It: The Game Show! is a high-octane showdown where students team up in small groups to compete for the coveted MiniBOSS glory through a series of exciting challenges designed to suit all abilities and learning styles.",
        "With five rounds of sheer fun, teams will conquer engineering feats, flex their lateral thinking muscles, solve puzzles, master math, ace spelling and grammar, and unleash their creativity.",
        "This is no ordinary day – it's an action-packed Game Show where students play to their strengths, discover fresh ways to communicate, and cheer on their peers as they race against time for team victory! Like a game show, students earn points for successfully completing challenges, being good team members and showing great skills. The winning team will go home with a prize however, the real takeaway of the program is students understanding how to work well in teams. Students develop skills in problem solving, communication, critical and creative thinking and teamwork.",
      ],
      variants: [
        {
          name: "Half Day",
          yearRange: "Half Day",
          description: "$20.00 per student + GST - As of 1 February 2025",
        },
        {
          name: "Full Day",
          yearRange: "Full Day",
          description: "$28.50 per student + GST - As of 1 July 2025",
        },
      ],
      pricingLines: [
        "Price: $28.50 per student plus GST for FULL DAY - As of 1 July 2025.",
        "Price: $20.00 per student plus GST for HALF DAY - As of 1 February 2025.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>Why Book?</h3>
        <ul>
          <li><strong>Skill Development:</strong> Enhance teamwork, problem-solving, and critical thinking.</li>
          <li><strong>Engaging and Fun:</strong> A dynamic program that keeps students excited and motivated while inspiring a range of skills.</li>
          <li><strong>Curriculum-Aligned:</strong> Supports key areas of the Victorian Curriculum, including STEAM education and Personal and Social Capability.</li>
          <li><strong>Extended Learning:</strong> Includes pre- and post-incursion activities to deepen learning, complete with videos, printable worksheets, and a teacher guide.</li>
        </ul>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program is run as a <strong>HALF Day or a FULL Day</strong> incursion.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>large open learning space or classrooms</strong> will be required.</li>
          <li><strong>Access to a projector (with sound)</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by MiniBOSS.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["3", "4", "5", "6"],
  },
  {
    provider: "MiniBOSS",
    name: "The Smoothie Bar (Junior)",
    isPopular: true,
    description:
      "Welcome to The Smoothie Bar, where students transform into young entrepreneurs! This hands-on incursion guides students through the exciting process of designing, creating, and marketing their very own smoothie company. Working in teams, students will explore the world of business, from understanding customer preferences to calculating costs and pitching their products.",
    tagline: "Design it. Blend it. Sell it!",
    focusedSkills: [
      "Economics & Business",
      "Drama",
      "Media Arts",
      "Design & Technologies",
      "Health & Wellness",
      "Visual Communication Design",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "STEAM & Inquiry Skills",
    ],
    slug: "the-smoothie-bar-junior",
    imageUrl: theSmoothieBarJunior,
    pageDetails: {
      introHeading: "Blend Creativity with Business Savvy!",
      introParagraphs: [
        "Welcome to The Smoothie Bar, where students transform into young entrepreneurs! This hands-on incursion guides students through the exciting process of designing, creating, and marketing their very own smoothie company.",
        "Working in teams, students will explore the world of business, from understanding customer preferences to calculating costs and pitching their products. It's a delicious journey that blends creativity with practical skills in design, marketing, and healthy living.",
      ],
      variants: [
        {
          name: "Full Day",
          yearRange: "Full Day",
          description: "$29.50 per student + GST - As of 1 July 2025",
        },
      ],
      pricingLines: [
        "Price: $29.50 per student plus GST for FULL DAY - As of 1 July 2025.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>Program Overview</h3>
        <ul>
          <li><strong>Product Design:</strong> Students brainstorm, investigate target market preferences, and develop unique smoothie recipes, refining their blends through two taste-testings during the day.</li>
          <li><strong>Cost and Profit Analysis:</strong> Teams calculate the cost of their ingredients and consider pricing strategies to ensure a profitable product.</li>
          <li><strong>Marketing:</strong> Students create marketing materials to promote their product and brand.</li>
          <li><strong>The Pitch:</strong> The program culminates in a high-stakes pitch session, where teams present to a panel of "sharks" (teacher judges).</li>
          <li><strong>Healthy Choices:</strong> Encourages students to make informed healthy choices.</li>
        </ul>
        
        <h3>Why Book?</h3>
        <ul>
          <li><strong>Skill Development:</strong> Boost creativity, teamwork, and financial literacy.</li>
          <li><strong>Engaging and Fun:</strong> A dynamic program that keeps students excited and motivated while inspiring creativity and business skills.</li>
          <li><strong>Curriculum-Aligned:</strong> Supports key areas of the Victorian Curriculum, including Design and Technologies, Economics and Business, and Personal and Social Capability.</li>
          <li><strong>Extended Learning:</strong> Includes pre- and post-incursion activities to reinforce learning and extend the experience, complete with videos, printable worksheets, and a teacher guide.</li>
        </ul>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program runs as a <strong>Full Day</strong> incursion.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>gymnasium, hall, or large open learning space</strong> will be required (Classrooms can be used for smaller groups).</li>
          <li><strong>Access to powerpoints</strong> required.</li>
          <li><strong>Access to a projector</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All worksheets and supplies</strong> required to run the program are supplied by MiniBOSS.</li>
          <li>The Smoothie Bar is a <strong>nut and egg free</strong> program. Full allergy information and advice will be provided to you prior to the incursion.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["3", "4", "5", "6"],
  },
  {
    provider: "MiniBOSS",
    name: "The Launch!",
    description:
      "Step into the exciting world of innovation, entrepreneurship and design with The Launch – a fast-paced, hands-on incursion where students become product developers for a day. In this high-energy experience, students work in teams to design, prototype and pitch a brand-new product for a major retailer.",
    tagline: "Dream. Create. Pitch!",
    focusedSkills: [
      "English",
      "Maths",
      "Design & Technologies",
      "Economics and Business",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Resilience, STEAM & Inquiry Skills",
    ],
    slug: "the-launch",
    imageUrl: theLaunch,
    pageDetails: {
      introHeading: "WELCOME TO THE LAUNCH!",
      introParagraphs: [
        "Step into the exciting world of innovation, entrepreneurship and design with The Launch – a fast-paced, hands-on incursion where students become product developers for a day.",
        "In this high-energy experience, students work in teams to design, prototype and pitch a brand-new product for a major retailer. They'll tackle real-world challenges and discover what it takes to bring an idea to life, from research to retail shelf.",
      ],
      variants: [
        {
          name: "Full Day",
          yearRange: "Full Day",
          description: "$28.50 per student + GST - As of 1 July 2025",
        },
      ],
      pricingLines: [
        "Price: $28.50 per student plus GST for FULL DAY - As of 1 July 2025.",
        "Package rates available for multiple year level bookings and whole of school programs. Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>What Students Will Learn</h3>
        <ul>
          <li><strong>Design & Innovation:</strong> Students brainstorm, sketch and create prototypes that solve real problems and appeal to target audiences.</li>
          <li><strong>Market Research:</strong> Teams explore trends and surveys to uncover customer needs and shape their product ideas.</li>
          <li><strong>Visual Design:</strong> Students use colour theory and storytelling to create eye-catching product packaging and branding.</li>
          <li><strong>Financial Literacy:</strong> Students explore costings, budgeting and basic pricing strategies to prepare for market success.</li>
          <li><strong>The Pitch:</strong> Teams present their concept to a panel of 'retail executives' in a Shark Tank-style finale.</li>
        </ul>
        
        <h3>Why Teachers & Schools Love This Program</h3>
        <ul>
          <li><strong>Real-World Learning:</strong> Students develop future-ready skills in design thinking, collaboration and entrepreneurship.</li>
          <li><strong>Immersive Format:</strong> A one-day innovation sprint that brings the full product development cycle to life.</li>
          <li><strong>Curriculum Aligned:</strong> Mapped to key learning areas in the Victorian Curriculum including Design and Technologies, Economics and Business, and Critical & Creative Thinking.</li>
          <li><strong>We Bring Everything:</strong> All materials are provided.</li>
        </ul>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program is run as a <strong>Full Day</strong> incursion.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>large open learning space or classrooms</strong> will be required.</li>
          <li><strong>Access to an outdoor area</strong> is desired.</li>
          <li><strong>Access to a projector (with sound)</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by MiniBOSS.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["3", "4", "5", "6"],
  },
  {
    provider: "MiniBOSS",
    name: "The Lab",
    description:
      "The Lab is an exciting, hands-on chemistry program that helps students discover how science is woven into every part of our lives, from the food we cook to the everyday products we use. Throughout the day, students work in teams to conduct a series of engaging experiments that reveal the science behind materials and how they interact.",
    tagline: "Science in Action!",
    focusedSkills: [
      "Science Inquiry Skills",
      "Science Understanding",
      "Economics & Business",
      "Visual Communication Design",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "STEAM & Inquiry Skills",
    ],
    slug: "the-lab",
    imageUrl: theLab,
    pageDetails: {
      introHeading: "Explore the world of chemical sciences",
      introParagraphs: [
        "The Lab is an exciting, hands-on chemistry program that helps students discover how science is woven into every part of our lives, from the food we cook to the everyday products we use.",
        "Throughout the day, students work in teams to conduct a series of engaging experiments that reveal the science behind materials and how they interact. They'll investigate:",
        "Using these discoveries, students combine scientific thinking with creative design to customise their very own bath bomb/fizz. They'll experiment with colour, scent and packaging, and yes, they get to take it home!",
        "This action-packed day links directly to the Chemical Sciences unit. It also fosters an enterprising mindset, helping students develop key skills in teamwork, creativity, critical thinking, problem solving, curiosity and innovation.",
      ],
      variants: [
        {
          name: "Full Day",
          yearRange: "Full Day",
          description: "$29.50 per student + GST - As of 1 July 2025",
        },
      ],
      pricingLines: [
        "Price: $29.50 per student plus GST for FULL DAY - As of 1 July 2025.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>What Students Will Investigate</h3>
        <ul>
          <li><strong>States of Matter:</strong> exploring solids, liquids and gases, and how matter changes from one state to another</li>
          <li><strong>Acidic vs Alkaline:</strong> discovering the pH scale and how substances behave based on their acidity or alkalinity</li>
          <li><strong>Temperature and Reaction Rate:</strong> understanding how heat influences the speed of chemical reactions</li>
          <li><strong>Solubility:</strong> learning what affects how substances dissolve, and why that matters in real-world situations</li>
        </ul>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program is run as a <strong>FULL Day</strong> incursion.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>gymnasium, hall, or large open learning space</strong> will be required (Classrooms can be used for smaller groups).</li>
          <li><strong>Access to outdoor space</strong> required.</li>
          <li><strong>Access to water</strong> required.</li>
          <li><strong>Access to powerpoints</strong> required.</li>
          <li><strong>Access to a projector</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All worksheets and supplies</strong> required to run the program are supplied by MiniBOSS.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["3", "4", "5", "6"],
  },
  {
    provider: "MiniBOSS",
    name: "The Newsroom",
    imageUrl: theNewsroom,
    description:
      "Live from the classroom, students step into the roles of news researchers and reporters, diving into exciting breaking news topics (that can also be tailored towards your inquiry topic or focus). Picture the buzz and excitement of a real newsroom! Introducing The Newsroom – a thrilling project-based learning journey that transforms students into dynamic teams of storytellers, boosting teamwork, critical thinking, problem-solving, creativity, communication, digital literacy, and presentation skills.",
    tagline: "Lights. Camera. Action!",
    focusedSkills: [
      "Media Arts",
      "English",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "STEAM & Inquiry Skills",
    ],
    slug: "the-newsroom",
    pageDetails: {
      introHeading: "Get set to create your own broadcast news segment!",
      introParagraphs: [
        "Live from the classroom, students step into the roles of news researchers and reporters, diving into exciting breaking news topics (that can also be tailored towards your inquiry topic or focus). Picture the buzz and excitement of a real newsroom!",
        "Can your news crews race against time and deliver a news story that'll have everyone on the edge of their seats?",
        "Introducing The Newsroom – a thrilling project-based learning journey that transforms students into dynamic teams of storytellers, boosting teamwork, critical thinking, problem-solving, creativity, communication, digital literacy, and presentation skills. In The Newroom, students become the reporters and news anchors for the day! In teams students will research, brainstorm, script and present their own live news stories.",
      ],
      variants: [
        {
          name: "Full Day",
          yearRange: "Full Day",
          description: "$28.50 per student + GST - As of 1 July 2025",
        },
      ],
      pricingLines: [
        "Price: $28.50 per student plus GST for FULL DAY - As of 1 July 2025.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>Program Information</h3>
        <ul>
          <li>This program runs as a <strong>FULL Day</strong> incursion.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>gymnasium, hall, or large open learning space</strong> will be required (Classrooms can be used for smaller groups).</li>
          <li><strong>Access to a projector</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by MiniBOSS.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["5", "6"],
  },
  {
    provider: "MiniBOSS",
    name: "The Studio (Junior)",
    imageUrl: theStudioJunior,
    isPopular: true,
    description:
      "Step into The Studio and immerse your students in the exciting world of podcasting! In this hands-on incursion, students work in teams to design, produce, and present their very own podcast episode—all in one day. From brainstorming to final edits, students will learn the art of communication, creativity, and collaboration.",
    tagline: "Your Voice, Your PODCAST!",
    focusedSkills: [
      "Digital Technologies",
      "Civics & Citizenship",
      "English",
      "Ethical Capability",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Enterprising & Inquiry Skills",
    ],
    slug: "the-studio-junior",
    pageDetails: {
      introHeading: "Discover Your Voice, Create Your Podcast!",
      introParagraphs: [
        "Step into The Studio and immerse your students in the exciting world of podcasting! In this hands-on incursion, students work in teams to design, produce, and present their very own podcast episode—all in one day. From brainstorming to final edits, students will learn the art of communication, creativity, and collaboration.",
      ],
      variants: [
        {
          name: "Full Day",
          yearRange: "Full Day",
          description: "$28.50 per student + GST - As of 1 July 2025",
        },
      ],
      pricingLines: [
        "Price: $28.50 per student plus GST for FULL DAY - As of 1 July 2025.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>Program Overview</h3>
        <ul>
          <li><strong>Podcast Production:</strong> Students brainstorm topics, write scripts, and record their podcasts, focusing on impactful storytelling and engaging content.</li>
          <li><strong>Technical Skills:</strong> Teams learn to edit and enhance their recordings, adding music, sound effects, and polishing their final product.</li>
          <li><strong>The Broadcast:</strong> Students present their podcasts, showcasing their communication and production skills to their peers.</li>
          <li><strong>One-Day Experience:</strong> A fast-paced, creative journey from idea to broadcast, all in just one day.</li>
        </ul>
        
        <h3>Why Book?</h3>
        <ul>
          <li><strong>Skill Development:</strong> Enhance communication, digital literacy, and creative thinking.</li>
          <li><strong>Engaging and Fun:</strong> A dynamic program that keeps students excited and motivated.</li>
          <li><strong>Curriculum-Aligned:</strong> Supports key areas of the Victorian Curriculum, including Design and Technologies, and Personal and Social Capability.</li>
          <li><strong>Extended Learning:</strong> Includes a pre-incursion activity to boost creativity...</li>
        </ul>
        
        <h3>Topic Suggestions</h3>
        <ul>
          <li><strong>Term 1: Setting the Year's Tone</strong> - "Classroom Goals Podcast" Students outline class expectations and goals, creating a shared vision for the year.</li>
          <li><strong>Term 2: Creative Expression</strong> - "Storytelling Podcast" Students create their own stories or poems, fostering creativity.</li>
          <li><strong>Term 3: Community Connection</strong> - "Community Voices Podcast" Students interview local figures or school staff, highlighting community involvement.</li>
          <li><strong>Term 4: The Ultimate Year 6 Memento</strong> - "Farewell Primary School Podcast" Students reflect on their primary school journey, sharing memories and interviews as a cherished keepsake.</li>
        </ul>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program is run as a <strong>FULL Day</strong> incursion.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>gymnasium, hall, or large open learning space</strong> will be required (Classrooms can be used for smaller groups).</li>
          <li><strong>Access to a projector</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by MiniBOSS.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["5", "6"],
  },
  {
    provider: "MiniBOSS",
    name: "The Brief (Junior)",
    imageUrl: theBriefJunior,
    description:
      "The Brief is a complete teacher resource that has been designed so that school communities can adapt the content to fit their needs and schedule. The Brief can be run as a multiple day event, over a week or as a term long program. The Brief takes students on an industry-focused learning journey right in the classroom. They'll dive into innovation, creativity, and entrepreneurship, all while tackling a real-world challenge head-on.",
    tagline: "New Term Long Program",
    focusedSkills: [
      "Economics & Business",
      "Design & Technologies",
      "Health & Wellness",
      "Visual Communication Design",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Enterprising & Inquiry Skills",
    ],
    slug: "the-brief-junior",
    pageDetails: {
      introHeading: "New Teacher Resource: Years: 5-6",
      introParagraphs: [
        "The Brief is a complete teacher resource that has been designed so that school communities can adapt the content to fit their needs and schedule. The Brief can be run as a multiple day event, over a week or as a term long program.",
        "Just press play on our teacher resources and follow along step-by-step with our pre-recorded facilitator videos. We have done all the heavy lifting for you...produced the comprehensive content, videos, and all the material you will need to run this immersive program.",
        "The Brief takes students on an industry-focused learning journey right in the classroom. They'll dive into innovation, creativity, and entrepreneurship, all while tackling a real-world challenge head-on.",
        "We've teamed up with a top retailer to make things exciting! Students will get the chance to design and market a new product for 9 to 13 year olds.",
        "In teams, students will collaborate to brainstorm, design, create, market, and pitch their product to teachers and peers. There are fantastic rewards and prizes up for grabs and a 'Trade Show Extravaganza' to top it all off. Here, teams and their products will take centre stage, facing judges, a voting audience, and the chance to bask in well-deserved team glory!",
      ],
      pricingLines: [
        "Give us a call on 03 9415 6327 to find out more about the program and pricing.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>The Resource Pack Includes</h3>
        <ul>
          <li>Team Kits</li>
          <li>Teacher Packs</li>
          <li>Student behaviour rewards program (can be linked to school values)</li>
          <li>Curriculum Links</li>
          <li>Student Workbooks</li>
          <li>Great Prizes</li>
          <li>Video Content</li>
          <li>Teacher PD</li>
        </ul>
        
        <p>We can also run an optional Kick-Off Event to launch the program at your school.</p>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program can be booked as a <strong>multiple day event or as a term long program</strong>, and can be booked with or without the Kick-Off Event.</li>
          <li>This program is <strong>teacher lead</strong>, with MiniBOSS providing teacher training. MiniBOSS can also come into the school to do a Kick-Off event, a great way to start the program!</li>
          <li>A <strong>gymnasium, hall, or large open learning space</strong> will be required for the 'Trade Show Extravaganza' (Classrooms can be used for all other sessions).</li>
          <li><strong>MiniBOSS provides student team kits and teacher packs</strong>, complete with all the resources required to run the program.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["5", "6"],
  },
  {
    provider: "MiniBOSS",
    name: "Lead It (Junior)",
    description:
      "Empower your students with Lead It—an inspiring incursion that helps them uncover the traits and values of exceptional leaders. Through engaging activities, students will unlock their unique skills and talents, putting the essence of everyday leadership into action. Whether they hold a formal role or not, every student will learn what it takes to lead with confidence and purpose.",
    tagline: "No badge required!",
    focusedSkills: [
      "Drama",
      "English",
      "Health & Physical Education",
      "Civics & Citizenship",
      "Critical & Creative Thinking",
      "Ethical Capability",
      "Personal & Social Capability",
      "Enterprising & Inquiry Skills",
    ],
    slug: "lead-it-junior",
    imageUrl: leadItJunior,
    pageDetails: {
      introHeading: "Discover the Leader Within!",
      introParagraphs: [
        "Unveil the art of leadership! Ever wondered what it takes to lead?",
        "Empower your students with Lead It—an inspiring incursion that helps them uncover the traits and values of exceptional leaders. Through engaging activities, students will unlock their unique skills and talents, putting the essence of everyday leadership into action. Whether they hold a formal role or not, every student will learn what it takes to lead with confidence and purpose.",
      ],
      variants: [
        {
          name: "Half Day",
          yearRange: "Half Day",
          description: "$20.00 per student + GST - As of 1 February 2025",
        },
        {
          name: "Full Day",
          yearRange: "Full Day",
          description: "$28.50 per student + GST - As of 1 July 2025",
        },
      ],
      pricingLines: [
        "Price: $28.50 per student plus GST for FULL DAY - As of 1 July 2025.",
        "Price: $20.00 per student plus GST for HALF DAY - As of 1 February 2025.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>Program Overview</h3>
        <ul>
          <li><strong>Leadership Exploration:</strong> Students explore the traits of great leaders and reflect on their own leadership potential.</li>
          <li><strong>Team Collaboration:</strong> Engaging group activities help students develop teamwork, communication, and problem-solving skills.</li>
          <li><strong>Campaign Creation:</strong> Students design and present a campaign that inspires positive change in their school community.</li>
          <li><strong>Real-World Application:</strong> Practical exercises and role-playing scenarios allow students to apply leadership concepts in real-world situations.</li>
        </ul>
        
        <h3>Why Book?</h3>
        <ul>
          <li><strong>Skill Development:</strong> Build essential leadership, communication, and teamwork skills.</li>
          <li><strong>Engaging and Inspiring:</strong> A dynamic program that motivates students to lead with confidence.</li>
          <li><strong>Curriculum-Aligned:</strong> Supports key areas of the Victorian Curriculum, including Personal and Social Capability, Ethical Capability, as well as Civics and Citizenship.</li>
          <li><strong>Extended Learning:</strong> Includes pre- and post-incursion activities to reinforce leadership skills. Complete with videos, printable worksheets and a teacher guide.</li>
        </ul>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program is run as a <strong>FULL or HALF Day</strong> incursion.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>gymnasium, hall, or large open learning space</strong> will be required (Classrooms can be used for smaller groups).</li>
          <li><strong>Access to a projector</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by MiniBOSS.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["5", "6"],
  },
  {
    provider: "MiniBOSS",
    name: "In My Community",
    imageUrl: inMyCommunity,
    description:
      "'In My Community' gives students the opportunity to build their knowledge of civics and citizenship in a collaborative and hands-on way. In this immersive incursion students learn not only what it takes to be a successful teammate, but also what it means to be an active participant in their community.",
    tagline: "Get connected!",
    focusedSkills: [
      "Civics & Citizenship",
      "Intercultural Capability",
      "Design & Technologies",
      "Visual Communication Design",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Enterprising & Inquiry Skills",
    ],
    slug: "in-my-community",
    pageDetails: {
      introHeading: "The Ultimate Team",
      introParagraphs: [
        "Being a team player is so important in civic life!",
        "'In My Community' gives students the opportunity to build their knowledge of civics and citizenship in a collaborative and hands-on way.",
        "In this immersive incursion students learn not only what it takes to be a successful teammate, but also what it means to be an active participant in their community. They learn how to work together to help others and build an inclusive and supportive school community.",
        "The In My Community incursion is a project based learning experience with emphasis on students developing civic skills, teamwork, critical thinking, problem solving, creativity, communication and presentation skills.",
      ],
      variants: [
        {
          name: "Full Day",
          yearRange: "Full Day",
          description: "$27.50 per student + GST - As of 1 July 2023",
        },
      ],
      pricingLines: [
        "Price: $27.50 per student plus GST for FULL DAY - As of 1 July 2023.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>Program Information</h3>
        <ul>
          <li>This program runs as a <strong>FULL Day</strong> incursion.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>gymnasium, hall, or large open learning space</strong> will be required (Classrooms can be used for smaller groups).</li>
          <li><strong>Access to a projector</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by MiniBOSS.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["5", "6"],
  },
  {
    provider: "Tripod Education",
    name: "The Studio (Senior)",
    imageUrl: theStudioSenior,
    description:
      "Get ready for an exciting journey into the world of podcasting with The Studio! Spark your students' creativity as they explore the art of storytelling. Whether it's a one-day intensive or a more in-depth exploration over two or three days, students will discover the magic of crafting their very own podcasts through a dynamic learning experience that goes beyond audio recording.",
    tagline: "Raise Your Voice!",
    focusedSkills: [
      "Digital Technologies",
      "Civics & Citizenship",
      "English",
      "Ethical Capability",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Enterprising & Inquiry Skills",
    ],
    slug: "the-studio-senior",
    pageDetails: {
      introHeading: "Skills for learning, life and the world of work",
      introParagraphs: [
        "Students design, produce, and present their very own PODCAST!",
        "Get ready for an exciting journey into the world of podcasting with The Studio!",
        "Spark your students' creativity as they explore the art of storytelling. Whether it's a one-day intensive or a more in-depth exploration over two or three days, students will discover the magic of crafting their very own podcasts through a dynamic learning experience that goes beyond audio recording. The Studio can be tailored to any compelling topic of your choice.",
        "The Studio can be tailored to explore any compelling topic of your choice.",
      ],
      pricingLines: [
        "Pricing depends on the duration of program and number of students.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>Here's what students can expect in a multi-day career-focused program (ideal for Year 9 and 10 students):</h3>
        <ul>
          <li>Conduct professional interviews with industry mentors.</li>
          <li>Learn effective communication and collaboration skills.</li>
          <li>Develop teamwork skills amidst tight deadlines.</li>
          <li>Explore diverse career paths and burning career questions.</li>
          <li>Acquire hands-on networking experience and connections.</li>
          <li>Polish presentation skills for the community showcase.</li>
          <li>Craft a podcast worthy of being a school keepsake or highlighted on resumes.</li>
          <li>Develop essential enterprise skills for future success.</li>
          <li>Assume professional roles (such as Producer, Project Manager, Host, and Brand Expert), handling deliverables and deadlines.</li>
        </ul>
        
        <p>The Studio aligns with the Victorian Curriculum and the Victorian Careers Curriculum Framework, ensuring integration into each school's educational objectives. We also offer customizations to tailor the experience to school requirements, including VCE Vocational Major Programs.</p>
        
        <p>The Studio can also be aligned with other state and national curriculums.</p>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program can be booked over <strong>One-Multiple Days</strong>. Speak to us about specific requirements.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>gymnasium, hall, or large open learning space</strong> will be required (Classrooms can be used for smaller groups).</li>
          <li><strong>Access to a projector</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by TRIPOD.</li>
        </ul>
        
        <h3>VCE Vocational Major Links</h3>
        <ul>
          <li>VCE VM Work Related Skills</li>
          <li>VCE VM Personal Development Skills</li>
          <li>VCE VM Numeracy and Literacy Skills</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["7", "8", "9", "10", "11", "12", "VCE Vocational Major"],
  },
  {
    provider: "Tripod Education",
    name: "The Pitch",
    description:
      "This unique professional development experience allows students to explore, understand, develop and learn how to communicate their skills. The Pitch builds confidence and a strong connection to the key skills students will need to be future ready. The Pitch explores the future world of work and the transferable enterprise skills students will need for success in learning, life and work.",
    tagline: "Professional Development Program",
    focusedSkills: [
      "Professional Development",
      "Economics & Business",
      "Designed Solutions",
      "Digital Technologies",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Enterprising & Inquiry Skills",
    ],
    slug: "the-pitch",
    imageUrl: thePitch,
    pageDetails: {
      introHeading: "Skills for learning, life and the world of work",
      introParagraphs: [
        "Ideal for Years: 9-10",
        "This unique professional development experience allows students to explore, understand, develop and learn how to communicate their skills. The Pitch builds confidence and a strong connection to the key skills students will need to be future ready.",
        "The Pitch explores the future world of work and the transferable enterprise skills students will need for success in learning, life and work.",
        "Through plenary discussion and real-world application, students are given a set of tools that will help them develop skills in critical thinking, creativity, presentation skills, problem solving, teamwork and communication.",
        "This action-packed program is built to really engage students in their learning and motivate them to build their professional brand.",
        "Students are given the opportunity to participate in an individual pitch and a group pitch as part of the program.",
        "For the final pitch, students are presented with an exciting real-world challenge, where they work in small groups to apply their critical thinking, problem-solving, communication, and teamwork skills to craft and deliver their ultimate pitch!",
      ],
      pricingLines: [
        "Prices start at $28.50 per student per day plus GST for FULL day - As of 1 July 2023.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <blockquote>
          <p>"I wanted to express my gratitude for the amazing session your team delivered. The students were so positive about the day, and when we reflected on their favourite experience of the week, many of them cited 'The Pitch' day. Thank you."</p>
          <cite>Teacher Quote</cite>
        </blockquote>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program can be booked as a <strong>One-Two Day</strong> program.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>gymnasium, hall, or large open learning space</strong> will be required (Classrooms can be used for smaller groups).</li>
          <li><strong>Access to a projector</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by TRIPOD.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["9", "10"],
  },
  {
    provider: "Tripod Education",
    name: "The Smoothie Bar (Senior)",
    description:
      "Students step into the shoes of young entrepreneurs as they create, brand, and pitch their own smoothie idea in a real-world business simulation. The Smoothie Bar is more than just a one-off activity, it's a fast-paced, hands-on introduction to the world of business, designed to spark curiosity and inspire entrepreneurial thinking.",
    tagline: "Design it. Blend it. Sell it!",
    focusedSkills: [
      "Economics & Business",
      "Design & Technologies",
      "Health & Wellness",
      "Visual Communication Design",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Enterprising & Inquiry Skills",
    ],
    slug: "the-smoothie-bar-senior",
    imageUrl: theSmoothieBarSenior,
    pageDetails: {
      introHeading: "Skills for learning, life and the world of work",
      introParagraphs: [
        "The Smoothie Bar",
        "Students step into the shoes of young entrepreneurs as they create, brand, and pitch their own smoothie idea in a real-world business simulation.",
        "Real-World Business, Real Student Impact",
        "The Smoothie Bar is more than just a one-off activity, it's a fast-paced, hands-on introduction to the world of business, designed to spark curiosity and inspire entrepreneurial thinking. Students work in teams to design a smoothie concept, sample key elements of branding and marketing, and pitch their idea to a panel of judges.",
        "The program combines creativity, collaboration and real-world financial skills. Students will get a taste of what it means to bring a product to market, from customer research and pricing to basic branding and pitching all while developing capabilities they'll use far beyond the classroom.",
        "The day culminates in a Shark Tank-style pitch, where teachers step into the role of judges (aka the Sharks) and decide which team deserves to take the crown as top smoothie business.",
      ],
      variants: [
        {
          name: "One Day",
          yearRange: "One Day",
          description: "$29.50 per student per day + GST - As of 1 July 2025",
        },
        {
          name: "Two-Day Carnival",
          yearRange: "Two Days",
          description: "Contact us for a quote",
        },
      ],
      pricingLines: [
        "Price: $29.50 per student per day plus GST for FULL day - As of 1 July 2025.",
        "Contact us for a quote for The 2-Day Carnival.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>What Students Will Do</h3>
        <ul>
          <li>Research trends and identify a target market</li>
          <li>Develop original smoothie recipes based on health, taste and cost</li>
          <li>Create a memorable brand and marketing strategy</li>
          <li>Crunch the numbers to plan costs and set a competitive price</li>
          <li>Deliver a live pitch to a panel of 'Shark Tank'-style judges</li>
        </ul>
        
        <p>We bring everything: blenders, ingredients and all the materials needed to run the day. Teachers can simply show up and enjoy the session, and yes, you'll even get to enjoy a smoothie! We also provide detailed allergy and intolerance information ahead of time to help you plan with confidence.</p>
        
        <h3>The 2-Day Carnival (Optional Extension)</h3>
        <p>Ready to take it to the next level? On Day 2, students launch their smoothie brand in a trade show-style carnival. They will:</p>
        <ul>
          <li>Set up smoothie stands and serve the school community</li>
          <li>Engage with customers and promote their brand</li>
          <li>Put their enterprise and teamwork skills to the test in a real-world simulation</li>
        </ul>
        
        <p>To find out more, give us a call.</p>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program can be booked as a <strong>One-Two Day</strong> program.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>gymnasium, hall, or large open learning space</strong> will be required (Classrooms can be used for smaller groups).</li>
          <li><strong>Access to a projector</strong> required.</li>
          <li><strong>Access to powerpoints</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by TRIPOD.</li>
          <li>The Smoothie Bar is a <strong>nut and egg free</strong> program. Full allergy information and advice will be provided to you prior to the program.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["7", "8", "9"],
  },
  {
    provider: "Tripod Education",
    name: "Lead It (Senior)",
    isPopular: true,
    description:
      "Lead It allows students to explore their understanding of what leadership is, how it connects to their values and behaviours, and how they can choose to lead in their own lives to make a meaningful difference and achieve positive impact. In teams, students create a video for future students to help mentor them and ease their transition into the school community.",
    tagline: "Understand Your Impact!",
    focusedSkills: [
      "Health and Wellbeing",
      "Civics & Citizenship",
      "Design & Technologies",
      "Media Arts & Drama",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Inquiry Skills",
    ],
    slug: "lead-it-senior",
    imageUrl: leadItSenior,
    pageDetails: {
      introHeading: "Skills for learning, life and the world of work",
      introParagraphs: [
        "Ideal for Years: 7-12",
        "What is everyday leadership?",
        "Lead It allows students to explore their understanding of what leadership is, how it connects to their values and behaviours, and how they can choose to lead in their own lives to make a meaningful difference and achieve positive impact.",
        "KEY TASK: In teams, students create a video for future students to help mentor them and ease their transition into the school community.",
      ],
      pricingLines: [
        "Prices start at $28.50 per student per day plus GST for FULL day - As of 1 July 2023.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>KEY LEARNING OUTCOMES:</h3>
        <ul>
          <li>Develop self-awareness and recognition of their own strengths, qualities, and values</li>
          <li>Understand the influence they have on others and how they can choose to use this influence</li>
          <li>Identify and prioritise the qualities and skills of good leadership</li>
          <li>Be challenged to consider the impact of their choices, behaviours, and actions, as well as the opportunity they have to contribute to the school community and beyond</li>
        </ul>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program is run as a <strong>Full Day</strong> session. Speak to us about specific requirements.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>gymnasium, hall, or large open learning space</strong> will be required (Classrooms can be used for smaller groups).</li>
          <li><strong>Access to a projector</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by TRIPOD.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["7", "8", "9", "10", "11", "12"],
  },
  {
    provider: "Tripod Education",
    name: "Game On!",
    description:
      "Explore the world of design thinking with Game On! This dynamic challenge empowers students to unleash their creativity by designing and constructing their very own arcade game. They'll brainstorm, prototype, and iterate to create their own game using recycled and sustainable materials.",
    tagline: "Press Play!",
    focusedSkills: [
      "Creative & Design Thinking",
      "Economics & Business",
      "Design & Technologies",
      "Visual Communication Design",
      "Financial Literacy",
      "Personal & Social Capability",
      "Critical Thinking",
      "Enterprising & Inquiry Skills",
    ],
    slug: "game-on",
    imageUrl: gameOn,
    pageDetails: {
      introHeading: "Skills for learning, life and the world of work",
      introParagraphs: [
        "Ideal for Years: 7-9",
        "Explore the world of design thinking with Game On! This dynamic challenge empowers students to unleash their creativity by designing and constructing their very own arcade game.",
        "They'll brainstorm, prototype, and iterate to create their own game using recycled and sustainable materials. Throughout the process, they'll learn the value of iteration and resilience as they work through design challenges and refine their ideas. Working collaboratively in teams, they'll discover their unique talents, strengths, creativity, and problem-solving skills to deliver an immersive gaming experience for their audience.",
        "This program emphasises teamwork and perseverance as students collaborate over multiple days to refine their designs and ultimately bring their creations to life.",
        "And the best part? The school community gets to join in the fun at the carnival on the final day!",
      ],
      pricingLines: [
        "Pricing depends on the duration of program and number of students.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>Program Information</h3>
        <ul>
          <li>This program is run over <strong>multiple days</strong>. Speak to us about specific requirements.</li>
          <li>This program can be run with up to <strong>120 students</strong> at a time (speak to us about options for more students as this is also possible).</li>
          <li>A <strong>gymnasium, hall, or large open learning space</strong> will be required (Classrooms can be used for smaller groups).</li>
          <li><strong>Access to a projector</strong> required.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by TRIPOD.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["7", "8", "9"],
  },
  {
    provider: "Tripod Education",
    name: "Future Ready",
    description:
      "The career landscape is changing quickly and student needs are evolving even faster. As a result, we have moved beyond one-size-fits-all workshops and now create fully customised programs for school communities. This approach keeps students at the cutting edge of what actually works and ensures they receive the support and guidance they genuinely need and want right now.",
    tagline: "Future-focused, bespoke career learning!",
    focusedSkills: [
      "Career Development",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Health & Wellbeing",
      "Financial Literacy",
      "Digital Literacy",
      "Enterprising & Inquiry Skills",
    ],
    slug: "future-ready",
    imageUrl: futureReadyWorkshops,
    pageDetails: {
      introHeading: "Skills for learning, life and the world of work",
      introParagraphs: [
        "Ideal for Years: 7-12",
        "The career landscape is changing quickly and student needs are evolving even faster.",
        "As a result, we have moved beyond one-size-fits-all workshops and now create fully customised programs for school communities.",
        "This approach keeps students at the cutting edge of what actually works and ensures they receive the support and guidance they genuinely need and want right now, while also helping schools meet both students and teachers exactly where they are.",
      ],
      variants: [
        {
          name: "Single Session",
          yearRange: "45–60 minutes",
          description: "A fast, high-impact session focused on a single topic",
        },
        {
          name: "Deep Dive",
          yearRange: "Longer format",
          description:
            "Designed for deeper exploration or coverage of multiple topics",
        },
        {
          name: "Term-Long Program",
          yearRange: "Full term",
          description:
            "Weekly sessions embedded into your wellbeing or careers timetable",
        },
      ],
      pricingLines: [
        "Future Ready programs are designed to be flexible and can be delivered as a Single Session, Deep Dive, or Term-Long program, depending on your school's needs.",
        "Prices start from $12 per student plus GST for a 45–60 minute session.",
        "Minimum numbers apply. Package rates are available for multiple year level bookings and whole-of-school programs.",
        "Get in touch with our team to discuss the best format and pricing for your school.",
      ],
      informationHTML: `
        <h3>How Future Ready works:</h3>
        <ol>
          <li><strong>Student Survey</strong><br>
          Students kick things off with a fast, interactive pre-survey that captures what they are curious about, concerned about, and eager to learn. This gives instant insight into what your cohort actually wants and needs.</li>
          
          <li><strong>Program Design</strong><br>
          We turn those insights into a customised program built specifically for your school. Using our wide range of modules and activities, we design a session that speaks directly to the real needs of your students and your school.</li>
          
          <li><strong>Flexible Delivery</strong><br>
          Our facilitators deliver high-energy, engaging sessions tailored to your students. Schools can choose a fast Single Session, a longer Deep Dive, or a full Term-Long Program embedded within their wellbeing or careers timetable.</li>
          
          <li><strong>Follow-Up Resources</strong><br>
          Teachers receive ready-to-use follow-up resources that help maintain momentum and support students to continue their thinking, reflection, and planning beyond the session.</li>
        </ol>
        
        <h3>Program Information</h3>
        <p>Future Ready programs can be customised to include topics such as:</p>
        <ul>
          <li>Making the most of work experience and pathway planning</li>
          <li>Exploring university, TAFE, apprenticeships, and alternative pathways</li>
          <li>Planning a meaningful gap year and making it count</li>
          <li>Interview skills, networking, and professional communication</li>
          <li>Creating stand-out resumes and personal brands</li>
          <li>Managing exam stress and developing effective study routines</li>
          <li>Strengthening digital habits, social media use, and online reputation</li>
          <li>Building financial wellbeing and smart money habits</li>
          <li>Boosting sleep, energy, and overall wellbeing</li>
          <li>Strengthening mindset, resilience, and bounce-back skills</li>
          <li>Identifying strengths, interests, values, and future opportunities</li>
          <li>Setting goals and mapping next steps beyond school</li>
        </ul>
        
        <p>Designed specifically to your goals. All sessions align to the Victorian Curriculum V2.0.</p>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["7", "8", "9", "10", "11", "12"],
  },
  {
    provider: "Tripod Education",
    name: "The Brief (Senior)",
    imageUrl: theBriefSenior,
    description:
      "The Brief is a complete teacher resource that has been designed so that school communities can adapt the content to fit their needs and schedule. The Brief can be run as a multiple day event or as a term long program. Delivered as a series of virtual incursions, The Brief takes students on an industry-focused learning journey right in the classroom.",
    tagline: "New Term Long Program",
    focusedSkills: [
      "Economics & Business",
      "Design & Technologies",
      "Health & Wellness",
      "Visual Communication Design",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Enterprising & Inquiry Skills",
    ],
    slug: "the-brief-senior",
    pageDetails: {
      introHeading: "Skills for learning, life and the world of work",
      introParagraphs: [
        "New Teacher Resource: Years: 7-12",
        "The Brief is a complete teacher resource that has been designed so that school communities can adapt the content to fit their needs and schedule. The Brief can be run as a multiple day event or as a term long program.",
        "Delivered as a series of virtual incursions, The Brief takes students on an industry-focused learning journey right in the classroom. They'll dive into innovation, creativity, and entrepreneurship, all while tackling a real-world challenge head-on.",
        "We've teamed up with a top retailer to make things exciting! Students will get the chance to design and market a new product for 13 to 18 year olds.",
        "In teams, students will collaborate to brainstorm, design, create, market, and pitch their product to teachers and peers. There are fantastic rewards and prizes up for grabs and a 'Trade Show Extravaganza' to top it all off. Here, teams and their products will take centre stage, facing judges, a voting audience, and the chance to bask in well-deserved team glory!",
      ],
      pricingLines: [
        "Give us a call on 03 9415 6327 to find out more about the program and pricing.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>The Resource Pack Includes</h3>
        <ul>
          <li>Team Kits</li>
          <li>Teacher Packs</li>
          <li>Student behaviour rewards program (can be linked to school values)</li>
          <li>Curriculum Links</li>
          <li>Student Workbooks</li>
          <li>Great Prizes</li>
          <li>Video Content</li>
          <li>Teacher PD</li>
        </ul>
        
        <p>We can also run an optional Kick-Off Event to launch the program at your school.</p>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program can be booked as a <strong>multiple day event or as a term long program</strong>.</li>
          <li>This program is <strong>teacher lead</strong>, with TRIPOD providing teacher training. TRIPOD can also come into the school to do a Kick-Off Event. A great way to start the program!</li>
          <li>A <strong>gymnasium, hall, or large open learning space</strong> will be required for the 'Trade Show Extravaganza' (Classrooms can be used for all other sessions).</li>
          <li><strong>TRIPOD provides student team kits and teacher packs</strong>, complete with all the resources required to run the program.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["7", "8", "9", "10", "11", "12"],
  },
  {
    provider: "Tripod Education",
    name: "The Showcase",
    description:
      "Engage your students in a ready-to-go, project-based learning experience that builds creativity, collaboration and communication—without the pressure of social media. The Showcase is a structured, term-long challenge where students work in teams to design, produce and present their own original piece of multimedia content.",
    tagline: "New Term Long Program",
    focusedSkills: [
      "Economics & Business",
      "Design & Technologies",
      "Visual Communication Design",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Enterprising & Inquiry Skills",
    ],
    slug: "the-showcase",
    imageUrl: theShowcase,
    pageDetails: {
      introHeading: "Skills for learning, life and the world of work",
      introParagraphs: [
        "The Showcase",
        "Year Levels: 7–12 | Duration: 10 sessions",
        "Engage your students in a ready-to-go, project-based learning experience that builds creativity, collaboration and communication—without the pressure of social media.",
        "The Showcase is a structured, term-long challenge where students work in teams to design, produce and present their own original piece of multimedia content. Guided by pre-recorded facilitator videos, students move through three competitive rounds, building their ideas step by step and gaining real-world skills along the way.",
      ],
      pricingLines: [
        "Give us a call on 03 9415 6327 to find out more about the program and pricing.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>What Students Will Create</h3>
        <p>Each team will plan, script, and produce a 7–10 minute multimedia piece. This could be a podcast, interview segment, panel discussion, or short-form video. While the format draws inspiration from content on platforms like YouTube or Spotify, students won't need to use social media or publish anything online—everything can be presented within the school context.</p>
        
        <p>The content must:</p>
        <ul>
          <li>Be 7–10 minutes long</li>
          <li>Include an interview with one or more guests (e.g. a teacher, parent, expert, or peer)</li>
          <li>Connect to a meaningful theme (e.g. The Future, Belonging, or Voices That Matter)</li>
        </ul>
        
        <p>The team with the strongest overall presentation—based on creativity, teamwork, communication, and professionalism—wins a prize!</p>
        
        <h3>Why Teachers Love It</h3>
        <ul>
          <li><strong>All resources included:</strong> No planning required</li>
          <li><strong>Built-in structure:</strong> Three exciting rounds keep students engaged</li>
          <li><strong>Cross-curricular links:</strong> English, Media, Civics, Capabilities, Careers</li>
          <li><strong>Skill-building:</strong> Creativity, communication, critical thinking, and collaboration</li>
        </ul>
        
        <h3>What's Included</h3>
        <ul>
          <li>Team Kits (with props, tools and mini whiteboards)</li>
          <li>Student Workbooks</li>
          <li>Teacher Resource Pack</li>
          <li>Pre-recorded Facilitator Videos</li>
          <li>Prizes for the winning team</li>
          <li>Student Behaviour Reward Program (aligned to your school values)</li>
        </ul>
        
        <h3>Optional Add-Ons:</h3>
        <ul>
          <li>Teacher Professional Development (PD)</li>
          <li>Kick-Off Event to launch the program at your school</li>
        </ul>
        
        <h3>Flexible Themes</h3>
        <p>We'll help you choose a theme that resonates with your students. Popular options include:</p>
        <ul>
          <li><strong>The Future:</strong> Career and aspiration focus</li>
          <li><strong>Our Voice:</strong> Youth agency and identity</li>
          <li><strong>Change Makers:</strong> Innovation and community impact</li>
        </ul>
        
        <p>📱 Want to learn more or tailor The Showcase to your school? Call us to discuss pricing and options.</p>
        
        <h3>Program Information</h3>
        <ul>
          <li>This program is designed as a <strong>term long program</strong>.</li>
          <li>This program is <strong>teacher lead</strong>, with TRIPOD providing all the teacher resources. TRIPOD can also come into the school to do a Kick-Off Event. A great way to start the program!</li>
          <li><strong>TRIPOD provides student team kits and teacher packs</strong>, complete with all the resources required to run the program.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["7", "8", "9", "10", "11", "12"],
  },
  {
    provider: "Tripod Education",
    name: "The Panel",
    description:
      "The Panel is a fast-paced, student-led Q&A session for Years 7–12 that opens up real conversations about life, relationships, and wellbeing. Students take the lead—submitting questions prior, nominating panelists, and driving the discussion with honest, age-appropriate dialogue. It's respectful, inclusive, and empowering—giving students the tools and language to lead conversations that matter.",
    tagline: "Ask it. Hear it. Own it",
    focusedSkills: [
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Ethical Understanding",
      "Interpersonal Relationships",
      "Wellbeing & Resilience",
    ],
    slug: "the-panel",
    imageUrl: thePanel,
    pageDetails: {
      introHeading: "Skills for learning, life and the world of work",
      introParagraphs: [
        "The Panel",
        "Ask it. Hear it. Own it.",
        "The Panel is a fast-paced, student-led Q&A session for Years 7–12 that opens up real conversations about life, relationships, and wellbeing. Students take the lead—submitting questions prior, nominating panelists, and driving the discussion with honest, age-appropriate dialogue.",
        "It's respectful, inclusive, and empowering—giving students the tools and language to lead conversations that matter.",
      ],
      pricingLines: [
        "Get in touch to chat about pricing and flexible delivery options to suit your needs.",
        "Package rates available for multiple year level bookings and whole of school programs.",
      ],
      informationHTML: `
        <h3>What Students Will Learn</h3>
        <ul>
          <li><strong>Confidence & Communication:</strong> Express ideas, ask tough questions, and build respectful dialogue.</li>
          <li><strong>Critical Thinking:</strong> Explore real-world scenarios around relationships, identity, and wellbeing.</li>
          <li><strong>Empathy & Peer Support:</strong> Understand different perspectives and learn how to respond with care.</li>
          <li><strong>Leadership & Responsibility:</strong> Step up as student panelists and role models for their cohort.</li>
        </ul>
        
        <h3>How It Works</h3>
        <ol>
          <li><strong>Submit Questions:</strong> Students anonymously share their questions or scenarios before the session.</li>
          <li><strong>Vote & Select:</strong> Each home group votes on their top 2 questions and nominates one student to join the panel.</li>
          <li><strong>Live Panel:</strong> Our trained facilitator hosts a 45–60 minute live panel where students pose questions and dive into real-world answers together.</li>
          <li><strong>Reflect & Wrap Up:</strong> We finish with key takeaways, actions and support strategies to take back to class.</li>
        </ol>
        
        <h3>What's Included</h3>
        <ul>
          <li>✅ Pre-session intro video and teacher guide</li>
          <li>✅ Customised content based on student-submitted questions</li>
          <li>✅ Post-session resources including:
            <ul>
              <li>Q&A Recap</li>
              <li>Duluth 'Wheel of Control' Toolkit (spot early signs of unhealthy relationships)</li>
            </ul>
          </li>
        </ul>
        
        <h3>Extension Opportunities</h3>
        <ul>
          <li><strong>Leadership Panel:</strong> Involve senior students (Years 11–12) as co-facilitators. This optional leadership extension gives older students ownership of the process and helps build leadership across year levels.</li>
          <li><strong>Class Code of Conduct:</strong> Extend the session by co-creating a Class Code of Conduct. This promotes shared expectations, respect, and accountability within the classroom community.</li>
        </ul>
        
        <blockquote>
          <p>"The Panel gave our students a platform to ask exactly what they wanted. The honest, thoughtful responses really resonated."</p>
        </blockquote>
        
        <h3>Program Information</h3>
        <ul>
          <li>The live panel runs for approximately <strong>45–60 minutes</strong>.</li>
          <li><strong>Student supervision by teachers</strong> is required throughout the session.</li>
          <li><strong>All supplies</strong> required to run the program are supplied by TRIPOD.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
    yearLevels: ["7", "8", "9", "10", "11", "12"],
  },
  {
    provider: "MiniBOSS",
    name: "Camp @ School",
    imageUrl: campAtSchool,
    isPopular: true,
    isNew: true,
    description:
      "Bring the fun, adventure, and connection of camp to your school with a fully customisable experience designed for Foundation to Year 6.",
    tagline: "Ready, set, explore!",
    focusedSkills: [
      "Personal and Social Capability",
      "Critical and Creative Thinking",
      "Ethical Capability",
      "Intercultural Capability",
      "Health and Physical Education",
      "English (Speaking and Listening)",
    ],
    slug: "camp-at-school",
    pageDetails: {
      introHeading: "Ready, set, explore!",
      introParagraphs: [
        "Camp @ School",
        "Bring the fun, adventure, and connection of camp to your school with a fully customisable experience designed for Foundation to Year 6.",
        "Our School Camp Experience gives every class from Foundation to Year 6 the chance to adventure, connect, and grow through a program that fits your school. Choose to bring camp to your school grounds or have our team join you at your chosen camp venue. Both options deliver high energy activities, hands-on challenges, and themed experiences that build confidence, belonging, and strong teamwork.",
        "Our facilitators run every session and bring all required equipment, giving teachers the freedom to focus on supporting their students.",
      ],
      variants: [
        {
          name: "Camp at School",
          yearRange: "Foundation to Year 6",
          description:
            "We transform your school grounds into a complete camp experience with outdoor challenges, themed activities, and team building adventures.",
        },
        {
          name: "Camp at Your Camp Site",
          yearRange: "Foundation to Year 6",
          description:
            "Already booked a camp location? Our team joins you onsite and delivers a full program of activities that match your chosen theme.",
        },
      ],
      pricingLines: [
        "Price: $28.50 per student plus GST for FULL DAY.",
        "Price: $20.00 per student plus GST for HALF DAY.",
        "Package rates available for multiple year level bookings and whole of school programs.",
        "Minimum numbers apply, get in touch for more information.",
      ],
      informationHTML: `
        <h3>What Students Will Learn</h3>
        <ul>
          <li><strong>Confidence and Belonging:</strong> Activities that foster positive relationships and a strong sense of community.</li>
          <li><strong>Teamwork and Leadership:</strong> Opportunities to collaborate, take initiative, and support peers.</li>
          <li><strong>Problem Solving:</strong> Hands-on challenges that encourage thinking, decision making, and resilience.</li>
          <li><strong>Age Appropriate Growth:</strong> Play-based exploration in the early years through to advanced teamwork for upper primary.</li>
        </ul>
        
        <h3>How It Works</h3>
        <ol>
          <li>Choose your pathway: Camp at School or Camp at Your Camp Site.</li>
          <li>Select a theme and we tailor sessions to your students' needs, interests, and age levels.</li>
          <li>Pick a half day or full day schedule to suit your timetable.</li>
          <li>We deliver each session and provide all equipment so staff can focus on student wellbeing and connection.</li>
        </ol>
        
        <h3>One Purpose. Two Camp Pathways.</h3>
        
        <h4>Camp at School</h4>
        <p>We transform your school grounds into a complete camp experience with outdoor challenges, themed activities, and team building adventures. A perfect option for schools wanting a high impact experience without travel.</p>
        
        <h4>Camp at Your Camp Site</h4>
        <p>Already booked a camp location? Our team joins you onsite and delivers a full program of activities that match your chosen theme. We manage equipment, facilitation, and setup so your staff can stay focused on student wellbeing and connection.</p>
        
        <h3>Why Teachers and Schools Love This Program</h3>
        <ul>
          <li><strong>Fully Customised:</strong> Built around your goals, students, and timetable.</li>
          <li><strong>Hassle Free:</strong> We bring facilitators and all equipment.</li>
          <li><strong>Developmentally Focused:</strong> Tailored for Foundation to Year 6.</li>
          <li><strong>High Energy and Hands On:</strong> Engaging activities that build confidence, belonging, and teamwork.</li>
          <li><strong>💰 Cost Effective Alternative:</strong> A budget friendly way to provide a full camp experience without the travel costs or logistics of an offsite camp.</li>
        </ul>
        
        <p>Adventure, connection, and growth: your camp, your way.</p>
        
        <p>Call 03 9415 6327 to find out more or start designing your 2026 Camp @ School experience today.</p>
        
        <h3>Program Information</h3>
        <ul>
          <li>The School Camp Experience is suitable for Foundation to Year 6.</li>
          <li>Each class participates in a bespoke, teamwork-based session designed for their age group and selected theme.</li>
          <li>Half day and full day camp options are available.</li>
          <li>A gymnasium, hall, or large outdoor space will be required for at-school delivery.</li>
          <li>For offsite camp programs, activity spaces will be confirmed with the school.</li>
          <li>Teacher supervision is required throughout all sessions.</li>
          <li>All materials and equipment are provided by our team.</li>
        </ul>
      `,
      availabilityStatus: "Open for Bookings",
      showCalendar: true,
      canBeCustomised: true,
    },
    yearLevels: ["F", "1", "2", "3", "4", "5", "6"],
  },
];
