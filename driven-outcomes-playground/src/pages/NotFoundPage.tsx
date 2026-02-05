import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 md:py-40 flex items-center min-h-[70vh]">
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
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-6xl sm:text-8xl font-extrabold tracking-tight text-white/90 uppercase mb-4">
            404
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase mb-4">
            Page not found
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-neutral-800 shadow-sm hover:bg-neutral-100 transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white uppercase tracking-wide"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
