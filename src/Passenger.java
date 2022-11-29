public class Passenger {
        private String name;
        private String surname;
        private String nationality;
        private int identificationNumber;
        private int age;

    public Passenger(String name, String surname, String nationality, int identificationNumber, int age) {
        this.name = name;
        this.surname = surname;
        this.nationality = nationality;
        this.identificationNumber = identificationNumber;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getNationality() {
        return nationality;
    }

    public int getIdentificationNumber() {
        return identificationNumber;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public void setIdentificationNumber(int identificationNumber) {
        this.identificationNumber = identificationNumber;
    }

    public void setAge(int age) {
        this.age = age;
    }
}