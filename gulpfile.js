var gulp = require("gulp"),
    browserify = require("browserify"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),
    tslint = require("gulp-tslint"),
    tsc = require("gulp-typescript"),
    sourcemaps = require("gulp-sourcemaps"),
    uglify = require("gulp-uglify"),
    runSequence = require("run-sequence"),
    mocha = require("gulp-mocha"),
    istanbul = require("gulp-istanbul"),
    browserSync = require('browser-sync').create();


//build tsc
var tsProject = tsc.createProject("app/ts/tsconfig.json");
gulp.task("build-app", function() {
    return gulp.src([
            "app/ts/**/**/*.ts"
        ])
        .pipe(tsc(tsProject))
        .js.pipe(gulp.dest("app/js"));
});

//test coverage report.
gulp.task("istanbul:hook", function() {
    return gulp.src(['app/js/scripts.js'])
        // Covering files
        .pipe(istanbul())
        // Force `require` to return covered files
        .pipe(istanbul.hookRequire());
});

//run unit tests
gulp.task("run-tests", ["istanbul:hook"], function() {
    return gulp.src('app/js/tests/*.tests.js')
        .pipe(mocha({ ui: 'bdd' }))
        .pipe(istanbul.writeReports());
});