import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Target, FlaskConical, TrendingUp, Wrench } from 'lucide-react';
import { getProjectById } from '../data/projects';

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : undefined;
  
  if (!project) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="mb-4 text-gray-900">Project Not Found</h2>
          <Link to="/" className="text-purple-600 hover:text-purple-700">
            Return to Projects
          </Link>
        </div>
      </main>
    );
  }
  
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>
      
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            {project.year}
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h1 className="mb-4 text-gray-900">{project.title}</h1>
        <p className="text-xl text-gray-600">{project.shortDescription}</p>
      </div>
      
      <div className="aspect-video rounded-lg overflow-hidden mb-12 bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="space-y-12">
        <section>
          <h2 className="mb-4 text-gray-900">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{project.fullDescription}</p>
        </section>
        
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-purple-600" />
            <h2 className="text-gray-900">Objective</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">{project.objective}</p>
        </section>
        
        <section>
          <div className="flex items-center gap-3 mb-4">
            <FlaskConical className="w-6 h-6 text-purple-600" />
            <h2 className="text-gray-900">Methodology</h2>
          </div>
          <ul className="space-y-3">
            {project.methodology.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-purple-600 flex-shrink-0">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>
        
        <section>
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <h2 className="text-gray-900">Results & Findings</h2>
          </div>
          <ul className="space-y-3">
            {project.results.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-purple-600 flex-shrink-0">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>
        
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="w-6 h-6 text-purple-600" />
            <h2 className="text-gray-900">Technologies Used</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          View All Projects
        </Link>
      </div>
    </main>
  );
}
