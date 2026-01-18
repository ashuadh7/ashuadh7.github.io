import { publicationsData } from '../data/publications';

export function Publications() {
  const categories = [
    'Peer-Reviewed Journals',
    'Other Peer-Reviewed Publications',
    'Exhibitions, Presentations, and Posters'
  ] as const;

  const renderAuthors = (authors: string) => {
    const parts = authors.split('**');
    return (
      <>
        {parts.map((part, index) => {
          // Even indices are normal text, odd indices are bold (wrapped in **)
          if (index % 2 === 1) {
            return <strong key={index} className="font-bold text-black" style={{ fontWeight: 700 }}>{part}</strong>;
          }
          return <span key={index}>{part}</span>;
        })}
      </>
    );
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-12">Publications & Presentations</h1>
        
        <div className="space-y-12">
          {categories.map((category) => {
            const categoryPubs = publicationsData.filter(pub => pub.category === category);
            
            if (categoryPubs.length === 0) return null;

            return (
              <section key={category}>
                <h2 className="text-xl font-bold text-purple-600 mb-6">{category}</h2>
                <div className="flex flex-col">
                  {categoryPubs.map((pub) => (
                    <div key={pub.id} className="pl-5 border-l-4 border-gray-300 border-solid mb-10 last:mb-0">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight" style={{ fontWeight: 700 }}>
                        {pub.title}
                      </h3>
                      <p className="text-sm text-gray-700 mb-1">
                        {renderAuthors(pub.authors)}
                      </p>
                      {pub.venue && (
                        <p className="text-sm text-gray-500 italic mb-2">
                          {pub.venue}
                        </p>
                      )}
                      <a 
                        href={pub.linkUrl}
                        className="text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors inline-block"
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
      
      <footer className="py-12 text-center text-gray-500 text-sm mt-12">
        <p>&copy; 2026 Ashu Adhikari. All rights reserved.</p>
      </footer>
    </main>
  );
}
