import { LandingHero } from "../components/LandingHero";
import { OurTrendingPrograms } from "../components/OurTrendingPrograms";
import { Partners } from "../components/Partners";
import { Skills } from "../components/Skills";
import { Stats } from "../components/Stats";
import { Intro } from "../components/Intro";
import { Testimonials } from "../components/Testimonials";
import { MailingList } from "../components/MailingList";

export function HomePage() {
  return (
    <>
      <LandingHero />
      <Stats />
      <Intro />
      <Skills />
      <Partners />
      <Testimonials />
      <OurTrendingPrograms />
      <MailingList />
    </>
  );
}
