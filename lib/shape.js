class Shape {
  constructor(brandText, brandTextColor, shapeColor) {
    this.brandText = brandText;
    this.brandTextColor = brandTextColor;
    this.shapeColor = shapeColor;
  }

  render() {
    throw new Error('Child class must implement render() method.');
  }
}

module.exports = Shape;
