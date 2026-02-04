import { GradientBorderButton } from "./GradientBorderButton";

export type CTAButton = {
  label: string;
  linkPath: string;
  primary: boolean;
};

type CTAProps = {
  title?: string;
  description?: string;
};

const defaultTitle = "Ready to bring engaging learning to your school?";
const defaultDescription =
  "Join hundreds of schools across Australia. Enquire now to find the best program for your students!";

const buttons: CTAButton[] = [
  {
    label: "Enquire now",
    linkPath: "/contact",
    primary: true,
  },
  // {
  //   label: "View our programs",
  //   linkPath: "/",
  //   primary: false,
  // },
];

export function CTA({
  title = defaultTitle,
  description = defaultDescription,
}: CTAProps) {
  return (
    <section
      className="relative py-20 sm:py-28 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary-brand-600 via-secondary-brand-700 to-neutral-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(73,182,168,0.25),transparent)]" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase text-balance mb-6"
          >
            {title}
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-primary-brand-400 to-secondary-brand-400 rounded-full mx-auto mb-8" />
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {buttons.map((btn) => (
              <GradientBorderButton
                key={btn.label}
                to={btn.linkPath}
                variant="rounded"
                size="lg"
                backgroundColor={
                  btn.primary
                    ? "bg-gradient-to-r from-primary-brand-500 to-secondary-brand-500"
                    : "bg-white/10 hover:bg-white/20"
                }
              >
                {btn.label}
              </GradientBorderButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
