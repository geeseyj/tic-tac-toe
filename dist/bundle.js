/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);
__webpack_require__(6);
__webpack_require__(8);
__webpack_require__(10);
__webpack_require__(12);
__webpack_require__(14);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: Lato, sans-serif; }\n\n.container > * {\n  margin-top: 32px;\n  position: absolute;\n  top: 0px;\n  left: 50%;\n  transform: translate(-50%); }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(7);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".board-outer {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 500ms, z-index 500ms;\n  width: 300px;\n  z-index: 0;\n  background-color: #fff; }\n  .board-outer.show {\n    transition: opacity 500ms 1300ms, z-index 500ms 1300ms;\n    z-index: 1;\n    opacity: 1; }\n  .board-outer .scoreboard {\n    display: flex;\n    justify-content: space-evenly;\n    margin-bottom: 40px;\n    align-items: center;\n    width: 100%; }\n    .board-outer .scoreboard .player {\n      font-size: 20px;\n      text-align: center;\n      padding: 10px;\n      min-width: 90px;\n      transition: box-shadow 1000ms ease-in-out, transform 1000ms ease-in-out;\n      border-radius: 5px; }\n      .board-outer .scoreboard .player.turn {\n        box-shadow: 5px 5px 10px gray;\n        transform: translate(-3px, -3px); }\n  .board-outer .board {\n    height: 300px;\n    width: 300px;\n    background-color: #000;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-content: space-between; }\n    .board-outer .board .space {\n      background-color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-size: 80px;\n      width: 98px;\n      height: 98px; }\n  .board-outer .reset-button {\n    display: flex;\n    justify-content: center;\n    margin-top: 40px; }\n  .board-outer .button {\n    position: relative;\n    top: 75px;\n    opacity: 0;\n    transition: top 1250ms, opacity 1250ms;\n    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275); }\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(9);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".button {\n  color: #000;\n  padding: 10px;\n  border: 2px solid black;\n  border-radius: 5px;\n  width: 90px;\n  text-align: center; }\n  .button.hoverable:hover, .button.active {\n    color: #fff;\n    background-color: #000; }\n  .button.clickable {\n    cursor: pointer; }\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(11);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".game-message {\n  align-items: center;\n  background-color: white;\n  border-radius: 5px;\n  border: 1px solid black;\n  box-shadow: grey 5px 5px 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  left: 50%;\n  max-width: 160px;\n  opacity: 0;\n  padding: 32px;\n  top: 150px;\n  transform: translate(-50%);\n  width: 50%;\n  z-index: -1; }\n  .game-message.show {\n    z-index: 2;\n    opacity: 1; }\n  .game-message > * {\n    margin-bottom: 20px; }\n    .game-message > *:last-child {\n      margin-bottom: 0; }\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(13);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".settings {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  transition: opacity 700ms, z-index 0ms 800ms;\n  z-index: 1;\n  background-color: #fff;\n  width: 300px; }\n  .settings.hide {\n    z-index: 0;\n    opacity: 0; }\n\n.setting {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 10px;\n  transition: opacity 1000ms 100ms; }\n  .setting.gone-back {\n    transition-duration: 500ms;\n    transition-delay: 0ms;\n    opacity: 0; }\n  .setting.muted {\n    transition-duration: 500ms;\n    transition-delay: 0ms;\n    opacity: 0.2; }\n  .setting h3,\n  .setting .button {\n    position: relative;\n    top: 75px;\n    opacity: 0;\n    transition-property: top, opacity;\n    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275), cubic-bezier(0.175, 0.885, 0.32, 1.275); }\n    .setting h3.show,\n    .setting .button.show {\n      transition-duration: 1000ms, 1000ms;\n      top: 0px;\n      opacity: 1; }\n  .setting h3 {\n    font-family: Montserrat;\n    text-align: center; }\n    .setting h3.show {\n      transition-delay: 700ms, 700ms; }\n  .setting .buttons-wrap {\n    display: flex;\n    justify-content: space-evenly;\n    width: 100%; }\n  .setting .button.show:nth-child(1) {\n    transition-delay: 1500ms, 1500ms; }\n  .setting .button.show:nth-child(2) {\n    transition-delay: 1700ms, 1700ms; }\n  .setting .button.show:nth-child(3) {\n    transition-delay: 1900ms, 1900ms; }\n\n.go-back {\n  margin-top: 20px; }\n", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//For the implementation of the game logic and minimax algorithm I leaned heavily on Ahmad Abdolsaheb's article here:
//https://medium.freecodecamp.org/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37
//Credit for the minimax algorithm should go to him. Thanks!
//The following is Ahmad Abdolsaheb's code :)

function emptyIndexies(board) {
  return board.filter(function (s) {
    return s != "O" && s != "X";
  });
}

function winning(board, player) {
  if (board[0] == player && board[1] == player && board[2] == player || board[3] == player && board[4] == player && board[5] == player || board[6] == player && board[7] == player && board[8] == player || board[0] == player && board[3] == player && board[6] == player || board[1] == player && board[4] == player && board[7] == player || board[2] == player && board[5] == player && board[8] == player || board[0] == player && board[4] == player && board[8] == player || board[2] == player && board[4] == player && board[6] == player) {
    return true;
  } else {
    return false;
  }
}

function minimax(newBoard, player) {

  // human
  var huPlayer = Game.players.player1.sign;
  // ai
  var aiPlayer = Game.players.player2.sign;

  //available spots
  var availSpots = emptyIndexies(newBoard);

  // checks for the terminal states such as win, lose, and tie and returning a value accordingly
  if (winning(newBoard, huPlayer)) {
    return { score: -10 };
  } else if (winning(newBoard, aiPlayer)) {
    return { score: 10 };
  } else if (availSpots.length === 0) {
    return { score: 0 };
  }

  // an array to collect all the objects
  var moves = [];

  // loop through available spots
  for (var i = 0; i < availSpots.length; i++) {
    //create an object for each and store the index of that spot that was stored as a number in the object's index key
    var move = {};
    move.index = newBoard[availSpots[i]];

    // set the empty spot to the current player
    newBoard[availSpots[i]] = player;

    //if collect the score resulted from calling minimax on the opponent of the current player
    if (player == aiPlayer) {
      var result = minimax(newBoard, huPlayer);
      move.score = result.score;
    } else {
      var result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }

    //reset the spot to empty
    newBoard[availSpots[i]] = move.index;

    // push the object to the array
    moves.push(move);
  }

  // if it is the computer's turn loop over the moves and choose the move with the highest score
  var bestMove;
  if (player === aiPlayer) {
    var bestScore = -10000;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    // else loop over the moves and choose the move with the lowest score
    var bestScore = 10000;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  // return the chosen move (object) from the array to the higher depth
  return moves[bestMove];
}

//End Ahmad Abdolsaheb's code :) Thanks Ahmad!

const Game = {
  board: null,
  players: null,

  resetBoard: function resetBoard() {
    $('.space').empty();
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  },

  resetGameVariables: function resetGameVariables() {
    this.resetBoard();
    this.players = {
      player1: {
        type: 'human',
        sign: 'X',
        wins: 0,
        opponent_key: 'player2',
        own_key: 'player1',
        display_name: 'Player1'
      },
      player2: {
        type: 'computer',
        sign: 'O',
        wins: 0,
        opponent_key: 'player1',
        own_key: 'player2',
        display_name: 'Computer'
      }
    };
  },

  showPlayersSelect: function showPlayersSelect() {
    var game_this = this;
    $('.player-option').removeClass('active').addClass('show clickable hoverable').click(function () {
      game_this.selectPlayers(this);
    });
    $('#players h3').addClass('show');
  },

  selectPlayers: function selectPlayers(element) {
    element.classList.add('active');
    $('.player-option').off('click').removeClass('clickable hoverable');
    $('#players').addClass('muted');

    this.showSignsSelect();

    if (element.id === "2-player") {
      this.players.player2.type = 'human';
      this.players.player2.display_name = 'Player2';
    }
  },

  showSignsSelect: function showSignsSelect() {
    var game_this = this;
    $('#signs').removeClass('gone-back muted');
    $('.sign-option').click(function () {
      game_this.selectSign(this);
    });
    $('.go-back').click(this.goBack.bind(this));
    $('.player-option').removeClass('clickable hoverable');
    $('.sign-option, .go-back').removeClass('active').addClass('clickable hoverable');
    $('#signs h3, .sign-option, .go-back').addClass('show');
  },

  selectSign: function selectSign(element) {
    element.classList.add('active');
    $('.sign-option').off('click').removeClass('clickable hoverable');
    $('#signs').addClass('muted');

    this.hideSettings();

    if (element.id === 'O') {
      this.players.player1.sign = 'O';
      this.players.player2.sign = 'X';
    }
  },

  goBack: function goBack() {
    var game_this = this;
    $('#signs').addClass('gone-back');
    $('.player-option.active').removeClass('active');
    $('.player-option').addClass('clickable hoverable');
    $('.player-option').click(function () {
      game_this.selectPlayers(this);
    });
    $('#players').removeClass('muted');
  },

  writeBoard: function writeBoard(board) {
    var writeSpace = function writeSpace(value, index) {
      if (typeof value !== 'number') {
        var selector = "#" + (index + 1);
        $(selector).html(value);
      }
    };

    board.map(writeSpace);
  },

  hideSettings: function hideSettings() {
    $('.settings').addClass('hide');
    $('.board-outer').addClass('show');
    $('#reset > .button').addClass('show hoverable clickable').click(this.resetAll);
    this.writeScoreboardNames();
    this.updateScoreboard();

    //allow time for the transition
    window.setTimeout(this.startGame.bind(this), 800);
  },

  writeScoreboardNames: function writeScoreboardNames() {
    $('.scoreboard #player1 .name').html(this.players.player1.display_name);
    $('.scoreboard #player2 .name').html(this.players.player2.display_name);
  },

  startTurn: function startTurn(player_key) {
    var player = this.players[player_key];
    if (player.type === "human") {
      this.startUserTurn(player);
    } else {
      this.handleComputerTurn(player);
    }
  },

  startGame: function startGame() {
    var first_move_player_key = Math.round(Math.random()) === 0 ? 'player1' : 'player2';
    this.startTurn(first_move_player_key);
  },

  userSelectSpace: function userSelectSpace(player, element) {
    this.board[element.id] = player.sign;
    element.textContent = player.sign;
    this.endUserTurn(player);
  },

  startUserTurn: function startUserTurn(player) {
    var game_this = this;
    this.indicateTurn(player);
    var available_spaces_selector = '#' + emptyIndexies(this.board).join(", #");
    $(available_spaces_selector).click(function () {
      game_this.userSelectSpace(player, this);
    });
  },

  endUserTurn: function endUserTurn(player) {
    $('.space').off('click');

    if (winning(this.board, player.sign)) {
      this.gameEnd(player);
    } else if (emptyIndexies(this.board).length === 0) {
      this.gameEnd();
    } else {
      this.startTurn(player.opponent_key);
    }
  },

  indicateTurn: function indicateTurn(player) {
    var id_selector = player.own_key;
    $('.player').removeClass('turn');
    $('#' + id_selector).addClass('turn');
  },

  handleComputerTurn: function handleComputerTurn(player) {
    this.indicateTurn(player);
    window.setTimeout(this.computerTurn.bind(this), 500, player);
  },

  computerTurn: function computerTurn(player) {
    var computer_move = minimax(this.board, player.sign);
    $('#' + computer_move.index).text(player.sign);
    this.board[computer_move.index] = player.sign;

    if (winning(this.board, player.sign)) {
      this.gameEnd(player);
    } else if (emptyIndexies(this.board).length === 0) {
      this.gameEnd();
    } else {
      this.startTurn(player.opponent_key);
    }
  },

  updateScoreboard: function updateScoreboard() {
    $('#player1 > .score').text(this.players.player1.wins + ' Win' + (this.players.player1.wins !== 1 ? 's' : ''));
    $('#player2 > .score').text(this.players.player2.wins + ' Win' + (this.players.player2.wins !== 1 ? 's' : ''));
  },

  gameEnd: function gameEnd() {
    var winner = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'none';


    this.showGameEndMessage(winner);

    if (winner !== 'none') {
      winner.wins += 1;
      this.updateScoreboard();
    }
  },

  showGameEndMessage: function showGameEndMessage() {
    var winner = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'none';

    var game_end_message;

    if (winner === 'none') {
      game_end_message = "It's a Draw!";
    } else if (winner.type === 'computer') {
      game_end_message = "The Computer Won!";
    } else {
      game_end_message = winner.display_name + ' Won!';
    }

    $('.space').off('click');
    $('.game-message').addClass('show');
    $('.game-message .message').html(game_end_message);
    $('.game-message .button').addClass('hoverable clickable');
    $('.game-message .play-again').click(this.playAgain.bind(this));
    $('.game-message .reset-all').click(this.resetAll.bind(this));
  },

  playAgain: function playAgain() {
    $('.game-message').removeClass('show');
    this.resetBoard();
    this.startGame();
  },

  resetAll: function resetAll() {
    this.resetGameVariables();
    $('.game-message, .board-outer').removeClass('show');
    $('#reset > .button').removeClass('show hoverable clickable').off('click');
    $('.settings').removeClass('hide');
    $('.settings *').removeClass('active muted clickable hoverable show');
    window.setTimeout(this.showPlayersSelect.bind(this), 500);
  },

  firstLoad: function firstLoad() {
    this.resetGameVariables();
    this.showPlayersSelect();
  }
};

$(document).ready(function () {
  Game.firstLoad();
});

/***/ })
/******/ ]);