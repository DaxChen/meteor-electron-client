var gulp = require('gulp');
var shell = require('gulp-shell');
var execSync = require('child_process').execSync;


// ======== meteor-build-client ========
gulp.task('meteor-build-client', function() {
  execSync('(cd meteor && ' +
  '../node_modules/.bin/meteor-build-client ../meteor-build/ -p "")', {
    stdio: [0, 1, 2],
  });
});


// ======== move files ========
gulp.task('copy-meteor-to-build', function() {
  return gulp
    .src('./meteor-build/**/*')
    .pipe(gulp.dest('./build'));
});

gulp.task('copy-electron-to-build', function() {
  return gulp
    .src('./electron/**/*')
    .pipe(gulp.dest('./build'));
});

var del = require('del');
gulp.task('clean-build', function() {
  return del.sync([
    'build/**/*',
    '!build',
  ]);
});

gulp.task('copy-all', [
  'clean-build',
  'copy-meteor-to-build',
  'copy-electron-to-build',
]);


// ======== electron ========
gulp.task('run-electron', ['copy-all'], shell.task([
  'electron ./build',
]));

var packager = require('electron-packager');
var argv = require('yargs').argv;
// usage: gulp build-electron --name="MY_APP_NAME"
gulp.task('build-electron', ['copy-all'], function() {
  packager({
    dir: './build',
    name: (argv.name ? argv.name : 'MyApp'),
    all: false, // true will build linux, win32, darwin. with ia32, x64
    platform: ['darwin'], // optional if "all" is set true
    arch: 'x64',
    version: '0.33.0',
    // icon: 'icon', // ignore the file extension, packager will do the job!
    // uncomment the following line if anything you want to ignore (Regex)
    // ignore: './electron/node_modules/*',
    // prune: true,
    overwrite: true,
    asar: true,
  }, function done(err, appPath) {
    if (err) {
      throw console.error(err);
    }
    console.log('Done packaging electron app!\n',
    'Your app is at' + appPath);
  });
});


// ======== commands ========
gulp.task('build', [
  'meteor-build-client',
  'build-electron',
]);

gulp.task('default', [
  'meteor-build-client',
  'run-electron',
]);
