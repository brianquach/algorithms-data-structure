var dataStructures = dataStructures || {};

dataStructures.linkedList = (function() {
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
