import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/projeto/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
