import { ProjectPageLayout } from "@/components/projects/ProjectPageLayout";
import { getProjectPublications } from "@/data/publications";
import { getProjectTalksAndResources } from "@/data/projectResources";
import { getProjectById } from "@/data/projects";

const projectId = "vr-beyond-ordinary";
const project = getProjectById(projectId);
const relatedPublications = getProjectPublications(projectId);
const talksAndResources = getProjectTalksAndResources(projectId);

export function VrBeyondOrdinaryProjectPage() {
  if (!project) return null;

  return (
    <ProjectPageLayout
      title={project.title}
      subtitle={project.shortDescription}
      year={project.year}
      tags={project.tags}
      heroImage={project.image}
      videos={[
        {
          title: "HyperJump Interaction Demo",
          embedUrl: "https://www.youtube.com/embed/hRqkqup40bI",
          caption:
            "A talk and demo exploring hybrid locomotion for richer VR interaction experiences.",
        },
      ]}
      talks={talksAndResources}
      publications={relatedPublications}
    >
      <section className="space-y-4">
        <h2 className="text-primary">Design Intent</h2>
        <p className="text-secondary leading-relaxed">
          VR Beyond the Ordinary is a research sandbox focused on interactions
          that are not constrained to single-controller metaphors. The project
          combined gaze, gesture, movement, and environmental affordances to
          test how people adapt when interaction cues become more embodied.
        </p>
        <p className="text-secondary leading-relaxed">
          The central question was whether context-aware interaction switching
          can reduce cognitive overhead while preserving user control in
          complex immersive scenes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">What Was Explored</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-soft rounded-lg border border-default p-4">
            <h3 className="text-primary font-semibold mb-2">
              Hybrid Input Layers
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              Combined eye focus, hand pose, and head movement to trigger
              context-specific interaction states.
            </p>
          </div>
          <div className="bg-soft rounded-lg border border-default p-4">
            <h3 className="text-primary font-semibold mb-2">
              Adaptive Interaction Feedback
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              Rapid prototyping of subtle haptic and visual feedback to reduce
              uncertainty during mode changes.
            </p>
          </div>
        </div>
      </section>
    </ProjectPageLayout>
  );
}

