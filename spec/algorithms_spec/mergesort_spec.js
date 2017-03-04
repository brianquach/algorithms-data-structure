(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"../../src/algorithms/mergesort.js":2}],2:[function(require,module,exports){
var queue = require('../data-structures/queue.js');

var mergesort = (function() {
  'use strict';

  var Queue = queue.Queue;

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

module.exports = mergesort;

},{"../data-structures/queue.js":3}],3:[function(require,module,exports){
var queue = (function () {
  var Queue = function () {
      this.head = null;
      this.tail = null;
  };
  Queue.prototype = {
    push: function(val) {
      var node = new QueueNode(val);
      if (this.tail) {
        node.next = this.tail;
        this.tail.prev = node;
      }
      this.tail = node;

      if (!this.head) {
        this.head = node;
      }
    },
    pop: function() {
      if (!this.head) {
        return null;
      }
      var current = this.head;
      var prev = current.prev;
      if (prev) {
        prev.next = null;
      }
      this.head = prev;
      return current.val;
    },
    printForward: function() {
      var current = this.tail;
      var s = [];
      while (current) {
        s.push(current.val);
        current = current.next;
      }
      console.log(s.join(' '));
    },
    printBackward: function() {
      var current = this.head;
      var s = [];
      while (current) {
        s.push(current.val);
        current = current.prev;
      }
      console.log(s.join(' '));
    }
  };

  var QueueNode = function (val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  };

  return {
    Queue: Queue
  };
})();

module.exports = queue;

},{}]},{},[1]);
