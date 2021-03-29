module.exports = class DepthCalculator {
  calculateDepth(arr, depths = 1, counter = new Set()) {
  counter.add(depths);

    arr.forEach( e =>  {
      if (Array.isArray(e)) {
        this.calculateDepth(e, depths + 1, counter);
      }
    });

    return Math.max(...counter);
  }
};