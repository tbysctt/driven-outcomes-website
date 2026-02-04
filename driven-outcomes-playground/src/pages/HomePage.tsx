import { LandingHero } from "../components/LandingHero";
import { OurTrendingPrograms } from "../components/OurTrendingPrograms";
import { Partners } from "../components/Partners";
import { SchoolsScroller } from "../components/SchoolsScroller";
// import { Skills } from "../components/Skills";
import { Stats } from "../components/Stats";
import { Intro } from "../components/Intro";
import { Testimonials } from "../components/Testimonials";
import { MailingList } from "../components/MailingList";

export function HomePage() {
  return (
    <>
      <LandingHero />
      <Stats />
      <SchoolsScroller />
      <Intro />
      {/* <Skills /> */}
      <OurTrendingPrograms />
      <Partners />
      <Testimonials />
      <MailingList />
    </>
  );
}
