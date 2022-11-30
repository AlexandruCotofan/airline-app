import "./FlightItem.css";

function FlightItem(props) {
  const luggageMessage =
    props.luggageAllowed === "Yes" ? "Luggage allowed" : "Luggage not allowed";
  const flightDays =
    props.departureDay === props.arrivalDay
      ? props.departureDay
      : props.departureDay + " - " + props.arrivalDay;
  return (
    <div className="flight-item">
      <div>
        <p>
          {props.origin} - {props.destination}
        </p>
        <p>Flight Number: {props.flightNumber}</p>
      </div>
      <div>
        <p>
          {props.departureTime} - {props.arrivalTime} ({props.duration})
        </p>
        <p>{flightDays}</p>
      </div>
      <div>
        <p>{props.company}</p>
        <p>layovers: {props.layoverCount}</p>
      </div>
      <div>
        <p>{props.price} euros</p>
        <p>{luggageMessage}</p>
      </div>
      <a className="btn" href="/book">
        Book flight
      </a>
    </div>
  );
}

export default FlightItem;
