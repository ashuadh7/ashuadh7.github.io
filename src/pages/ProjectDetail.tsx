import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Target,
  FlaskConical,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { getProjectById } from "../data/projects";

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="text-center">
          <h2 className="mb-4 text-primary">Project Not Found</h2>
          <Link to="/" className="text-accent hover-text-accent-strong">
            Return to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-muted hover-text-accent mb-6 sm:mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
          <span className="flex items-center gap-2 text-sm text-muted">
            <Calendar className="w-4 h-4" />
            {project.year}
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-accent-soft text-accent rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h1 className="mb-4 text-primary">{project.title}</h1>
        <p className="text-lg sm:text-xl text-muted">{project.shortDescription}</p>
      </div>

      <div className="aspect-video rounded-lg overflow-hidden mb-10 sm:mb-12 bg-soft">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-10 sm:space-y-12">
        <section>
          <h2 className="mb-4 text-primary">Overview</h2>
          <p className="text-secondary leading-relaxed">{project.fullDescription}</p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-accent" />
            <h2 className="text-primary">Objective</h2>
          </div>
          <p className="text-secondary leading-relaxed">{project.objective}</p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FlaskConical className="w-6 h-6 text-accent" />
            <h2 className="text-primary">Methodology</h2>
          </div>
          <ul className="space-y-3">
            {project.methodology.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-accent flex-shrink-0">-</span>
                <span className="text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-accent" />
            <h2 className="text-primary">Results & Findings</h2>
          </div>
          <ul className="space-y-3">
            {project.results.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-accent flex-shrink-0">-</span>
                <span className="text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="w-6 h-6 text-accent" />
            <h2 className="text-primary">Technologies Used</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-soft text-secondary rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-default">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-accent hover-text-accent-strong transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          View All Projects
        </Link>
      </div>
    </main>
  );
}

