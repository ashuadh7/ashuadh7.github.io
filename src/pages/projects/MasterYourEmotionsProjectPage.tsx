import { ProjectPageLayout } from "@/components/projects/ProjectPageLayout";
import { getProjectPublications } from "@/data/publications";
import { getProjectById } from "@/data/projects";

const projectId = "master-emotions-vr";
const project = getProjectById(projectId);
const relatedPublications = getProjectPublications(projectId);

export function MasterYourEmotionsProjectPage() {
  if (!project) return null;

  return (
    <ProjectPageLayout
      title={project.title}
      subtitle={project.shortDescription}
      year={project.year}
      tags={project.tags}
      heroImage={project.image}
      publications={relatedPublications}
    >
      <section className="space-y-4">
        <h2 className="text-primary">Research Direction</h2>
        <p className="text-secondary leading-relaxed">
          Master Your Emotions in VR focuses on emotional regulation skills
          through guided scenario-based training. The interaction design keeps
          user agency central while providing enough structure for repeated
          practice and measurable progress.
        </p>
        <p className="text-secondary leading-relaxed">
          Biofeedback is used as a support signal rather than a scoring
          mechanism, helping participants interpret stress responses and apply
          grounding techniques during emotionally demanding moments.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Scenario Structure</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              heading: "Observe",
              body: "Identify emotional triggers through subtle contextual cues in the environment.",
            },
            {
              heading: "Regulate",
              body: "Practice breathing, reframing, and attention-shifting techniques in guided sequences.",
            },
            {
              heading: "Reflect",
              body: "Review responses and coping choices to support transfer beyond VR sessions.",
            },
          ].map((item) => (
            <div
              key={item.heading}
              className="bg-soft rounded-lg border border-default p-4"
            >
              <h3 className="text-primary font-semibold mb-2">{item.heading}</h3>
              <p className="text-secondary text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </ProjectPageLayout>
  );
}

