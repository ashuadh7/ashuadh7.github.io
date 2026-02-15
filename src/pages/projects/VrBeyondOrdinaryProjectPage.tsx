import { ProjectPageLayout } from "@/components/projects/ProjectPageLayout";
import { getProjectById } from "@/data/projects";

const project = getProjectById("vr-beyond-ordinary");

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
      talks={[
        {
          title:
            "HyperJumping in Virtual Vancouver: Combating Motion Sickness",
          url: "https://doi.org/10.1145/3532834.3536211",
        },
      ]}
      publications={[
        {
          title:
            "Integrating continuous and teleporting VR locomotion into a seamless 'hyperjump' paradigm.",
          authors:
            "Adhikari, A., Zielasko, D., Aguilar, I., Bretin, A., Kruij, E., von der Heyde, M., & Riecke, B.E.",
          venue: "IEEE TVCG, 29(12), 5265-5281 (2022).",
          link: "https://ieeexplore.ieee.org/abstract/document/9894041/",
        },
      ]}
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

