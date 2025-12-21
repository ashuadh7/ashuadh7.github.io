import { FileText, Award } from 'lucide-react';

const publications = [
  {
    title: 'Designing Inclusive AR Navigation Systems: A Participatory Approach with Visually Impaired Users',
    authors: 'Adhikari, A., Smith, J., & Johnson, M.',
    venue: 'CHI 2024: ACM Conference on Human Factors in Computing Systems',
    type: 'Conference Paper',
    award: 'Best Paper Honorable Mention'
  },
  {
    title: 'Feel the Beat: Exploring Full-Body Rhythm Interaction in Virtual Reality',
    authors: 'Adhikari, A., & Lee, K.',
    venue: 'CHI PLAY 2023: ACM Conference on Human Factors in Computing Systems and Play',
    type: 'Conference Paper',
    award: null
  },
  {
    title: 'Virtual Reality for Chronic Pain Management: A Systematic Review and Meta-Analysis',
    authors: 'Adhikari, A., Brown, K., & Davis, R.',
    venue: 'IEEE Transactions on Visualization and Computer Graphics',
    type: 'Journal Article',
    award: null
  },
  {
    title: 'Beyond Traditional Controllers: Novel Interaction Techniques for Immersive VR',
    authors: 'Adhikari, A., Chen, L., & Wilson, T.',
    venue: 'IEEE VR 2024: IEEE Conference on Virtual Reality and 3D User Interfaces',
    type: 'Conference Paper',
    award: null
  },
  {
    title: 'Biofeedback-Enhanced VR for Emotional Regulation: Design and Evaluation',
    authors: 'Adhikari, A., & Martinez, S.',
    venue: 'IMWUT 2022: Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies',
    type: 'Journal Article',
    award: null
  },
  {
    title: 'Procedural Generation in VR: Effects on Exploration and Presence',
    authors: 'Adhikari, A., Johnson, M., & Park, J.',
    venue: 'IEEE VR 2023: IEEE Conference on Virtual Reality and 3D User Interfaces',
    type: 'Conference Paper',
    award: null
  }
];

export function Publications() {
  return (
    <main>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="mb-4 text-gray-900">Publications</h1>
          <p className="text-xl text-gray-600">
            Selected publications from my research work
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="border-l-4 border-indigo-600 pl-6 py-4 hover:bg-gray-50 transition-colors rounded-r-lg">
                <div className="flex items-start gap-4">
                  <FileText className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="mb-2 text-gray-900">{pub.title}</h3>
                    <p className="text-gray-700 mb-2">{pub.authors}</p>
                    <p className="text-gray-600 italic mb-2">{pub.venue}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">{pub.type}</span>
                      {pub.award && (
                        <span className="flex items-center gap-1 text-sm text-amber-600">
                          <Award className="w-4 h-4" />
                          {pub.award}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <footer className="py-8 bg-white text-center text-gray-500 text-sm border-t border-gray-200">
        <p>&copy; 2025 Ashu Adhikari. All rights reserved.</p>
      </footer>
    </main>
  );
}
