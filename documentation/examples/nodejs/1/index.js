'use strict';

const 
  chokidar = require('chokidar'),
  express = require('express'),
  webServer = require('./web-server'),
  liveHTMLValidator = require("live-html-validator");

const
  dest = './index.html',
  htmlValidator = new liveHTMLValidator({
    host: '127.0.0.1',
	  port: '8080'
  });

// Run Server
htmlValidator.run();

chokidar.watch(dest).on('change', (path) => {
  console.log('file changed');

  htmlValidator.check();
});

webServer();
