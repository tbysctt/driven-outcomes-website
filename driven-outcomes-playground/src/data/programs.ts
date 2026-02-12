import type { FaqItem } from "../components/FaqSection";
import type { ProgramVariant } from "../page-templates/ProgramInfoPageTemplate";

export type Program = {
  provider: ProgramProvider;
  name: string;
  description: string;
  tagline?: string;
  focusedSkills: string[];
  slug: string;

  isNew?: boolean;
  isTrending?: boolean;

  pageDetails: {
    introHeading?: string;
    introParagraphs?: string[];
    variants?: ProgramVariant[];
    pricingLines?: string[];
    informationHTML?: string;
    ongoingConnection?: { title: string; body: string };
    curriculumYears?: string;
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
      curriculumYears: "F–6",
      availabilityStatus: "Open for Bookings",
      showCalendar: true,
    },
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
    pageDetails: {},
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
    pageDetails: {},
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
    tagline: "Mix. Master. Thrive!",
    isNew: true,
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
      curriculumYears: "P-6",
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
    pageDetails: {},
  },
  {
    provider: "MiniBOSS Holidays",
    name: "Code Busters",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Coding", "Logic", "Problem solving", "Digital skills"],
    slug: "code-busters",
    pageDetails: {},
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
    pageDetails: {},
  },
  {
    provider: "MiniBOSS Holidays",
    name: "The Mystery Bag",
    description:
      "Description here about the incursion program. Description here about the incursion program.",
    focusedSkills: ["Curiosity", "Discovery", "Problem solving", "Creativity"],
    slug: "the-mystery-bag",
    pageDetails: {},
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
    pageDetails: {},
  },
  {
    provider: "MiniBOSS Holidays",
    name: "Superhero",
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
      curriculumYears: "F-2",
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
  },
  {
    provider: "MiniBOSS",
    name: "The \"HOT\" Chocolate Shop",
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
      curriculumYears: "F-2",
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
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
      curriculumYears: "F-6",
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
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
          description: "Half-day or full-day incursion - $28.50 per student plus GST for FULL DAY",
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
      curriculumYears: "F & 5/6",
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
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
    pageDetails: {
      introHeading: "Ready to Bring Ideas to Life?",
      introParagraphs: [
        "Step into Create It, where imagination knows no bounds! This hands-on incursion invites students to explore the world of design and creative thinking. Whether they're building, crafting, or designing, students will learn to express their ideas and bring their visions to life.",
      ],
      variants: [
        {
          name: "Half Day",
          yearRange: "HALF DAY",
          description: "Price: $20.00 per student plus GST - As of 1 February 2025",
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
      curriculumYears: "F-4",
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
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
      curriculumYears: "3-6",
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
      curriculumYears: "3-4",
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
  },
  {
    provider: "MiniBOSS",
    name: "Crack It",
    description:
      "Crack It: The Game Show! is a high-octane showdown where students team up in small groups to compete for the coveted MiniBOSS glory through a series of exciting challenges designed to suit all abilities and learning styles. With five rounds of sheer fun, teams will conquer engineering feats, flex their lateral thinking muscles, solve puzzles, master math, ace spelling and grammar, and unleash their creativity.",
    tagline: "Will you Crack It?",
    focusedSkills: [
      "STEAM Challenges",
      "Problem Solving",
      "Designed Solutions",
      "Personal & Social Capability",
      "Critical & Creative Thinking",
      "Resilience & Inquiry Skills",
    ],
    slug: "crack-it",
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
      curriculumYears: "3-6",
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
  },
  {
    provider: "MiniBOSS",
    name: "The Smoothie Bar",
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
    slug: "the-smoothie-bar",
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
      curriculumYears: "3-6",
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
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
      curriculumYears: "3-6",
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
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
      curriculumYears: "3-6",
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
  },
  {
    provider: "MiniBOSS",
    name: "The Newsroom",
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
      curriculumYears: "5-6",
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
  },
  {
    provider: "MiniBOSS",
    name: "The Studio",
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
    slug: "the-studio",
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
      curriculumYears: "5-6",
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
  },
  {
    provider: "MiniBOSS",
    name: "The Brief",
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
    slug: "the-brief",
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
      curriculumYears: "5-6",
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
  },
  {
    provider: "MiniBOSS",
    name: "Lead It",
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
    slug: "lead-it",
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
      curriculumYears: "5-6",
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
  },
  {
    provider: "MiniBOSS",
    name: "In My Community",
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
      curriculumYears: "5-6",
      availabilityStatus: "Open for Bookings",
      showCalendar: false,
    },
  },
];
