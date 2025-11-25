import '../../pages/Scrapper.css'
import React, { useState } from "react";
import Papa from "papaparse";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import Navbar from './Navbar';
Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function SurveyCorrelation() {
  const [columns, setColumns] = useState([]);
  const [dataRows, setDataRows] = useState([]);
  const [selectedCol, setSelectedCol] = useState("");
  const [barData, setBarData] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setColumns(results.meta.fields || []);
        setDataRows(results.data || []);
        setSelectedCol("");
        setBarData(null);
      }
    });
  };

  const handlePlotSurvey = () => {
    if (!selectedCol || dataRows.length === 0) return;
    const counts = {};
    dataRows.forEach(row => {
      const val = row[selectedCol];
      counts[val] = (counts[val] || 0) + 1;
    });
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    setBarData({
      labels: sorted.map(([v]) => v),
      datasets: [{
        label: `Value Counts for ${selectedCol}`,
        data: sorted.map(([, c]) => c),
        backgroundColor: "#76b7b2"
      }]
    });
  };

  const handlePlotCorr = () => {
    alert("Correlation heatmap feature is not implemented in frontend-only mode.");
  };

  return (
    <>
      <Navbar />
      <section id="survey-corr" className="page-section container">
      <div className="panel-card controls-row">
        <input id="survey-file-input" className="file-input" type="file" accept=".csv" onChange={handleFileChange} />
        <select id="survey-column" className="select-input" value={selectedCol} onChange={e => setSelectedCol(e.target.value)}>
          <option value="">Select Column</option>
          {columns.map(col => (<option key={col} value={col}>{col}</option>))}
        </select>
        <button id="plot-survey" className="btn btn-dark" onClick={handlePlotSurvey}>Plot Survey</button>
        <button id="plot-corr" className="btn btn-accent" onClick={handlePlotCorr}>Correlation Heatmap</button>
      </div>

      <div id="survey-chart-area" className="chart-area">
        {barData ? <Bar data={barData} /> : (
          <div className="chart-placeholder panel-card">
            Survey chart will appear here
          </div>
        )}
      </div>
    </section>
    </>
  );
}
