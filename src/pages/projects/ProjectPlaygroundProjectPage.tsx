import { ProjectPageLayout } from "@/components/projects/ProjectPageLayout";
import { getProjectTalksAndResources } from "@/data/projectResources";
import { getProjectById } from "@/data/projects";

const projectId = "project-playground";
const project = getProjectById(projectId);
const talksAndResources = getProjectTalksAndResources(projectId);
const irisConceptImage = "/projects/project-playground/iris.png";
const irisHolographicConceptImage =
  "/projects/project-playground/iris_holographic.png";
const figmaMakeImage = "/projects/project-playground/figma_make.png";

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
        <h2 className="text-primary">About This Playground</h2>
        <p className="text-secondary leading-relaxed">
          This page tracks ongoing or ideation-stage projects. Most work here
          is intentionally described at a high level due to active development
          and external collaboration constraints.
        </p>
        <p className="text-secondary leading-relaxed">
          The focus is rapid experimentation: validating feasibility,
          identifying design risks early, and building pathways for deeper
          follow-up research.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">1) The Nether (UW Theatre)</h2>
        <p className="text-secondary leading-relaxed">
          I am supporting VR technical development for a new staging of{" "}
          <strong>The Nether</strong> at the University of Waterloo. The
          production explores a split format where real-world scenes remain live
          on stage while virtual-world scenes are experienced in VR. Earlier
          productions represented virtual spaces mainly with props; this version
          aims for direct VR embodiment of those scenes.
        </p>
        <p className="text-secondary leading-relaxed">
          Directed by <strong>Zachary McKendrick</strong>, whose practice spans
          drama, XR, and HCI across the Cheriton School of Computer Science and
          the Department of Communication Arts. He completed a PhD in
          Computational Media Design (University of Calgary, 2024) focused on
          virtual rehearsal methods for VR and HCI. VR direction is led by{" "}
          <strong>Dr Owen Brierley</strong>.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <figure className="rounded-lg overflow-hidden border border-default bg-soft">
            <img
              src={irisConceptImage}
              alt="Concept art exploring Iris character design for The Nether in VR"
              className="w-full h-64 object-cover"
            />
            <figcaption className="px-3 py-2 text-xs text-muted">
              Iris concept exploration for VR staging.
            </figcaption>
          </figure>
          <figure className="rounded-lg overflow-hidden border border-default bg-soft">
            <img
              src={irisHolographicConceptImage}
              alt="Holographic concept art for Iris character modeling in The Nether"
              className="w-full h-64 object-cover"
            />
            <figcaption className="px-3 py-2 text-xs text-muted">
              Iris holographic concept exploration.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">2) LLM Design-Intent Translation</h2>
        <p className="text-secondary leading-relaxed">
          I am collaborating with <strong>Emily Kuang</strong> (York University)
          and <strong>Selena Zhang</strong> on a study of how well design
          intentions are preserved when interfaces are generated with LLM-based
          tools.
        </p>
        <p className="text-secondary leading-relaxed">
          The current workflow uses Figma Make as the prototyping environment.
        </p>
        <figure className="rounded-lg overflow-hidden border border-default bg-soft">
          <img
            src={figmaMakeImage}
            alt="Figma Make interface used for LLM-assisted UI generation research"
            className="w-full h-auto object-cover"
          />
          <figcaption className="px-3 py-2 text-xs text-muted">
            Figma Make reference screenshot used for project context.
          </figcaption>
        </figure>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">
          3) Developer Vigilance in LLM-Assisted Coding
        </h2>
        <p className="text-secondary leading-relaxed">
          I am working with <strong>Meiyappan (Mei) Nagappan</strong> on design
          directions for interfaces that keep developers cognitively engaged,
          instead of drifting into passive copy-paste patterns when using LLMs
          for code generation.
        </p>
        <p className="text-secondary leading-relaxed">
          The goal is to encourage active reasoning, verification, and
          deliberate decision-making during AI-assisted development.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Working Style</h2>
        <ul className="space-y-2">
          {[
            "Shareable details are intentionally limited while projects are active.",
            "Most outputs here are exploratory prototypes, not final deployments.",
            "Promising tracks graduate into standalone projects with fuller documentation.",
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
