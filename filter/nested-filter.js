/*
有多个数组，只保留负数有 2 个或更多的数组。

不要移除输出数组的正数。
*/


const { equal } = require("../equal");

function keepArraysWithManyNegativeNumbers(array) {
	// ???
}

var input = [
	[1, 2, -3],
	[1, -1, 2, -1],
	[],
	[1, 2],
	[-1, -2, -3, 1, 2, 3],
];

var output = [
	[1, -1, 2, -1],
	[-1, -2, -3, 1, 2, 3],
];

equal(keepArraysWithManyNegativeNumbers(input), output);
