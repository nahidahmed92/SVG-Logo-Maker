const Triangle = require('../lib/triangle');

describe('Triangle', () => {
  describe('INITIALIZATION', () => {
    it('should be an instance of the Triangle', () => {
      const triangle = new Triangle();

      expect(triangle).toBeInstanceOf(Triangle);
    });
  });
});
