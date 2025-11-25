import '../../pages/Scrapper.css'
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import Navbar from './Navbar';

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function TextAnalysis() {
  const [text, setText] = useState("");
  const [wordFreq, setWordFreq] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setText(ev.target.result);
    reader.readAsText(file);
  };

  const analyzeText = () => {
   
    setWordFreq(null);
  };

  return (
    <>
      <Navbar />
      <section id="text-analysis" className="page-section container">
      <div className="panel-card controls-row">
        <input id="text-file-input" className="file-input" type="file" accept=".txt" onChange={handleFileChange} />
        <button id="analyze-btn" className="btn btn-accent" onClick={analyzeText}>Analyze</button>
      </div>

      <textarea id="text-area" className="text-area panel-card" value={text} onChange={e => setText(e.target.value)} rows={8} placeholder="Paste or load text here..." />

      <div id="text-chart-area" className="chart-area">
        {wordFreq ? <Bar data={wordFreq} /> : (
          <div className="chart-placeholder panel-card">
            Word frequency chart will appear here
          </div>
        )}
      </div>
    </section>
    </>
  );
}
