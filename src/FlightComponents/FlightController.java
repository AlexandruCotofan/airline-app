@RestController

public class FlightController {
    private FlightService service;

    public FlightController(FlightService service) {
        this.service = service;
    }

    @GetMapping("/allFlights")
    public List<Flight> retrieveAllFlights() {
        return service.findAll();
    }

    @GetMapping("/scales/{numberOfStops}")
    public List<Flight> retrieveBysacles(@PathVariable int numberOfStops) {
        return service.findByMaxScales(numberOfStops);
    }

    @GetMapping("/luggage/{allowLuggage}")
    public List<Flight> retrieveByLuggage(@PathVariable boolean allowLuggage) {
        return service.findByAllowedOrDissalloedLuggage(allowLuggage);
    }
}
}