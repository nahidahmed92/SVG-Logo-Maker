const Square = require('../lib/square');

describe('Square', () => {
  describe('INITIALIZATION', () => {
    it('should be an instance of the Square', () => {
      const square = new Square();

      expect(square).toBeInstanceOf(Square);
    });
    it('should be an instance of Square with the correct children assigned', () => {
      const brandText = 'NPA';
      const brandTextColor = 'white';
      const shapeColor = 'black';
      const square = new Square(brandText, brandTextColor, shapeColor);

      expect(square).toBeInstanceOf(Square);
      expect(square.brandText).toEqual(brandText);
      expect(square.brandTextColor).toEqual(brandTextColor);
      expect(square.shapeColor).toEqual(shapeColor);
    });
  });
  describe('render()', () => {
    it('should render square with data', () => {
      const brandText = 'NPA';
      const brandTextColor = 'white';
      const shapeColor = 'black';
      const square = new Square(brandText, brandTextColor, shapeColor);

      const expectedResults = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="300" height="300" fill="${shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${brandTextColor}">
        ${brandText.toUpperCase()}
        </text>
      </svg>`;

      expect(square.render()).toEqual(expectedResults);
    });
  });
});
