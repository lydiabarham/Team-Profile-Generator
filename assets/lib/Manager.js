// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    super(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager";
    }
}