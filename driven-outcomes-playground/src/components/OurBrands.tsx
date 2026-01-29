import { Link } from "react-router-dom";

export function OurBrands() {
  return (
    <section id="programs" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-grey-900">
            Our Programs
          </h2>
          <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-gradient-to-r from-pearl-aqua-500 to-cool-steel-500 rounded-full mx-auto"></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-grey-600 max-w-2xl mx-auto px-2 sm:px-0">
            Operating under Driven Outcomes, we deliver engaging incursions
            through two specialist divisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* <!-- MiniBOSS --> */}
          <div className="bg-gradient-to-br from-cool-steel-100 to-cool-steel-50 rounded-2xl p-6 sm:p-7 md:p-8 border border-cool-steel-200 hover:shadow-xl hover:shadow-cool-steel-200/50 transition-shadow">
            <div className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-cool-steel-200 text-cool-steel-700 text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              Primary School
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-slate-grey-900 mb-3 sm:mb-4">
              MiniBOSS Incursions
            </h3>
            <p className="text-sm sm:text-base text-slate-grey-600 mb-5 sm:mb-6 leading-relaxed">
              Established in 2017, MiniBOSS provides engaging, specialist
              incursions tailored for primary students from Foundation to Year
              6. High-impact, hands-on experiences that ignite curiosity and
              build essential skills.
            </p>
            <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
              <span className="px-2.5 sm:px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">
                Prep - Year 2
              </span>
              <span className="px-2.5 sm:px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">
                Year 3 - 4
              </span>
              <span className="px-2.5 sm:px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">
                Year 5 - 6
              </span>
            </div>
            <Link
              to="/miniboss"
              className="inline-flex items-center text-sm sm:text-base font-bold text-cool-steel-600 hover:text-cool-steel-800 transition-colors !no-underline"
            >
              Explore Primary Programs
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* <!-- Tripod --> */}
          <div className="bg-gradient-to-br from-pearl-aqua-100 to-pearl-aqua-50 rounded-2xl p-6 sm:p-7 md:p-8 border border-pearl-aqua-200 hover:shadow-xl hover:shadow-pearl-aqua-200/50 transition-shadow">
            <div className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-pearl-aqua-200 text-pearl-aqua-700 text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              Secondary School
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-slate-grey-900 mb-3 sm:mb-4">
              Tripod Enterprise Education
            </h3>
            <p className="text-sm sm:text-base text-slate-grey-600 mb-5 sm:mb-6 leading-relaxed">
              Launched in 2016, Tripod delivers dynamic programs for secondary
              students. Our enterprise education model connects young people
              with real-world experiences, building skills critical for future
              success.
            </p>
            <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
              <span className="px-2.5 sm:px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">
                Year 7 - 9
              </span>
              <span className="px-2.5 sm:px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">
                Year 10 - 12
              </span>
              <span className="px-2.5 sm:px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">
                Enterprise
              </span>
            </div>
            <Link
              to="/tripod"
              className="inline-flex items-center text-sm sm:text-base font-bold text-pearl-aqua-600 hover:text-pearl-aqua-800 transition-colors !no-underline"
            >
              Explore Secondary Programs
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
