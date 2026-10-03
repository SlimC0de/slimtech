import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/projects/:slug"
          element={<ProjectDetail />}
        />
      </Routes>

      <BackToTop />
    </BrowserRouter>
  );
}