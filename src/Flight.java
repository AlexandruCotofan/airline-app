public class Flight {
    private String flightNumber;
    private String departure;
    private String arrival;
    private int peopleOnBoard;
    private int numberOfSeats;
    private boolean allowLuggage;
    private int numberOfStops;

    public Flight(String flightNumber, String departure, String arrival, int peopleOnBoard, int numberOfSeats, boolean allowLuggage,
                  int numberOfStops) {
        this.flightNumber = flightNumber;
        this.departure = departure;
        this.arrival = arrival;
        this.peopleOnBoard = peopleOnBoard;
        this.numberOfSeats = numberOfSeats;
        this.allowLuggage;
        this.numberOfStops;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public String getDeparture() {
        return departure;
    }

    public void setDeparture(String departure) {
        this.departure = departure;
    }

    public String getArrival() {
        return arrival;
    }

    public void setArrival(String arrival) {
        this.arrival = arrival;
    }

    public int getPeopleOnBoard() {
        return peopleOnBoard;
    }

    public int getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(int numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
    }

    public boolean isAllowLuggage() {
        return allowLuggage;
    }

    public void setAllowLuggage(boolean allowLuggage) {
        this.allowLuggage = allowLuggage;
    }

    public int getNumberOfStops() {
        return numberOfStops;
    }
}