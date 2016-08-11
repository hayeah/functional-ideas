const { assert } = require("chai");

exports.equal = equal;

function equal(a, b) {

	try {
		assert.deepEqual(a, b);
		console.log("ok");
	} catch(err) {
		console.log(err.message);
	}
	console.log();
}