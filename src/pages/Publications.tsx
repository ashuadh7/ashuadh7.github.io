import { publicationsData } from "../data/publications";

export function Publications() {
  const categories = [
    "Peer-Reviewed Journals",
    "Other Peer-Reviewed Publications",
    "Exhibitions, Presentations, and Posters",
  ] as const;

  const renderAuthors = (authors: string) => {
    const parts = authors.split("**");
    return (
      <>
        {parts.map((part, index) => {
          // Even indices are normal text, odd indices are bold (wrapped in **)
          if (index % 2 === 1) {
            return (
              <strong key={index} className="font-semibold text-primary">
                {part}
              </strong>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </>
    );
  };

  return (
    <main className="bg-app min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-10 sm:mb-12">
          Publications & Presentations
        </h1>

        <div className="space-y-10 sm:space-y-12">
          {categories.map((category) => {
            const categoryPubs = publicationsData.filter(
              (pub) => pub.category === category,
            );

            if (categoryPubs.length === 0) return null;

            return (
              <section key={category}>
                <h2 className="text-lg sm:text-xl font-semibold text-accent mb-5 sm:mb-6">
                  {category}
                </h2>
                <div className="flex flex-col">
                  {categoryPubs.map((pub) => (
                    <div
                      key={pub.id}
                      className="pl-4 sm:pl-5 border-l-[3px] border-publication border-solid mb-8 sm:mb-10 last:mb-0"
                    >
                      <h3 className="text-[1.15rem] sm:text-[1.2rem] font-semibold text-primary mb-1 leading-snug">
                        {pub.title}
                      </h3>
                      <p className="text-base text-secondary mb-1 leading-relaxed">
                        {renderAuthors(pub.authors)}
                      </p>
                      {pub.venue && (
                        <p className="text-base text-muted mb-2 leading-relaxed">
                          {pub.venue}
                        </p>
                      )}
                      <a
                        href={pub.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-accent hover-text-accent-strong transition-colors inline-block"
                      >
                        {pub.linkText}
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <footer className="py-12 text-center text-muted text-sm mt-12">
        <p>&copy; 2026 Ashu Adhikari. All rights reserved.</p>
      </footer>
    </main>
  );
}
