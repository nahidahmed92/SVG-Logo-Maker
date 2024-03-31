class SHAPE {
  constructor() {}

  render() {
    throw new Error('Child class must implement render() method.');
  }
}

module.exports = SHAPE;
