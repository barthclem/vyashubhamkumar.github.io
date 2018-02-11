var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var minifyCss = require('gulp-clean-css');
var uglifyJS = require('gulp-uglify');
var pump = require('pump');
var imageMin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var handlebars = require('gulp-compile-handlebars');
var less = require('gulp-less');

//Image Minification Task
gulp.task('images', function() {
	gulp.src('./src/img/*')
	// .pipe(imageMin())
		.pipe(gulp.dest('./dest/img/'))
});

// CSS Minification
gulp.task('minify-css', function() {
  return gulp.src('./src/css/**/*')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dest/css'))
    .pipe(browserSync.stream());
});

// Javascript Uglify Task
gulp.task('compress-js', function (cb) {

	
  pump([
        gulp.src('./dest/vendor/bootstrap/**/*.js'),
        uglifyJS(),
        gulp.dest('./dest/vendor/bootstrap/')
    ],
    cb
  )
});


//HTML Tempelating Task
gulp.task('templating-task', function(){

	var data = {};

	var options = {
		batch: ['./src/views/partials']
	}
	return gulp.src(['./src/views/**/*.hbs' ,'!./src/views/partials/**/*.hbs'])
			.pipe(handlebars(data, options))
			.pipe(rename(function( path ) {
				path.extname = '.html'
			}))
			.pipe(gulp.dest('./'));

})

gulp.task('serve', function () {
	browserSync.init({
		server: './'
	});
})

//Default Task
gulp.task('default',['images','compress-js', 'minify-css', 'templating-task'], function(){

	browserSync.init({
		server: './'
	});

	gulp.watch('./src/css/**/*.less', ['minify-css']);
	gulp.watch('./src/img/**/*', ['images']);
	gulp.watch('src/js/**/*.js', ['compress-js']);
	gulp.watch('./src/views/**/*.hbs', ['templating-task']);
	gulp.watch('./*.html', browserSync.reload);
});