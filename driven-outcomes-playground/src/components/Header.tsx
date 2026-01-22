import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-dark text-white sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div>
              <a
                href="/"
                className="!no-underline uppercase font-extrabold text-xl tracking-tight text-white hover:text-secondary transition-colors"
              >
                Driven Outcomes
              </a>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                aria-label="Toggle navigation"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
                className="text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:bg-transparent gap-6 items-center border border-white/20 md:border-none rounded-xl p-4 md:p-0 mt-4 md:mt-0`}
          >
            <nav></nav>

            <a
              href="#contact"
              className="inline-flex rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 !no-underline"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
