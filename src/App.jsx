import ScrollToHashElement from "./components/ScrollToHashElement";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Enables smooth scrolling to in-page anchors (#about, #projects, etc.) */}
        <ScrollToHashElement />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
