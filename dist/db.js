'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

exports.default = function () {
  return _mongoose2.default.connect('mongodb://admin:admin@ds133964.mlab.com:33964/lucasfontesgaspareto', {
    useMongoClient: true
  });
};