import FlightItem from "../FlightItem/FlightItem";
import "./FlightSearchPage.css";

function FlightSearchPage() {
  return (
    <div id="flight-search-page">
      <form>
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
        >
          <option value="no">Direct flight</option>
          <option value="yes">Round trip</option>
        </select>
      </form>
      <div id="search-filters">
        <label>Filters:</label>
        <select name="company-filter" className="page-selector">
            <option value="">Filter company</option>
            <option value="company1">Company 1</option>
            <option value="company2">Company 2</option>
            <option value="company3">Company 3</option>
        </select>
        <select name="luggage-filter" className="page-selector">
            <option value="">Filter luggage</option>
            <option value="company1">Allow luggage</option>
            <option value="company2">Don't allow luggage</option>
        </select>
      </div>
      <div id="flights-found">
        <FlightItem />
        <FlightItem />
        <FlightItem />
      </div>
      <a href="../">Back</a>
    </div>
  );
}

export default FlightSearchPage;
