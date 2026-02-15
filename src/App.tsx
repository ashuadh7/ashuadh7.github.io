import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { ProjectsHome } from "./pages/ProjectsHome";
import { About } from "./pages/About";
import { Publications } from "./pages/Publications";
import { Playground } from "./pages/Playground";
import { PlaygroundBooksDetail } from "./pages/PlayGround/PlaygroundBooksDetail";
import { ExploringEndlessWorldsProjectPage } from "./pages/projects/ExploringEndlessWorldsProjectPage";
import { VrBeyondOrdinaryProjectPage } from "./pages/projects/VrBeyondOrdinaryProjectPage";
import { VrChronicPainProjectPage } from "./pages/projects/VrChronicPainProjectPage";
import { FeelTheBeatProjectPage } from "./pages/projects/FeelTheBeatProjectPage";
import { MasterYourEmotionsProjectPage } from "./pages/projects/MasterYourEmotionsProjectPage";
import { ProjectPlaygroundProjectPage } from "./pages/projects/ProjectPlaygroundProjectPage";
import { LegacyProjectRedirect } from "./pages/projects/LegacyProjectRedirect";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-app">
        <Navigation />
        <Routes>
          <Route path="/" element={<ProjectsHome />} />
          <Route
            path="/projects/exploring-endless-worlds"
            element={<ExploringEndlessWorldsProjectPage />}
          />
          <Route
            path="/projects/vr-beyond-ordinary"
            element={<VrBeyondOrdinaryProjectPage />}
          />
          <Route
            path="/projects/vr-chronic-pain"
            element={<VrChronicPainProjectPage />}
          />
          <Route
            path="/projects/feel-the-beat"
            element={<FeelTheBeatProjectPage />}
          />
          <Route
            path="/projects/master-your-emotions"
            element={<MasterYourEmotionsProjectPage />}
          />
          <Route
            path="/projects/project-playground"
            element={<ProjectPlaygroundProjectPage />}
          />
          <Route path="/project/:projectId" element={<LegacyProjectRedirect />} />
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
