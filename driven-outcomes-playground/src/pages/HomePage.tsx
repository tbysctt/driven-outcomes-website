import { LandingHero } from "../components/LandingHero";
import { OurTrendingPrograms } from "../components/OurTrendingPrograms";
// import { LogoScroller } from "../components/LogoScroller";
import { SchoolsScroller } from "../components/SchoolsScroller";
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
      <OurTrendingPrograms />
      {/* <LogoScroller /> */}
      <Testimonials />
      <MailingList />
    </>
  );
}
