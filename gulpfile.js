var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('gulp-cssnext');

gulp.task('stylesheets', function() {
  gulp.src('assets/stylesheets/application.css')
  .pipe(postcss([
    require('postcss-import')
  ]))
  .pipe(cssnext())
  .pipe(gulp.dest('static/css'));
});

gulp.task('watch', function() {
  gulp.watch('assets/stylesheets/**/*.css', ['stylesheets']);
});

gulp.task('default', ['watch']);
