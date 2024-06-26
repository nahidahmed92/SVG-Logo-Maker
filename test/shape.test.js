const SHAPE = require('../lib/shape');

describe('SHAPE', () => {
  describe('INITIALIZATION', () => {
    it('should create an instance of the SHAPE class with an array of children', () => {
      const shape = new SHAPE();

      expect(shape).toBeInstanceOf(SHAPE);
    });
  });
  describe('render()', () => {
    it('should throw an error if the render method is used', () => {
      const shape = new SHAPE();
      const error = new Error('Child class must implement render() method.');

      expect(shape.render).toThrow(error);
    });
  });
});
