import { Link } from "react-router-dom";
import { FadeInSection } from "./FadeInSection";

export function Intro() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-neutral-50">
      <FadeInSection>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8">
              Who we are
            </h2>
            <div className="space-y-6 sm:space-y-7 text-neutral-700">
              <p className="text-base sm:text-lg leading-relaxed">
                Since 2016, we've been on a mission to transform learning in
                schools across Australia. Operating under Driven Outcomes Pty
                Ltd, we have two main divisions:{" "}
                <strong className="font-bold text-primary-brand-600">
                  Tripod Enterprise Education
                </strong>{" "}
                for secondary students, and{" "}
                <strong className="font-bold text-secondary-brand-600">
                  MiniBOSS Incursions
                </strong>{" "}
                for primary students.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Based in Alphington, Melbourne, the company is proudly owned and
                managed by its founders and directors,{" "}
                <strong className="font-semibold text-neutral-900">
                  Betsy Tolmer
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-neutral-900">
                  Marita D'Amico
                </strong>
                .
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                What began as a passion for creating engaging, hands-on
                educational experiences has grown into partnerships with over{" "}
                <strong className="font-semibold text-neutral-900">500</strong>{" "}
                schools and organisations, impacting more than{" "}
                <strong className="font-semibold text-neutral-900">
                  200,000
                </strong>{" "}
                students.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Our vision is simple: to inspire students to develop essential
                life skills while empowering educators with the tools they need
                to make a real difference in their classrooms.
              </p>
              <Link
                to={"/about-us"}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold transition-colors text-highlight-600 hover:text-highlight-800"
              >
                Learn more
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
