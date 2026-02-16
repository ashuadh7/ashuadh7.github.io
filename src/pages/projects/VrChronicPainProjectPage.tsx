import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ProjectPageLayout } from "@/components/projects/ProjectPageLayout";
import { getProjectPublications } from "@/data/publications";
import { getProjectTalksAndResources } from "@/data/projectResources";
import { getProjectById } from "@/data/projects";

const projectId = "vr-chronic-pain";
const project = getProjectById(projectId);
const relatedPublications = getProjectPublications(projectId);
const talksAndResources = getProjectTalksAndResources(projectId);
const fogChangeImage = "/projects/vr-chronic-pain/fog_change.gif";
const moodmetricRingImage = "/projects/vr-chronic-pain/moodmetric_ring.jpg";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: fogChangeImage,
    alt: "Fog level changes in response to biofeedback in VR",
    caption: "Fog density changes used as subtle biofeedback.",
  },
  {
    src: moodmetricRingImage,
    alt: "Moodmetric ring wearable for stress-related signal tracking",
    caption: "Moodmetric ring integration for lower-cost setup.",
  },
];

export function VrChronicPainProjectPage() {
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
        heroAlt="Virtual Meditative Walk forest environment for mindfulness-based pain support"
        talks={talksAndResources}
        publications={relatedPublications}
      >
        <section className="space-y-4">
          <h2 className="text-primary">Project Context</h2>
          <p className="text-secondary leading-relaxed">
            I collaborated with the Pain Studies Lab at Simon Fraser University,
            directed by Dr. Diane Gromala, as a research assistant on VR for
            chronic pain support.
          </p>
          <p className="text-secondary leading-relaxed">
            The team had developed a mindfulness meditation experience called the
            Virtual Meditative Walk (VMW): participants move slowly along a trail
            in a peaceful forest scene while listening to guided
            mindfulness content based on Dr. Jon Kabat-Zinn's pain-relief
            meditation material.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-primary">Research Foundation</h2>
          <p className="text-secondary leading-relaxed">
            Earlier work from the lab showed that chronic pain treatment often
            benefits from non-pharmacological support, and that VR can provide
            clinically meaningful value beyond distraction-only approaches.
          </p>
          <p className="text-secondary leading-relaxed">
            In the VMW system, biofeedback sensors, immersive visuals, and
            stereoscopic sound were used to support mindfulness-based stress
            reduction (MBSR). In proof-of-concept clinical testing, the VR
            condition reduced perceived pain more effectively than a non-VR
            control condition.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-primary">My Contributions</h2>
          <ul className="space-y-2">
            {[
              "Updated the system to newer Unity and VR device versions used by the lab at that time.",
              "Created multiple variations of the same meditative journey to reduce repetition across sessions.",
              "Maintained the core mindfulness flow while making the build and deployment pipeline easier to run.",
              "Implemented data integration that reduced setup burden for participant sessions.",
            ].map((item) => (
              <li key={item} className="text-secondary flex gap-3">
                <span className="text-accent flex-shrink-0">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-primary">Biofeedback Upgrade</h2>
          <p className="text-secondary leading-relaxed">
            The original setup used an expensive galvanic skin response (GSR)
            system to estimate stress and pain. The VR environment reflected this
            signal through subtle fog-density changes so participants could notice
            shifts without breaking immersion.
          </p>
          <p className="text-secondary leading-relaxed">
            I helped transition this pipeline to a lower-cost Moodmetric ring
            (now Nuanic). I built an automated connection and data retrieval flow
            over Bluetooth so participants could start sessions without lengthy
            technical preparation.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-primary">Artifacts</h2>
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
