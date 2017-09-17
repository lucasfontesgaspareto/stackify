'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

var StackSchema = _mongoose2.default.Schema({
  type: {
    type: String,
    enum: ['backend', 'frontend']
  },
  languages: [String],
  framworks: [String],
  test: [String]
});

exports.default = _mongoose2.default.model('Stack', StackSchema);