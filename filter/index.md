# map

`Array.prototype.filter(fn)` 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。

用 filter 保留符合条件的的元素。

# 例子

把负数排除：

```js
var numbers = [1, -1, 2, -2, 3, -3, 4, -4];

numbers.filter(x => x > 0);
// [ 1, 2, 3, 4 ]
```

把正数排除：

```js
var numbers = [1, -1, 2, -2, 3, -3, 4, -4];

numbers.filter(x => x < 0);
// [ -1, -2, -3, -4 ]
```

# 练习

+ [compact-array.js](compact-array.js)
+ [j-presidents.js](j-presidents.js)
+ [filter-not.js](filter-not.js)
+ [nested-filter.js](nested-filter.js)
+ [implement-filter.js](implement-filter.js)
