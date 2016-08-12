/*
保留数组总和超过 0 的数组
*/

const { equal } = require("../equal");

function sumGreaterThanZero(arrays) {
	// ???
}

var input = [
	[1, 2, 3],
	[-1, -2, -3, -4],
	[-1, 1, 2, -2, 3],
	[0, 0, 0, 0],
	[0, 0, 0, 1],
];

equal(
	sumGreaterThanZero(input),
	[
		[1, 2, 3],
		[-1, 1, 2, -2, 3],
		[0, 0, 0, 1],
	]
);
