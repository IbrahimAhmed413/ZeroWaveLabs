// src/pages/Crawler.jsx
import React, { useState } from "react";
import "./Crawler.css";

export default function Crawler() {
  const [singleUrl, setSingleUrl] = useState("");
  const [filePath, setFilePath] = useState("");
  const [outputFolder, setOutputFolder] = useState("C:\\Users\\user");
  const [maxPages, setMaxPages] = useState(200);
  const [maxDepth, setMaxDepth] = useState(3);
  const [running, setRunning] = useState(false);
  const [rows, setRows] = useState([]);
  const [log, setLog] = useState([]);

  const addLog = (msg) => {
    setLog((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const handleStart = () => {
    setRunning(true);
    setRows([]);
    addLog("Crawler started");

    const seed = singleUrl || filePath || "https://example.com";

    // Example result for preview
    setTimeout(() => {
      setRows([
        { url: seed, heading: "Example extracted heading", images: 2 },
      ]);
      addLog("Scraped: " + seed);
    }, 800);
  };

  const handleStop = () => {
    setRunning(false);
    addLog("Crawler stopped");
  };

  const chooseExcel = () => addLog("Choose Excel functionality (requires desktop integration)");
  const chooseOutput = () => addLog("Choose Output functionality (requires desktop integration)");
  const saveNow = () => {
    if (!outputFolder) return addLog("Select output folder first!");
    addLog(`Would save results to ${outputFolder}/results.json`);
  };
  const saveAs = () => addLog("Save As functionality (requires desktop integration)");

  return (
    <div className="crawler-app-container">
      <h2 className="crawler-title">Web Crawler + Scraper</h2>
      <div className="crawler-content-wrapper">
        {/* INPUT PANEL */}
        <div className="input-panel">
          <div className="form-row">
            <label className="form-label">Single start URL (crawler mode):</label>
            <input
              type="text"
              className="form-input"
              value={singleUrl}
              onChange={(e) => setSingleUrl(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label className="form-label">-- Or select an Excel file containing links:</label>
            <input type="text" className="form-input" value={filePath} readOnly />
            <button className="btn" onClick={chooseExcel}>Choose Excel</button>
          </div>

          <div className="form-row">
            <label className="form-label">Output folder:</label>
            <input type="text" className="form-input" value={outputFolder} readOnly />
            <button className="btn" onClick={chooseOutput}>Choose Output</button>
          </div>

          <div className="form-row two-cols">
            <label className="form-label">Max pages:</label>
            <input
              type="number"
              className="form-input small-input"
              value={maxPages}
              onChange={(e) => setMaxPages(Number(e.target.value))}
            />
            <label className="form-label ml-10">Max depth:</label>
            <input
              type="number"
              className="form-input small-input"
              value={maxDepth}
              onChange={(e) => setMaxDepth(Number(e.target.value))}
            />
          </div>

          <div className="btn-row">
            <button className="btn" onClick={handleStart} disabled={running}>Start</button>
            <button className="btn" onClick={handleStop} disabled={!running}>Stop</button>
            <button className="btn" onClick={saveNow}>Save Now</button>
            <button className="btn" onClick={saveAs}>Save As...</button>
          </div>
        </div>

        <div className="status">
          <h2>{running ? "Running..." : "Ready"}</h2>
        </div>

        <div className="bottom">
          {/* RESULTS TABLE */}
          <div className="result-box">
            <h3 className="result-title">Results</h3>
            <div className="result-content">
              <table className="result-table">
                <thead>
                  <tr>
                    <th>URL</th>
                    <th>Heading</th>
                    <th>Images</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.length === 0 ? (
                    <tr>
                      <td colSpan={3}>No results yet</td>
                    </tr>
                  ) : (
                    rows.map((r, i) => (
                      <tr key={i}>
                        <td>{r.url}</td>
                        <td>{r.heading}</td>
                        <td>{r.images}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* LOG BOX */}
          <div className="log-box">
            <h3 className="log-title">Log</h3>
            <div className="log-content">
              {log.length === 0 ? "Ready" : log.join("\n")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
