
const 
  gulp = require('gulp'),
  htmlValidator = require("gulp-live-html-validator"),
  plumber = require('gulp-plumber'),
  webServer = require('./web-server'),
  htmlmin = require('gulp-htmlmin');

const 
  htmlValidatorMain = new htmlValidator({
    host: '127.0.0.1', 
    port: '8080'
  });

const 
  htmlWatch = 'src/**/*.html',
  htmlSrc = ['src/**/*.html'],
  htmlDest = './dest/';


function html() {
  return gulp.src(htmlSrc)    
  .pipe(plumber())
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true,
    removeScriptTypeAttributes: true, // Remove type="text/javascript" from script tags. Other type attribute values are left intact
    includeAutoGeneratedTags: false,
    ignoreCustomComments: [ // ignore noindex comments
        /^noindex/,
        /\/noindex+$/
    ], 
    minifyJS: false,
    minifyCSS: false,
    trimCustomFragments: true, // Удаляет пустой пространство около игнорируемых элементов
    //ignoreCustomFragments: [ (/\{\%[^\%]*?\%\}(\s)?/g) ], // Игнорирования тега
  }))
  .pipe(htmlValidatorMain.check())
  .pipe(gulp.dest(htmlDest))
}


function watch(){
  webServer();
  htmlValidatorMain.run();

  gulp.watch(htmlWatch, gulp.series(html));
}


exports.html = html;
exports.watch = watch;
exports.start = gulp.series(html, watch);
