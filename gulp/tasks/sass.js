'use strict';

var config = require('../config');
var gulp = require('gulp');
// var prefix = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var fingerprint = require('gulp-fingerprint');
var sass = require('gulp-sass');
var size = require('gulp-size');

// Styles
gulp.task('styles', function () {
  return gulp.src('app/scss/app.scss')
    // Leaving out recess support due to string interpolation missing in less v1.3 (which recess is dependent on)
    // .pipe(recess())
    .pipe(sass({
      outputStyle: 'expanded'
    })).on('error', sass.logError)
    .pipe(gulp.dest(config.dist + '/styles'))
    .pipe(size());
});


// Styles Dist
gulp.task('styles:dist', function () {
  var manifest = require('../../'+ config.dist + '/image-manifest');
  return gulp.src('app/scss/app.scss')
    // Leaving out recess support due to string interpolation missing in less v1.3 (which recess is dependent on)
    // .pipe(recess())
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    // .pipe(prefix('last 1 version'))  // add vendor prefixes if necessary
    .pipe(fingerprint(manifest, {verbose: true}))
    .pipe(csso())  // minify css
    .pipe(gulp.dest(config.dist + '/styles'))
    .pipe(size());
});
