var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('mergesort', function() {
  var filesToTest = [
    'src/mergesort.js',
    'spec/mergesort_spec.js'
  ];
  return gulp.src(filesToTest)
    .pipe(jasmineBrowser.specRunner({ console: true }))
    .pipe(jasmineBrowser.headless());
});

gulp.task('default', ['test']);
