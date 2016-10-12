'use strict';

var human = {
	say: function say() {
		console.log('hello');
	}
};

var worker = {
	__proto__: human,
	company: 'ali',
	work: function work() {
		console.log('work....');
	}
};

human.say();
worker.say();
worker.work();