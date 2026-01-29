import { Hero } from "../components/Hero";
import { OurBrands } from "../components/OurBrands";
import { Partners } from "../components/Partners";
import { Skills } from "../components/Skills";
import { Stats } from "../components/Stats";
import { Intro } from "../components/Intro";
import { Testimonials } from "../components/Testimonials";
import { MailingList } from "../components/MailingList";

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Intro />
      <Skills />
      <Partners />
      <Testimonials />
      <OurBrands />
      <MailingList />
    </>
  );
}
