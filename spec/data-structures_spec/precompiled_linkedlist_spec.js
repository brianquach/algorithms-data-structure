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
