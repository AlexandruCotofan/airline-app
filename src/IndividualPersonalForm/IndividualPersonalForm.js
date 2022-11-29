function IndividualPersonalForm() {
  return (
    <div>
      <div>
        <label>First name:</label>
        <input className="page-selector" type="text" required></input>
      </div>
      <div>
        <label>Last name:</label>
        <input className="page-selector" type="text" required></input>
      </div>
      <div>
        <label>Nationality:</label>
        <input className="page-selector" type="text" required></input>
      </div>
      <div>
        <label>ID/Passport number:</label>
        <input className="page-selector" type="text" required></input>
      </div>

      <div>
        <label>Age:</label>
        <select className="page-selector" name="passenger-age-select" required>
          <option value="age<2">Less than 2 years</option>
          <option value="2<age<9">Between 2 and 9 years</option>
          <option value="9<age" selected>
            More than 9 years
          </option>
        </select>
        <label>Luggage:</label>
        <select
          className="page-selector"
          name="passenger-luggage-select"
          required
        >
          <option value="no-luggage">None</option>
          <option value="hand-luggage">Only hand luggage</option>
          <option value="checked-luggage">Only checked luggage</option>
          <option value="hand-checked-luggage">
            Both hand and checked luggage
          </option>
        </select>
      </div>
    </div>
  );
}
export default IndividualPersonalForm;
