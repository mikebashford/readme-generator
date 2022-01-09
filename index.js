// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ['What is the title of the project?', 'Describe what the project does.', 'How do I install this project?', 'How do I use this project?', 'Who contributed to the project?', 'How do I use the test functions involved in the project?', 'Which license would you like to add?', 'What is your github username?', 'What is your email?'];

const promptUser = () =>
{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],
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
      message: questions[1],
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
      message: questions[2],
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
      name: 'use',
      message: questions[3],
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
      message: questions[4],
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
      message: questions[5],
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
      type: 'input',
      name: 'license',
      message: questions[6],
      validate: licenseInput =>
      {
        if(licenseInput)
        {
          return true;
        }
        else{
          console.log('Please select the license you would like to use.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'username',
      message: questions[7],
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
      message: questions[8],
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
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();
