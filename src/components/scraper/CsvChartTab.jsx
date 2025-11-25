import React, { useState } from "react";
import Papa from "papaparse";
import { Line, Bar, Scatter, Pie } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend } from "chart.js";
import Navbar from "./Navbar";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

export default function CsvChartTab() {
  const [csvFile, setCsvFile] = useState(null);
  const [columns, setColumns] = useState([]);
  const [dataRows, setDataRows] = useState([]);
  const [xCol, setXCol] = useState("");
  const [yCol, setYCol] = useState("");
  const [chartType, setChartType] = useState("line");
  const [liveRefresh, setLiveRefresh] = useState(false);
  const [chartData, setChartData] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCsvFile(file);
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setColumns(results.meta.fields || []);
        setDataRows(results.data || []);
        setXCol("");
        setYCol("");
        setChartData(null);
      }
    });
  };

  const handlePlot = () => {
    if (!xCol || !yCol || dataRows.length === 0) return;

    const xData = dataRows.map(row => row[xCol]);
    const yData = dataRows.map(row => Number(row[yCol]));

    if (chartType === "pie") {
      setChartData({
        labels: xData,
        datasets: [{
          data: yData,
          backgroundColor: [
            "#4e79a7", "#f28e2b", "#e15759", "#76b7b2", "#59a14f",
            "#edc949", "#af7aa1", "#ff9da7", "#9c755f", "#bab0ab"
          ]
        }]
      });
    } else {
      setChartData({
        labels: xData,
        datasets: [{
          label: `${yCol} vs ${xCol}`,
          data: yData,
          backgroundColor: "#4e79a7",
          borderColor: "#1e2341",
          fill: false,
        }]
      });
    }
  };

  React.useEffect(() => {
    let interval;
    if (liveRefresh && csvFile) {
      interval = setInterval(() => {
        Papa.parse(csvFile, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setColumns(results.meta.fields || []);
            setDataRows(results.data || []);
            if (xCol && yCol) handlePlot();
          }
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [liveRefresh, csvFile, xCol, yCol, chartType]);

  let chartElem = null;
  if (chartData) {
    if (chartType === "line") chartElem = <Line data={chartData} />;
    else if (chartType === "bar") chartElem = <Bar data={chartData} />;
    else if (chartType === "scatter") {
      chartElem = <Scatter data={{
        datasets: [{
          label: `${yCol} vs ${xCol}`,
          data: dataRows.map(row => ({
            x: Number(row[xCol]),
            y: Number(row[yCol])
          })),
          backgroundColor: "#4978aaff"
        }]
      }} />;
    }
    else if (chartType === "pie") chartElem = <Pie data={chartData} />;
  } else {
    chartElem = (
      <div id="chart-placeholder" className="chart-placeholder panel-card">
        Chart will appear here
      </div>
    );
  }

  return (
   <>
    <Navbar />
     <section id="csv-tab" className="page-section container">
      <div className="panel-card controls-row">
        <input id="csv-file-input" className="file-input" type="file" accept=".csv" onChange={handleFileChange} />
        <select id="x-column" className="select-input" value={xCol} onChange={e => setXCol(e.target.value)}>
          <option value="">X Column</option>
          {columns.map(col => (<option key={col} value={col}>{col}</option>))}
        </select>
        <select id="y-column" className="select-input" value={yCol} onChange={e => setYCol(e.target.value)}>
          <option value="">Y Column</option>
          {columns.map(col => (<option key={col} value={col}>{col}</option>))}
        </select>
        <select id="chart-type" className="select-input" value={chartType} onChange={e => setChartType(e.target.value)}>
          <option value="line">Line</option>
          <option value="bar">Bar</option>
          <option value="scatter">Scatter</option>
          <option value="pie">Pie</option>
        </select>

        <button id="plot-btn" className="btn btn-accent" onClick={handlePlot}>Plot</button>

        <label htmlFor="live-refresh" className="live-refresh-label">
          <input id="live-refresh" type="checkbox" checked={liveRefresh} onChange={e => setLiveRefresh(e.target.checked)} />
          <span className="live-refresh-text">Live Refresh</span>
        </label>
      </div>

      <div id="csv-chart-area" className="chart-area">
        {chartElem}
      </div>
    </section>
   </>
  );
}
