(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var quicksort = require('../../src/algorithms/quicksort.js');

describe('quicksort', function() {
  it('returns [] for [] input', function() {
    var unsortedArr = [];
    var sortedArr = quicksort.run(unsortedArr);
    expect(sortedArr.length).toEqual(0);
  });

  it('sorts [10]', function() {
    var unsortedArr = [10];
    var sortedArr = quicksort.run(unsortedArr);
    expect(sortedArr).toEqual([10]);
  });

  it('sorts [10, 2, 5, 4]', function() {
    var unsortedArr = [10, 2, 5, 4];
    var sortedArr = quicksort.run(unsortedArr);
    expect(sortedArr).toEqual([2, 4, 5, 10]);
  });

  it('sorts [10, 6, 2, 5, 4]', function() {
    var unsortedArr = [10, 6, 2, 5, 4];
    var sortedArr = quicksort.run(unsortedArr);
    expect(sortedArr).toEqual([2, 4, 5, 6, 10]);
  });

  it('sorts [10, 6, 2, 5, 4, 100, 200, 80, 7, 12, 25, 1000]', function() {
    var unsortedArr = [10, 6, 2, 5, 4, 100, 200, 80, 7, 12, 25, 1000];
    var sortedArr = quicksort.run(unsortedArr);
    expect(sortedArr).toEqual([2, 4, 5, 6, 7, 10, 12, 25, 80, 100, 200, 1000]);
  });
});

},{"../../src/algorithms/quicksort.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
