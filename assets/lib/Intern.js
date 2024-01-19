// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    super(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    constructor(name, id, email, gitHub) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}