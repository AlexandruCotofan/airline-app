import "./FlightItem.css";

function FlightItem(props) {
  const departureDateArray = props.departureDate.split(" ");
  const arrivalDateArray = props.arrivalDate.split(" ");
  const luggageMessage =
    props.pricePerHandLuggage > 0 || props.pricePerCheckedLuggage > 0
      ? "Luggage allowed"
      : "Luggage not allowed";
  const flightDays =
    departureDateArray[0] === arrivalDateArray[0]
      ? departureDateArray[0]
      : departureDateArray[0] + " - " + arrivalDateArray[0];
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
          {departureDateArray[1]} - {arrivalDateArray[1]} ({props.duration})
        </p>
        <p>{flightDays}</p>
      </div>
      <div>
        <p>{props.companyName}</p>
        <p>layovers: {props.layovers}</p>
      </div>
      <div>
        <p>{props.pricePerPerson} euros / passenger</p>
        <p>{luggageMessage}</p>
      </div>
      <a className="btn" href="/book">
        Book flight
      </a>
    </div>
  );
}

export default FlightItem;
