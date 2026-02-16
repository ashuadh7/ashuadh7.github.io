import { Link } from 'react-router-dom';
import { Layers } from 'lucide-react';
import { projects } from '../data/projects';
import { Footer } from '@/components/Footer';

export function ProjectsHome() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      <div className="mb-10 sm:mb-12">
        <h2 className="mb-4 text-primary">Projects</h2>
        <p className="text-muted">Explore the projects I have worked on.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.path}
            className="group bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-default"
          >
            <div className="aspect-video overflow-hidden bg-soft">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex items-start gap-3 mb-2">
                <Layers className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <h3 className="text-primary group-hover-text-accent transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="text-muted text-sm">{project.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
      
    <Footer />
    </main>
  );
}
