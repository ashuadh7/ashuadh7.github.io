import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { ProjectsHome } from "./pages/ProjectsHome";
import { About } from "./pages/About";
import { Publications } from "./pages/Publications";
import { PersonalOrbit } from "./pages/PersonalOrbit";
import { PersonalOrbitBooksDetail } from "./pages/PersonalOrbit/PersonalOrbitBooksDetail";
import { ExploringEndlessWorldsProjectPage } from "./pages/projects/ExploringEndlessWorldsProjectPage";
import { VrBeyondOrdinaryProjectPage } from "./pages/projects/VrBeyondOrdinaryProjectPage";
import { VrChronicPainProjectPage } from "./pages/projects/VrChronicPainProjectPage";
import { FeelTheBeatProjectPage } from "./pages/projects/FeelTheBeatProjectPage";
import { MasterYourEmotionsProjectPage } from "./pages/projects/MasterYourEmotionsProjectPage";
import { ProjectPlaygroundProjectPage } from "./pages/projects/ProjectPlaygroundProjectPage";
import { LegacyProjectRedirect } from "./pages/projects/LegacyProjectRedirect";

function PlaygroundBooksRedirect() {
  const { category } = useParams<{ category: string }>();
  return <Navigate to={`/personal-orbit/books/${category ?? "favourites"}`} replace />;
}

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
          <Route path="/personal-orbit" element={<PersonalOrbit />} />
          <Route
            path="/personal-orbit/books/:category"
            element={<PersonalOrbitBooksDetail />}
          />
          <Route path="/playground" element={<Navigate to="/personal-orbit" replace />} />
          <Route
            path="/playground/books/:category"
            element={<PlaygroundBooksRedirect />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
