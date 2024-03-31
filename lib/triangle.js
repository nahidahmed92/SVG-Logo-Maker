const Shape = require('./shape');

class Triangle extends Shape {
  constructor(brandText, brandTextColor, shapeColor) {
    super(brandText, brandTextColor, shapeColor);
  }
}

module.exports = Triangle;
