/*
把键值数组转成对象
*/

const { equal } = require("../equal");

function pairsToObject(array) {
	// ???
}

equal(
	pairsToObject([]),
	{}
);

equal(
	pairsToObject([["a", 1], ["b", 2], ["c", 3]]),
	{ a: 1, b: 2, c: 3 }
);

