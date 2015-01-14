var gulp = require('gulp'),
  concat = require('gulp-concat'),
  watch = require('gulp-watch'),
  minifyCSS = require('gulp-minify-css'),
  templateCache = require('gulp-angular-templatecache'),
  sass = require('gulp-sass'),
  clean = require('gulp-clean'),
  livereload = require('gulp-livereload'),
  runSequence = require('run-sequence');

var vendorSrcFiles = [
  'bower/jquery/dist/jquery.min.js',
  'bower/lodash/dist/lodash.min.js',
  'bower/moment/min/moment.min.js',
  'bower/angular/angular.min.js',
  'bower/angular-bootstrap/ui-bootstrap-tpls.min.js',
  'bower/angular-cookies/angular-cookies.min.js',
  'bower/angular-loading-bar/build/loading-bar.min.js',
  'bower/angular-resource/angular-resource.min.js',
  'bower/angular-ui-router/release/angular-ui-router.min.js',
  'bower/bootstrap/dist/js/bootstrap.min.js',
  'bower/chartist/dist/chartist.min.js',
  'bower/fuelux/dist/js/fuelux.min.js',
  'bower/ngDialog/js/ngDialog.min.js',
  'bower/numeral/min/numeral.min.js',
  'bower/stringjs/lib/string.min.js',
  'bower/sweetalert/lib/sweet-alert.min.js',
  'bower/toastr/toastr.min.js'
];

var vendorSrcMaps = [
  'bower/angular/angular.min.js.map',
  'bower/angular-cookies/angular-cookies.min.js.map',
  'bower/angular-resource/angular-resource.min.js.map',
  'bower/chartist/dist/chartist.min.js.map'
];

var cssFiles = [
  'bower/bootstrap/dist/css/bootstrap.min.css',
  'bower/angular-loading-bar/build/loading-bar.min.css',
  'bower/animate.css/animate.min.css',
  'bower/fontawesome/css/font-awesome.min.css',
  'bower/chartist/dist/chartist.min.css',
  'bower/fuelux/dist/css/fuelux.min.css',
  'bower/ngDialog/css/ngDialog.min.css',
  'bower/ngDialog/css/ngDialog-theme-default.min.css',
  'bower/sweetalert/lib/sweet-alert.css',
  'bower/toastr/toastr.min.css'
];

var appSrcFiles = [
  'client/**/*.module.js',
  'client/**/**/*.module.js',
  'client/app.module.js',
  'client/*.js',
  'client/**/*.js',
  'client/**/**/*.js',
  'client/**/**/**/*.js',
  'build/*.js'
];

gulp.task('home-templates', function () {
  return gulp.src([
    './client/features/home/*.html'
  ]).pipe(templateCache({
    module: 'app.home',
    root: 'home/',
    filename: 'app-home-templates.js'
  })).pipe(gulp.dest('./build'));
});

gulp.task('customer-templates', function () {
  return gulp.src([
    './client/features/customer/*.html'
  ]).pipe(templateCache({
    module: 'app.customer',
    root: 'customer/',
    filename: 'app-customer-templates.js'
  })).pipe(gulp.dest('./build'));
});

gulp.task('build', function (cb) {
  runSequence([
    'home-templates',
    'customer-templates'
  ], 'app', cb);
});

gulp.task('build-templates', function (cb) {
  runSequence([
    'home-templates',
    'customer-templates'
  ], cb);
});

gulp.task('vendor-scripts', function () {
  gulp.src(vendorSrcFiles)
    .pipe(concat('vendor.js', {newline: ';'}))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('vendor-sourcemaps', function () {
  gulp.src(vendorSrcMaps)
    .pipe(gulp.dest('./public/js'));
});

gulp.task('app', function () {
  gulp.src(appSrcFiles)
    .pipe(concat('client.js', {newline: ';'}))
    .pipe(gulp.dest('./public/js'))
    .pipe(livereload());
});

gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/styles')
      .pipe(livereload()))
});

gulp.task('vendor-css', function () {
  return gulp.src(cssFiles)
    .pipe(concat('vendor.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/styles'));
});

gulp.task('move-fonts', function () {
  return gulp.src([
    'bower/bootstrap/dist/fonts/**',
    'bower/fontawesome/fonts/**',
    'bower/fuelux/dist/fonts/**'
  ]).pipe(gulp.dest('./public/fonts'));
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(['./client/features/**/*.html'], ['build-templates']);
  gulp.watch(appSrcFiles, ['build']);
});

gulp.task('default', [
  'move-fonts',
  'vendor-css',
  'vendor-scripts',
  'vendor-sourcemaps',
  'build',
  'watch']);
