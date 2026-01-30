import { BrandPageHero } from "../components/BrandPageHero";
import { GradientBorderButton } from "../components/GradientBorderButton";
import mbhpLogo from "../assets/brand-logos/miniboss-holiday-programs/MBHP_PurpleTransparent.png";
import { ProgramCard } from "../components/ProgramCard";
import { MailingList } from "../components/MailingList";
import { HolidayProgramFlyers } from "../components/HolidayProgramFlyers";

const PHONE_NUMBER = "03 9415 6327";
const PHONE_HREF = "tel:+61394156327";

export function MiniBossHolidayPage() {
  return (
    <>
      <BrandPageHero
        logo={mbhpLogo}
        subTitle="OSHC & Vacation Care"
        title="Holiday Incursions"
        description="Incursions for Outside School Hours Care (OSHC) & Vacation Care providers"
      />

      <section className="py-12 sm:py-16 md:py-20 bg-slate-grey-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-grey-900">
                MiniBOSS Holiday Programs
              </h2>
              <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-gradient-to-r from-pearl-aqua-500 to-cool-steel-500 rounded-full mx-auto" />
              <p className="mt-4 text-lg sm:text-xl font-semibold text-pearl-aqua-600">
                More than just fun!
              </p>
            </div>
            <div className="space-y-6 text-slate-grey-700">
              <p className="text-base sm:text-lg leading-relaxed">
                MiniBOSS holiday incursions are super fun adaptations of our
                MiniBOSS primary school incursions and have been specifically
                designed as hands-on programs that are{" "}
                <strong className="font-semibold text-slate-grey-900">
                  more than just fun
                </strong>
                . As well as having fun, our incursions help children explore
                key skills like critical and creative thinking, curiosity,
                teamwork, problem solving, communication skills and resilience.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Our incursions can be booked by Outside School Hours Care (OSHC)
                & Vacation Care providers. Minimum numbers apply.
              </p>
            </div>
            <div className="mt-10 text-center">
              <p className="text-slate-grey-600 mb-4">
                To find out more, give us a call on{" "}
                <a
                  href={PHONE_HREF}
                  className="font-bold text-pearl-aqua-600 hover:text-pearl-aqua-700 !no-underline"
                >
                  {PHONE_NUMBER}
                </a>
                .
              </p>
              <GradientBorderButton
                href={PHONE_HREF}
                size="md"
                variant="rounded"
              >
                Call us now
              </GradientBorderButton>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-grey-900">
              Our 7 Holiday Incursions
            </h2>
            <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-gradient-to-r from-pearl-aqua-500 to-cool-steel-500 rounded-full mx-auto"></div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-grey-600 max-w-2xl mx-auto px-2 sm:px-0">
              Hands-on, fun programs designed for OSHC and vacation care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <ProgramCard
              badge="OSHC & Vacation Care"
              title="Bombs Away"
              description="Description here about the incursion program. Description here about the incursion program."
              tags={["Experimentation", "Teamwork", "Cause & effect", "Problem solving"]}
              variant="cool-steel"
            />
            <ProgramCard
              badge="OSHC & Vacation Care"
              title="Smoothie Time"
              description="Description here about the incursion program. Description here about the incursion program."
              tags={["Nutrition", "Healthy eating", "Creativity", "Hands-on learning"]}
              variant="pearl-aqua"
            />
            <ProgramCard
              badge="OSHC & Vacation Care"
              title="Code Busters"
              description="Description here about the incursion program. Description here about the incursion program."
              tags={["Coding", "Logic", "Problem solving", "Digital skills"]}
              variant="pearl-aqua"
            />
            <ProgramCard
              badge="OSHC & Vacation Care"
              title="Super Sleuths"
              description="Description here about the incursion program. Description here about the incursion program."
              tags={["Investigation", "Critical thinking", "Deduction", "Teamwork"]}
              variant="cool-steel"
            />
            <ProgramCard
              badge="OSHC & Vacation Care"
              title="The Mystery Bag"
              description="Description here about the incursion program. Description here about the incursion program."
              tags={["Curiosity", "Discovery", "Problem solving", "Creativity"]}
              variant="cool-steel"
            />
            <ProgramCard
              badge="OSHC & Vacation Care"
              title="The Chocolate Boss"
              description="Description here about the incursion program. Description here about the incursion program."
              tags={["Enterprise", "Creativity", "Teamwork", "Real-world skills"]}
              variant="pearl-aqua"
            />
            <ProgramCard
              badge="OSHC & Vacation Care"
              title="Superhero"
              description="Description here about the incursion program. Description here about the incursion program."
              tags={["Resilience", "Confidence", "Teamwork", "Creativity"]}
              variant="pearl-aqua"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-grey-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-slate-grey-900 mb-2">
              Looking for an incursion these holidays?
            </h2>
            <p className="text-slate-grey-600 mb-6 sm:mb-8">
              We’d love to hear from you. Give us a call to discuss dates and
              programs.
            </p>
            <GradientBorderButton href={PHONE_HREF} size="md" variant="rounded">
              Give us a call on {PHONE_NUMBER}
            </GradientBorderButton>
          </div>
        </div>
      </section>

      <HolidayProgramFlyers />

      <MailingList />
    </>
  );
}
