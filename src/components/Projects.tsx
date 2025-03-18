import { GraduationCap } from 'lucide-react';

const Projects = ({ openProject }: { openProject: () => void }) => {
    return (
        <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                    src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80"
                    alt="VR Project"
                    className="w-full h-48 object-cover"
                />
                <div className="p-6">
                    <div className="flex items-center mb-2">
                        <GraduationCap className="text-indigo-600 mr-2" />
                        <h3 className="text-xl font-semibold">Exploring Endless Worlds in VR</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Dive into the fun intuitive, and nausea-free ways to move around in virtual reality!
                    </p>
                    <button onClick={openProject} className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center">
                        View Project Details →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
