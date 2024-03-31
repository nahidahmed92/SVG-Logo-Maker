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
});
