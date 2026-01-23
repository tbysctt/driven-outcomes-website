import { Intro } from "./components/Intro";
import { CursorDot } from "./components/CursorDot";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { OurBrands } from "./components/OurBrands";
import { Partners } from "./components/Partners";
import { Skills } from "./components/Skills";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { MailingList } from "./components/MailingList";

function App() {
  return (
    <div className="text-slate-grey-900 antialiased">
      <CursorDot />
      <Header />
      <Hero />
      <Stats />
      <Intro />
      <Skills />
      <Partners />
      <Testimonials />
      <OurBrands />
      <MailingList />
      <Footer />
    </div>
  );
}

export default App;
