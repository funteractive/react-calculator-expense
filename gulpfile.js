'use strict';

var gulp         = require('gulp'),
  $              = require('gulp-load-plugins')({ pattern: ['gulp-*', 'gulp.*'] }),
  browserify     = require('browserify'),
  buffer         = require('vinyl-buffer'),
  source         = require('vinyl-source-stream')
  ;

var jsPath             = './js/';


gulp.task('js', function() {
  browserify(jsPath + 'src/app.js')
    .bundle()
    .pipe(source('build.js'))
    .pipe(buffer())
    //.pipe($.uglify())
    .pipe(gulp.dest(jsPath));
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe($.webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

// Watch tasks
gulp.task('watch', function() {
  // Watch JavaScript
  gulp.watch([jsPath + 'src/*'], ['js']);
});

// Default tasks
gulp.task('default', ['webserver', 'watch'], function() {
});
