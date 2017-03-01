describe('queue', function() {
  var Queue = dataStructures.queue.Queue;
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
