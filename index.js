var fs = require("fs");
var inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = ("./utils/generateMarkdown.js")
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    return inquirer
        .prompt([{
                type: "input",
                message: "What is your user name?",
                name: "username"
            },
            {
                type: "password",
                message: "What is your password?",
                name: "password"
            },
            {
                type: "password",
                message: "Re-enter password to confirm:",
                name: "confirm"
            }
        ])
}




// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
async function init() {
    console.log("hi")
    try {
        const answers = await promptUser();

        const md = generateMarkdown(answers);

        await writeFileAsync("README.MD", md);

        console.log("Successfully wrote to README.md");
    } catch (err) {
        console.log(err);
    }
}




// function call to initialize program
init();