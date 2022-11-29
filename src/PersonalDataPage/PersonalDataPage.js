import IndividualPersonalForm from "../IndividualPersonalForm/IndividualPersonalForm.js";
import "./PersonalDataPage.css";

function PersonalDataPage() {
  return (
    <div id="data-form-container">
      <div>
        <label>Number of passengers:</label>
        <input
          id="passengers-selected"
          className="page-selector"
          type="number"
          min="1"
          max="10"
          defaultValue="1"
          required
        ></input>
      </div>
      <form id="passenger-forms">
        <IndividualPersonalForm />
        <p>FLIGHT PRICE</p>
        <button className="btn" type="submit">
          Book flight
        </button>
      </form>
      <a className="btn" href="/search">
        Back
      </a>
    </div>
  );
}

export default PersonalDataPage;
