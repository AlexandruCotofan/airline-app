import { useState, useEffect } from "react";
import FlightList from "../FlightList/FlightList";
import "./FlightSearchPage.css";
import axios from "axios";

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
  const [flightsArray, SetFlightsArray] = useState([]);

  const ChangeCompanyFilter = () => {
    SetFilteredCompany(document.getElementById("company-filter").value);
  };

  const ChangeLuggageFilter = () => {
    SetFilteredLuggage(document.getElementById("luggage-filter").value);
  };

  useEffect(() => {
    const getFlightData = async () => {
      const flightsData = await axios("http://localhost:3001/flights");
      SetFlightsArray(flightsData.data);
    };
    getFlightData();
  }, []);

  const filteredFlights = flightsArray
    .filter((flight) => {
      return filteredCompany === ""
        ? flight
        : flight.companyName === filteredCompany;
    })
    .filter((flight) => {
      return filteredLuggage === ""
        ? flight
        : ((flight.pricePerHandLuggage > 0 ||
            flight.pricePerCheckedLuggage > 0) &&
            filteredLuggage === "Yes") ||
            (flight.pricePerHandLuggage == 0 &&
              flight.pricePerCheckedLuggage == 0 &&
              filteredLuggage === "No");
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
        <label>Filter company:</label>
        <select
          id="company-filter"
          name="company-filter"
          className="page-selector"
          onChange={ChangeCompanyFilter}
        >
          <option value="">No filter</option>
          <option value="Company 1">Company 1</option>
          <option value="Company 2">Company 2</option>
          <option value="Company 3">Company 3</option>
        </select>
        <label>Filter luggage:</label>
        <select
          id="luggage-filter"
          name="luggage-filter"
          className="page-selector"
          onChange={ChangeLuggageFilter}
        >
          <option value="">No filter</option>
          <option value="Yes">Allow luggage</option>
          <option value="No">Don't allow luggage</option>
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
