const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// create mock team members
const managerMock = new Manager("Mary", 2909, "Mary@example.com", "LB1994");
const engineerMock = new Engineer("Mary", 2909, "Mary@example.com", "LB1994");
const internMock = new Intern("Mary", 2909, "Mary@example.com", "LB1994");

// console.log(managerMock.getRole());
// console.log(engineerMock.getRole());
// console.log(internMock.getRole());

const managerPrompt = () => {
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
        },
    ]);
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
            name: 'gitHub',
            message: 'Enter engineer GitHub username:',
        },
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
        },
    ]);
};

const teamPrompt = () => {
    return inquirer.prompt({
        type: 'list',
        name: 'addRole',
        message: 'Select an option to keep building the team:',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
    });
};

const writeFileAsync = util.promisify(fs.writeFile);

const employeePrompt = async () => {
    const teamMembers = [];

    // Start with the manager prompt
    const managerAnswers = await managerPrompt();
    const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
    teamMembers.push(manager);

    // Loop calling the team prompt function 
    let answerOption;
    do {
        const teamPromptAnswers = await teamPrompt();
        answerOption = teamPromptAnswers.addRole;

        if (answerOption === 'Add an engineer') {
            const engineerAnswers = await engineerPrompt();
            const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub);
            teamMembers.push(engineer);
        } else if (answerOption === 'Add an intern') {
            const internAnswers = await internPrompt();
            const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
            teamMembers.push(intern);
        }
    } while (answerOption !== 'Finish building the team');

    return teamMembers;
};

// Call employee prompt funtion to start the application and handle the result
employeePrompt()
    .then((teamMembers) => {
        console.log('Team members:', teamMembers);
    })
    .catch((err) => console.error(err));

