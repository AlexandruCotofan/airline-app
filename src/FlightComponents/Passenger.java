@Entity
public class Passenger {
    private String name;
    private String surname;
    private String nationality;
    private int identificationNumber;
    private int age;
    private boolean hasBags;

    public Passenger(String name, String surname, String nationality, int identificationNumber, int age,
                     boolean hasBags) {
        this.name = name;
        this.surname = surname;
        this.nationality = nationality;
        this.identificationNumber = identificationNumber;
        this.age = age;
        this.hasBags = hasBags;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public int getIdentificationNumber() {
        return identificationNumber;
    }

    public void setIdentificationNumber(int identificationNumber) {
        this.identificationNumber = identificationNumber;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public boolean isHasBags() {
        return hasBags;
    }

    public void setHasBags(boolean hasBags) {
        this.hasBags = hasBags;
    }
}