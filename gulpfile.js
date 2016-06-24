'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task("concatScripts", function() {
  return gulp.src([
    'js/jquery.min.js',
    'js/jquery.swipebox.min.js',
    'js/bootstrap.min.js',
    'js/main.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'));
});

gulp.task("minifyScripts", ["concatScripts"], function() {
  return gulp.src('js/app.js')
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('js'));
});

gulp.task("build", ["minifyScripts"]);

gulp.task("default", ["build"]);
