/*
链接使用 map 和 filter
*/

const { equal } = require("../equal");

var presidents = [
	{ id: 1, name: "George Washington", year: 1789 },
	{ id: 2, name: "John Adams", year: 1797 },
	{ id: 3, name: "Thomas Jefferson", year: 1801 },
	{ id: 4, name: "James Madison", year: 1809 },
	{ id: 5, name: "James Monroe", year: 1817 },
];

function namesStartingWithJ(presidents) {
	// ???
}

// 输出名字起头为 J 的名字
equal(
	namesStartingWithJ(presidents),
	["John Adams", "James Madison", "James Monroe"]
);

// 输出名字起头为 J 的年份
function yearsStartingWithJ(presidents) {
	// ???
}

equal(
	yearsStartingWithJ(presidents),
	[1797, 1809, 1817]
);