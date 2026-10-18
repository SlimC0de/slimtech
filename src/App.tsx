
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";
import BuyMeACoffee from "./components/BuyMeACoffee";
import Loader from "./components/Loader";
import Support from "./pages/Support";

function AppContent() {
  const location = useLocation();
  const isSupportPage = location.pathname === "/support";

  return (
    <>
      <Loader />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      {!isSupportPage && <BuyMeACoffee />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
