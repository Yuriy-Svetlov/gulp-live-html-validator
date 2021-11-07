/**
 * Copyright (c) Yuriy Svetlov
 * https://github.com/Yuriy-Svetlov
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const
	liveHTMLValidator = require('live-html-validator'),
	Transform = require('stream').Transform;


class Server{

	constructor(options){
		this.liveHTMLValidator = new liveHTMLValidator(options);
	}


	run(){
		this.liveHTMLValidator.run();
	}


	check(){
		let transformStream = new Transform({objectMode: true});
		let lastFile = null;

		transformStream._transform = function(file, encoding, callback) {
			let error = null;
			let output = file;

			lastFile = file;

			callback(error, output);
		}

		transformStream._flush = function(callback){
			if(null != lastFile){
				this.liveHTMLValidator.check();
			}

			callback();
		}.bind(this);

		return transformStream;
	}

}

module.exports = Server;
