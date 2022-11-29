function PersonalDataPage() {
  return (
    <div id="data-form-container">
      <form>
        <div>
          <label>Number of passengers:</label>
          <input type="number" min="1" max="10" defaultValue="1" required></input>
        </div>
        {/* Fields added for every extra passenger */}
        <div>
          <label>First name:</label>
          <input type="text" required></input>
        </div>
        <div>
          <label>Last name:</label>
          <input type="text" required></input>
        </div>
        <div>
          <label>Nationality:</label>
          <input type="text" required></input>
        </div>
        <div>
          <label>ID/Passport number:</label>
          <input type="text" required></input>
        </div>

        <div>
          <label>Age:</label>
          <select name="passenger-age-select" required>
            <option value="age<2">Less than 2 years</option>
            <option value="2<age<9">Between 2 and 9 years</option>
            <option value="9<age" selected>
              More than 9 years
            </option>
          </select>
          <label>Luggage:</label>
          <select name="passenger-luggage-select" required>
            <option>None</option>
            <option>Only hand luggage</option>
            <option>Only checked luggage</option>
            <option>Both hand and checked luggage</option>
          </select>
        </div>
        <button type="submit">Book flight</button>
      </form>
    </div>
  );
}

export default PersonalDataPage;
