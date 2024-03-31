const SHAPE = require('../lib/shape');

describe('SHAPE', () => {
  describe('INITIALIZATION', () => {
    it('should create an instance of the SHAPE class with an array of children', () => {
      const shape = new SHAPE();

      expect(shape).toBeInstanceOf(SHAPE);
    });
  });
});
