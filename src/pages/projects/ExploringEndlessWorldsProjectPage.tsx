import { ProjectPageLayout } from "@/components/projects/ProjectPageLayout";
import { getProjectPublications } from "@/data/publications";
import { getProjectTalksAndResources } from "@/data/projectResources";
import { getProjectById } from "@/data/projects";

const projectId = "exploring-endless-worlds-vr";
const project = getProjectById(projectId);
const hyperJumpTopViewGif =
  "/projects/exploring-endless-worlds/HyperJump_TopView.gif";
const relatedPublications = getProjectPublications(projectId);
const talksAndResources = getProjectTalksAndResources(projectId);

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
          title: "HyperJump Demo in 3D",
          embedUrl: "https://www.youtube.com/embed/7q5fm0O8ghU",
          caption: "Demonstration of HyperJump adapted for 3D navigation.",
        },
        {
          title: "3D Navigation Search Task Demo",
          embedUrl: "https://www.youtube.com/embed/xzTR_8sfZXA",
          caption:
            "Task demo used in the Lean-to-Fly work for embodied navigation evaluation.",
        },
        {
          title: "HyperJump Demonstration",
          embedUrl: "https://www.youtube.com/embed/raPNjAzIXh0",
          caption:
            "Demonstration of HyperJump behavior in navigation and pointing tasks.",
        },
      ]}
      talks={talksAndResources}
      publications={relatedPublications}
    >
      <section className="space-y-4">
        <h2 className="text-primary">What This Research Focuses On</h2>
        <p className="text-secondary leading-relaxed">
          Between 2018 and 2024, I explored one practical question: how can VR
          locomotion feel more natural, more comfortable, and easier to trust,
          especially for people who are new to immersive systems?
        </p>
        <p className="text-secondary leading-relaxed">
          The work grew into two connected topics. First, leaning-based
          embodied interaction, where upper-body movement drives navigation.
          Second, HyperJump, which combines continuous locomotion with
          jump-based travel to keep movement both efficient and orienting.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Topic 1: Leaning-Based Interaction</h2>
        <p className="text-secondary leading-relaxed">
          We compared leaning-based interfaces against handheld controllers in
          flying and navigation tasks. The key idea was simple: if movement
          control is embodied and intuitive, users should navigate more
          confidently with less discomfort.
        </p>
        <ul className="space-y-2">
          {[
            "Compared leaning and controller-based interaction across usability, ease of use, and precision.",
            "Measured spatial updating/orientation and perceived self-motion quality.",
            "Tracked workload and cybersickness in both short and extended use.",
            "Found strong benefits for novice users due to intuitive embodied control.",
            "Observed a tradeoff: better control and experience, with potential fatigue after long use.",
          ].map((item) => (
            <li key={item} className="text-secondary flex gap-3">
              <span className="text-accent flex-shrink-0">-</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Topic 2: HyperJump</h2>
        <p className="text-secondary leading-relaxed">
          Continuous locomotion supports path integration but can become
          uncomfortable at higher speeds. Teleportation enables fast travel but
          can reduce spatial continuity. HyperJump was designed to combine the
          strengths of both.
        </p>
        <p className="text-secondary leading-relaxed">
          At slow speeds, it behaves like standard continuous movement. As
          speed increases, periodic forward jumps are added while continuous
          movement is preserved between jumps. In practice, this improved travel
          speed while maintaining orientation and route-following performance.
        </p>
        <figure className="rounded-lg overflow-hidden border border-default bg-soft">
          <img
            src={hyperJumpTopViewGif}
            alt="Top-view HyperJump animation showing continuous movement combined with periodic jumps"
            className="w-full h-full object-cover"
          />
          <figcaption className="px-4 py-3 text-sm text-muted">
            Top-view HyperJump visualization illustrating continuous translation
            plus jump-based progression.
          </figcaption>
        </figure>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Why It Matters</h2>
        <p className="text-secondary leading-relaxed">
          A key takeaway from this research is that locomotion design has a
          major impact on accessibility and confidence in VR. Embodied movement
          can reduce friction for new users, and hybrid locomotion can improve
          speed without sacrificing orientation.
        </p>
      </section>
    </ProjectPageLayout>
  );
}
