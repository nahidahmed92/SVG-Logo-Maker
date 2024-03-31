const CIRCLE = require('../lib/circle');

describe('CIRCLE', () => {
  describe('INITIALIZATION', () => {
    it('should be an instance of the CIRCLE', () => {
      const circle = new CIRCLE();

      expect(circle).toBeInstanceOf(CIRCLE);
    });
  });
});
