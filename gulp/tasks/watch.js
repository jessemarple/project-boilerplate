'use strict';

// var config = require('../config.js');
var gulp = require('gulp');

// Watch
gulp.task('watch', function () {

    // Watch .scss files
    gulp.watch('app/scss/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('app/scripts/**/*.js', ['browserify']);

    // Watch image files
    gulp.watch('app/images/**/*', ['images']);

    // Watch .html files
    gulp.watch('app/**/*.html', ['html']);
});
