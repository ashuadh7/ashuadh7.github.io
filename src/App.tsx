import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { ProjectsHome } from "./pages/ProjectsHome";
import { ProjectDetail } from "./pages/ProjectDetail";
import { About } from "./pages/About";
import { Publications } from "./pages/Publications";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<ProjectsHome />} />
          <Route
            path="/project/:projectId"
            element={<ProjectDetail />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/publications"
            element={<Publications />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}