const Triangle = require('../lib/triangle');

describe('Triangle', () => {
  describe('INITIALIZATION', () => {
    it('should be an instance of the Triangle', () => {
      const triangle = new Triangle();

      expect(triangle).toBeInstanceOf(Triangle);
    });
    it('should be an instance of Triangle with the correct children assigned', () => {
      const brandText = 'NPA';
      const brandTextColor = 'white';
      const shapeColor = 'black';
      const triangle = new Triangle(brandText, brandTextColor, shapeColor);

      expect(triangle).toBeInstanceOf(Triangle);
      expect(triangle.brandText).toEqual(brandText);
      expect(triangle.brandTextColor).toEqual(brandTextColor);
      expect(triangle.shapeColor).toEqual(shapeColor);
    });
  });
});
