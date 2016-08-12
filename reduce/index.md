# reduce

`reduce(result, reducer, initial)` 方法接收一个函数作为累加器（reducer），数组中的每个值（从左到右）开始合并，最终为一个值。

许多循环问题以抽象的角度来看有同样的结构，我们只需要传函数进去替代不一样的部分。

`map` 和 `filter` 这两个高阶函数把类似的循环抽象出来，利用传进去的函数来定制具体行为。`reduce` 也是基于类似的概念。

## 三种相同结构的问题

字符串拼接

```js
var array = ["a", "b", "c"];

// 初始值
var result = "";

array.forEach(element => {
	// 计算下个结果
	result = result + element;
});

result
// 'abc'
```

数字加总

```js
var array = [1, 2, 3, 4];

// 初始值
var result = 0;

array.forEach(element => {
	// 计算下个结果
	result = result + element;
});

result
// 10
```

数字相乘

```js
var array = [1, 2, 3, 4];

// 初始值
var result = 1;

array.forEach(element => {
	// 计算下个结果
	result = result * element;
});

result
// 24
```

这三个例子都有这些共同点：

+ result 初始值。
+ forEach 的循环体用 result 和当前元素去计算下一个结果。

## 把写死的地方改掉

```js
var array = [1, 2, 3, 4];

// 初始值
var result = 1;

// 把计算 result 的地方抽出来成为一个函数
var reducer = (result, element) => result * element;

array.forEach(element => {
	// 计算下个结果
	result = reducer(result, element);
});

result
// 24
```

用 reduce 函数的话基本一样:

```js
var array = [1, 2, 3, 4];

// 初始值
var result = 1;

// 把计算 result 的地方抽出来成为一个函数
var reducer = (result, element) => result * element;

array.reduce(reducer, result);
```

最终形态：

```js
var array = [1, 2, 3, 4];
array.reduce((result, element) => result * element, 1);
```

# 练习

+ [basic.js](basic.js)
+ [nested-arrays.js](nested-arrays.js)
+ [implement-map.js](implement-map.js)
+ [pairs-to-object.js](pairs-to-object.js)
+ [sum-greater-than-zero.js](sum-greater-than-zero.js)
+ [nested-sum.js](nested-sum.js)