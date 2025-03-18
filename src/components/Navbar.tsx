import { NavLink } from "react-router-dom";
import { Briefcase, User, GraduationCap } from "lucide-react";

const Navbar = () => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Ashu Adhikari</h1>
                    <p className="text-gray-600">HCI Researcher & Software Developer</p>
                </div>

                <nav className="flex space-x-4">
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 rounded-lg transition-colors ${isActive ? "bg-indigo-600 text-white" : "text-gray-600 hover:bg-gray-100"
                            }`
                        }
                    >
                        <Briefcase size={18} className="mr-2" /> Projects
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 rounded-lg transition-colors ${isActive ? "bg-indigo-600 text-white" : "text-gray-600 hover:bg-gray-100"
                            }`
                        }
                    >
                        <User size={18} className="mr-2" /> About
                    </NavLink>

                    <NavLink
                        to="/publications"
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 rounded-lg transition-colors ${isActive ? "bg-indigo-600 text-white" : "text-gray-600 hover:bg-gray-100"
                            }`
                        }
                    >
                        <GraduationCap size={18} className="mr-2" /> Publications
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
