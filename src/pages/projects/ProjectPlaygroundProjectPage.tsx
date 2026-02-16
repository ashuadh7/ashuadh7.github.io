import { ProjectPageLayout } from "@/components/projects/ProjectPageLayout";
import { getProjectTalksAndResources } from "@/data/projectResources";
import { getProjectById } from "@/data/projects";

const projectId = "project-playground";
const project = getProjectById(projectId);
const talksAndResources = getProjectTalksAndResources(projectId);

export function ProjectPlaygroundProjectPage() {
  if (!project) return null;

  return (
    <ProjectPageLayout
      title={project.title}
      subtitle={project.shortDescription}
      year={project.year}
      tags={project.tags}
      heroImage={project.image}
      talks={talksAndResources}
    >
      <section className="space-y-4">
        <h2 className="text-primary">Why This Exists</h2>
        <p className="text-secondary leading-relaxed">
          Project Playground is the experimental workspace where early concepts
          are rapidly tested before they become full research projects. It
          emphasizes speed, modularity, and clear documentation over polished
          final artifacts.
        </p>
        <p className="text-secondary leading-relaxed">
          The intent is to reduce iteration cost, making it easier to kill weak
          ideas early and scale promising concepts with stronger evidence.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Current Prototyping Tracks</h2>
        <div className="rounded-lg overflow-hidden border border-default bg-soft">
          <img
            src="/projects/project-playground/ETC.png"
            alt="Prototype concept board"
            className="w-full h-full object-cover"
          />
        </div>
        <ul className="space-y-2">
          {[
            "Input modality experiments for locomotion and object interaction.",
            "Quick study scaffolds for formative and comparative evaluations.",
            "Reusable UI patterns for immersive research prototypes.",
          ].map((item) => (
            <li key={item} className="text-secondary flex gap-3">
              <span className="text-accent flex-shrink-0">-</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </ProjectPageLayout>
  );
}
