'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var name = 'guolei';
var age = '24';
var add = function add(a, b) {
  return a + b;
};
var add2 = function add2() {
  return (arguments.length <= 0 ? undefined : arguments[0]) + (arguments.length <= 1 ? undefined : arguments[1]);
};

exports.name = name;
exports.age = age;
exports.add = add;
exports.add2 = add2;