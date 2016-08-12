/*
加总每个数字的乘基
*/

const { equal } = require("../equal");

function nestedSum(array) {
	return array.reduce((sum, numbers) => {
		return sum + numbers.reduce((product, number) => {
			return product * number;
		}, 1);
	}, 0);
}

var input = [
	[1, 2, 3], // 6
	[3, 5], // 15
	[2, 4] // 8
];

equal(
	nestedSum(input),
	29
);
