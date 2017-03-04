(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var dataStructure = {
  linkedList: require('../../src/data-structures/linkedlist.js')
};

describe('linked list', function() {
  var LinkedList = dataStructure.linkedList.LinkedList;
  var linkedList;

  beforeEach(function() {
    linkedList = new LinkedList();
  });

  it('is defined', function() {
    expect(linkedList.head).toBeDefined();
    expect(linkedList.tail).toBeDefined();
  });

  it('has one element after addFirst', function() {
    linkedList.addFirst(4);
    expect(linkedList.head.val).toEqual(4);
    expect(linkedList.tail.val).toEqual(4);
  });

  it('has one element after addLast', function() {
    linkedList.addLast(3);
    expect(linkedList.head.val).toEqual(3);
    expect(linkedList.tail.val).toEqual(3);
  });

  it('addLast these elements [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', function() {
    var test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    test.forEach(function(x) {
      linkedList.addLast(x);
    });

    var current;
    test.forEach(function(x, i){
      current = linkedList.elementAt(i);
      expect(current).toEqual(x);
    });
  });
});

},{"../../src/data-structures/linkedlist.js":2}],2:[function(require,module,exports){
var linkedList = (function() {
  'use strict';

  var LinkedList = function() {
    this.head = null;
    this.tail = null;
  }
  LinkedList.prototype = {
    addFirst: function(val) {
      var node = new Node(val);

      if (!this.head) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      if (!this.tail) {
        this.tail = node;
      }
    },
    addLast: function(val) {
      var node = new Node(val);

      if (!this.head) {
        this.head = node;
      }
      if (!this.tail) {
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
    },
    // Returns the value of an element at the i-th position of the linked list starting from the head
    // if position is out of bounds returns undefined
    elementAt: function(i) {
      var ctr = 0, current = this.head;
      while (current) {
        if (i === ctr) {
          return current.val;
        }
        ctr++;
        current = current.next;
      }
      return undefined;
    }
  }

  var Node = function(val) {
    this.val = val;
    this.next = null;
  }

  return {
    LinkedList: LinkedList
  };
})();

module.exports = linkedList;

},{}]},{},[1]);
