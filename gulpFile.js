var {server} = require  ("gulp-server-livereload");
var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload = require('gulp-server-livereload');
var concat = require('gulp-concat'),
gulp = require('gulp');
var uglyfly = require('gulp-uglyfly');
var react = require('gulp-react');
var imagemin = require('gulp-imagemin');
var terser = require('gulp-terser');
var babel = require('gulp-babel');


function copy (done) {
    gulp.src('./src/scss/App.scss')
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

function watchSass () {
    gulp.watch('./src/scss/**/*', copy);
}
function sync (done) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 9000,


    });

    done();
}
gulp.task('apply-prod-environment', function() { process.env.NODE_ENV = 'production'; });
// exports.f = () => (
//     gulp.src('src/bird.jpg')
//         .pipe(imagemin())
//         .pipe(gulp.dest('./src/img'))
// );

gulp.task('scripts', function() {
    return gulp.src(['./src/js/App.js', './src/js/App2.js'])
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(concat('All.js'))
        .pipe(uglyfly())
        .pipe(gulp.dest('./src/dist/'));
});
gulp.task('webserver', function() {
    gulp.src('')
        .pipe(server({
            livereload: true,
            defaultFile: 'index.html',
            directoryListing: false,
            open: false
        }));
});
gulp.task('default', gulp.series(print, watchSass));
gulp.task(sync);
gulp.task(print);