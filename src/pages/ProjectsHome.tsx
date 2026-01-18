import { Link } from 'react-router-dom';
import { Layers } from 'lucide-react';
import { projects } from '../data/projects';
import { Footer } from '@/components/Footer';

export function ProjectsHome() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h2 className="mb-4 text-gray-900">Projects</h2>
        <p className="text-gray-600">Explore the projects I have worked on.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-200"
          >
            <div className="aspect-video overflow-hidden bg-gray-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3 mb-2">
                <Layers className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                <h3 className="text-gray-900 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{project.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
      
    <Footer />
    </main>
  );
}
