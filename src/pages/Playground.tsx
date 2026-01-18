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
    title: "Recently Read",
    description: "Books I have finished and my thoughts on them.",
    icon: BookMarked,
    type: "completed",
    route: "recently-read",
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
    <main className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="mb-4 text-gray-900">Playground</h1>
          <p className="text-gray-600">
            A collection of my selected projects, books, games, and other
            interests outside of research.
          </p>
        </div>

        {/* Selected Projects Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-6 h-6 text-purple-600" />
            <h2 className="text-gray-900">Selected Projects</h2>
          </div>
          <div className="space-y-4">
            {selectedWorksData.map((project) => (
              <div
                key={project.id}
                className="block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-gray-200 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code2 className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-gray-900">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                      {project.status}
                    </span>
                    {project.externalLink && (
                      <button
                        onClick={(e) =>
                          handleExternalLink(e, project.externalLink!)
                        }
                        className="p-2 hover:bg-purple-50 rounded-lg transition-colors"
                        title="Open link"
                      >
                        {(() => {
                          const LinkIcon = project.icon ?? ExternalLink; // prefer a dedicated link icon if you have it
                          return (
                            <LinkIcon className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
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
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookMarked className="w-6 h-6 text-purple-600" />
            <h2 className="text-gray-900">Books</h2>
          </div>
          <div className="space-y-4">
            {books.map((book, index) => (
              <div
                key={index}
                onClick={() => navigate(`/playground/books/${book.route}`)}
                className="block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-gray-200 cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <book.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-gray-600">{book.description}</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
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
