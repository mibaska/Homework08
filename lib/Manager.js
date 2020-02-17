const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, email, title);
    this.officeNumber = officeNumber;
  }

  getRole() {
    super.title = "Manager";
    return super.title;
  }

  getOfficeNumber() {
    console.log(this.officeNumber);
    return this.officeNumber;
  }
}

module.exports = Manager;