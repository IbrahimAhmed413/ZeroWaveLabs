import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Models from './pages/Models';
import Services from './components/Services';
import Contact from './components/Contact';
import TemplatesPage from './pages/TempelatesPage';
import Tools from './pages/Tools';
import Scrapper from './pages/Scrapper';
import TextAnalysis from './components/scraper/TextAnalysis';
import './App.css';
import CsvChartTab from './components/scraper/CsvChartTab';
import ManualPieChart from './components/scraper/ManualPieChart';
import SurveyCorrelation from './components/scraper/SurveyCorreletion';
import Crawler from './pages/Crawler';
function App() {
  const location = useLocation();

  // Paths where Navbar + Footer should NOT appear
  const noLayoutPaths = ['/Scraper','/csv','/text','/pie', '/survey','/Data-Visualization'];

  const hideLayout = noLayoutPaths.includes(location.pathname);

  return (
    <>
      {/* Conditionally render Navbar */}
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/models" element={<Models />} />
        <Route path="/tempelates" element={<TemplatesPage />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/Data-Visualization" element={<Scrapper />} />
        <Route path="/csv" element={<CsvChartTab/>} />
        <Route path="/text" element={<TextAnalysis/>} />
        <Route path="/pie" element={<ManualPieChart/>} />
        <Route path="/survey" element={<SurveyCorrelation/>} />
        <Route path="/Scraper" element={<Crawler/>} />

      </Routes>

      {/* Conditionally render Footer */}
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
