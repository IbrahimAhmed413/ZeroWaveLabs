import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resources from "./Pages/Resources";
import HomePage from "./Pages/HomePage";
import BlogPage from "./Pages/BlogPage";
import AboutUs from "./Pages/AboutUs";
import ProjectsPage from "./Pages/ProjectsPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
