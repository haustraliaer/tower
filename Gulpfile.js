
var gutil       = require('gulp-util'),
    sass        = require('gulp-sass'),
    lr          = require('tiny-lr'),
    http        = require('http'),
    path        = require('path'),
    ecstatic    = require('ecstatic'),
    gulp        = require('gulp'),
    browserify  = require('gulp-browserify'),
    concat      = require('gulp-concat'),
    imagemin    = require('gulp-imagemin');


var tlr = lr();
var __dirname = './build/';
var livereload = function (evt, filepath) {
  tlr.changed({
  body: {
    files: path.relative(__dirname, filepath)
  }
  });
};


// gulp tasks
 
gulp.task('styles', function () {
  return gulp.src('./app/sass/styles.scss')
  .pipe(sass())
  .pipe(gulp.dest('./build/assets/css/'));
});

gulp.task('scripts', function () {
  gulp.src(['./app/js/app.js'])
    .pipe(browserify({
      debug: true,
      transform: [ 'reactify' ]
    }))
    .pipe(gulp.dest('./build/assets/js/'));
});

gulp.task('images', function () {
  gulp.src(['./app/img/**/*.png', './app/img/**/*.gif'])
    .pipe(gulp.dest('./build/assets/img/'));
});

gulp.task('html', function () {
  gulp.src('./app/html/**/*')
    .pipe(gulp.dest('./build/'));
});

gulp.task('data', function () {
  gulp.src('./app/data/**/*')
    .pipe(gulp.dest('./build/'));
});

// default task

gulp.task('watch', function() {


  http.createServer(ecstatic({root: __dirname})).listen(8080);
  gutil.log(gutil.colors.green('HTTP server listening on port 8080'));

  tlr.listen(35729);
  gutil.log(gutil.colors.green('Livereload server listening on port 35729'));

  gulp.watch('app/sass/**', ['styles'])._watcher.on('all', livereload);
  gulp.watch('app/js/**', ['scripts'])._watcher.on('all', livereload);
  gulp.watch('app/img/**', ['images'])._watcher.on('all', livereload);
  gulp.watch('app/html/**', ['html'])._watcher.on('all', livereload);
  gulp.watch('app/data/**', ['data'])._watcher.on('all', livereload);

});

gulp.task('default', [ 'styles', 'scripts', 'images', 'html', 'data', 'watch' ]);

