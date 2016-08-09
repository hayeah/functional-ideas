# map

`Array.prototype.map(fn)` 方法将调用的数组的每个元素传递给指定的函数，并返回一个数组，它包含该函数的返回值。

传递给 `map()` 的函数的调用方式和传递给 `forEach()` 的函数的调用方式一样。但传递给map()的函数应该有返回值。注意，map()返回的是新数组：它不修改调用的数组。

# 例子

用 `map` 构建一个新的函数，每个数字乘以二：

```js
var numbers = [1, 2, 3];

numbers.map(x => x * 2);
// => [1, 4, 6]
```

用旧的 `function` 语法替代箭头函数, 可以获得同样的效果：

```js
var numbers = [1, 2, 3];

numbers.map(function (x) {
	return x * 2;
});
// => [2, 4, 6]
```

用循环实现同样的效果：

```js
var numbers = [1, 2, 3];

var result = [];
for (let i = 0; i < numbers.length; i++) {
	let x = numbers[i];
	result.push(x * 2);
}

result
// => [2, 4, 6]
```