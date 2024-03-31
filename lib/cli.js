const inquirer = require('inquirer');

const { writeFile } = require('fs/promises');
const { join } = require('path');
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

class CLI {
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
          validate: function (input) {
            // Regular expression to match common color formats
            const colorRegex =
              /^(#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})|rgb\(\s*(\d{1,3}%?\s*,){2}(\d{1,3}%?\s*)\)|rgba\(\s*(\d{1,3}%?\s*,){3}(0(\.\d+)?|1(\.0)?)\)|hsl\(\s*(\d{1,3}%?\s*,){2}(\d{1,3}%?\s*)\)|hsla\(\s*(\d{1,3}%?\s*,){3}(0(\.\d+)?|1(\.0)?)\)|[a-z]+)$/i;
            // Input is a valid color format
            if (colorRegex.test(input)) {
              return true;
            } else {
              return 'Please enter a valid color format (named color, hex code, RGB, etc.).';
            }
          },
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Choose a shape to create',
          choices: ['Circle', 'Square', 'Triangle'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter a shape color',
          validate: function (input) {
            // Regular expression to match common color formats
            const colorRegex =
              /^(#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})|rgb\(\s*(\d{1,3}%?\s*,){2}(\d{1,3}%?\s*)\)|rgba\(\s*(\d{1,3}%?\s*,){3}(0(\.\d+)?|1(\.0)?)\)|hsl\(\s*(\d{1,3}%?\s*,){2}(\d{1,3}%?\s*)\)|hsla\(\s*(\d{1,3}%?\s*,){3}(0(\.\d+)?|1(\.0)?)\)|[a-z]+)$/i;
            if (colorRegex.test(input)) {
              return true; // Input is a valid color format
            } else {
              return 'Please enter a valid color format (named color, hex code, RGB, etc.).';
            }
          },
        },
      ])
      .then(({ brandText, brandTextColor, shape, shapeColor }) => {
        switch (shape) {
          case 'Circle':
            return new Circle(brandText, brandTextColor, shapeColor).render();
            break;
          case 'Square':
            return new Square(brandText, brandTextColor, shapeColor).render();
            break;
          case 'Triangle':
            return new Triangle(brandText, brandTextColor, shapeColor).render();
            break;
        }
      })
      .then((shapeData) => {
        // Write shape data to file
        return writeFile(join(__dirname, '..', 'examples', 'logo.svg'), shapeData);
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
