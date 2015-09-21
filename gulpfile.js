var gulp = require('gulp');
var shell = require('gulp-shell');
var execSync = require('child_process').execSync;
var runSequence = require('run-sequence');


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
gulp.task('run-electron-localhost', shell.task(['electron .']));

gulp.task('watch-all', function() {
  gulp.watch('./electron/**/*', ['copy-all']);
});

// ======== build and package ========
var packager = require('electron-packager');
var argv = require('yargs').argv;
// usage: gulp build-electron --name="MY_APP_NAME"
gulp.task('build-electron', ['copy-all'], function() {
  packager({
    dir: './build',
    name: (argv.name ? argv.name : 'MyApp'),
    all: false, // true will build linux, win32, darwin. with ia32, x64
    platform: [argv.platform], // optional if "all" is set true
    arch: argv.arch,
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

// usage: gulp build-electron-all --name="MY_APP_NAME"
gulp.task('build-electron-all', ['copy-all'], function() {
  packager({
    dir: './build',
    name: (argv.name ? argv.name : 'MyApp'),
    all: true, // true will build linux, win32, darwin. with ia32, x64
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
gulp.task('default', [
  'meteor-build-client',
  'run-electron',
]);

gulp.task('preview', [
  'run-electron-localhost',
]);

gulp.task('watch', [
  'meteor-build-client',
  'watch-all',
]);

gulp.task('build', function() {
  if (!argv.platform) {
    console.error('[ERROR] You need to specify a "playform" to build');
    console.error('  eg. gulp build --platform="darwin" --arch="x64"');
    console.error('or use "gulp build-all" to build for all platforms.');
    console.warn('For more information, see README.md build section.');
    return;
  }
  if (!argv.arch) {
    console.error('[ERROR] You need to specify a "arch" to build');
    console.error('  eg. gulp build --platform="linux" --arch="x64"');
    console.warn('For more information, see README.md build section.');
    return;
  }
  runSequence('meteor-build-client', 'build-electron');
});

gulp.task('build-all', [
  'meteor-build-client',
  'build-electron-all',
]);
