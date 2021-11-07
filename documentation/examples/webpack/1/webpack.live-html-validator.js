'use strict';

const
  htmlValidator = require("live-html-validator");

const 
  $htmlValidator = new htmlValidator({
    host: '127.0.0.1', 
    port: '8080'
  });


class HTMLValidator {
  
  constructor() {
    $htmlValidator.run();
  }

  apply(compiler) {
    compiler.hooks.done.tap('LiveHtmlValidatorWebPack', (stats) => {
      $htmlValidator.check();
    });
  }

}

module.exports = HTMLValidator;
