import "./App.css";
import HomePage from "./HomePage/HomePage.js";
import FlightSearchPage from "./FlightSearchPage/FlightSearchPage.js";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalDataPage from "./PersonalDataPage/PersonalDataPage.js";
import ConfirmationPage from "./ConfirmationPage/ConfirmationPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/search" exact element={<FlightSearchPage />} />
          <Route path="/book" exact element={<PersonalDataPage />} />
          <Route path="/confirm" exact element={<ConfirmationPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
