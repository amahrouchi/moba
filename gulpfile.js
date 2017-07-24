'use strict';

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    minCss       = require('gulp-minify-css'),
    sourcemaps   = require('gulp-sourcemaps'),
    babel        = require('gulp-babel'),
    browserify   = require('gulp-browserify')
;

// Build app CSS
gulp.task('app:sass', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(({outputStyle : 'compressed'})).on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(minCss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/public/css'));
});

// Build app JS
gulp.task('app:js', function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('app.js'))
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(sourcemaps.write('.'))
        // .pipe(uglify())
        .pipe(gulp.dest('./src/public/js'));
});

// Vendor js
gulp.task('vendor:js', function () {
    return gulp.src(['./node_modules/phaser-ce/build/phaser.min.js'])
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/public/js'));
});

// Default task
gulp.task('watch', ['app:sass', 'app:js'], function () {
    gulp.watch(
        [
            './src/js/**/*.js',
            './src/scss/**/*.scss'
        ],
        ['app:sass', 'app:js']
    );
});

// Default task
gulp.task('default', [
    'app:sass',
    'app:js',
    'vendor:js'
]);