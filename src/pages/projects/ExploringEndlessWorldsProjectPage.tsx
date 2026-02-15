import { ProjectPageLayout } from "@/components/projects/ProjectPageLayout";
import { getProjectById } from "@/data/projects";

const project = getProjectById("exploring-endless-worlds-vr");

export function ExploringEndlessWorldsProjectPage() {
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
          title: "Embodied VR Flying Talk",
          embedUrl: "https://www.youtube.com/embed/FbmE4SEISWU",
          caption:
            "Presentation on embodied VR flying and its impact on orientation and cybersickness.",
        },
      ]}
      talks={[
        {
          title:
            "ICSC Talk: Embodied VR Flying Improves Spatial Orientation While Reducing Cybersickness",
          url: "https://www.youtube.com/watch?v=FbmE4SEISWU",
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
        {
          title:
            "Lean to fly: Leaning-based embodied flying can improve performance and user experience in 3D navigation.",
          authors:
            "Adhikari, A., Hashemian, A.M., Nguyen-Vo, T., Kruij, E., von der Heyde, M., & Riecke, B.E.",
          venue: "Frontiers in Virtual Reality, 2, 730334 (2021).",
          link: "https://www.frontiersin.org/articles/10.3389/frvir.2021.730334/full",
        },
      ]}
    >
      <section className="space-y-4">
        <h2 className="text-primary">Project Context</h2>
        <p className="text-secondary leading-relaxed">
          This project studies how procedural generation can sustain curiosity
          in virtual reality environments over long sessions. Instead of
          revisiting the same fixed level, participants can navigate
          continuously changing spaces that keep introducing new landmarks and
          routes.
        </p>
        <p className="text-secondary leading-relaxed">
          The design goal was to balance novelty with orientation support so
          users could feel a sense of exploration without feeling lost. The
          world system was tuned around repeatable structure patterns, visual
          anchors, and movement pacing.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Prototype Highlights</h2>
        <ul className="space-y-2">
          {[
            "On-the-fly biome and terrain generation to keep sessions varied.",
            "Exploration loop combining discovery prompts with free roaming.",
            "VR navigation patterns optimized for comfort during long-distance travel.",
            "Study protocol capturing engagement, presence, and navigation behavior.",
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
