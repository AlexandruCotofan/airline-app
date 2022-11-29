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
}