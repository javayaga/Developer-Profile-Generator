const axios = require("axios");
const fs = require("fs");
const inquirer = require("inquirer");

// const questions = [
  
// ];


inquirer
    .prompt([{
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["green", "blue", "pink", "red"]
    }])
    .then(function({ username }) {
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

        axios

        .get(queryUrl)
        .then((response) => {
            console.log(response);
            console.log(response.data);
        })

    });



// function writeToFile(fileName, data) {
 
// }

// function init() {

// init();
