import FlightItem from "../FlightItem/FlightItem";

function FlightList(props) {
  return (
    <div id="flights-found">
      {props.items.map((flights) => (
        <FlightItem
          key={flights.flightNumber}
          origin={flights.origin}
          destination={flights.destination}
          companyName={flights.companyName}
          flightNumber={flights.flightNumber}
          departureDate={flights.departureDate}
          arrivalDate={flights.arrivalDate}
          duration={flights.duration}
          layovers={flights.layovers}
          pricePerPerson={flights.pricePerPerson}
          pricePerHandLuggage={flights.pricePerHandLuggage}
          pricePerCheckedLuggage={flights.pricePerCheckedLuggage}
        />
      ))}
    </div>
  );
}

export default FlightList;