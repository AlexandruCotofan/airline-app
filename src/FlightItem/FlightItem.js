import "./FlightItem.css";

function FlightItem() {
  return (
    <div className="flight-item">
      <div>
        <p>20:00 - 22:30 (2h 30m)</p>
        <p>COMPANY NAME</p>
      </div>
      <div>
        <p>ORIGIN - DESTINATION</p>
        <p>FLIGHT NUMBER</p>
      </div>
      <div>
        <p>LAYOVER COUNT</p>
      </div>
      <div>
        <p>PRICE</p>
        <p>LUGGAGE ALLOWED</p>
      </div>
    </div>
  );
}

export default FlightItem;
