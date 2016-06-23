'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task("concatScripts", function() {
  gulp.src([
    'js/jquery.min.js',
    'js/jquery.swipebox.min.js',
    'js/bootstrap.min.js',
    'js/main.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'));
});

gulp.task("minifyScripts", function() {
  gulp.src('js/app.js')
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('js'));
});

gulp.task("default", ["concatScripts", "minifyScripts"], function() {
  console.log('This is default task');
});
