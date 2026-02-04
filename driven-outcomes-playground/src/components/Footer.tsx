import type { JSX, ReactNode } from "react";

// Social Media Icons
const socialIcons = {
  linkedin: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  ),
  facebook: (
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  ),
  instagram: (
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      clipRule="evenodd"
    />
  ),
  youtube: (
    <path
      fillRule="evenodd"
      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
      clipRule="evenodd"
    />
  ),
};

// Contact Icons
const contactIcons = {
  email: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
  location: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </>
  ),
  phone: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  ),
};

type SocialLink = {
  name: string;
  url: string;
  icon: JSX.Element;
};

type FooterLink = {
  label: string;
  href: string;
};

type ContactInfoItem = {
  icon: JSX.Element;
  content: JSX.Element;
  href?: string;
};

// Data Objects
const socialLinks: SocialLink[] = [
  { name: "LinkedIn", url: "https://linkedin.com", icon: socialIcons.linkedin },
  { name: "Facebook", url: "https://facebook.com", icon: socialIcons.facebook },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: socialIcons.instagram,
  },
  { name: "YouTube", url: "https://youtube.com", icon: socialIcons.youtube },
];

const programLinks: FooterLink[] = [
  { label: "MiniBOSS Incursions", href: "#" },
  { label: "Tripod Enterprise Education", href: "#" },
  { label: "Primary School Programs", href: "#" },
  { label: "Secondary School Programs", href: "#" },
  { label: "Talk NOW! (RRE)", href: "#" },
];

const quickLinks: FooterLink[] = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Meet The Team", href: "#" },
  { label: "News", href: "#" },
];

const legalLinks: FooterLink[] = [
  { label: "Terms", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const contactInfo: ContactInfoItem[] = [
  {
    icon: contactIcons.email,
    content: <>info@drivenoutcomes.com.au</>,
    href: "mailto:info@drivenoutcomes.com.au",
  },
  {
    icon: contactIcons.location,
    content: (
      <>
        3 Abbott St
        <br />
        Alphington VIC 3078
        <br />
        Australia
      </>
    ),
  },
  {
    icon: contactIcons.phone,
    content: <>03 9415 6327</>,
    href: "tel:+61394156327",
  },
];

// Subcomponents
interface SocialLinkProps {
  name: string;
  url: string;
  icon: ReactNode;
}

function SocialLink({ name, url, icon }: SocialLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-brand-600 transition-colors no-underline!"
      aria-label={name}
    >
      <svg
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {icon}
      </svg>
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4">
      {socialLinks.map((link) => (
        <SocialLink key={link.name} {...link} />
      ))}
    </div>
  );
}

interface FooterLinkSectionProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

function FooterLinkSection({ title, links }: FooterLinkSectionProps) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-wider text-primary-brand-400 mb-4 sm:mb-6">
        {title}
      </h4>
      <ul className="space-y-2 sm:space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm sm:text-base text-neutral-400 hover:text-white transition-colors no-underline!"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({ icon, content, href }: ContactInfoItem) {
  const iconClasses = "w-4 h-4 sm:w-5 sm:h-5 text-primary-brand-500 shrink-0";
  const contentClasses =
    "text-sm sm:text-base text-neutral-400 hover:text-white transition-colors !no-underline break-words";

  if (href) {
    return (
      <li className="flex items-center gap-2 sm:gap-3">
        <svg
          className={iconClasses}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
        <a href={href} className={contentClasses}>
          {content}
        </a>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-2 sm:gap-3">
      <svg
        className={`${iconClasses} mt-0.5`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {icon}
      </svg>
      <span className="text-sm sm:text-base text-neutral-400 wrap-break-word">
        {content}
      </span>
    </li>
  );
}

function ContactInfo() {
  return (
    <div id="contact">
      <h4 className="text-sm font-bold uppercase tracking-wider text-primary-brand-400 mb-4 sm:mb-6">
        Contact Us
      </h4>
      <ul className="space-y-3 sm:space-y-4">
        {contactInfo.map((item, index) => (
          <ContactItem
            key={index}
            icon={item.icon}
            content={item.content}
            href={item.href}
          />
        ))}
      </ul>
    </div>
  );
}

function CompanyInfo() {
  return (
    <div className="lg:col-span-1">
      <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-white mb-3 sm:mb-4">
        Driven Outcomes
      </h3>
      <p className="text-sm sm:text-base text-neutral-400 mb-4 sm:mb-6 leading-relaxed">
        We specialise in Enterprise Education and provide real-world experiences
        to equip students with the skills, tools and knowledge critical for
        their future success.
      </p>
      <SocialLinks />
    </div>
  );
}

function AcknowledgementOfCountry() {
  return (
    <div className="border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-4xl">
          We acknowledge the Traditional Owners of country throughout Australia.
          We pay our respects to Elders past, present and emerging and celebrate
          the diversity of Aboriginal and Torres Strait Islander peoples and
          their ongoing culture and connection to lands, waters and skies.
        </p>
      </div>
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="text-xs sm:text-sm text-neutral-500 text-center sm:text-left">
            &copy; 2025 Driven Outcomes Pty Ltd
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-500 hover:text-white transition-colors no-underline!"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Footer Component
export function Footer() {
  return (
    <footer
      id="colophon"
      className="bg-neutral-900 text-white"
      role="contentinfo"
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <CompanyInfo />
          <FooterLinkSection title="Our Programs" links={programLinks} />
          <FooterLinkSection title="Quick Links" links={quickLinks} />
          <ContactInfo />
        </div>
      </div>

      <AcknowledgementOfCountry />
      <FooterBottom />
    </footer>
  );
}
