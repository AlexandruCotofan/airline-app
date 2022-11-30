import FlightItem from "../FlightItem/FlightItem";

function FlightList(props) {
  return (
    <div id="flights-found">
      {props.items.map((flights) => (
        <FlightItem
          key={flights.flightNumber}
          origin={flights.origin}
          destination={flights.destination}
          departureDay={flights.departureDay}
          departureTime={flights.departureTime}
          arrivalDay={flights.arrivalDay}
          arrivalTime={flights.arrivalTime}
          duration={flights.duration}
          flightNumber={flights.flightNumber}
          company={flights.company}
          layoverCount={flights.layoverCount}
          price={flights.price}
          luggageAllowed={flights.luggageAllowed}
        />
      ))}
    </div>
  );
}

export default FlightList;