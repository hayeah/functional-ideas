/*
用 reduce 构建深度嵌套的数组
*/

const { equal } = require("../equal");

function nested(array) {
	// ???
}

equal(
	nested([]),
	[]
);

equal(
	nested([1,2,3,4]),
	[4, [3, [2, [1, []]]]]
);

