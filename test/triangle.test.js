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
  describe('render()', () => {
    it('should render triangle with data', () => {
      const brandText = 'NPA';
      const brandTextColor = 'white';
      const shapeColor = 'black';
      const triangle = new Triangle(brandText, brandTextColor, shapeColor);

      const expectedResults = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="140,10 20,190 280,190" fill="${shapeColor}"/>
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="${brandTextColor}">
        ${brandText.toUpperCase()}
        </text>
      </svg>`;

      expect(triangle.render()).toEqual(expectedResults);
    });
  });
});
