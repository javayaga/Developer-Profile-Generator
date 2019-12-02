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
            // profile image 
            const profImg = response.data.avatar_url;
            console.log(profImg);
            // user's name
            const name = response.data.name;
            console.log(name);
            // links:
                // location
                const location = response.data.location;
                console.log(location);
                // GitHub profile 
                const profLink = response.data.url;
                console.log(profLink);
                // blog 
                const blog = response.data.blog;
                console.log(blog);
            // user bio
            const bio = response.data.bio;
            console.log(bio);
            // # of repos

            // # of followers
            const followers = response.data.followers;
            console.log(followers);
            // # of GitHub stars
           
            // # of users following
           const following = response.data.following;
            console.log(following);
        })
    });


// return color 






function writeToFile(fileName, data) {
    pdf.create(html).toFile("user.pdf", function(error){
        if(error) console.log(error);
    })
 
}

// function init() {

// init();
