'use strict';
const {src, dest, series, watch} = require('gulp');
const config         = require('./build.config.js');
const sass 			  					= require('gulp-sass');
const sassGlob 		  		= require('gulp-sass-glob');
const sourcemaps 	  	= require('gulp-sourcemaps');
const rename         = require('gulp-rename');



// Build Styles
function scss(done) {
	return src (config.css.base + 'main.scss')
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(rename("styles.css"))
		.pipe(sourcemaps.write())
		.pipe(dest(config.css.dest));
}

// Build Watch
function watchScss(done) {
	return watch(config.css.files, series(scss))
}


exports.scss = scss;
exports.watchScss = watchScss;
exports.dev = series(scss, watchScss);
exports.default = series(scss);
