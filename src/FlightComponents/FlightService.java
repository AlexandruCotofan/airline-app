import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class FlightService {

    private List<Flight> flights = Arrays.asList(
            new Flight(2909, "Bucharest", "Sevile", 100, 200, 1, 0);
            new Flight(1012,"Madrid","Sevile",100,200,1,0);
            new Flight(1021,"Lisbon","Sevile",100,200,1,0);
            new Flight(1512,"Bucharest","Moscow",100,200,1,0));
    public List<Flight> findAll() {
        return flights;
    }
}