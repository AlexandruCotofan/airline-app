@Component
public class FlightService {

    private List<Flight> flights = Arrays.asList(
            new Flight(111, "bucharest", "seville", 250, 275, 1, 0);
            new Flight(111, "bucharest", "moscow", 250, 275, 1, 0);
            new Flight(111, "kiev", "seville", 250, 275, 1, 0));

    public List<Flight> findAll() {
        return flights;
    }

    public List<Flight> findByMaxScales(int numberOfStops) {
        List<Flight> flightByNumOfSacles = flights.stream()
                .filter(a -> a.getScales() <= numberOfStops)
                .collect(Collectors.toList());
        return flightByNumOfSacles;
    }

    public List<Flight> findByAllowedOrDissalloedLuggage(boolean allowLuggage) {
        List<Flight> flightByAllowedOrDissallowedLuggage = flights.stream()
                .filter(a -> Objects.equals(a.getLuggage().toLowerCase(), luggageCheck.toLowerCase()))
                .collect(Collectors.toList());
        return flightByAllowedOrDissallowedLuggage;
    }
}