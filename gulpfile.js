'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task("concatScripts", function() {
  gulp.src([
    'js/jquery.min.js',
    'js/jquery.swipebox.min.js',
    'js/bootstrap.min.js',
    'js/main.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'));
});

gulp.task("default", ["concatScripts"], function() {
  console.log('This is default task');
});
