package com.example.demo;

import com.example.demo.items.Flight;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/flights")
public class FlightController {
    private List<Flight> flights = new ArrayList<>();

    public FlightController() {
        flights.add(new Flight(
                "Madrid",
                "Barcelona",
                "Company 1",
                "1792JF",
                LocalDateTime.of(2022, 12, 4, 10, 0),
                LocalDateTime.of(2022, 12, 4, 11, 15),
                0,
                120,
                30,
                50));
        flights.add(new Flight(
                "Madrid",
                "Paris",
                "Company 2",
                "129YNA",
                LocalDateTime.of(2022, 12, 5, 12, 0),
                LocalDateTime.of(2022, 12, 5, 14, 45),
                0,
                200,
                30,
                50));
        flights.add(new Flight(
                "Berlin",
                "Madrid",
                "Company 1",
                "T98GJ4",
                LocalDateTime.of(2022, 12, 4, 16, 40),
                LocalDateTime.of(2022, 12, 5, 0, 15),
                1,
                300,
                50,
                70));
    }

    @GetMapping
    public List<Flight> getFlights() {
        return flights;
    }

    @GetMapping("/count")
    public int getFlightsCount() {
        return flights.size();
    }
}
