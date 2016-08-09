/*

收集对象的多个键值到一个数组

*/

var presidents = [
	{ id: 1, name: "George Washington", year: 1789 },
	{ id: 2, name: "John Adams", year: 1797 },
	{ id: 3, name: "Thomas Jefferson", year: 1801 },
	{ id: 4, name: "James Madison", year: 1809 },
	{ id: 5, name: "James Monroe", year: 1817 },
];

function getValues(array, keys) {
	// return ???
}

console.log(getValues(presidents, []));
/*
 [ [], [], [], [], [] ]
*/

console.log(getValues(presidents, ["name"]));
/*
[ [ 'George Washington' ],
  [ 'John Adams' ],
  [ 'Thomas Jefferson' ],
  [ 'James Madison' ],
  [ 'James Monroe' ] ]
*/

console.log(getValues(presidents, ["year", "name", "id"]));
/*
[ [ 1789, 'George Washington', 1 ],
  [ 1797, 'John Adams', 2 ],
  [ 1801, 'Thomas Jefferson', 3 ],
  [ 1809, 'James Madison', 4 ],
  [ 1817, 'James Monroe', 5 ] ]
*/
