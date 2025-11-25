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
            </div>
        </>
    )
}