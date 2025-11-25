import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import '../../pages/Scrapper.css'
import Navbar from "./Navbar";

Chart.register(ArcElement, Tooltip, Legend);

export default function ManualPieChart() {
  const [labels, setLabels] = useState("");
  const [values, setValues] = useState("");
  const [pieData, setPieData] = useState(null);

  const handleGenerate = () => {
    const labelArr = labels.split(",").map(l => l.trim()).filter(Boolean);
    const valueArr = values.split(",").map(v => Number(v.trim())).filter(v => !isNaN(v));
    if (labelArr.length !== valueArr.length || labelArr.length === 0) {
      setPieData(null);
      return;
    }
    setPieData({
      labels: labelArr,
      datasets: [{
        data: valueArr,
        backgroundColor: [
          "#4e79a7", "#f28e2b", "#e15759", "#76b7b2", "#59a14f",
          "#edc949", "#af7aa1", "#ff9da7", "#9c755f", "#bab0ab"
        ]
      }]
    });
  };

  return (
   <>
      <Navbar />
     <section id="manual-pie" className="page-section container">
      <div className="panel-card controls-row">
        <input id="pie-labels" className="text-input" type="text" value={labels} onChange={e => setLabels(e.target.value)} placeholder="Labels (comma separated)" />
        <input id="pie-values" className="text-input" type="text" value={values} onChange={e => setValues(e.target.value)} placeholder="Values (comma separated)" />
        <button id="generate-pie" className="btn btn-accent" onClick={handleGenerate}>Generate Pie</button>
      </div>

      <div id="pie-area" className="chart-area">
        {pieData ? <Pie data={pieData} /> : (
          <div className="chart-placeholder panel-card">
            Pie chart will appear here
          </div>
        )}
      </div>
    </section>
   </>
  );
}
