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

//ts lint
// gulp.task("lint", function() {
//     return gulp.src([
//             "app/**/**.ts"
//         ])
//         .pipe(tslint({}))
//         .pipe(tslint.report("verbose"));
// });

//ts build
var tsProject = tsc.createProject("app/ts/tsconfig.json");
gulp.task("build-app", function() {
    return tsProject.src()
        .pipe(tsc(tsProject))
        .js.pipe(gulp.dest("app/js"));
});

//ts watch
// gulp.task("watch", ["default"], function() {
//     gulp.watch(["app/**/**.ts"], ["default"]);
// });