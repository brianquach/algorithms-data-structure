var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('mergesort', function() {
  var filesToTest = [
    'src/data-structures/queue.js',
    'src/algorithms/mergesort.js',
    'spec/algorithms_spec/mergesort_spec.js'
  ];
  runJasmine(filesToTest);
});

gulp.task('queue', function() {
  var filesToTest = [
    'src/data-structures/queue.js',
    'spec/data-structures_spec/queue_spec.js'
  ];
  runJasmine(filesToTest);
});

function runJasmine(filesToTest) {
  return gulp.src(filesToTest)
    .pipe(jasmineBrowser.specRunner({ console: true }))
    .pipe(jasmineBrowser.headless());
}

gulp.task('test:all', ['mergesort', 'queue']);

gulp.task('default', ['test:all']);
