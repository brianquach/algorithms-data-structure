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
