import { Mail, Linkedin } from "lucide-react";
import { Footer } from "@/components/Footer";

export function About() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="grid md:grid-cols-[280px_1fr] gap-12">
            {/* Left Side - Image Only */}
            <div className="flex justify-center md:justify-start">
              <img
                src="/about.jpeg"
                alt="Ashu Adhikari"
                className="w-64 h-64 object-cover rounded-lg"
              />
            </div>

            {/* Right Side - All Text Content */}
            <div className="space-y-10">
              {/* Introduction */}
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Hi, I'm Ashu, a developer and researcher
                  specializing in virtual reality (VR). My work
                  focuses on designing intuitive, embodied
                  interactions that enhance user experience and
                  immersion in digital environments.
                </p>
              </div>

              {/* What I Do Section */}
              <section>
                <h2 className="mb-4 text-gray-900">
                  What I Do
                </h2>
                <ul className="space-y-3">
                  <li className="text-gray-700">
                    <span className="text-gray-900">
                      VR Interaction & UI/UX Design
                    </span>{" "}
                    – Exploring and refining how people interact
                    with virtual environments to improve
                    usability and engagement.
                  </li>
                  <li className="text-gray-700">
                    <span className="text-gray-900">
                      Immersive Experience Development
                    </span>{" "}
                    – Independently building interactive
                    applications in Unity and Unreal Engine,
                    from coding to basic asset creation.
                  </li>
                  <li className="text-gray-700">
                    <span className="text-gray-900">
                      Research & Prototyping
                    </span>{" "}
                    – Experienced in every stage of the research
                    process, including literature review, study
                    design, software development, user studies,
                    data analysis, and writing findings. I
                    collaborate with teams and apply both
                    technical and research expertise to every
                    project.
                  </li>
                  <li className="text-gray-700">
                    <span className="text-gray-900">
                      Data Visualization & Analysis
                    </span>{" "}
                    – Transforming complex data into clear,
                    intuitive visuals that make insights
                    accessible to collaborators outside the
                    field.
                  </li>
                </ul>
              </section>

              {/* Background & Experience Section */}
              <section>
                <h2 className="mb-4 text-gray-900">
                  Background & Experience
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    I hold a Master's degree in Interactive Arts
                    and Technology from Simon Fraser University
                    and a Bachelor's degree in Electronics and
                    Communication Engineering from Tribhuvan
                    University. My master's thesis focused on VR
                    locomotion techniques to address spatial
                    disorientation and motion sickness.
                  </p>
                  <p>
                    I have collaborated with researchers,
                    developers, and designers on projects
                    ranging from emotion regulation in VR to
                    biofeedback-driven meditation experiences. I
                    have also taught advanced game design and
                    UI/UX principles as a lecturer in computer
                    science and contributed to industry projects
                    that integrate immersive technologies into
                    interactive applications.
                  </p>
                </div>
              </section>

              {/* What I'm Working On Section */}
              <section>
                <h2 className="mb-4 text-gray-900">
                  What I'm Working On
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  I am currently starting my PhD, focusing on
                  embedded interactions for VR. My research aims
                  to push the boundaries of interaction design
                  in virtual environments, making them more
                  natural, accessible, and engaging.
                </p>
              </section>

              {/* Let's Connect Section */}
              <section className="pt-6 border-t border-gray-200">
                <h2 className="mb-4 text-gray-900">
                  Let's Connect!
                </h2>
                <p className="text-gray-700 mb-6">
                  I am always open to collaborations,
                  discussions on VR and HCI, and new
                  opportunities. Feel free to reach out!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:ashuadh7@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    ashuadh7@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ashua"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
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