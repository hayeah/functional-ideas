# forEach

`Array.prototype.forEach(fn)` 方法从头至尾遍历数组，为每个元素调用指定的函数。

### 箭头函数小计

[ES6 箭头函数](http://es6.ruanyifeng.com/#docs/function#箭头函数)

ES6 的 `=>` 语法可以让匿名函数更简洁，取代 `function` 关键词。

```js
var numbers = [1, 2, 3];

numbers.forEach(x => console.log(x));
// 同等于
numbers.forEach(function (x) {
	console.log(x);
});
```

## 例子

用 `forEach` 打印每个元素：

```js
var numbers = [1, 2, 3];

numbers.forEach(x => {
	console.log(x)
});
```

`forEach` 的效果相当于循环遍历一个数组，如下：

```js
var numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
	let x = numbers[i];
	console.log(x);
}
```

## 例子 2

加总每个元素：

```js
var numbers = [1, 2, 3];

var sum = 0;
numbers.forEach(x => {
	sum += x;
});
```

## 练习

+ [print-presidents.js](print-presidents.js)
+ [join-words.js](join-words.js)
+ [nested-numbers.js](nested-numbers.js)

