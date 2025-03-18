import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";
import { useState } from "react";

const BASE_URL = import.meta.env.BASE_URL; // Automatically detects base path

const projects = [
    { id: "exploring-endless-worlds", title: "Exploring Endless Worlds in VR", image: `${BASE_URL}projects/exploring-endless-worlds/thumbnail.jpg` },
    { id: "vr-beyond-the-ordinary", title: "VR Beyond the Ordinary", image: `${BASE_URL}projects/vr-beyond-the-ordinary/thumbnail.jpg` },
    { id: "vr-vs-chronic-pain", title: "VR vs Chronic Pain", image: `${BASE_URL}projects/vr-vs-chronic-pain/thumbnail.jpg` },
    { id: "feel-the-beat", title: "Feel the Beat in VR", image: `${BASE_URL}projects/feel-the-beat/thumbnail.jpg` },
    { id: "master-your-emotions", title: "Master Your Emotions in VR", image: `${BASE_URL}projects/master-your-emotions/thumbnail.jpg` },
    { id: "project-playground", title: "Project Playground", image: `${BASE_URL}projects/project-playground/thumbnail.jpg` },
];

const ProjectsPage = () => {
    const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Projects</h1>
            <p className="text-gray-600 mb-4">Explore the projects I have worked on.</p>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        to={`/projects/${project.id}`}
                        className="group flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                    >
                        {/* Project Thumbnail with Error Handling */}
                        <img
                            src={loadedImages[project.id] ? project.image : `${BASE_URL}projects/default-thumbnail.jpg`}
                            alt={project.title}
                            className="w-full h-40 object-cover group-hover:opacity-90 transition"
                            onError={() => setLoadedImages((prev) => ({ ...prev, [project.id]: false }))}
                            onLoad={() => setLoadedImages((prev) => ({ ...prev, [project.id]: true }))}
                        />

                        {/* Project Info */}
                        <div className="p-4 flex items-center">
                            <Briefcase size={24} className="mr-4 text-indigo-600" />
                            <span className="text-lg font-medium text-gray-900">{project.title}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
