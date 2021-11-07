# gulp-live-html-validator (Live HTML Validator)

![Live HTML Validator](https://raw.githubusercontent.com/Yuriy-Svetlov/gulp-live-html-validator/main/images/on_128x128_v1.png)

This module is for the browser plugin «[Live HTML Validator](https://live-html-validator.com)» — this is the browser plugin for real-time HTML validation of the browser page during web development.

[live-html-validator.com](https://live-html-validator.com/)

You may also want to use: 
* [live-reload-browser-page](https://live-reload-browser-page.com/)
* [live-alert-browser-page](https://live-alert-browser-page.com/)

![Live HTML Validator](https://raw.githubusercontent.com/Yuriy-Svetlov/gulp-live-html-validator/main/images/main.png)


Main documentation are [live-html-validator](https://github.com/Yuriy-Svetlov/live-html-validator)

## Installs

**Step - 1** 

You need to install the browser plugin [Live HTML Validator](https://live-html-validator.com/) if you have not already installed it for:
  * [Google Chrome](#)
  * Firefox (not yet available)
  
**Step - 2**
```shell
npm i gulp-live-html-validator --save-dev
```

##  How to use

[Example of how to establish a connection to the plugin «**Live HTML Validator**»](https://github.com/Yuriy-Svetlov/live-html-validator/tree/main/documentation/examples/%D1%81onnect_to_server)

```javascript
const 
  gulp = require('gulp'),
  htmlValidator = require("gulp-live-html-validator"),
  plumber = require('gulp-plumber'),
  htmlmin = require('gulp-htmlmin');

const 
  htmlValidatorMain = new htmlValidator({
    host: '127.0.0.1', 
    port: '8080'
  });


function html() {
  return gulp.src('src/**/*.html')    
  .pipe(plumber())
  .pipe(htmlmin())
  .pipe(htmlValidatorMain.check())
  .pipe(gulp.dest('./dest/'))
}


function watch(){
  htmlValidatorMain.run();

  gulp.watch('src/**/*.html', gulp.series(html));
}


exports.html = html;
exports.watch = watch;
```

##  Examples:

* [example-1](https://github.com/Yuriy-Svetlov/gulp-live-html-validator/tree/main/documentation/examples/1)
* [example-2](https://github.com/Yuriy-Svetlov/gulp-live-html-validator/tree/main/documentation/examples/2)
* [other useful examples for Gulp](https://github.com/Yuriy-Svetlov/live-html-validator/tree/main/documentation/examples/gulp)

##  API

* [https://github.com/Yuriy-Svetlov/live-html-validator](https://github.com/Yuriy-Svetlov/live-html-validator#api)
