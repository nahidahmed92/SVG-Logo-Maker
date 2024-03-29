const inquirer = require('inquirer');

const { writeFile } = require('fs/promises');

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
      ])
      .then((answers) => {
        this.brandText = answers.brandText;
        this.brandTextColor = answers.brandTextColor;
      });
  }
}

module.exports = CLI;
