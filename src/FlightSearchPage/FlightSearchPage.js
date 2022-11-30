import { useState } from "react";
import FlightList from "../FlightList/FlightList";
import "./FlightSearchPage.css";

function SetRoundTripDateDisplay() {
  if (document.getElementById("round-trip-select").value === "no") {
    document.getElementById("round-trip-date").style.display = "none";
  } else {
    document.getElementById("round-trip-date").style.display = "inline-flex";
  }
}

const flights = [
  {
    origin: "Madrid",
    destination: "Barcelona",
    departureDay: "05.12.2022",
    departureTime: "20:00",
    arrivalDay: "05.12.2022",
    arrivalTime: "21:00",
    duration: "1h 0m",
    flightNumber: "1879YF",
    company: "Company 1",
    layoverCount: 0,
    price: 100,
    luggageAllowed: "Yes",
  },
  {
    origin: "Barcelona",
    destination: "Madrid",
    departureDay: "04.12.2022",
    departureTime: "23:00",
    arrivalDay: "05.12.2022",
    arrivalTime: "00:00",
    duration: "1h 0m",
    flightNumber: "12G9H8",
    company: "Company 1",
    layoverCount: 0,
    price: 100,
    luggageAllowed: "No",
  },
  {
    origin: "Paris",
    destination: "Madrid",
    departureDay: "05.12.2022",
    departureTime: "15:00",
    arrivalDay: "05.12.2022",
    arrivalTime: "20:00",
    duration: "1h 0m",
    flightNumber: "238HD2",
    company: "Company 2",
    layoverCount: 1,
    price: 300,
    luggageAllowed: "Yes",
  },
];

function FlightSearchPage() {
  const [filteredCompany, SetFilteredCompany] = useState("");
  const [filteredLuggage, SetFilteredLuggage] = useState("");

  const ChangeCompanyFilter = (selectedCompany) => {
    SetFilteredCompany(selectedCompany);
    console.log(filteredCompany.value);
  };

  const filteredFlights = flights.filter((flight) => {
    return (filteredCompany === "") ? flight : flight.company === filteredCompany;
  });

  return (
    <div id="flight-search-page">
      <form id="flight-search-form">
        <select
          name="origin"
          className="page-selector"
          id="origin-select"
          required
        >
          <option value="">Select origin</option>
          <option value="madrid">Madrid</option>
        </select>
        <select
          name="destination"
          className="page-selector"
          id="destination-select"
          required
        >
          <option value="">Select destination</option>
          <option value="madrid">Madrid</option>
        </select>
        <select
          name="round-trip"
          className="page-selector"
          id="round-trip-select"
          onClick={SetRoundTripDateDisplay}
          defaultValue="yes"
        >
          <option value="no">Direct flight</option>
          <option value="yes">Round trip</option>
        </select>
        <div>
          <label>Flight date:</label>
          <input type="date" className="page-selector"></input>
          <input
            type="date"
            className="page-selector"
            id="round-trip-date"
          ></input>
        </div>
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      <div id="search-filters">
        <label>Filters:</label>
        <select
          name="company-filter"
          className="page-selector"
          value={filteredCompany}
          onChange={ChangeCompanyFilter}
        >
          <option value="">Filter company</option>
          <option value="company1">Company 1</option>
          <option value="company2">Company 2</option>
          <option value="company3">Company 3</option>
        </select>
        <select
          name="luggage-filter"
          className="page-selector"
        >
          <option value="">Filter luggage</option>
          <option value="yes">Allow luggage</option>
          <option value="no">Don't allow luggage</option>
        </select>
      </div>
      <FlightList items={filteredFlights} />
      <a href="../" className="btn">
        Back
      </a>
    </div>
  );
}

export default FlightSearchPage;
