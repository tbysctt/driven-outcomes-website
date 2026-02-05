import type { TeamMember } from "../data/team-members";

function BioBlock({
  label,
  content,
}: {
  label: string;
  content: string;
}) {
  if (!content.trim()) return null;
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-brand-600 mb-2">
        {label}
      </h4>
      <p className="text-neutral-700 text-base leading-relaxed">{content}</p>
    </div>
  );
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const firstName = member.name.split(" ")[0] ?? member.name;
  const possessive =
    firstName.endsWith("s") || firstName.endsWith("x")
      ? `${firstName}'`
      : `${firstName}'s`;

  return (
    <article className="bg-white overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-start">
        <div className="w-full aspect-square sm:w-64 sm:h-64 sm:aspect-auto shrink-0 rounded-2xl overflow-hidden border-3 p-1 border-primary-brand-200">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
        <div className="px-6 sm:px-10 flex-1 flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-extrabold tracking-tight text-neutral-900">
              {member.name}
            </h3>
            <p className="text-sm font-semibold text-neutral-600 mt-1">
              {member.title}
            </p>
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-primary-brand-600 hover:text-primary-brand-700 no-underline!"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {member.email}
            </a>
          </div>
          <div className="space-y-5 border-t border-neutral-100 pt-6">
            <BioBlock label={`${possessive} background`} content={member.background} />
            <BioBlock
              label={`Fun fact about ${firstName}`}
              content={member.funFact}
            />
            <BioBlock
              label={`${possessive} favourite incursion`}
              content={member.favouriteIncursion}
            />
            <BioBlock
              label={`Why ${firstName} likes working for MiniBOSS/Tripod`}
              content={member.whyLikesWorking}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
