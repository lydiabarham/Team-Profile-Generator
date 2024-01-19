// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    super(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    constructor(name, id, email, gitHub) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}