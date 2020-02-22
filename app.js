const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

var htmlStart = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>main</title>
    <script src="../app.js"></script>
  </head>
  <body>
    <nav class="navbar navbar-dark bg-danger">
      <span class="navbar-brand mb-0 h1">NULL entry</span>
    </nav>
    <div class="container" id="agrippa">`
    
    var htmlEnd = `</div>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>`;

var i = 1;
var j = 1;

var managerArray = [];
var engineerArray = [];
var internArray = [];

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
          var slaveDiv = `<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
          <div class="card-header">${slave.name}</div>
          <div class="card-body">
            <ul>
              <li class="card-text">ID: ${slave.id}</li>
              <li class="card-text">Email: ${slave.email}</li>
              <li class="card-text">Github: ${slave.github}</li>
            </ul>
          </div>`;
          internArray.push(slaveDiv);
          if(j > internNumber) {
            var firstJoin = managerArray.concat(engineerArray);
            var secondJoin = firstJoin.concat(internArray);
            var htmlBody = secondJoin.toString();
            var htmlContent = htmlStart + htmlBody + htmlEnd;
            fs.writeFile(`./output/${pageName}.html`, htmlContent, (error) => { /* handle error */ });
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
            message: "What is the engineer's github profile?",
            name: "profile"
          }
        ])
        .then(function(response) {
          i++;
          var worker = new Engineer(response.name, response.number, response.email, response.profile);
          console.log(worker);
          var workerDiv = `<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
          <div class="card-header">${worker.name}</div>
          <div class="card-body">
            <ul>
              <li class="card-text">ID: ${worker.id}</li>
              <li class="card-text">Email: ${worker.email}</li>
              <li class="card-text">Github: ${worker.github}</li>
            </ul>
          </div>`;
          engineerArray.push(workerDiv);
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
          var bossDiv = `<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
          <div class="card-header">${boss.name}</div>
          <div class="card-body">
            <ul>
              <li class="card-text">ID: ${boss.id}</li>
              <li class="card-text">Email: ${boss.email}</li>
              <li class="card-text">Office Number: ${boss.officeNumber}</li>
            </ul>
          </div>`;
          managerArray.push(bossDiv);
          engineerMaker();
        });
    }

    console.log(response.teamName);
    var pageName = response.teamName;
    var engineerNumber = parseInt(response.engineerNumber);
    var internNumber = parseInt(response.internNumber);
    managerMaker();
  });