const inquirer = require('inquirer');

const { writeFile } = require('fs/promises');

class CLI {
  constructor() {
    this.shape = '';
  }
  run() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter brand initials',
      },
    ]);
  }
}

module.exports = CLI;
