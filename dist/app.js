'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _kcors = require('kcors');

var _kcors2 = _interopRequireDefault(_kcors);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
var router = new _koaRouter2.default();

// middlewares to be before routers
app.use((0, _koaLogger2.default)());
app.use((0, _kcors2.default)({
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));
app.use((0, _koaBodyparser2.default)());

// load modules
(0, _routes2.default)(router);

app.use(router.routes());
app.use(router.allowedMethods());

exports.default = app;