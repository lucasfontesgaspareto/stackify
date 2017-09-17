'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stack = require('./stack');

var _stack2 = _interopRequireDefault(_stack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (router) {
  router.post('/stack', _stack2.default.create).get('/stack', _stack2.default.read).get('/stack/:id', _stack2.default.read).patch('/stack/:id', _stack2.default.update).del('/stack/:id', _stack2.default.delete);
};