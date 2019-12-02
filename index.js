const axios = require("axios");
const fs = require("fs");
const inquirer = require("inquirer");
const pdf = require("html-pdf");
const open = require("open");

// const questions = [
  
// ];


// return username
// axios api get 

return inquirer
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
    .then((reponses) => {

        const {username, color} = reponses;
        console.log(username);
        console.log(color);
        const queryUrl = `https://api.github.com/users/${username}`;

        axios
        .get(queryUrl)
        .then((response) => {
            // data object created with query response
            const data = {
                color: color,
                img: response.data.avatar_url,
                name: response.data.name,
                location: response.data.location,
                gitLink: response.data.url,
                blog: response.data.blog,
                bio: response.data.bio,
                followers: response.data.followers,
                following: response.data.following
            };
        })
      
    
    });


// return color 






// function writeToFile(fileName, data) {
//     pdf.create(html).toFile("user.pdf", function(error){
//         if(error) return console.log(error);

//         open("user.pdf");
//     })
 
// }

// function init() {

// init();
