export function OurBrands() {
  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-grey-900">
            Our Programs
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-pearl-aqua-500 to-cool-steel-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-lg text-slate-grey-600 max-w-2xl mx-auto">
            Operating under Driven Outcomes, we deliver engaging incursions
            through two specialist divisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* <!-- MiniBOSS --> */}
          <div className="bg-gradient-to-br from-cool-steel-100 to-cool-steel-50 rounded-2xl p-8 border border-cool-steel-200 hover:shadow-xl hover:shadow-cool-steel-200/50 transition-shadow">
            <div className="inline-block px-3 py-1 rounded-full bg-cool-steel-200 text-cool-steel-700 text-xs font-bold uppercase tracking-wider mb-4">
              Primary School
            </div>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight text-slate-grey-900 mb-4">
              MiniBOSS Incursions
            </h3>
            <p className="text-slate-grey-600 mb-6">
              Established in 2017, MiniBOSS provides engaging, specialist
              incursions tailored for primary students from Foundation to Year
              6. High-impact, hands-on experiences that ignite curiosity and
              build essential skills.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">
                Prep - Year 2
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">
                Year 3 - 4
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">
                Year 5 - 6
              </span>
            </div>
            <a
              href="#"
              className="inline-flex items-center font-bold text-cool-steel-600 hover:text-cool-steel-800 transition-colors !no-underline"
            >
              Explore Primary Programs
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* <!-- Tripod --> */}
          <div className="bg-gradient-to-br from-pearl-aqua-100 to-pearl-aqua-50 rounded-2xl p-8 border border-pearl-aqua-200 hover:shadow-xl hover:shadow-pearl-aqua-200/50 transition-shadow">
            <div className="inline-block px-3 py-1 rounded-full bg-pearl-aqua-200 text-pearl-aqua-700 text-xs font-bold uppercase tracking-wider mb-4">
              Secondary School
            </div>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight text-slate-grey-900 mb-4">
              Tripod Enterprise Education
            </h3>
            <p className="text-slate-grey-600 mb-6">
              Launched in 2016, Tripod delivers dynamic programs for secondary
              students. Our enterprise education model connects young people
              with real-world experiences, building skills critical for future
              success.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">
                Year 7 - 9
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">
                Year 10 - 12
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-slate-grey-700">
                Enterprise
              </span>
            </div>
            <a
              href="#"
              className="inline-flex items-center font-bold text-pearl-aqua-600 hover:text-pearl-aqua-800 transition-colors !no-underline"
            >
              Explore Secondary Programs
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
