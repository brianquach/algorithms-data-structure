var algorithms = algorithms || {};
var Queue = dataStructures.Queue;

algorithms.mergesort = (function() {
  'use strict';

  var mergesort = function(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    var splitIndex = Math.floor(arr.length / 2);
    var left = arr.slice(0, splitIndex);
    left = mergesort(left);
    var right = arr.slice(splitIndex);
    right = mergesort(right);

    return merge(left, right);
  };

  var merge = function(left, right) {
    var i = 0, j = 0;
    var result = [];
    while (i < left.length && j < right.length) {
      if (left[i] > right[j]) {
        result.push(right[j]);
        j++;
      } else {
        result.push(left[i]);
        i++;
      }
    }
    left = left.slice(i);
    right = right.slice(j);
    return result.concat(left.concat(right));
  };

  var mergesortIterative = function(arr) {
    var splitIndex,
      sortedArr,
      divideStack = [],
      mergeQueue = new Queue(),
      tempArr,
      left,
      right;

    divideStack.push(arr);
    while (divideStack.length > 0) {
      tempArr = divideStack.pop();
      splitIndex = Math.floor(tempArr.length / 2);
      left = tempArr.splice(0, splitIndex);
      right = tempArr;
      if (left.length === 1 && right.length === 1) {

      }
    }
    return sortedArr;
  };

  return {
    run: mergesort,
    runIterative: mergesortIterative
  };
})();
