import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: awedysseyPosterImage,
    alt: "Awedyssey poster",
    caption: "Awedyssey research poster from the SIRIUS workstream.",
  },
  {
    src: issScreenshotImage,
    alt: "ISS perspective screenshot from Awedyssey",
    caption: "ISS-inspired viewpoint designed to evoke awe and vastness.",
  },
  {
    src: earthgazingImage,
    alt: "SIRIUS earthgazing scene from the Awedyssey project",
    caption: "Earthgazing visual used for connection and perspective-taking.",
  },
];

export function VrBeyondOrdinaryProjectPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? 0
            : (current - 1 + galleryItems.length) % galleryItems.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % galleryItems.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex]);

  if (!project) return null;

  const activeItem = activeIndex === null ? null : galleryItems[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null
        ? 0
        : (current - 1 + galleryItems.length) % galleryItems.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % galleryItems.length,
    );
  };

  return (
    <>
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
            The project asks a practical design question: how can VR help
            people feel connected to self, humanity, nature, and Earth when
            access to powerful restorative environments is limited?
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
            emerged between realism, vastness, comfort, and participant
            autonomy.
          </p>
          <p className="text-secondary leading-relaxed">
            These findings informed practical guidance for designing emotional
            VR experiences for diverse audiences while preserving psychological
            safety and reflective depth.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-primary">Selected Artifacts</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <button
                key={item.src}
                type="button"
                className="text-left rounded-lg overflow-hidden border border-default bg-soft transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open artifact image ${index + 1}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-52 object-cover"
                />
                <span className="block px-3 py-2 text-xs text-muted">
                  {item.caption}
                </span>
              </button>
            ))}
          </div>
        </section>
      </ProjectPageLayout>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90"
          role="dialog"
          aria-modal="true"
          aria-label="Artifact gallery viewer"
          onClick={() => setActiveIndex(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setActiveIndex(null);
              }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 inline-flex items-center justify-center rounded-full bg-black/60 text-white p-2 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Close gallery"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center rounded-full bg-black/60 text-white p-2 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div
              className="max-w-6xl w-full flex flex-col items-center gap-3"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="max-h-[75vh] max-w-full w-auto object-contain rounded-lg border border-white/20 bg-black"
              />
              <p className="text-sm text-white/90 text-center">
                {activeIndex + 1} / {galleryItems.length} - {activeItem.caption}
              </p>
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center rounded-full bg-black/60 text-white p-2 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
