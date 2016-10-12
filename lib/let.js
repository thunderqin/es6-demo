"use strict";

for (var i = 0; i < 10; i++) {}
// console.log(i) 报错

var a = [];

var _loop = function _loop(j) {
   a[j] = function () {
      console.log(j);
   };
};

for (var j = 0; j < 10; j++) {
   _loop(j);
}

a[6]();