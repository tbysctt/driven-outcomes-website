import { About } from "./components/About";
import { CursorDot } from "./components/CursorDot";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { OurBrands } from "./components/OurBrands";
import { Skills } from "./components/Skills";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <div className="text-slate-grey-900 antialiased">
      <CursorDot />
      <Header />
      <Hero />
      <Stats />
      <OurBrands />
      <Testimonials />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
