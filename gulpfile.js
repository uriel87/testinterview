
var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    browserSync = require('browser-sync'),
    del = require('del');



gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
    })
});

gulp.task('watch', ['browserSync'], function (){
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('./**/*.html', browserSync.reload);
    gulp.watch('./js/**/*.js', browserSync.reload);
    gulp.watch('./css/**/*.css', browserSync.reload);
});

gulp.task('useref', function(){
    return gulp.src('**/*.html')
        .pipe(useref())
        .pipe(gulpIf('./js/**/*.js', uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('./css/*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

gulp.task('clean:dist', function() {
    return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

gulp.task('default', ['watch', 'useref']);


