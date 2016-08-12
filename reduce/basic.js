/*
用 reduce 实现简单的计算
*/

const { equal } = require("../equal");

function joinStrings(array) {
	// ???
}

equal(
	joinStrings([]),
	""
);

equal(
	joinStrings(["a", "b", "c"]),
	"abc"
);

function sumNumbers(array) {
	// ???
}

equal(
	sumNumbers([]),
	0
);

equal(
	sumNumbers([1, 2, 3]),
	6
);