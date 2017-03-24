var largestRectangle = require('../../src/algorithms/largest_rectangle.js');

describe('mergesort', function() {
  it('returns 0 for []', function() {
    var n = [];
    var result = largestRectangle.run(n);
    expect(result).toEqual(0);
  });

  it('returns 99 for [99]', function() {
    var n = [99];
    var result = largestRectangle.run(n);
    expect(result).toEqual(99);
  });

  it('returns 35 for [10, 10, 10, 20, 5, 5, 5, 5, 5, 5, 5]', function() {
    var n = [10, 10, 10, 20, 5, 5, 5, 5, 5, 5, 5];
    var result = largestRectangle.run(n);
    expect(result).toEqual(35);
  });

  it('returns 60 for [10, 10, 10, 20, 5, 5, 5, -20, -20, -20, 5, 5, 5, 5]', function() {
    var n = [10, 10, 10, 20, 5, 5, 5, -20, -20, -20, 5, 5, 5, 5];
    var result = largestRectangle.run(n);
    expect(result).toEqual(60);
  });
});
