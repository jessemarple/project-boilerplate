'use strict';

var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var config = require('../config');

// Clean
gulp.task('clean', function () {
    return gulp.src([config.dist + '/styles', config.dist + '/scripts', config.dist + '/images'], {read: false}).pipe(rimraf());
});
