import { BrandPageHero } from "../components/BrandPageHero";
import { CTA } from "../components/CTA";
import type { ReactNode } from "react";
import { FaqSection, type FaqItem } from "../components/FaqSection";

interface Props {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    logo: string;
  };
  children: ReactNode;
  faqs: FaqItem[];
  cta: {
    title: string;
    description: string;
  };
}

export function BrandPageTemplate(props: Props) {
  return (
    <>
      <BrandPageHero
        logo={props.hero.logo}
        subTitle={props.hero.subtitle}
        title={props.hero.title}
        description={props.hero.description}
      />

      {props.children}

      <FaqSection items={props.faqs} />

      <CTA title={props.cta.title} description={props.cta.description} />
    </>
  );
}
