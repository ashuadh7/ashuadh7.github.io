import { useParams, useNavigate } from "react-router-dom";
import { BookMarked, ArrowLeft, Calendar } from "lucide-react";
import { booksData } from "../../data/playground";
import { Footer } from "@/components/Footer";

export function PlaygroundBooksDetail() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const categoryMap = {
    "recently-read": "completed",
    "currently-reading": "reading",
    wishlist: "wishlist",
  };

  const categoryKey =
    categoryMap[category as keyof typeof categoryMap] || "completed";
  const books = booksData.filter((book) => book.category === categoryKey);

  const categoryTitles = {
    "recently-read": "Recently Read",
    "currently-reading": "Currently Reading",
    wishlist: "Wishlist",
  };

  const categoryTitle =
    categoryTitles[category as keyof typeof categoryTitles] || "Books";

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate("/playground")}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Playground
        </button>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookMarked className="w-8 h-8 text-purple-600" />
            <h1 className="text-gray-900">{categoryTitle}</h1>
          </div>
          <p className="text-gray-600">
            {books.length} {books.length === 1 ? "book" : "books"} in this
            collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="flex gap-4">
                {/* Cover Image */}
                {book.coverImage && (
                  <img
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    className="w-20 h-28 object-cover rounded-md border border-gray-200 flex-shrink-0"
                    loading="lazy"
                  />
                )}

                {/* Book Details */}
                <div className="min-w-0">
                  <h3 className="mb-2 text-gray-900">{book.title}</h3>
                  <p className="text-gray-600 mb-4">by {book.authors}</p>

                  {book.dateCompleted && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>
                        Completed:{" "}
                        {new Date(book.dateCompleted).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {book.dateStarted && !book.dateCompleted && (
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
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
                <p className="text-gray-600 text-sm italic border-l-2 border-purple-200 pl-3">
                  {book.notes}
                </p>
              )}
            </div>
          ))}
        </div>

        {books.length === 0 && (
          <div className="text-center py-12">
            <BookMarked className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No books in this category yet.</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
