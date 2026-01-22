export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-grey-900">
              About Us
            </h2>
            <div className="mt-4 h-1 w-24 bg-gradient-to-r from-pearl-aqua-500 to-cool-steel-500 rounded-full mx-auto"></div>
          </div>
          <div className="prose prose-lg mx-auto text-slate-grey-600">
            <p className="text-xl leading-relaxed">
              Since 2016, we've been on a mission to transform learning in
              schools across Australia. Operating under Driven Outcomes Pty Ltd,
              we have two main divisions:{" "}
              <strong className="text-pearl-aqua-600">
                Tripod Enterprise Education
              </strong>{" "}
              for secondary students, and{" "}
              <strong className="text-cool-steel-600">
                MiniBOSS Incursions
              </strong>{" "}
              for primary students.
            </p>
            <p>
              Based in Alphington, Melbourne, the company is proudly owned and
              managed by its founders and directors,{" "}
              <strong>Betsy Tolmer</strong> and <strong>Marita D'Amico</strong>.
            </p>
            <p>
              What began as a passion for creating engaging, hands-on
              educational experiences has grown into partnerships with over 500
              schools and organisations, impacting more than 200,000 students.
            </p>
            <p>
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
