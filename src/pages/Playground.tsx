import { Code2, BookMarked, ExternalLink, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { selectedWorksData, getBookCount } from "@/data/playground";
import React from "react";
import { Footer } from "@/components/Footer";

const books: Array<{
  title: string;
  description: string;
  icon: typeof BookMarked | typeof Star;
  type: "completed" | "reading" | "wishlist";
  route: string;
}> = [
  {
    title: "Recent Favourites",
    description: "Books that recently had a lasting impact on me.",
    icon: BookMarked,
    type: "completed",
    route: "favourites",
  },
  {
    title: "Currently Reading",
    description: "Books I am currently reading and exploring.",
    icon: BookMarked,
    type: "reading",
    route: "currently-reading",
  },
  {
    title: "Wishlist",
    description: "Books I plan to read in the future.",
    icon: Star,
    type: "wishlist",
    route: "wishlist",
  },
];

export function Playground() {
  const navigate = useNavigate();

  const handleExternalLink = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="bg-subtle min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="mb-10 sm:mb-12">
          <h1 className="mb-4 text-primary">Personal Orbit</h1>
          <p className="text-muted">
            A collection of my selected projects, books, games, and other
            interests outside of research.
          </p>
        </div>

        {/* Selected Projects Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-6 h-6 text-accent" />
            <h2 className="text-primary">Selected Projects</h2>
          </div>
          <div className="space-y-4">
            {selectedWorksData.map((project) => (
              <div
                key={project.id}
                className="block bg-surface rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-all border border-default group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-soft rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-primary">{project.title}</h3>
                      <p className="text-muted">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 self-start sm:self-auto">
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                      {project.status}
                    </span>
                    {project.externalLink && (
                      <button
                        onClick={(e) =>
                          handleExternalLink(e, project.externalLink!)
                        }
                        className="p-2 hover-bg-accent-soft rounded-lg transition-colors"
                        title="Open link"
                      >
                        {(() => {
                          const LinkIcon = project.icon ?? ExternalLink; // prefer a dedicated link icon if you have it
                          return (
                            <LinkIcon className="w-5 h-5 text-muted group-hover-text-accent transition-colors" />
                          );
                        })()}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Books Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookMarked className="w-6 h-6 text-accent" />
            <h2 className="text-primary">Books</h2>
          </div>
          <div className="space-y-4">
            {books.map((book, index) => (
              <div
                key={index}
                onClick={() => navigate(`/playground/books/${book.route}`)}
                className="block bg-surface rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-all border border-default cursor-pointer group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-soft rounded-lg flex items-center justify-center flex-shrink-0">
                      <book.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-primary group-hover-text-accent transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-muted">{book.description}</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-soft text-secondary rounded-lg self-start sm:self-auto">
                    {getBookCount(book.type)} books
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
