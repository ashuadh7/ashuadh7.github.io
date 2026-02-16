import { ProjectPageLayout } from "@/components/projects/ProjectPageLayout";
import { getProjectPublications } from "@/data/publications";
import { getProjectTalksAndResources } from "@/data/projectResources";
import { getProjectById } from "@/data/projects";

const projectId = "vr-beyond-ordinary";
const project = getProjectById(projectId);
const relatedPublications = getProjectPublications(projectId);
const talksAndResources = getProjectTalksAndResources(projectId);
const earthgazingImage = "/projects/vr-beyond-ordinary/SIRIUS_Earthgazing.jpg";
const issScreenshotImage = "/projects/vr-beyond-ordinary/Screen-Shot-ISS.jpg";
const awedysseyPosterImage =
  "/projects/vr-beyond-ordinary/Awedyssey-Poster-2022-07-10.jpg";
const zurichPosterPdf = "/projects/vr-beyond-ordinary/poster_zurich.pdf";

export function VrBeyondOrdinaryProjectPage() {
  if (!project) return null;

  return (
    <ProjectPageLayout
      title={project.title}
      subtitle={project.shortDescription}
      year={project.year}
      tags={project.tags}
      heroImage={project.image}
      heroAlt="Awedyssey project visual for self-transcendent VR experiences"
      talks={talksAndResources}
      publications={relatedPublications}
    >
      <section className="space-y-4">
        <h2 className="text-primary">What This Project Is About</h2>
        <p className="text-secondary leading-relaxed">
          VR Beyond the Ordinary centers on <strong>Awedyssey</strong>, a
          transformative virtual reality experience designed to support mental
          well-being and connection through self-transcendent emotions such as
          awe.
        </p>
        <p className="text-secondary leading-relaxed">
          The project asks a practical design question: how can VR help people
          feel connected to self, humanity, nature, and Earth when access to
          powerful restorative environments is limited?
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Where It Started: SIRIUS</h2>
        <p className="text-secondary leading-relaxed">
          Awedyssey started in the context of{" "}
          <strong>
            SIRIUS (Scientific International Research in Unique Terrestrial
            Station)
          </strong>
          , a long-duration isolation analog study that models extended
          spaceflight conditions.
        </p>
        <p className="text-secondary leading-relaxed">
          As part of a DLR-sponsored study implemented by Charite -
          Universitatsmedizin Berlin (PI: Alex Stahn), the team designed a VR
          experience to augment sensory stimulation and counter isolation
          stressors for crew members during confinement.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Awedyssey Design Goals</h2>
        <ul className="space-y-2">
          {[
            "Support mental well-being and promote relaxation.",
            "Evoke feelings of connection to self, humanity, nature, and Earth.",
            "Counter feelings of isolation in prolonged confinement contexts.",
            "Facilitate awe, wonder, and meaningful introspection.",
            "Balance emotional intensity with comfort and user autonomy.",
          ].map((item) => (
            <li key={item} className="text-secondary flex gap-3">
              <span className="text-accent flex-shrink-0">-</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Deployment and Design Tensions</h2>
        <p className="text-secondary leading-relaxed">
          The work has been deployed in two distinct contexts: first as a
          sensory countermeasure for a mission-analog crew, and later in
          curated public exhibitions. Across contexts, recurring tensions
          emerged between realism, vastness, comfort, and participant autonomy.
        </p>
        <p className="text-secondary leading-relaxed">
          These findings informed practical guidance for designing emotional VR
          experiences for diverse audiences while preserving psychological
          safety and reflective depth.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary">Selected Artifacts</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <figure className="rounded-lg overflow-hidden border border-default bg-soft">
            <img
              src={awedysseyPosterImage}
              alt="Awedyssey poster"
              className="w-full h-52 object-cover"
            />
            <figcaption className="px-3 py-2 text-xs text-muted">
              Awedyssey research poster from the SIRIUS workstream.
            </figcaption>
          </figure>
         
          <figure className="rounded-lg overflow-hidden border border-default bg-soft">
            <img
              src={issScreenshotImage}
              alt="ISS perspective screenshot from Awedyssey"
              className="w-full h-52 object-cover"
            />
            <figcaption className="px-3 py-2 text-xs text-muted">
              ISS-inspired viewpoint designed to evoke awe and vastness.
            </figcaption>
          </figure>

          <figure className="rounded-lg overflow-hidden border border-default bg-soft">
            <img
              src={earthgazingImage}
              alt="SIRIUS earthgazing scene from the Awedyssey project"
              className="w-full h-52 object-cover"
            />
            <figcaption className="px-3 py-2 text-xs text-muted">
              Earthgazing visual used for connection and perspective-taking.
            </figcaption>
          </figure> 
        </div>
      </section>
    </ProjectPageLayout>
  );
}

