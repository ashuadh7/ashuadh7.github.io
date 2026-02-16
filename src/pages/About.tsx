import { Mail, Linkedin } from "lucide-react";
import { Footer } from "@/components/Footer";

export function About() {
  return (
    <main className="bg-subtle min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="bg-surface rounded-lg shadow-sm p-5 sm:p-8 md:p-12">
          <div className="grid md:grid-cols-[280px_1fr] gap-8 sm:gap-12">
            <div className="flex justify-center md:justify-start">
              <img
                src="/about.jpeg"
                alt="Ashu Adhikari"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-lg"
              />
            </div>

            <div className="space-y-7">
              <div>
                <h1 className="mb-3 text-2xl sm:text-3xl font-semibold tracking-tight text-primary">
                  About Me
                </h1>
                <p className="text-secondary leading-relaxed">
                  Hi, I&apos;m Ashu, an HCI researcher and interaction designer
                  focused on communication through intuitive interaction. I work
                  across XR and interactive systems, with a strong interest in
                  embodied interaction and information visualization to help
                  people express intent more clearly and use technology more
                  naturally. I am currently a PhD student at the University of
                  Waterloo in the{" "}
                  <a
                    href="https://www.jeffjianzhao.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover-text-accent-strong transition-colors"
                  >
                    WVisdom Lab
                  </a>{" "}
                  under the supervision of Dr. Jian Zhao.
                </p>
              </div>

              <section>
                <h2 className="mb-3 text-xl sm:text-2xl font-semibold tracking-tight text-primary">
                  What I Do
                </h2>
                <ul className="space-y-3">
                  <li className="text-secondary">
                    <span className="text-primary font-semibold">
                      XR Interaction & UI/UX Design
                    </span>{" "}
                    - Designing XR interactions in Unity and Unreal. Making UI and UX decisions that prioritize user needs and intuitive use.
                  </li>
                  <li className="text-secondary">
                    <span className="text-primary font-semibold">
                      Research & Prototyping
                    </span>{" "}
                    - Building and evaluating interaction concepts through
                    iterative prototypes, user studies, and collaborative
                    research.
                  </li>
                  <li className="text-secondary">
                    <span className="text-primary font-semibold">
                      Information Visualization
                    </span>{" "}
                    - Turning complex information into clear visual forms so
                    ideas are easier to read, share, and act on.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl sm:text-2xl font-semibold tracking-tight text-primary">
                  Background & Experience
                </h2>
                <div className="space-y-4 text-secondary">
                  <p>
                    I hold a Master&apos;s degree in Interactive Arts and
                    Technology from Simon Fraser University and a
                    Bachelor&apos;s degree in Electronics and Communication
                    Engineering from Tribhuvan University. I&apos;ve worked
                    across XR interaction design, prototyping, and HCI research
                    in both academic and applied settings.
                  </p>
                </div>
              </section>

              <section className="pt-6">
                <h2 className="mb-3 text-xl sm:text-2xl font-semibold tracking-tight text-primary">
                  Let&apos;s Connect!
                </h2>
                <p className="text-secondary mb-6">
                  I am always open to collaborations, discussions on XR,
                  interaction design, and HCI, and new opportunities. Feel free
                  to reach out!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:ashuadh7@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover-text-accent-strong transition-colors break-all"
                  >
                    <Mail className="w-5 h-5" />
                    ashuadh7@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ashua"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover-text-accent-strong transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
