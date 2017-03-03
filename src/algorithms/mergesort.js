var algorithms = algorithms || {};
var Queue = dataStructures.queue.Queue;

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
    if (arr.length < 2) {
      return arr;
    }
    var mergeQueue = new Queue();
    for (var i = 0, l = arr.length; i < l; i++) {
      mergeQueue.push([arr[i]]);
    }

    var sortedArr = mergeArrays(mergeQueue);
    return sortedArr;
  };

  function mergeArrays(mergeQueue) {
    var left = mergeQueue.pop();
    var right = mergeQueue.pop();
    var result;

    while (right) {
      result = merge(left, right);
      mergeQueue.push(result);

      left = mergeQueue.pop();
      right = mergeQueue.pop();
    }

    return left;
  }

  return {
    run: mergesort,
    runIterative: mergesortIterative
  };
})();
