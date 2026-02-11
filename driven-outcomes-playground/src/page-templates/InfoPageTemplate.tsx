import { CTA } from "../components/CTA";
import type { ReactNode } from "react";
import { InfoHero } from "../components/InfoHero";

interface Props {
  heroTitle: string;
  heroDescription: string;
  children: ReactNode;
  ctaTitle?: string;
}

export function InfoPageTemplate(props: Props) {
  return (
    <>
      <InfoHero
        heroTitle={props.heroTitle}
        heroDescription={props.heroDescription}
      />
      {props.children}

      <CTA title={props.ctaTitle} />
    </>
  );
}
