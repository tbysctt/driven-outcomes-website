import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GradientBorderButton } from "./GradientBorderButton";

const navLinks = [
  { to: "/miniboss", label: "MiniBOSS" },
  { to: "/tripod", label: "Tripod" },
  { to: "/miniboss-holiday", label: "Holiday Programs" },
  { to: "/talknow", label: "TalkNOW" },
  { to: "/#programs", label: "ELC (Coming soon)" },
];

const navLinkClass =
  "text-sm font-semibold uppercase tracking-wide text-white/90 hover:text-pearl-aqua-400 transition-colors duration-200 !no-underline";
const navLinkActiveClass =
  "text-pearl-aqua-400 border-b-2 border-pearl-aqua-400 pb-0.5";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-slate-grey-900/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <NavLink
              to="/"
              className="!no-underline uppercase font-extrabold text-xl md:text-2xl tracking-tight text-white hover:text-pearl-aqua-400 transition-colors duration-200"
            >
              Driven Outcomes
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.to.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.to}
                  className={navLinkClass}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    [navLinkClass, isActive ? navLinkActiveClass : ""].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
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
            className="lg:hidden text-white hover:text-pearl-aqua-400 transition-colors duration-200 p-2"
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
            {navLinks.map((link) =>
              link.to.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${navLinkClass} py-2 border-b border-white/10 last:border-0`}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      navLinkClass,
                      "py-2 border-b border-white/10 last:border-0",
                      isActive ? navLinkActiveClass : "",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
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
