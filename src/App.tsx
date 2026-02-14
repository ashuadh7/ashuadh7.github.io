import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { ProjectsHome } from "./pages/ProjectsHome";
import { ProjectDetail } from "./pages/ProjectDetail";
import { About } from "./pages/About";
import { Publications } from "./pages/Publications";
import { Playground } from "./pages/Playground";
import { PlaygroundBooksDetail } from "./pages/PlayGround/PlaygroundBooksDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-app">
        <Navigation />
        <Routes>
          <Route path="/" element={<ProjectsHome />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/playground" element={<Playground />} />
          <Route
            path="/playground/books/:category"
            element={<PlaygroundBooksDetail />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
