# forEach

`Array.prototype.forEach(fn)` 方法从头至尾遍历数组，为每个元素调用指定的函数。

+ [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

## 箭头函数小计

ES6 的 `=>` 语法可以让代码更简洁。

以下代码效果 “差不多”，细节上有些许不一样。大部分的情况下用 `=>` 安全性比较高。

```
// 正常声明函数的姿势
function add(x) {
	return x + 1;
}

// 给 add 附属一个函数值，和上面效果相似
var add = function (x) {
	return x + 1;
}

// 用箭头函数替换掉 `function` 关键词
var add = (x) => {
	return x + 1;
}

// 只有一个参数可以省略括弧
var add = x => {
	return x + 1;
}

// 只有一个表达式的话可以省略花括弧和 return 关键词
var add = x => x + 1;
```

## 例子

打印每个元素：

```js
var numbers = [1, 2, 3];

numbers.forEach(x => {
	console.log(x)
});
```

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

