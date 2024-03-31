const Shape = require('./shape');

class Square extends Shape {
  constructor(brandText, brandTextColor, shapeColor) {
    super(brandText, brandTextColor, shapeColor);
  }
}

module.exports = Square;
