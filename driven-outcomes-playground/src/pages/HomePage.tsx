import { LandingHero } from "../components/LandingHero";
import { PopularPrograms } from "../components/PopularPrograms";
// import { LogoScroller } from "../components/LogoScroller";
import { SchoolsScroller } from "../components/SchoolsScroller";
import { Stats } from "../components/Stats";
import { Intro } from "../components/Intro";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";
import { WhatsNewSection } from "../components/WhatsNewSection";

export function HomePage() {
  return (
    <>
      <LandingHero />
      <Stats />
      <SchoolsScroller />
      <Intro />
      {/* <LogoScroller /> */}
      <WhatsNewSection />
      <Testimonials />
      <PopularPrograms />
      <CTA />
    </>
  );
}
