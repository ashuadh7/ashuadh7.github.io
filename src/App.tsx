import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import PublicationsPage from "./pages/PublicationsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExploringEndlessWorldsPage from "./pages/projects/ExploringEndlessWorldsPage";
import FeelTheBeatPage from "./pages/projects/FeelTheBeatPage";
import MasterYourEmotionsPage from "./pages/projects/MasterYourEmotionsPage";
import ProjectPlaygroundPage from "./pages/projects/ProjectPlaygroundPage";
import VRBeyondTheOrdinaryPage from "./pages/projects/VRBeyondTheOrdinaryPage";
import VRVsChronicPainPage from "./pages/projects/VRVsChronicPainPage";

const BASE_URL = import.meta.env.BASE_URL; // Ensures correct base path

function App() {
    return (
        <Router basename={BASE_URL}>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Routes>
                    {/* Redirect only `/info/` to `/info/projects/` */}
                    <Route path="/" element={<Navigate replace to="projects" />} />

                    {/* Main Pages */}
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="publications" element={<PublicationsPage />} />

                    {/* Individual Project Pages */}
                    <Route path="projects/exploring-endless-worlds" element={<ExploringEndlessWorldsPage />} />
                    <Route path="projects/feel-the-beat" element={<FeelTheBeatPage />} />
                    <Route path="projects/master-your-emotions" element={<MasterYourEmotionsPage />} />
                    <Route path="projects/project-playground" element={<ProjectPlaygroundPage />} />
                    <Route path="projects/vr-beyond-the-ordinary" element={<VRBeyondTheOrdinaryPage />} />
                    <Route path="projects/vr-vs-chronic-pain" element={<VRVsChronicPainPage />} />

                    {/* Catch-all route to prevent blank pages */}
                    <Route path="*" element={<Navigate replace to="projects" />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
