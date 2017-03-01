var dataStructures = dataStructures || {};

dataStructures.queue = (function () {
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
      while (current) {
        console.log(current.val);
        current = current.next;
      }
    },
    printBackward: function() {
      var current = this.head;
      while (current) {
        console.log(current.val);
        current = current.prev;
      }
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
