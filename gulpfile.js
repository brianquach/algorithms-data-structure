var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');

var tests = [];
/**
 *  Sort tests
 */
var name = 'mergesort';
gulp.task(name, function() {
  var filesToTest = ['spec/algorithms_spec/mergesort_spec.js'];
  runJasmine(filesToTest);
});
tests.push(name);

name = 'quicksort';
gulp.task(name, function() {
  var filesToTest = ['spec/algorithms_spec/quicksort_spec.js'];
  runJasmine(filesToTest);
});
tests.push(name);

/**
 *  Data structure tests
 */
name = 'queue';
gulp.task(name, function() {
  var filesToTest = ['spec/data-structures_spec/queue_spec.js'];
  runJasmine(filesToTest);
});
tests.push(name);

name = 'linkedlist';
gulp.task(name, function() {
  var filesToTest = ['spec/data-structures_spec/linkedlist_spec.js'];
  runJasmine(filesToTest);
});
tests.push(name);

/**
 *  Algorithm tests
 */
name = 'largest-rectangle';
gulp.task(name, function() {
  var filesToTest = ['spec/algorithms_spec/largest_rectangle_spec.js'];
  runJasmine(filesToTest);
});
tests.push(name);

function runJasmine(filesToTest) {
  return gulp.src(filesToTest)
    .pipe(jasmineBrowser.specRunner({ console: true }))
    .pipe(jasmineBrowser.headless());
}

gulp.task('all', tests);

gulp.task('default', ['all']);
