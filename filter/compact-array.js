/*
把数组里为空的元素剔除掉
*/


const { equal } = require("../equal");

function compact(array) {
  // ???
}

equal(
	compact([]),
	[]
);

equal(
	compact([0, undefined, 1, 2, undefined]),
	[0, 1, 2]
);
