const Shape = require('./shape');

class Square extends Shape {
  constructor(brandText, brandTextColor, shapeColor) {
    super(brandText, brandTextColor, shapeColor);
  }

  render() {
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="300" height="300" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.brandTextColor}">
        ${this.brandText.toUpperCase()}
        </text>
      </svg>`;
  }
}

module.exports = Square;
