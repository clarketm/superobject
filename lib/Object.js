'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Check for nested JavaScript object value from string key
 *
 * @memberof  Object.prototype
 * @param     {String}              path property
 * @return    {Boolean}             has property value
 */
Object.prototype.hasNested = function (path) {
  var self = this;
  path = path.replace(/\[(\w+)\]/, '.$1');
  path = path.replace(/^\./, '');

  var keys = path.split('.');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if ((typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && key in self) self = self[key];else return false;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
};

/**
 * Get nested JavaScript object value from string key
 *
 * @memberof  Object.prototype
 * @param     {String}              path property
 * @return    {*}                   property value
 */
Object.prototype.getNested = function (path) {
  var self = this;
  path = path.replace(/\[(\w+)\]/, '.$1');
  path = path.replace(/^\./, '');

  var keys = path.split('.');
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var key = _step2.value;

      if ((typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && key in self) self = self[key];else return;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return self;
};

exports.default = Object;