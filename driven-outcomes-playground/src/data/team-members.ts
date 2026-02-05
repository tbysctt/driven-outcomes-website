import betsyTolmer from "../assets/the-team/betsy-tolmer.webp";
import emBeggs from "../assets/the-team/em-beggs.webp";
import jaradAsquith from "../assets/the-team/jarad-asquith.webp";
import maritaDamico from "../assets/the-team/marita-damico.jpg";
import staceyKirkwood from "../assets/the-team/stacey-kirkwood.webp";
import tashaLawton from "../assets/the-team/tasha-lawton.webp";

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  email: string;
  image: string;
  background: string;
  funFact: string;
  favouriteIncursion: string;
  whyLikesWorking: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "betsy-tolmer",
    name: "Betsy Tolmer",
    title: "CO-Founder & Director",
    email: "betsy@drivenoutcomes.com.au",
    image: betsyTolmer,
    background:
      "I have had an eclectic career, from working in Event Production, Human Resources, Marketing and Communications, Education and Career Consulting and I have even worked for Santa himself with project managing installation of Christmas Trees all over the city. In all my roles people have always been at the core, and my passion and purpose was finally realised when I started working on MiniBOSS and Tripod to connect young people with great learning experiences.",
    funFact:
      "I have two beautiful British Bulldogs that I'm obsessed with named Freddie Mercury and Elton John.",
    favouriteIncursion:
      "I simply can't pick one, they are all my favourite, every time I run The Lab I say that The Lab is my fave, but then I will run a Create IT and I will say no, no, Create IT is my fave! I think they are all so unique and different every time we run them because the input of the students and that is my favourite thing that so much of the day is about who is in the room!",
    whyLikesWorking:
      "For sooooooo many reasons! The team that I am a part of, the endless hours of being creative, no day is the same, working with so many schools, getting to be a part of the education industry at a truly innovative and exciting time, working with young people, making an impact and getting to see it LIVE!!!",
  },
  {
    id: "marita-damico",
    name: "Marita D'amico",
    title: "CO-Founder & Director",
    email: "marita@drivenoutcomes.com.au",
    image: maritaDamico,
    background:
      "With a love for business and travel, I have started and run businesses and ventures in Australia and overseas since university where I specialised in Marketing and Economics. Being curious and enjoying a challenge, I spent seven years based in Shanghai and Beijing running several joint ventures, projects and high profile events with Chinese, UK and European organisations. I have been a member of the Australia China Business Council, AustCham Beijing and also participated in the SME Working Group in Education in Beijing. Returning to Australia, I became passionate about helping young Australians gain the skills they need to succeed in whatever they do at home and as global citizens.",
    funFact:
      "Still uses chopsticks to eat most meals! Involved in publishing two books (in English & Mandarin) and a TV documentary.",
    favouriteIncursion:
      "I have so many favourites! I love working with the team to bring all our programs to life and to continue to shape and change them to connect them with key learning outcomes for students.",
    whyLikesWorking:
      "Getting to be ultimately creative and utilise all the skills I have built throughout my diverse career to develop and deliver meaningful programs with a team of talented people.",
  },
  {
    id: "tasha-lawton",
    name: "Tasha Lawton",
    title: "National Programs Director",
    email: "tasha@drivenoutcomes.com.au",
    image: tashaLawton,
    background:
      "I'm a qualified counsellor completing a postgraduate degree in Sexology. I've been working in respectful relationships and facilitated groups with young people dealing with domestic violence for over ten years. Before that, I worked in advertising and film in the UK, Sydney and Melbourne. In 2023, the stars aligned and it all culminated in where I am today and I couldn't be happier.",
    funFact: "",
    favouriteIncursion: "I might be a bit biased but it has to be Talk NOW! 😉",
    whyLikesWorking:
      "Where do I start?! I've finally found my tribe and we have so much fun creating, producing and delivering programs that really are making a difference in the world. There's never a dull moment; everyone rolls up their sleeves, jumps in, and supports each other. It's my dream job, doing what I love with a bunch of super-talented people.",
  },
  {
    id: "stacey-kirkwood",
    name: "Stacey Kirkwood",
    title: "Account Manager",
    email: "stacey@drivenoutcomes.com.au",
    image: staceyKirkwood,
    background:
      "I'm a proud Aussie, originally from South Africa, who set off on new adventures at 21 by moving to London to live and travel, eventually settling in Melbourne. I've had the opportunity to work in a variety of roles for some of the largest companies both locally and internationally. My career has primarily focused on Corporate Client Relationship Management, where I thrive on building meaningful connections and supporting people. Helping others is what I value most, and I'm passionate about creating authentic relationships that last.",
    funFact:
      "2 truths and 1 lie: I've broken my arms 4 times, been in a Calvin Klein ad, and speak 2 languages.",
    favouriteIncursion:
      "I couldn't possibly choose just one of our incursions—it's like picking a favorite child!",
    whyLikesWorking:
      "As a mum I have both the flexibility to work around my family's needs, whilst I am treated like one of the MiniBOSS/Tripod family.",
  },
  {
    id: "em-beggs",
    name: "Em Beggs",
    title: "Director of VIC Programs, Events & People",
    email: "em@drivenoutcomes.com.au",
    image: emBeggs,
    background:
      "A true big kid at heart, I'm passionate about empowering young people to be their best, while having plenty of fun along the way! My background spans Facilitation, Training, Child Safety, Counselling Skills, Program Development, Learning Diversity, Public Speaking, Marketing, and Management. Some highlights of my career include running international conferences, volunteering across the country, working with culturally and linguistically diverse communities, and training our team to deliver the best possible programs for your amazing young humans.",
    funFact:
      "When I'm not at work, you'll find me performing or Stage Managing in theatre. I also serve on an education and support committee focused on promoting safety in community theatre.",
    favouriteIncursion:
      "They're all epic, but if I had to choose: For the tiny humans Solve It, For the slightly older ones Crack It, For the oldest young humans Lead It",
    whyLikesWorking:
      "I love helping young people thrive and supporting our incredible team to make that happen. The variety we offer in this business keeps every day exciting, and it's such a joy to see young people growing into confident, capable adults.",
  },
  {
    id: "jarrad-asquith",
    name: "Jarrad Asquith",
    title: "Head of Growth & Development",
    email: "jarrad@drivenoutcomes.com.au",
    image: jaradAsquith,
    background:
      "I started my career in youth work, spending years in schools and community programs helping young people build confidence, resilience, and real-world skills. I later moved into training and development, designing and facilitating workshops for top organisations across Australia. Now, as Growth & Development Lead, I help shape and scale powerful learning experiences for young people through MiniBOSS and Tripod incursions.",
    funFact:
      "I'm a serious podcast addict. Whether it's a deep dive into science with Andrew Huberman, an hour of silly comedy with Conan O'Brien, or a wild interview an expert on Armchair Expert, I pretty much always have a podcast recommendation ready to go.",
    favouriteIncursion:
      "The Studio. I love seeing students work in production teams to create their own podcast episode! It teaches them skills that are instantly transferable to the evolving media landscape they're growing up in.",
    whyLikesWorking:
      "As an entrepreneur nerd, I love working for a business that embodies these highly transferable skills and teaches them to young people.",
  },
];
