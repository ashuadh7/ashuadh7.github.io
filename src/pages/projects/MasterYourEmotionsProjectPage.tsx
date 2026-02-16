import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ProjectPageLayout } from "@/components/projects/ProjectPageLayout";
import { getProjectPublications } from "@/data/publications";
import { getProjectById } from "@/data/projects";

const projectId = "master-emotions-vr";
const project = getProjectById(projectId);
const relatedPublications = getProjectPublications(projectId);
const imageBase = "/projects/master-your-emotions";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

const coDesignGalleryItems: GalleryItem[] = [
  {
    src: `${imageBase}/KP2023_D2A1_BAMA_02.jpg`,
    alt: "Students lying on the floor during a grounding mindfulness exercise",
    caption:
      "Students practicing a grounding mindfulness exercise focused on body awareness.",
  },
  {
    src: `${imageBase}/KP2023_D5G2A3_VR_01.jpeg`,
    alt: "Students exploring VR interactions to understand affordances and capabilities",
    caption:
      "Students exploring VR to understand interaction affordances and capabilities.",
  },
  {
    src: `${imageBase}/KP2023_improv.jpeg`,
    alt: "Students dramatizing emotional responses and discussing how VR can help",
    caption:
      "Students dramatizing emotional responses and discussing how VR can support regulation.",
  },
];

const vrChatGalleryItems: GalleryItem[] = [
  {
    src: `${imageBase}/dogpark3.png`,
    alt: "Dog park world in VRChat where users can interact with a virtual dog",
    caption:
      "Dog park world where users can pet a virtual dog and play fetch for comfort and companionship.",
  },
  {
    src: `${imageBase}/dreamwaves.png`,
    alt: "Dreamlike floating environment in VRChat",
    caption: "Surreal floating experience in VR that supports decompression and calm.",
  },
  {
    src: `${imageBase}/kujamarket.png`,
    alt: "Kuja market social world in VRChat",
    caption:
      "Digital marketplace space for events, digital art, avatars, and live online performances.",
  },
  {
    src: `${imageBase}/mourning.png`,
    alt: "Somber environment in VRChat designed for sadness-congruent experiences",
    caption:
      "Somber world for users who seek an environment that matches sadness and supports emotional alignment.",
  },
  {
    src: `${imageBase}/murder4.png`,
    alt: "Game world in VRChat used for playful distraction",
    caption:
      "Play-based world used for distraction, fun, and social engagement during difficult moments.",
  },
  {
    src: `${imageBase}/recursive.png`,
    alt: "Recursive world in VRChat with multiple scales of self-view",
    caption:
      "Recursive self-scale world that can prompt perspective shifts and cognitive reappraisal.",
  },
  {
    src: `${imageBase}/reflectinglife.png`,
    alt: "Peaceful reflective environment in VRChat",
    caption: "Serene environment used for relaxation and emotional reset.",
  },
  {
    src: `${imageBase}/solarcabins.png`,
    alt: "Customizable private room environment in VRChat",
    caption:
      "Private cabin-style space where users can retreat and create personal emotional safety.",
  },
  {
    src: `${imageBase}/treehouse1.png`,
    alt: "Treehouse world in VRChat with customizable ambience",
    caption:
      "World with adjustable lights, sound, and animation to tune ambience to emotional needs.",
  },
  {
    src: `${imageBase}/vrdancing.png`,
    alt: "VR dancing scene used for movement-based regulation",
    caption:
      "Dance-based activity for relaxation, exercise, and movement-supported emotion regulation.",
  },
  {
    src: `${imageBase}/prismicavatar2.png`,
    alt: "Avatar selection scene in VRChat for emotional expression",
    caption:
      "Avatar choice as emotional expression: users pick identities that reflect or shift current mood.",
  },
];

const galleryItems: GalleryItem[] = [...coDesignGalleryItems, ...vrChatGalleryItems];
const coDesignGalleryCount = coDesignGalleryItems.length;

export function MasterYourEmotionsProjectPage() {
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
            adolescents experience emotion regulation challenges and what kinds
            of VR supports they consider useful.
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

        <section className="space-y-6">
          <h2 className="text-primary">Gallery</h2>

          <div className="space-y-3">
            <h3 className="text-primary">Co-design Workshop</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {coDesignGalleryItems.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  className="text-left rounded-lg overflow-hidden border border-default bg-soft transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Open co-design image ${index + 1}`}
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
          </div>

          <div className="space-y-3">
            <h3 className="text-primary">VRChat Go-along</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {vrChatGalleryItems.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  className="text-left rounded-lg overflow-hidden border border-default bg-soft transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  onClick={() => setActiveIndex(coDesignGalleryCount + index)}
                  aria-label={`Open VRChat image ${index + 1}`}
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
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-primary">Current Status</h2>
          <p className="text-secondary leading-relaxed">
            The co-design work has been published at CHI 2024. The VRChat
            go-along interview paper is currently under submission to DIS.
          </p>
        </section>
      </ProjectPageLayout>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90"
          role="dialog"
          aria-modal="true"
          aria-label="Master emotions gallery viewer"
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

