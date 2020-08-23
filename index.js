var fs = require("fs");
var inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    return inquirer
        .prompt([{
                type: "input",
                message: "What is your First and Last Name?",
                name: "name"
            },

            {
                type: "input",
                message: "What is the title of your Project?",
                name: "title"
            },

            {
                type: "input",
                message: "Please describe your Project.",
                name: "description"
            },
            {
                type: "input",
                message: "How is this Project to be installed?",
                name: "installation"
            },
            {
                type: "input",
                message: "How is this Project to be used?",
                name: "usage"
            },
            {
                type: "list",
                message: "Please select a license.",
                name: "license",
                choices: [
                    "mit",
                    "gpl-3.0",
                    "apache-2.0",
                    "mpl-2.0",
                    "isc",
                    "None"
                ]
            },
            {
                type: "input",
                message: "How can individuals contribute to your Project?",
                name: "contributing"
            },
            {
                type: "input",
                message: "Please enter any test instructions for this Project.",
                name: "tests"
            },
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "github"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"
            },
        ])
}




// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program

const init = async() => {
    console.log("Hi there, let's get started...");
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