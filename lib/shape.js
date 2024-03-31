class Shape {
  constructor(children = '') {
    this.children = children;
  }

  render() {
    throw new Error('Child class must implement render() method.');
  }
}

module.exports = Shape;
