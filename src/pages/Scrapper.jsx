import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/scraper/Navbar";
import CsvChartTab from "../components/scraper/CsvChartTab";
import ManualPieChart from "../components/scraper/ManualPieChart";
import SurveyCorrelation from "../components/scraper/SurveyCorreletion";
import TextAnalysis from "../components/scraper/TextAnalysis";
import './Scrapper.css'
export default function Scraper() {
    return (
        <>
            <div className="app-wrapper">
                <Navbar />

                {/* <div className="main-content">
                    <Routes>
                        <Route path="/csv" element={<CsvChartTab />} />
                        <Route path="/text" element={<TextAnalysis />} />
                        <Route path="/pie" element={<ManualPieChart />} />
                        <Route path="/Scraper" element={<SurveyCorrelation />} />
                        <Route path="*" element={<Navigate to="/tools" replace />} />
                    </Routes>
                </div> */}
            </div>
        </>
    )
}