/*

收集对象的键值到一个数组

*/

var presidents = [
	{ id: 1, name: "George Washington", year: 1789 },
	{ id: 2, name: "John Adams", year: 1797 },
	{ id: 3, name: "Thomas Jefferson", year: 1801 },
	{ id: 4, name: "James Madison", year: 1809 },
	{ id: 5, name: "James Monroe", year: 1817 },
];

function getValues(array, key) {
	// return ???
}

console.log(getValues(presidents, "name"));
// [ 'George Washington',
//   'John Adams',
//   'Thomas Jefferson',
//   'James Madison',
//   'James Monroe' ]

console.log(getValues(presidents, "id"));
// [ 1, 2, 3, 4, 5 ]

console.log(getValues(presidents, "year"));
// [ 1789, 1797, 1801, 1809, 1817 ]


