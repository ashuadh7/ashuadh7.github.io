import { useEffect, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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

interface IrisGalleryItem {
  src: string;
  alt: string;
  caption: string;
}

const irisGalleryItems: IrisGalleryItem[] = [
  {
    src: irisConceptImage,
    alt: "Concept art exploring Iris character design for The Nether in VR",
    caption: "Iris concept exploration for VR staging.",
  },
  {
    src: irisHolographicConceptImage,
    alt: "Holographic concept art for Iris character modeling in The Nether",
    caption: "Iris holographic concept exploration.",
  },
];

export function ProjectPlaygroundProjectPage() {
  const [activeIrisIndex, setActiveIrisIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIrisIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIrisIndex(null);
      }
      if (event.key === "ArrowLeft") {
        setActiveIrisIndex((current) =>
          current === null
            ? 0
            : (current - 1 + irisGalleryItems.length) % irisGalleryItems.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIrisIndex((current) =>
          current === null ? 0 : (current + 1) % irisGalleryItems.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIrisIndex]);

  if (!project) return null;

  const activeIrisItem =
    activeIrisIndex === null ? null : irisGalleryItems[activeIrisIndex];
  const resourceLinksById = talksAndResources.reduce<Record<string, string>>(
    (links, resource) => {
      links[resource.id] = resource.url;
      return links;
    },
    {},
  );

  const renderInlineResourceLink = (
    label: string,
    resourceId: string,
  ): ReactNode => {
    const url = resourceLinksById[resourceId];
    if (!url) {
      return label;
    }

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover-text-accent-strong transition-colors"
      >
        {label}
      </a>
    );
  };

  const showPreviousIris = () => {
    setActiveIrisIndex((current) =>
      current === null
        ? 0
        : (current - 1 + irisGalleryItems.length) % irisGalleryItems.length,
    );
  };

  const showNextIris = () => {
    setActiveIrisIndex((current) =>
      current === null ? 0 : (current + 1) % irisGalleryItems.length,
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
      talks={talksAndResources}
      talksSectionTitle="Online Resources and Collaborators"
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
            {renderInlineResourceLink(
              "The Nether",
              "project-playground-resource-1",
            )}{" "}
            at the University of Waterloo. The production explores a split
            format where real-world scenes remain live on stage while
            virtual-world scenes are experienced in VR. Earlier productions
            represented virtual spaces mainly with props; this version aims for
            direct VR embodiment of those scenes.
          </p>
          <p className="text-secondary leading-relaxed">
            Directed by Zachary McKendrick, whose practice
            spans drama, XR, and HCI across the Cheriton School of Computer
            Science and the Department of Communication Arts. He completed a PhD
            in Computational Media Design (University of Calgary, 2024) focused
            on virtual rehearsal methods for VR and HCI. VR direction is led by{" "}
            {renderInlineResourceLink(
              "Owen Brierley",
              "project-playground-resource-2",
            )}
            .
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {irisGalleryItems.map((item, index) => (
              <button
                key={item.src}
                type="button"
                className="text-left rounded-lg overflow-hidden border border-default bg-soft transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                onClick={() => setActiveIrisIndex(index)}
                aria-label={`Open Iris concept image ${index + 1}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 object-cover object-top"
                />
                <span className="block px-3 py-2 text-xs text-muted">
                  {item.caption}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-primary">2) LLM Design-Intent Translation</h2>
          <p className="text-secondary leading-relaxed">
            I am collaborating with Professor{" "}
            {renderInlineResourceLink(
              "Emily Kuang",
              "project-playground-resource-3",
            )}{" "}
            (York University) and{" "}
            {renderInlineResourceLink(
              "Selena Zhang",
              "project-playground-resource-4",
            )}{" "}
            on a study of how well design intentions are preserved when
            interfaces are generated with LLM-based tools.
          </p>
          <p className="text-secondary leading-relaxed">
            The current workflow uses{" "}
            {renderInlineResourceLink(
              "Figma Make",
              "project-playground-resource-5",
            )}{" "}
            as the prototyping environment.
          </p>
          <figure className="rounded-lg overflow-hidden border border-default bg-soft">
            <img
              src={figmaMakeImage}
              alt="Figma Make interface used for LLM-assisted UI generation research"
              loading="lazy"
              decoding="async"
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
            I am working with Professor{" "}
            {renderInlineResourceLink(
              "Meiyappan (Mei) Nagappan",
              "project-playground-resource-6",
            )}{" "}
            on design directions for interfaces that keep developers cognitively
            engaged, instead of drifting into passive copy-paste patterns when
            using LLMs for code generation.
          </p>
          <p className="text-secondary leading-relaxed">
            The goal is to encourage active reasoning, verification, and
            deliberate decision-making during AI-assisted development.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-primary">
            4) VR Poster
          </h2>
          <p className="text-secondary leading-relaxed">
            I am working with Professor{" "}
            {renderInlineResourceLink(
              "Matt Brehmer",
              "project-playground-resource-8",
            )}{" "}
            and Alan Wu along with my PhD Supervisor Professor{" "}
            {renderInlineResourceLink("Jian Zhao", "project-playground-resource-7")}{" "}
            on a VR poster concept for academic conferences. The idea is to
            create an immersive, interactive poster experience that goes beyond
            static visuals to better communicate research contributions and
            engage viewers in novel ways.
          </p>
        </section>
      </ProjectPageLayout>

      {activeIrisItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90"
          role="dialog"
          aria-modal="true"
          aria-label="Iris concept gallery viewer"
          onClick={() => setActiveIrisIndex(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setActiveIrisIndex(null);
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
                showPreviousIris();
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
                src={activeIrisItem.src}
                alt={activeIrisItem.alt}
                decoding="async"
                className="max-h-[75vh] max-w-full w-auto object-contain rounded-lg border border-white/20 bg-black"
              />
              <p className="text-sm text-white/90 text-center">
                {activeIrisIndex + 1} / {irisGalleryItems.length} -{" "}
                {activeIrisItem.caption}
              </p>
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextIris();
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
