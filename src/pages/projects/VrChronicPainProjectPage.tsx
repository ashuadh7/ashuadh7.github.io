import { ProjectPageLayout } from "@/components/projects/ProjectPageLayout";
import { getProjectById } from "@/data/projects";

const project = getProjectById("vr-chronic-pain");

export function VrChronicPainProjectPage() {
  if (!project) return null;

  return (
    <ProjectPageLayout
      title={project.title}
      subtitle={project.shortDescription}
      year={project.year}
      tags={project.tags}
      heroImage={project.image}
      emptyPublicationsText="No project-specific publications are linked here yet. This section will be updated as outputs are published."
    >
      <section className="space-y-4">
        <h2 className="text-primary">Clinical Motivation</h2>
        <p className="text-secondary leading-relaxed">
          This project investigates VR as a complementary intervention for
          chronic pain management. The focus is on creating short, repeatable
          sessions that can fit into real clinical workflows and at-home care
          routines.
        </p>
        <p className="text-secondary leading-relaxed">
          Rather than aiming for one universal therapeutic scene, the prototype
          supports multiple calming environments and guided attention tasks so
          clinicians can tailor sessions to patient needs.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Intervention Design</h2>
        <ul className="space-y-2">
          {[
            "Nature-oriented immersive scenes with low sensory overload.",
            "Breathing and grounding prompts integrated into the VR timeline.",
            "Session flow designed with therapist checkpoints and debrief stages.",
            "Outcome logging for pain intensity, mood shift, and session comfort.",
          ].map((item) => (
            <li key={item} className="text-secondary flex gap-3">
              <span className="text-accent flex-shrink-0">-</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Artifacts</h2>
        <div className="rounded-lg overflow-hidden border border-default bg-soft">
          <img
            src="/projects/vr-chronic-pain/VMW.png"
            alt="VR chronic pain workflow storyboard"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </ProjectPageLayout>
  );
}

