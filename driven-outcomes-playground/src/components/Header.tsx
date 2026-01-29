import { useState } from "react";
import { GradientBorderButton } from "./GradientBorderButton";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { href: "#programs", label: "Primary" },
    { href: "#programs", label: "Secondary" },
    { href: "#programs", label: "Holiday programs" },
    { href: "#partners", label: "Partnerships" },
    { href: "#programs", label: "ELC (Coming soon)" },
  ];

  return (
    <header className="bg-slate-grey-900/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <a
              href="/"
              className="!no-underline uppercase font-extrabold text-xl md:text-2xl tracking-tight text-white hover:text-elementary-gold-400 transition-colors duration-200"
            >
              Driven Outcomes
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-white/90 hover:text-elementary-gold-400 transition-colors duration-200 !no-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <GradientBorderButton href="#contact" size="sm">
              Enquire now
            </GradientBorderButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-elementary-gold-400 transition-colors duration-200 p-2"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } lg:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <nav className="flex flex-col gap-4 pb-6 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wide text-white/90 hover:text-elementary-gold-400 transition-colors duration-200 py-2 !no-underline border-b border-white/10 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2">
              <GradientBorderButton
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                variant="rounded"
                size="sm"
              >
                Enquire now
              </GradientBorderButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
