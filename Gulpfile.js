var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	webserver = require('gulp-webserver'),
	watch = require('gulp-watch');

gulp.task('sass', function() {
	return gulp.src('assets/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('assets/css'));
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      host: 'localhost',
      port: '9000',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});


gulp.task('watch', function() {
	gulp.watch('assets/scss/**/*.scss', ['sass']);
});

gulp.task('build', ['sass']);
gulp.task('default', ['build', 'webserver', 'watch']);