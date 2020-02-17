const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(github) {
    super(name, id, email, title);
    this.github = github;
  }

  getRole() {
    super.title = "Engineer";
    console.log(super.title);
    return super.title;
  }

  getGithub() {
    console.log(this.github)
    return this.github;
  }
}

module.exports = Engineer;