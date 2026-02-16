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
        <h2 className="text-primary">Research Focus</h2>
        <p className="text-secondary leading-relaxed">
          Master Your Emotions in VR investigates how immersive and social VR
          can support emotion regulation for teens and young adults.
        </p>
        <p className="text-secondary leading-relaxed">
          The work currently combines two connected studies: participatory
          co-design workshops with high-school students and go-along interviews
          with youth in VRChat. Both focus on practical support for adaptive
          emotion regulation, especially cognitive reappraisal.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">
          Study 1: Co-design Workshops with High-School Students
        </h2>
        <p className="text-secondary leading-relaxed">
          The first study used in-person co-design workshops to understand how
          adolescents experience emotion regulation challenges and what kinds of
          VR supports they consider useful.
        </p>
        <ul className="space-y-2">
          {[
            "Three in-person workshops with adolescents (N=69), ages 15-18.",
            "Conducted across two schools with different socioeconomic contexts.",
            "Two grade-10 workshop groups (N=49) and one grade 10-12 workshop group (N=20).",
            "Activities centered on cognitive reappraisal and youth-generated ideas for VR-based support.",
          ].map((item) => (
            <li key={item} className="text-secondary flex gap-3">
              <span className="text-accent flex-shrink-0">-</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">
          Study 2: Go-along Interviews in VRChat
        </h2>
        <p className="text-secondary leading-relaxed">
          The second study shifted to social VR fieldwork to understand how
          youth already regulate emotions in the wild, within their everyday
          VRChat use.
        </p>
        <ul className="space-y-2">
          {[
            "Online survey with youth in VRChat (N=64).",
            "Follow-up go-along interviews (N=21) with youth ages 13-24.",
            "Mapped strategies youth use and the platform features that support or hinder adaptive regulation.",
            "Generated design opportunities for future social VR interventions targeting emotion regulation.",
          ].map((item) => (
            <li key={item} className="text-secondary flex gap-3">
              <span className="text-accent flex-shrink-0">-</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Current Status</h2>
        <p className="text-secondary leading-relaxed">
          The co-design work has been published at CHI 2024. The VRChat
          go-along interview paper is currently under submission to DIS.
        </p>
      </section>
    </ProjectPageLayout>
  );
}

