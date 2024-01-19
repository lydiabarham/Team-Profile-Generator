const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// const writeFileAsync = util.promisify(fs.writeFile);

const employeePrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter manager name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter manager ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter manager email:',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter manager office number:',
        }
    ]);
};

const menuPrompt = () => {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'addRole',
            message: 'Select an option to complete the team:',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
        }
    )
};

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter engineer name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter engineer ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineer email:',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter engineer GitHub username:',
        }
    ]);
};

const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter intern name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter intern ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter intern email:',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter intern school:',
        }
    ]);
};

// employeePrompt()
//   .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
//   .then(() => console.log('Successfully wrote to README.md'))
//   .catch((err) => console.error(err));
