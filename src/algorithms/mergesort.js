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
    var mergeQueue = breakArray(arr);
    var sortedArr = mergeArrays(mergeQueue);
    return sortedArr;
  };

  function breakArray(arr) {
    var divideStack = [],
      tempArr,
      left,
      right,
      splitIndex,
      mergeQueue = new Queue();

    divideStack.push(arr);
    while (divideStack.length > 0) {
      tempArr = divideStack.pop();
      splitIndex = Math.floor(tempArr.length / 2);
      left = tempArr.splice(0, splitIndex);
      right = tempArr;
      if (left.length === 1) {
        mergeQueue.push(left);
      }
      if (right.length === 1) {
        mergeQueue.push(right);
      }
      if (right.length > 1) {
        divideStack.push(right);
      }
      if (left.length > 1) {
        divideStack.push(left);
      }
    }

    return mergeQueue;
  }

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
