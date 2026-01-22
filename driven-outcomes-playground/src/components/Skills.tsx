export function Skills() {
  return (
    <section className="py-20 bg-slate-grey-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            Curriculum-Focused Learning
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-pearl-aqua-500 to-cool-steel-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-lg text-slate-grey-400 max-w-2xl mx-auto">
            Our incursions are designed to achieve critical real world learning
            outcomes for young people as per the Victoria Curriculum. These
            include:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-pearl-aqua-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-pearl-aqua-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h4 className="font-bold uppercase text-sm">Critical Thinking</h4>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cool-steel-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-cool-steel-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h4 className="font-bold uppercase text-sm">Creativity</h4>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-thistle-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-thistle-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h4 className="font-bold uppercase text-sm">Teamwork</h4>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-lavender-grey-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-lavender-grey-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </div>
            <h4 className="font-bold uppercase text-sm">Problem Solving</h4>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-pearl-aqua-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-pearl-aqua-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h4 className="font-bold uppercase text-sm">Communication</h4>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cool-steel-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-cool-steel-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
            </div>
            <h4 className="font-bold uppercase text-sm">Presentation Skills</h4>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-thistle-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-thistle-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4 className="font-bold uppercase text-sm">Digital Literacy</h4>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-lavender-grey-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-lavender-grey-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="font-bold uppercase text-sm">Financial Literacy</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
