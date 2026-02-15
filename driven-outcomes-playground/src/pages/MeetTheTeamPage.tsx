import { InfoPageTemplate } from "../page-templates/InfoPageTemplate";
import { TeamMemberCard } from "../components/TeamMemberCard";
import { teamMembers } from "../data/team-members";
import { FadeInSection } from "../components/FadeInSection";

export function MeetTheTeamPage() {
  return (
    <InfoPageTemplate
      heroTitle="Meet The Team"
      heroDescription="We are passionate about helping young Australians be future ready!"
      ctaTitle="Want to get our amazing team out to your school?"
    >
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <FadeInSection>
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
        </FadeInSection>
      </section>
    </InfoPageTemplate>
  );
}
