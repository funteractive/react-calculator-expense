'use strict';

var gulp         = require('gulp'),
  $              = require('gulp-load-plugins')({ pattern: ['gulp-*', 'gulp.*'] }),
  browserSync    = require('browser-sync'),
  browserify     = require('browserify'),
  buffer         = require('vinyl-buffer'),
  source         = require('vinyl-source-stream'),
  runSequence    = require('run-sequence')
  ;

var jsPath             = './js/';

// Run browser-sync
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
    ghostMode: {
      location: true
    }
  });
});

gulp.task('reload', function() {
  browserSync.reload({ stream: true });
});

gulp.task('js', function() {
  browserify(jsPath + 'src/app.js')
    .bundle()
    .pipe(source('build.js'))
    .pipe(buffer())
    //.pipe($.uglify())
    .pipe(gulp.dest(jsPath));
});

// Watch tasks
gulp.task('watch', function() {
  // Watch html
  gulp.watch(['./*.html'], browserSync.reload);

  // Watch JavaScript
  gulp.watch([jsPath + 'src/*'], ['js', browserSync.reload]);
});

// Default tasks
gulp.task('default', ['browser-sync', 'watch'], function() {
});
