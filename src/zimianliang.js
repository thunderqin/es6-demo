var human = {
	say(){
		console.log('hello');
	}
}

var worker = {
	__proto__: human,
	company: 'ali',
	work(){
		console.log('work....');
	}

};

human.say();
worker.say();
worker.work();

