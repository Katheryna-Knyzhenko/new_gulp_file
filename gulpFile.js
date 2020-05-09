var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

function copyToCss (done) {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./src/css/'));
    done();
}
function print (done) {
    console.log('Hi print!');
    done();
}
// gulp.task(copyToCss);
function watchSass () {
    gulp.watch('./src/scss/**/*', copyToCss);
}
function sync (done) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 9000,
        tunnel: true,
        notify: false
    });
    browserSync.watch('out/').on('change', browserSync.reload);
    done();
}
gulp.task('default', gulp.series(print, watchSass));
gulp.task(sync);