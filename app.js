const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

var i = 1;
var j = 1;

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the team name?",
      name: "teamName"
    },
    {
      type: "input",
      message: "How many Engineers are on the team?",
      name: "engineerNumber"
    },
    {
      type: "input",
      message: "How many Interns are on the team?",
      name: "internNumber"
    }
  ])
  .then(function(response) {
    function internMaker() {
      inquirer
        .prompt([
          {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
          },
          {
            type: "input",
            message: "What is the intern's id number?",
            name: "number"
          },
          {
            type: "input",
            message: "What is the intern's email?",
            name: "email"
          },
          {
            type: "input",
            message: "What is the intern's school?",
            name: "school"
          }
        ])
        .then(function(response) {
          j++;
          var slave = new Intern(response.name, response.number, response.email, response.school);
          console.log(slave);
          if(j > internNumber) {
            return;
          } else {
            internMaker();
          }
        });
    }
    
    function engineerMaker() {
      inquirer
        .prompt([
          {
            type: "input",
            message: "What is the engineer's name?",
            name: "name"
          },
          {
            type: "input",
            message: "What is the engineer's id number?",
            name: "number"
          },
          {
            type: "input",
            message: "What is the engineer's email?",
            name: "email"
          },
          {
            type: "input",
            message: "What is the engineer's github profile link?",
            name: "profile"
          }
        ])
        .then(function(response) {
          i++;
          var worker = new Engineer(response.name, response.number, response.email, response.profile);
          console.log(worker);
          if(i > engineerNumber) {
            internMaker();
          } else {
            engineerMaker();
          }
        });
    }
    
    function managerMaker() {
      inquirer
        .prompt([
          {
            type: "input",
            message: "What is the manager's name?",
            name: "name"
          },
          {
            type: "input",
            message: "What is the manager's id number?",
            name: "number"
          },
          {
            type: "input",
            message: "What is the manager's email?",
            name: "email"
          },
          {
            type: "input",
            message: "What is the manager's office number?",
            name: "office"
          }
        ])
        .then(function(response) {
          var boss = new Manager(response.name, response.number, response.email, response.office);
          console.log(boss);
          engineerMaker();
        });
    }

    console.log(response.teamName);
    var engineerNumber = parseInt(response.engineerNumber);
    var internNumber = parseInt(response.internNumber);
    managerMaker();
  });