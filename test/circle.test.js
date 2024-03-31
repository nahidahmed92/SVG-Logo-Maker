const Circle = require('../lib/circle');

describe('Circle', () => {
  describe('INITIALIZATION', () => {
    it('should be an instance of the Circle', () => {
      const circle = new Circle();

      expect(circle).toBeInstanceOf(Circle);
    });
    it('should be an instance of Circle with the correct children assigned', () => {
      const brandText = 'NPA';
      const brandTextColor = 'white';
      const shapeColor = 'black';
      const circle = new Circle(brandText, brandTextColor, shapeColor);

      expect(circle).toBeInstanceOf(Circle);
      expect(circle.brandText).toEqual(brandText);
      expect(circle.brandTextColor).toEqual(brandTextColor);
      expect(circle.shapeColor).toEqual(shapeColor);
    });
  });
  describe('render()', () => {
    it('should render circle with data', () => {
      const brandText = 'NPA';
      const brandTextColor = 'white';
      const shapeColor = 'black';
      const circle = new Circle(brandText, brandTextColor, shapeColor);

      const expectedResults = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${brandTextColor}">
      ${brandText.toUpperCase()}
      </text>
    </svg>`;

      expect(circle.render()).toEqual(expectedResults);
    });
  });
});
