(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var dataStructure = {
  queue: require('../../src/data-structures/queue.js')
};

describe('queue', function() {
  var Queue = dataStructure.queue.Queue;
  var queue;

  beforeEach(function() {
    queue = new Queue();
  });

  it('has is defined', function() {
    expect(queue.head).toBeDefined();
    expect(queue.tail).toBeDefined();
  });

  it('has both tail and head pointing to "3"', function() {
    queue.push(3);
    expect(queue.head.val).toEqual(3);
    expect(queue.tail.val).toEqual(3);
  });

  it('pops [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] in FIFO order', function() {
    var test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    test.forEach(function(x) {
      queue.push(x);
    });

    var current;
    test.forEach(function(x){
      current = queue.pop();
      expect(current).toEqual(x);
    });
  });
});

},{"../../src/data-structures/queue.js":2}],2:[function(require,module,exports){
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
