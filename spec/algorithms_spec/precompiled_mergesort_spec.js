var mergesort = require('../../src/algorithms/mergesort.js');

describe('mergesort', function() {
  it('returns [] for [] input', function() {
    var unsortedArr = [];
    var sortedArr = mergesort.run(unsortedArr);
    expect(sortedArr.length).toEqual(0);
  });

  it('sorts [10]', function() {
    var unsortedArr = [10];
    var sortedArr = mergesort.run(unsortedArr);
    expect(sortedArr).toEqual([10]);
  });

  it('sorts [10, 2, 5, 4]', function() {
    var unsortedArr = [10, 2, 5, 4];
    var sortedArr = mergesort.run(unsortedArr);
    expect(sortedArr).toEqual([2, 4, 5, 10]);
  });

  it('sorts [10, 6, 2, 5, 4]', function() {
    var unsortedArr = [10, 6, 2, 5, 4];
    var sortedArr = mergesort.run(unsortedArr);
    expect(sortedArr).toEqual([2, 4, 5, 6, 10]);
  });

  it('sorts [10, 6, 2, 5, 4, 100, 200, 80, 7, 12, 25, 1000]', function() {
    var unsortedArr = [10, 6, 2, 5, 4, 100, 200, 80, 7, 12, 25, 1000];
    var sortedArr = mergesort.run(unsortedArr);
    expect(sortedArr).toEqual([2, 4, 5, 6, 7, 10, 12, 25, 80, 100, 200, 1000]);
  });
});

describe('mergesort iterative', function() {
  it('returns [] for [] input', function() {
    var unsortedArr = [];
    var sortedArr = mergesort.runIterative(unsortedArr);
    expect(sortedArr.length).toEqual(0);
  });

  it('sorts [10]', function() {
    var unsortedArr = [10];
    var sortedArr = mergesort.runIterative(unsortedArr);
    expect(sortedArr).toEqual([10]);
  });

  it('sorts [10, 2, 5, 4]', function() {
    var unsortedArr = [10, 2, 5, 4];
    var sortedArr = mergesort.runIterative(unsortedArr);
    expect(sortedArr).toEqual([2, 4, 5, 10]);
  });

  it('sorts [10, 6, 2, 5, 4]', function() {
    var unsortedArr = [10, 6, 2, 5, 4];
    var sortedArr = mergesort.runIterative(unsortedArr);
    expect(sortedArr).toEqual([2, 4, 5, 6, 10]);
  });

  it('sorts [10, 6, 2, 5, 4, 100, 200, 80, 7, 12, 25, 1000]', function() {
    var unsortedArr = [10, 6, 2, 5, 4, 100, 200, 80, 7, 12, 25, 1000];
    var sortedArr = mergesort.runIterative(unsortedArr);
    expect(sortedArr).toEqual([2, 4, 5, 6, 7, 10, 12, 25, 80, 100, 200, 1000]);
  });
});
