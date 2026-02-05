import { CTA } from "../components/CTA";
import { TeamMemberCard } from "../components/TeamMemberCard";
import { teamMembers } from "../data/team-members";

export function MeetTheTeamPage() {
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
              Meet The Team
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
              We are passionate about helping young Australians be future ready!
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-12 sm:space-y-16 list-none p-0 m-0">
              {teamMembers.map((member) => (
                <li key={member.id}>
                  <TeamMemberCard member={member} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA title="Want to get our amazing team out to your school?" />
    </>
  );
}
