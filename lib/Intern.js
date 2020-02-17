const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school) {
    super(name, id, email, title);
    this.school = school;
  }

  getRole() {
    super.title = "Intern";
    console.log(super.title);
    return super.title;
  }

  getSchool() {
    console.log(this.school)
    return this.school;
  }
}

module.exports = Intern;