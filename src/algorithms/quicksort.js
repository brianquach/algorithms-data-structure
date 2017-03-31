var quicksort = (function() {
  'use strict';

  var quicksort = function(arr) {
    return qs(arr, 0, arr.length - 1);
  };

  var qs = function(arr, begin, end) {
    if (begin >= end) {
      return arr;
    }
    var p = end;
    var d = begin;
    var c = begin;
    while (c < p) {
      if (arr[c] < arr[p]) {
        swap(arr, c, d);
        d++;
      }
      c++;
    }
    swap(arr, c, d);

    qs(arr, begin, d - 1);
    qs(arr, d + 1, end);
    return arr;
  };

  var swap = function(arr, i, j) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }

  return {
    run: quicksort
  };
})();

module.exports = quicksort;
