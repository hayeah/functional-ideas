/*
用 for loop 实现 filter
*/


const { equal } = require("../equal");

function filter(array, fn) {
	// ???
}

equal(
	filter([1, 2, 3, 2, 1], x => x === 1),
	[1, 1]
);

equal(
	filter([1, -1, 2, -2, 3, -3], x => x > 0),
	[1, 2, 3]
);


