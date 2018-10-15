(function(){

  'use strict';

  const gulp          = require('gulp');
  const gulpConcat    = require('gulp-concat');
  const gulpJsmin     = require('gulp-jsmin');
  const gulpRename    = require('gulp-rename');
  const gulpUglifycss = require('gulp-uglifycss');
  const tone          = require('tone');
  const jquery        = require('jquery');

  gulp.task('js', function(){

    return gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/tone/build/Tone.min.js', 'build/js/index.js'])
      .pipe(gulpConcat('app.js'))
      .pipe(gulpJsmin())
      .pipe(rename({'suffix': '.min'}))
      .pipe(gulp.dest('public/js/'));
  });
})();
