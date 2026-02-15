import { ProjectPageLayout } from "@/components/projects/ProjectPageLayout";
import { getProjectById } from "@/data/projects";

const project = getProjectById("exploring-endless-worlds-vr");
const hyperJumpTopViewGif =
  "/projects/exploring-endless-worlds/HyperJump_TopView.gif";

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
      talks={[
        {
          title:
            "HyperJumping in Virtual Vancouver: Combating motion sickness by merging teleporting and continuous VR locomotion in an embodied hands-free VR flying paradigm.",
          details:
            "Riecke, B. E., Clement, D., Adhikari, A., Quesnel, D., Zielasko, D., & von der Heyde, M.",
          url: "https://doi.org/10.1145/3532834.3536211",
          linkText: "View Abstract",
        },
        {
          title:
            "Embodied VR flying improves spatial orientation while reducing cybersickness.",
          details:
            "Adhikari, A., Riecke, B.E., Hashemian, A.M., Nguyen-Vo, T., Kruij, E., & von der Heyde, M. Talk presented at ICSC 2021, Rome, Italy.",
          url: "https://www.youtube.com/watch?v=FbmE4SEISWU",
          linkText: "Watch Presentation",
        },
        {
          title:
            "HyperJump: Merging Teleporting and Continuous VR Locomotion into One Paradigm.",
          details:
            "Riecke, B.E., Adhikari, A., Zielasko, D., Bretin, A., von der Heyde, M., and Kruij, E. Talk presented at ICSC 2021, Rome, Italy.",
          url: "https://www.youtube.com/watch?v=hRqkqup40bI",
          linkText: "Watch Presentation",
        },
        {
          title:
            "Integrating Continuous and Teleporting VR Locomotion into a Seamless 'HyperJump' Paradigm.",
          details:
            "Adhikari, A., Zielasko, D., Bretin, A., von der Heyde, M., Kruij, E., & Riecke, B.E. IEEE VR 2021 Workshop, 370-372.",
          url: "https://doi.org/10.1109/VRW52623.2021.00074",
          linkText: "View Abstract",
        },
        {
          title:
            "Simultaneous Locomotion and Interaction in VR: Walking > Leaning > Controller.",
          details:
            "Riecke, B.E., Hashemian, A.M., Adhikari, A., Aguilar, I., Kruijff, E., & von der Heyde, M. ICSC 2021, Rome, Italy.",
          url: "https://www.youtube.com/watch?v=jzoaBAd6gPY",
          linkText: "Watch Presentation",
        },
      ]}
      publications={[
        {
          title:
            "Leaning-based interfaces improve simultaneous locomotion and object interaction in VR compared to the handheld controller.",
          authors:
            "Hashemian, A.M., Adhikari, A., Aguilar, I.A., Kruij, E., von der Heyde, M., & Riecke, B.E.",
          venue:
            "IEEE Transactions on Visualization and Computer Graphics, 30(8), 4665-4682 (2024).",
          link: "https://doi.org/10.1109/TVCG.2023.3275111",
        },
        {
          title:
            "Integrating continuous and teleporting VR locomotion into a seamless 'hyperjump' paradigm.",
          authors:
            "Adhikari, A., Zielasko, D., Aguilar, I., Bretin, A., Kruij, E., von der Heyde, M., & Riecke, B.E.",
          venue:
            "IEEE Transactions on Visualization and Computer Graphics, 29(12), 5265-5281 (2022).",
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
        {
          title:
            "Leaning-based interfaces improve ground-based VR locomotion in reach-the-target, follow-the-path, and racing tasks.",
          authors:
            "Hashemian, A.M., Adhikari, A., Kruij, E., von der Heyde, M., & Riecke, B.E.",
          venue:
            "IEEE Transactions on Visualization and Computer Graphics, 29(3), 1748-1768 (2021).",
          link: "https://doi.org/10.1109/TVCG.2021.3131422",
        },
        {
          title:
            "HeadJoystick: Improving flying in VR using a novel leaning-based interface.",
          authors:
            "Hashemian, A.M., Lotfaliei, M., Adhikari, A., Kruij, E., & Riecke, B.E.",
          venue:
            "IEEE Transactions on Visualization and Computer Graphics, 28(4), 1792-1809 (2020).",
          link: "https://doi.org/10.1109/TVCG.2020.3025084",
        },
      ]}
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
