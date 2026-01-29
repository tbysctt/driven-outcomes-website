export function Intro() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-grey-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* <div className="text-center mb-10 sm:mb-12"> */}
          {/*   <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-grey-900"> */}
          {/*     About Us */}
          {/*   </h2> */}
          {/*   <div className="mt-4 h-1 w-24 bg-gradient-to-r from-elementary-gold-500 to-amber-gold-500 rounded-full mx-auto"></div> */}
          {/* </div> */}
          <div className="space-y-6 sm:space-y-7 text-slate-grey-700">
            <p className="text-base sm:text-lg leading-relaxed">
              Since 2016, we've been on a mission to transform learning in
              schools across Australia. Operating under Driven Outcomes Pty Ltd,
              we have two main divisions:{" "}
              <strong className="font-bold text-elementary-gold-600">
                Tripod Enterprise Education
              </strong>{" "}
              for secondary students, and{" "}
              <strong className="font-bold text-amber-gold-600">
                MiniBOSS Incursions
              </strong>{" "}
              for primary students.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Based in Alphington, Melbourne, the company is proudly owned and
              managed by its founders and directors,{" "}
              <strong className="font-semibold text-slate-grey-900">
                Betsy Tolmer
              </strong>{" "}
              and{" "}
              <strong className="font-semibold text-slate-grey-900">
                Marita D'Amico
              </strong>
              .
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              What began as a passion for creating engaging, hands-on
              educational experiences has grown into partnerships with over{" "}
              <strong className="font-semibold text-slate-grey-900">500</strong>{" "}
              schools and organisations, impacting more than{" "}
              <strong className="font-semibold text-slate-grey-900">
                200,000
              </strong>{" "}
              students.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Our vision is simple: to inspire students to develop essential
              life skills while empowering educators with the tools they need to
              make a real difference in their classrooms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
