'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');

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

gulp.task('clean', function() {
    del(['dist', 'js/app*.js']);
});

gulp.task('watch', function() {
  gulp.watch('js/main.js', ['concatScripts']);
});

gulp.task("build", ["minifyScripts"], function() {
  return gulp.src(['css/**', 'js/app.min.js', 'index.html',
                  'img/**', 'fonts/**'], { base: './'})
              .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watch']);

gulp.task("default", ["clean"], function() {
  gulp.start('build');
});
