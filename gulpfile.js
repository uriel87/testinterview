
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
            baseDir: 'src'
        },
    })
});

gulp.task('watch', ['browserSync'], function (){
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('src/**/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', browserSync.reload);
    gulp.watch('src/css/**/*.css', browserSync.reload);
});

gulp.task('useref', function(){
    return gulp.src('src/**/*.html')
        .pipe(useref())
        .pipe(gulpIf('src/js/**/*.js', uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('src/css/*.css', cssnano()))
        .pipe(gulp.dest('bundle'))
});

gulp.task('clean:bundle', function() {
    return del.sync(['bundle/**/*', '!bundle/images', '!bundle/images/**/*']);
});

gulp.task('default', ['watch', 'useref']);


