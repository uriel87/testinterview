
var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    browserSync = require('browser-sync')


gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: '/'
        },
    })
});

gulp.task('watch', ['browserSync'], function (){
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('**/*.html', browserSync.reload);
    gulp.watch('./js/**/*.js', browserSync.reload);
    console.log('watch task finished');

});

gulp.task('useref', function(){
    return gulp.src('**/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
    console.log('useref task finished');
});

gulp.task('default', ['watch', 'useref']);

