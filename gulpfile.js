'use strict';

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    minCss       = require('gulp-minify-css')
;

// Build app CSS
gulp.task('sass', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass(({outputStyle : 'compressed'})).on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(minCss())
        .pipe(gulp.dest('./src/public/css'));
});

// gulp.task('sass:watch', ['sass'], function () {
//     gulp.watch('./src/scss/**/*.scss', ['sass']);
// });

// Build app JS
gulp.task('js', function () {
    return gulp.src(['./src/js/**/*.js', './node_modules/phaser-ce/build/phaser.min.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/public/js'));
});

// gulp.task('js:watch', ['js'], function () {
//     gulp.watch('./src/js/**/*.js', ['js']);
// });

// Default task
gulp.task('watch', ['sass', 'js'], function () {
    gulp.watch(
        [
            './src/js/**/*.js',
            './src/scss/**/*.scss'
        ],
        ['sass', 'js']
    );
});

// Default task
gulp.task('default', ['saas', 'js']);