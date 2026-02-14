import { useParams, useNavigate } from "react-router-dom";
import { BookMarked, ArrowLeft, Calendar } from "lucide-react";
import { booksData } from "../../data/playground";
import { Footer } from "@/components/Footer";

export function PlaygroundBooksDetail() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const categoryMap = {
    favourites: "completed",
    "currently-reading": "reading",
    wishlist: "wishlist",
  } as const;

  const categoryKey =
    categoryMap[category as keyof typeof categoryMap] || "completed";
  const books = booksData.filter((book) => book.category === categoryKey);

  const categoryTitles = {
    favourites: "Some of my Favourites",
    "currently-reading": "Currently Reading",
    wishlist: "Wishlist",
  };

  const categoryTitle =
    categoryTitles[category as keyof typeof categoryTitles] || "Books";

  return (
    <main className="bg-subtle min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate("/playground")}
          className="flex items-center gap-2 text-accent hover-text-accent-strong mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Playground
        </button>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookMarked className="w-8 h-8 text-accent" />
            <h1 className="text-primary">{categoryTitle}</h1>
          </div>
          <p className="text-muted">
            {books.length} {books.length === 1 ? "book" : "books"} in this
            collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-surface rounded-lg p-6 shadow-sm border border-default hover:shadow-md transition-all flex flex-col md:flex-row gap-6"
            >
              {book.coverImage && (
                <div className="flex-shrink-0 w-full md:w-32 h-48 bg-soft rounded-md overflow-hidden shadow-sm">
                  <img
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-medium text-primary">
                  {book.title}
                </h3>
                <p className="text-muted mb-4">
                  by{" "}
                  {Array.isArray(book.authors)
                    ? book.authors.join(", ")
                    : book.authors}
                </p>

                {book.dateCompleted && (
                  <div className="flex items-center gap-2 text-sm text-muted mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Completed:{" "}
                      {new Date(book.dateCompleted).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                )}

                {book.dateStarted && !book.dateCompleted && (
                  <div className="flex items-center gap-2 text-sm text-muted mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Started:{" "}
                      {new Date(book.dateStarted).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                )}

                {book.notes && (
                  <p className="text-muted text-sm italic border-l-2 border-accent-soft pl-3">
                    {book.notes}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {books.length === 0 && (
          <div className="text-center py-12">
            <BookMarked className="w-16 h-16 text-muted mx-auto mb-4" />
            <p className="text-muted">No books in this category yet.</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

