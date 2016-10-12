'use strict';

function add() {
	for (var _len = arguments.length, x = Array(_len), _key = 0; _key < _len; _key++) {
		x[_key] = arguments[_key];
	}

	console.log(x);
}

add(1, 2, 35);
add('nimei');
add({ a: 1 });