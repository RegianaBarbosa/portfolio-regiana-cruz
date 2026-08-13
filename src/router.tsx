import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import AboutPage from "./pages/AboutPage";

export function Router() {
  return (
    <BrowserRouter basename="/portfolio-regiana-cruz">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobre" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
