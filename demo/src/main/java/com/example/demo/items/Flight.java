package com.example.demo.items;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Flight {
    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
    private String origin;
    private String destination;
    private String flightNumber;
    private LocalDateTime departureDate;
    private LocalDateTime arrivalDate;
    private Duration duration;
    private int layovers;
    private int pricePerPerson;
    private int pricePerHandLuggage;
    private int pricePerCheckedLuggage;

    public Flight(String origin, String destination, String flightNumber,
                  LocalDateTime departureDate, LocalDateTime arrivalDate,
                  int layovers, int pricePerPerson, int pricePerHandLuggage, int pricePerCheckedLuggage) {
        this.setOrigin(origin);
        this.setDestination(destination);
        this.setFlightNumber(flightNumber);
        this.setDepartureDate(departureDate);
        this.setArrivalDate(arrivalDate);
        this.setDuration(Duration.between(departureDate, arrivalDate));
        this.setLayovers(layovers);
        this.setPricePerPerson(pricePerPerson);
        this.setPricePerHandLuggage(pricePerHandLuggage);
        this.setPricePerCheckedLuggage(pricePerCheckedLuggage);
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getDepartureDate() {
        return departureDate.format(formatter);
    }

    public void setDepartureDate(LocalDateTime departureDate) {
        this.departureDate = departureDate;
    }

    public String getArrivalDate() {
        return arrivalDate.format(formatter);
    }

    public void setArrivalDate(LocalDateTime arrivalDate) {
        this.arrivalDate = arrivalDate;
    }

    public String getDuration() {
        StringBuilder durationString = new StringBuilder();
        if (duration.toDaysPart() > 0) {
            durationString.append(duration.toDaysPart());
            durationString.append("d ");
        }
        durationString.append(duration.toHoursPart());
        durationString.append("h ");
        durationString.append(duration.toMinutesPart());
        durationString.append("m");
        return durationString.toString();
    }

    public void setDuration(Duration duration) {
        this.duration = duration;
    }

    public int getLayovers() {
        return layovers;
    }

    public void setLayovers(int layovers) {
        this.layovers = layovers;
    }

    public int getPricePerPerson() {
        return pricePerPerson;
    }

    public void setPricePerPerson(int pricePerPerson) {
        this.pricePerPerson = pricePerPerson;
    }

    public int getPricePerHandLuggage() {
        return pricePerHandLuggage;
    }

    public void setPricePerHandLuggage(int pricePerHandLuggage) {
        this.pricePerHandLuggage = pricePerHandLuggage;
    }

    public int getPricePerCheckedLuggage() {
        return pricePerCheckedLuggage;
    }

    public void setPricePerCheckedLuggage(int pricePerCheckedLuggage) {
        this.pricePerCheckedLuggage = pricePerCheckedLuggage;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }
}
