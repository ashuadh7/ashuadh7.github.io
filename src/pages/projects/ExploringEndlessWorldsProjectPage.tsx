import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
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

interface VideoGalleryItem {
  title: string;
  embedUrl: string;
  caption: string;
}

const videoItems: VideoGalleryItem[] = [
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
];

function getYouTubeThumbnail(embedUrl: string): string {
  const match = embedUrl.match(/\/embed\/([^?&/]+)/);
  const videoId = match?.[1];
  if (!videoId) {
    return "/projects/exploring-endless-worlds/thumbnail.jpg";
  }
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function ExploringEndlessWorldsProjectPage() {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeVideoIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideoIndex(null);
      }
      if (event.key === "ArrowLeft") {
        setActiveVideoIndex((current) =>
          current === null ? 0 : (current - 1 + videoItems.length) % videoItems.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveVideoIndex((current) =>
          current === null ? 0 : (current + 1) % videoItems.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeVideoIndex]);

  if (!project) return null;

  const activeVideo = activeVideoIndex === null ? null : videoItems[activeVideoIndex];

  const showPreviousVideo = () => {
    setActiveVideoIndex((current) =>
      current === null ? 0 : (current - 1 + videoItems.length) % videoItems.length,
    );
  };

  const showNextVideo = () => {
    setActiveVideoIndex((current) =>
      current === null ? 0 : (current + 1) % videoItems.length,
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
          <h2 className="text-primary">Video Gallery</h2>
          <p className="text-muted text-sm">
            Click a video to open the full-screen viewer. Use left and right
            arrows to move between videos.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {videoItems.map((video, index) => (
              <button
                key={video.embedUrl}
                type="button"
                onClick={() => setActiveVideoIndex(index)}
                className="text-left rounded-lg overflow-hidden border border-default bg-soft transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                aria-label={`Open video ${index + 1}: ${video.title}`}
              >
                <div className="relative">
                  <img
                    src={getYouTubeThumbnail(video.embedUrl)}
                    alt={`Preview thumbnail for ${video.title}`}
                    className="w-full h-44 object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                    <span className="inline-flex items-center justify-center rounded-full bg-black/70 text-white p-3">
                      <Play className="w-6 h-6 fill-current" />
                    </span>
                  </span>
                </div>
                <span className="block px-3 pt-3 text-sm font-semibold text-primary">
                  {video.title}
                </span>
                <span className="block px-3 pb-3 text-xs text-muted">
                  {video.caption}
                </span>
              </button>
            ))}
          </div>
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

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90"
          role="dialog"
          aria-modal="true"
          aria-label="Video gallery viewer"
          onClick={() => setActiveVideoIndex(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setActiveVideoIndex(null);
              }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 inline-flex items-center justify-center rounded-full bg-black/60 text-white p-2 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Close video gallery"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousVideo();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center rounded-full bg-black/60 text-white p-2 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div
              className="max-w-6xl w-full flex flex-col items-center gap-3"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="w-full aspect-video rounded-lg overflow-hidden border border-white/20 bg-black">
                <iframe
                  src={activeVideo.embedUrl}
                  title={activeVideo.title}
                  className="w-full h-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="text-base text-white/95 text-center font-semibold">
                {activeVideo.title}
              </p>
              <p className="text-sm text-white/90 text-center">
                {activeVideoIndex + 1} / {videoItems.length} - {activeVideo.caption}
              </p>
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextVideo();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center rounded-full bg-black/60 text-white p-2 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Next video"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
