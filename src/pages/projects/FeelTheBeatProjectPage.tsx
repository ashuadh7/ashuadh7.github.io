import { ProjectPageLayout } from "@/components/projects/ProjectPageLayout";
import { getProjectById } from "@/data/projects";

const project = getProjectById("feel-beat-vr");

interface ExperimentDemo {
  title: string;
  image: string;
  alt: string;
  summary: string;
}

const experimentDemos: ExperimentDemo[] = [
  {
    title: "String Model via Particles",
    image: "/projects/feel-the-beat/String_demo.gif",
    alt: "Prototype where string-like interaction is represented through particles",
    summary:
      "Testing whether a visual string can be represented as accumulated particles, so users feel they are controlling a string while hidden particle interactions provide measurable control signals.",
  },
  {
    title: "Particle Beam Spread and Reflection",
    image: "/projects/feel-the-beat/particles_demo.gif",
    alt: "Particle beam simulation exploring spread and reflection behavior",
    summary:
      "Exploring whether beam spread and reflection angle can be converted into numeric descriptors and mapped to generative music parameters.",
  },
  {
    title: "Flexible Material Quantification",
    image: "/projects/feel-the-beat/flexible_demo.gif",
    alt: "Flexible material interaction prototype in VR",
    summary:
      "Evaluating flexible virtual materials as control surfaces and extracting quantifiable deformation features for sound generation.",
  },
  {
    title: "Bend and Twist Angle Features",
    image: "/projects/feel-the-beat/angle_demo.gif",
    alt: "Soft-body interaction showing bend and twist angle behavior",
    summary:
      "Investigating bend-angle and twist-angle measurements in soft-body objects as expressive musical control parameters.",
  },
  {
    title: "PCA-Based Orientation Signals",
    image: "/projects/feel-the-beat/PCA_demo.gif",
    alt: "Principal component analysis based orientation tracking of particle motion",
    summary:
      "Testing principal component analysis (PCA) to estimate dominant orientation and motion patterns from particle distributions for higher-level control mapping.",
  },
];

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
        <h2 className="text-primary">Project Context</h2>
        <p className="text-secondary leading-relaxed">
          This work was done as a software consultant for Infusions Systems
          Ltd. Due to NDA constraints, I can only share selected glimpses of
          the technical direction rather than full implementation details.
        </p>
        <p className="text-secondary leading-relaxed">
          The core research question was whether embodied performance in VR
          could drive generative music by quantifying virtual object behavior,
          such as shape, movement direction, spread, bend, and orientation.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Embodied Interface Direction</h2>
        <ul className="space-y-2">
          {[
            "Model virtual object properties in numerical form.",
            "Map those values to generative music controls.",
            "Support performative body movement as part of music creation.",
            "Prototype quickly and compare candidate control mappings.",
          ].map((item) => (
            <li key={item} className="text-secondary flex gap-3">
              <span className="text-accent flex-shrink-0">-</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">NDA-Safe Experiment Glimpses</h2>
        <p className="text-secondary leading-relaxed">
          The clips below show early R&D directions for quantifying visual
          distortion and mapping it into sound control spaces.
        </p>
        <div className="space-y-6">
          {experimentDemos.map((demo) => (
            <article
              key={demo.image}
              className="rounded-lg border border-default bg-soft p-4 space-y-3"
            >
              <h3 className="text-primary">{demo.title}</h3>
              <p className="text-secondary leading-relaxed">{demo.summary}</p>
              <div className="rounded-md overflow-hidden border border-default bg-surface">
                <img
                  src={demo.image}
                  alt={demo.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Note</h2>
        <p className="text-secondary leading-relaxed">
          These are representative snapshots of the exploration process. The
          broader effort included additional prototypes and mapping strategies
          beyond what can be shown publicly.
        </p>
      </section>
    </ProjectPageLayout>
  );
}

