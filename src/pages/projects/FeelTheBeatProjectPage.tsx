import { ProjectPageLayout } from "@/components/projects/ProjectPageLayout";
import { getProjectById } from "@/data/projects";

const project = getProjectById("feel-beat-vr");

export function FeelTheBeatProjectPage() {
  if (!project) return null;

  return (
    <ProjectPageLayout
      title={project.title}
      subtitle={project.shortDescription}
      year={project.year}
      tags={project.tags}
      heroImage={project.image}
    >
      <section className="space-y-4">
        <h2 className="text-primary">Project Concept</h2>
        <p className="text-secondary leading-relaxed">
          Feel the Beat in VR explores rhythm interaction as a full-body
          experience. Instead of pressing abstract controls, players use body
          movement, timing, and spatial awareness to engage with musical
          structure in real time.
        </p>
        <p className="text-secondary leading-relaxed">
          The prototype was designed as both an interaction experiment and a
          playful performance system, making it useful for rapid testing with
          participants from both gaming and music backgrounds.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Interaction & Visual System</h2>
        <div className="rounded-lg overflow-hidden border border-default bg-soft">
          <img
            src="/projects/feel-the-beat/Particle_Colision_2.png"
            alt="Audio-reactive particle system prototype"
            className="w-full h-full object-cover"
          />
        </div>
        <ul className="space-y-2">
          {[
            "Audio feature extraction drives visual effects and interaction windows.",
            "Movement traces provide immediate performance feedback.",
            "Difficulty adapts to song density and player timing consistency.",
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

