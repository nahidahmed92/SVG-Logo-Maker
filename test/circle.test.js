const Circle = require('../lib/circle');

describe('Circle', () => {
  describe('INITIALIZATION', () => {
    it('should be an instance of the Circle', () => {
      const circle = new Circle();

      expect(circle).toBeInstanceOf(Circle);
    });
    it('should be an instance of Circle with the correct children assigned to the children string', () => {
      const children = 'child';
      const circle = new Circle(children);

      expect(circle).toBeInstanceOf(Circle);
      expect(circle.children).toEqual(children);
    });
  });
});
