import { Link } from "react-router-dom";
import { CTA } from "../components/CTA";

export function AboutUsPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-neutral-800) 0%, var(--color-primary-brand-800) 30%, var(--color-secondary-brand-700) 60%, var(--color-highlight-700) 85%, var(--color-neutral-800) 100%)",
          }}
        />
        <div
          className="hero-glow absolute inset-0 z-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 50% -10%, var(--color-primary-brand-400), transparent 55%)",
          }}
        />
        <div
          className="hero-glow hero-glow-delay-2 absolute inset-0 z-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 110% 40%, var(--color-secondary-brand-400), transparent 50%)",
          }}
        />
        <div
          className="hero-glow hero-glow-delay-3 absolute inset-0 z-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at -10% 90%, var(--color-highlight-400), transparent 50%)",
          }}
        />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--color-neutral-800/60)_100%)]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-2 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase mb-4">
              About Us
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
              We specialise in Enterprise Education and provide real-world
              experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-brand-600 mb-2">
              Driving positive learning outcomes
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-10">
              Empowering Schools, Inspiring Students: Shaping the Future Together
            </h2>
            <div className="space-y-6 text-neutral-700 text-base sm:text-lg leading-relaxed">
              <p>
                Since 2016, we&apos;ve been on a mission to transform learning in
                schools across Australia. Operating under Driven Outcomes Pty
                Ltd, we have two main divisions: Tripod Enterprise Education,
                launched in 2016 to deliver dynamic programs for secondary
                students, and MiniBOSS Incursions, established in 2017 to provide
                engaging, specialist incursions tailored for primary students.
                Based in Alphington, Melbourne, the company is proudly owned and
                managed by its founders and directors, Betsy Tolmer and Marita
                D&apos;Amico.
              </p>
              <p>
                What began as a passion for creating engaging, hands-on
                educational experiences has grown into partnerships with over
                500 schools and organisations, impacting more than 200,000
                students.
              </p>
              <p>
                Our vision is simple: to inspire students to develop essential
                life skills such as critical thinking, creativity, teamwork,
                problem-solving, communication, presentation skills, digital
                literacy, and financial literacy. At the same time, we empower
                educators with the tools they need to make a real difference in
                their classrooms.
              </p>
              <p>
                At the heart of what we do are our programs—offering more than 30
                different programs and comprehensive resources for teachers. Our
                programs range from half-day sessions to term-long projects.
                Designed to ignite curiosity, challenge thinking, and promote
                collaboration, our programs ensure that every student feels
                engaged, valued, and equipped to succeed. Whether through
                dynamic team-building activities or immersive workshops, we
                create meaningful learning experiences that leave a lasting
                impact.
              </p>
              <p>
                Our latest initiative, Talk NOW!, focuses on one of the most
                important topics of our time: Consent and Respectful
                Relationships Education (RRE). This program equips educators with
                the resources they need to confidently teach respect,
                inclusivity, and empathy, helping build a safer, more respectful
                school community.
              </p>
              <p>
                From the beginning, our goal has been to create programs that
                leave a lasting impact. Every school we partner with, and every
                student we reach, is a step toward shaping a more thoughtful,
                creative, and empowered generation.
              </p>
              <p>
                As we continue to grow and evolve, our commitment remains the
                same: to inspire students, support educators, and create a
                future where every learner is equipped with the skills and
                mindset to thrive. Together, we are building a brighter tomorrow,
                one school, one student, and one program at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mb-6">
              What is Enterprise Education?
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              Enterprise Education is a model of learning that contributes to
              the self-development of young people. Through engaging in learning
              activities that mimic elements of the real world, students are
              given the opportunity to explore how their transferable skills and
              knowledge can be applied in the future. Our creative,
              enterprise-based incursions foster teamwork, communication and
              many other skills useful now and in the future as well as with
              potential employers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-brand-600 mb-2">
              Experienced and professional
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mb-6">
              Our Facilitators
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              Many of our facilitators have extensive teaching, facilitating and
              acting experience and work closely with our development teams to
              design, create and deliver our programs. All our facilitators have
              a current working with children check and operate under our
              company&apos;s professional Code of Conduct.
            </p>
            <p className="mt-8">
              <Link
                to="/meet-the-team"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-brand-600 hover:text-primary-brand-700 no-underline!"
              >
                Meet the team
                <span aria-hidden>→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <CTA title="Want to get our amazing team out to your school?" />
    </>
  );
}
