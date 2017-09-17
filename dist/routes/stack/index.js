'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Stack = require('./../../models/Stack');

var _Stack2 = _interopRequireDefault(_Stack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {

  create: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
      var stack;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              stack = new _Stack2.default(ctx.request.body);
              _context.prev = 1;
              _context.next = 4;
              return stack.save();

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context['catch'](1);

              ctx.throw(404);

            case 9:

              ctx.status = 200;
              ctx.body = stack;

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[1, 6]]);
    }));

    return function create(_x) {
      return _ref.apply(this, arguments);
    };
  }(),

  read: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
      var stack;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              stack = [];

              if (!ctx.params.id) {
                _context2.next = 13;
                break;
              }

              _context2.prev = 2;
              _context2.next = 5;
              return _Stack2.default.findById(ctx.params.id);

            case 5:
              stack = _context2.sent;
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2['catch'](2);

              ctx.throw(404);

            case 11:
              _context2.next = 17;
              break;

            case 13:
              _context2.next = 15;
              return _Stack2.default.find();

            case 15:
              stack = _context2.sent;

              if (!stack || !stack.length) {
                ctx.throw(404);
              }

            case 17:

              ctx.status = 200;
              ctx.body = stack;

            case 19:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[2, 8]]);
    }));

    return function read(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }(),

  update: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ctx) {
      var stack;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              stack = {};
              _context3.prev = 1;
              _context3.next = 4;
              return _Stack2.default.findByIdAndUpdate(ctx.params.id, ctx.request.body);

            case 4:
              stack = _context3.sent;
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3['catch'](1);

              ctx.throw(404);

            case 10:

              ctx.status = 204;

            case 11:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[1, 7]]);
    }));

    return function update(_x4) {
      return _ref3.apply(this, arguments);
    };
  }(),

  delete: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ctx) {
      var stack;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              stack = {};
              _context4.prev = 1;
              _context4.next = 4;
              return _Stack2.default.findByIdAndRemove(ctx.params.id);

            case 4:
              stack = _context4.sent;
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4['catch'](1);

              ctx.throw(404);

            case 10:

              ctx.status = 204;

            case 11:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[1, 7]]);
    }));

    return function _delete(_x5) {
      return _ref4.apply(this, arguments);
    };
  }()
};