/*
用 reduce 实现 map
*/

const { equal } = require("../equal");

function map(array, fn) {
	// ???
}

equal(
	map([1,2,3,4], x => x + 1),
	[2,3,4,5]
);

equal(
	map([1,2,3,4], x => x * 2),
	[2,4,6,8]
);