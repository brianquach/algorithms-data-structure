(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"../../src/algorithms/largest_rectangle.js":2}],2:[function(require,module,exports){
var largestRectangle = (function() {
  'use strict';

  var run = function(n) {
    if (n.length === 0) {
      return 0;
    }
    if (n.length === 1) {
      return n[0];
    }

    var start = 0;
    var greatestArea = 0;
    for (var end = 0; end < n.length; end++) {
      var height = Math.abs(n[end]);
      if (end > 0) {
        var prevHeight = n[end - 1];
        if (prevHeight !== n[end]) {
          start = end;
        }
      }
      var width = end - start + 1;
      greatestArea = Math.max(greatestArea, width * height);
    }
    return greatestArea;
  };

  return {
    run: run
  };
})();

module.exports = largestRectangle;

},{}]},{},[1]);
