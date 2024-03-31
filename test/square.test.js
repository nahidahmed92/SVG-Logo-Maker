const Square = require('../lib/square');

describe('Square', () => {
  describe('INITIALIZATION', () => {
    it('should be an instance of the Square', () => {
      const square = new Square();

      expect(square).toBeInstanceOf(Square);
    });
  });
});
