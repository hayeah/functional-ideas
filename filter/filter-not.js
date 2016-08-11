/*
用 filter 实现 filterNot。 filterNot 保留不符合条件的元素。
*/


const { equal } = require("../equal");

function filterNot(array, test) {
	// ???
}

equal(
	filterNot([1, 2, 3, 2, 1], x => x === 1),
	[2, 3, 2]
);

equal(
	filterNot([1, -1, 2, -2, 3, -3], x => x > 0),
	[-1, -2, -3]
);


