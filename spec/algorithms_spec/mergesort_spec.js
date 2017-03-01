describe('mergesort', function() {
  var mergesort = algorithms.mergesort;

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
});
