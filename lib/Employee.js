class Employee {
  constructor(name, id, email, title) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = title;
  }

  getName() {
    console.log(this.name);
    return this.name;
  }

  getId() {
    console.log(this.id);
    return this.id;
  }

  getEmail() {
    console.log(this.email);
    return this.email;
  }

  getRole() {
    this.title = "Employee"
    console.log(this.title);
    return this.title;
  }
}

module.exports = Employee;