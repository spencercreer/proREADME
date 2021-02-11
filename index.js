const inquirer = require('inquirer');
const fs = require('fs');

// function to initialize program
function init() {
    writeToFile('README.md', questions)
}

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
          type: 'input',
          message: 'What is your email address?',
          name: 'email',
      },
      {
          type: 'input',
          message: 'What is your project name?',
          name: 'title',
      },
      {
        type: 'input',
        message: 'Write  short description of your project?',
        name: 'description',
      },   
      {
        type: 'input',
        message: 'What is the application URL?',
        name: 'url',
      },   
      {
        type: 'input',
        message: 'What is the repository URL?',
        name: 'repoURL',
      },   
      {
        type: 'list',
        choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None'],
        message: 'What license should your project have?',
        name: 'license',
      },
      {
        type: 'checkbox',
        choices: ['JavaScript','HTML','CSS','Bootstrap','jQuery','Node.js','npm','MongoDB','Mongoose','Heroku','Express'],
        message: 'What technologies does your project utilize?',
        name: 'technologies',
      },
      {
        type: 'list',
        choices: ['Yes','No'],
        message: 'Does your project utilize APIs?',
        name: 'apis',
      },
      {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencies',
      },
      {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'repoInfo',
      },
      {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribute',
      },
];

// function to write README file
function writeToFile(fileName, data) {
    var gMd = require("./utils/generateMarkdown");
    inquirer.prompt(data).then((response) =>
    fs.writeFile(fileName, gMd(response), (err) =>
    err ? console.error(err) : console.log('Commit logged!') 
    )
    );
}

// function call to initialize program
init();
