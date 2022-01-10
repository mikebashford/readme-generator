// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadme = require("./utils/generate-readme");

// TODO: Create an array of questions for user input
const questions = () =>
{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?',
      validate: titleInput =>
      {
        if(titleInput)
        {
          return true;
        }
        else{
          console.log('Please enter the title of the project.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe what the project does.',
      validate: descriptionInput =>
      {
        if(descriptionInput)
        {
          return true;
        }
        else{
          console.log('Please enter the description of the project.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'install',
      message: 'How do I install this project?',
      validate: installInput =>
      {
        if(installInput)
        {
          return true;
        }
        else{
          console.log('Please enter how to install the project.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do I use this project?',
      validate: useInput =>
      {
        if(useInput)
        {
          return true;
        }
        else{
          console.log('Please enter how to use the project.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Who contributed to the project?',
      validate: contributorsInput =>
      {
        if(contributorsInput)
        {
          return true;
        }
        else{
          console.log('Please enter the contributors of the project.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'test',
      message: 'How do I use the test functions involved in the project?',
      validate: testInput =>
      {
        if(testInput)
        {
          return true;
        }
        else{
          console.log('Please enter how to run the tests in the project.');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to add?',
      choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
      ]
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your github username?',
      validate: usernameInput =>
      {
        if(usernameInput)
        {
          return true;
        }
        else{
          console.log('Please enter the your github username.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
      validate: emailInput =>
      {
        if(emailInput)
        {
          return true;
        }
        else{
          console.log('Please enter your email.');
          return false;
        }
      }
    },
  ])
};



// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
  return new Promise((resolve, reject) =>
  {
    fs.writeFile(fileName, data, err =>
    {
      if(err)
      {
        reject(err);
        return;
      }
      resolve({
        ok:true, 
        message: 'Readme created!'
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  questions()
  .then(data =>
    {
      return generateReadme(data);
    })
  .then( generateReadme =>
  {
    writeToFile("./dist/README.md", generateReadme);
  });
}

// Function call to initialize app
init();
