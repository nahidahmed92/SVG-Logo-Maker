const inquirer = require('inquirer');

const { writeFile } = require('fs/promises');
const { join } = require('path');

class CLI {
  constructor() {
    this.shape = '';
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'brandText',
          message: 'Enter brand initials',
          validate: function (input) {
            // validates input length to be no greater than 3 characters
            if (input.length <= 3) {
              return true;
            } else {
              return 'Please enter up to 3 characters only.';
            }
          },
        },
        {
          type: 'input',
          name: 'brandTextColor',
          message: 'Enter text color (keyword | hex)',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Choose a shape to create',
          choices: ['Circle', 'Triangle', 'Square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter a shape color',
        },
      ])
      .then((response) => {
        this.brandText = response.brandText;
        this.brandTextColor = response.brandTextColor;
        this.shape = response.shape;
        this.shapeColor = response.shapeColor;
        console.log(response);
        return writeFile(join(__dirname, '..', 'examples', 'logo.svg'), JSON.stringify(response)); // update shape
      })
      .then(() => {
        console.log('Generated logo.svg');
      })
      .catch((error) => {
        console.log(error);
        console.log('Something went wrong, try again.');
      });
  }
}

module.exports = CLI;
