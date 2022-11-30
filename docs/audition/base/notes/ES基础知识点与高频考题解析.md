# ES基础

JavaScript 是 ECMAScript 规范的一种实现，本小节重点梳理下 ECMAScript 中的常考知识点，然后就一些容易出现的题目进行解析。

## 知识点梳理

**变量类型**

- JS 的数据类型分类和判断
- 值类型和引用类型

**作用域和闭包**

- 执行上下文
- this
- 闭包是什么

**原型与原型链（继承）**

- 原型和原型链定义
- 继承写法

**异步**

- 同步 vs 异步
- 异步和单线程
- 前端异步的场景

**ES6/7 新标准的考查**

- 箭头函数
- Module
- Class
- Set 和 Map
- Promise



## 变量类型和计算 



### typeof 能判断哪些类型

- 识别所有值类型  数值  字符串  布尔值 undefined  Symbol 除了null是Object(bug)
- 识别函数  funcition
- 识别数组对象都为Object



### 何时使用 === 何时使用 ==

![image-20201231161331627](https://i.loli.net/2020/12/31/U1s4vH8Z7apYSxB.png)





### 值类型和引用类型的区别

- **基本数据**类型直接**按值存在栈中.**   基础数据类型赋值时给值 
- **引用数据**类型的**数据存在堆内存中**，但是数据**指针是存放在栈内存中**,访问引用数据时，先从栈内存中获取指针，通过指针在堆内存中找到数据  引用数据类型赋值时给地址



### 手写深拷贝

![image-20201231161628230](https://i.loli.net/2020/12/31/KH4AomRyDeJIlaS.png)

- 注意判断是值类型和引用类型,是数组还是对象  
- 递归





## 作用域链和闭包



- 首先认识一下什么叫做 **自由变量** 。当前作用域没有定义的变量，这成为 **自由变量** 。自由变量如何得到 —— 向父级作用域寻找。

- 如果父级也没呢？再一层一层向上寻找，直到找到全局作用域还是没找到，就宣布放弃。这种一层一层的关系，就是 **作用域链** 。

:::tip

自由变量将从作用域链中去寻找，但是 **依据的是函数定义时的作用域链，而不是函数执行时**

:::

![image-20201231164111249](https://i.loli.net/2020/12/31/CDlJskdcAuBU5j3.png)



### 闭包

**闭包**: 一个函数中嵌套另一个函数，内部函数使用了外部函数的参数或变量，就构成了闭包（这个内部函数就叫做闭包）

#### 闭包主要有两个应用场景：

1. **函数作为返回值**
2. **函数作为参数传递**

![image-20201231164331476](https://i.loli.net/2020/12/31/HAetfnDIwGW8SVR.png)



![image-20201231164339913](https://i.loli.net/2020/12/31/LgzoUA9Bd7sMX8l.png)

#### 闭包作用

- 利用闭包缓存数据
- 模拟私有变量

![image-20201231165945893](https://i.loli.net/2020/12/31/6qburZVRSt3lAhN.png)

#### 使用闭包的注意点

- 不能滥用闭包，否则会造成网页的性能问题，严重时可能导致内存泄露(程序中不再被需要的内存, 由于某种原因, 无法被释放)。

  

### 创建10\<a>，点击弹出序号

**先来看一个案例**

![image-20201231175112542](https://i.loli.net/2020/12/31/mZLDaXG6Us9i78M.png)

[![0Przod.png](https://s1.ax1x.com/2020/09/26/0Przod.png)](https://imgchr.com/i/0Przod)

**方法一:**

```js
//使用IIFE形成闭包  保存变量
for (var i = 0; i < btn.length; i++) {
    (function (index) {
        btn[i].onclick = function () {
            console.log(index);
        };
    })(i);
}
```

[![0Ps2tA.png](https://s1.ax1x.com/2020/09/26/0Ps2tA.png)](https://imgchr.com/i/0Ps2tA)



```js
//使用let 形成块级作用域
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        console.log(i);
    };
}
//let直接产生一个作用域 和里面的事件函数  构成闭包  i不会被回收
```



[![0PsXpq.png](https://s1.ax1x.com/2020/09/26/0PsXpq.png)](https://imgchr.com/i/0PsXpq)



**答案:**

![image-20201231175251791](https://i.loli.net/2020/12/31/aOcPnEFh2GtTjp5.png)



### this的不同应用场景，如何取值

![image-20201231163344023](https://i.loli.net/2020/12/31/Vj3Gv5xFPsOzbL1.png)

:::tip

**箭头函数**没有this指向**上层的作用域**

**全局作用域**下直接使用**this代表window**

实际是在非严格模式(默认)下由undefined ---> window

使用var定义在全局的变量会成为**window上的属性和方法**

:::



### 手写bind函数

![image-20201231163507521](https://i.loli.net/2020/12/31/2rSV3sFeoTuniRw.png)



## 原型和原型链



### 如何准确判断一个变量是不是数组?

- **A instanceot Array**
- **Array.isArray(A)**





### class的原型和本质

1. 每个class都有显式原型 prototype
2. 每个实例都有隐式原型 \__proto__
3. 实例的 \__proto___ 指向对应class的 prototype

**获取属性或者执行方法的时候先从自身属性和方法寻找,如果找不到自动去proto查找.**

**class是语法糖，class的类型实际上是函数**





### 手写简易jQuery考虑插件和扩展性

![image-20201231163145474](https://i.loli.net/2020/12/31/cBv7EHXqNwy8l6R.png)



![image-20201231163148201](https://i.loli.net/2020/12/31/BdkJR7xea2DGp6U.png)





## 异步和单线程

JS 需要异步的根本原因是 **JS 是单线程运行的**，即在同一时间只能做一件事，不能“一心二用”。

一个 Ajax 请求由于网络比较慢，请求需要 5 秒钟。

如果是同步，这 5 秒钟页面就卡死在这里啥也干不了了。

异步的话，就好很多了，5 秒等待就等待了，其他事情不耽误做，至于那 5 秒钟等待是网速太慢，不是因为 JS 的原因。

结论

- **异步不会阻塞代码执行**
- **同步会阻塞代码执行**



### 题目：讲解下面代码的执行过程和结果

```js
var a = true;
setTimeout(function(){
    a = false;
}, 100)
while(a){
    console.log('while执行了')
}
```

这是一个很有迷惑性的题目，不少候选人认为`100ms`之后，由于`a`变成了`false`，所以`while`就中止了，实际不是这样，因为JS是单线程的，所以进入`while`循环之后，没有「时间」（线程）去跑定时器了，所以这个代码跑起来是个死循环！



### 前端异步的场景

- 定时 `setTimeout` setInverval
- 网络请求，如 `Ajax` `图片`加载



**Ajax 代码示例**

[![DdWVBR.png](https://s3.ax1x.com/2020/11/25/DdWVBR.png)](https://imgchr.com/i/DdWVBR)

**img 代码示例**

[![DdWcEq.png](https://s3.ax1x.com/2020/11/25/DdWcEq.png)](https://imgchr.com/i/DdWcEq)

**定时器代码示例**

[![DdWq56.png](https://s3.ax1x.com/2020/11/25/DdWq56.png)](https://imgchr.com/i/DdWq56)



[![DdWvxe.png](https://s3.ax1x.com/2020/11/25/DdWvxe.png)](https://imgchr.com/i/DdWvxe)





**setTimeout 笔试题**

```js
console.log(1) //1
setTimeout(function(){
    console.log(2) //5
} ,1000) 
console.log(3) //2
setTimeout(function () {
    console.log(4) //4
},0) 
console.log(5) //3
```





## ES6/7 新标准的考查



### 题目：ES6 箭头函数中的`this`和普通函数中的有什么不同



- 箭头函数存在的意义，第一写起来更加简洁，第二可以解决 ES6 之前函数执行中`this`是全局变量的问题，看如下代码

```js
function fn() {
    console.log('real', this)  // {a: 100} ，该作用域下的 this 的真实的值
    var arr = [1, 2, 3]
    // 普通 JS
    arr.map(function (item) {
        console.log('js', this)  // window 。普通函数，这里打印出来的是全局变量，令人费解
        return item + 1
    })
    // 箭头函数
    arr.map(item => {
        console.log('es6', this)  // {a: 100} 。箭头函数，这里打印的就是父作用域的 this
        return item + 1
    })
}
fn.call({a: 100})
```





### 题目：ES6 模块化如何使用？

ES6 中模块化语法更加简洁，如果只是输出一个**唯一的对象**，使用`export default`即可，代码如下

```js
// 创建 util1.js 文件，内容如
export default {
    a: 100
}

// 创建 index.js 文件，内容如下 
import obj from './util1.js' //obj是自己定义的名字
console.log(obj)
```

如果想要输出许多个对象，就不能用`default`了，且`import`时候要加`{...}`，代码如下

```js
// 创建 util2.js 文件，内容如
export function fn1() {
    alert('fn1')
}
export function fn2() {
    alert('fn2')
}

//或者直接export {fn1, fn2}

// 创建 index.js 文件，内容如
import { fn1, fn2 } from './util2.js'
fn1()
fn2()
```



### 题目：ES6 class 和普通构造函数的区别

class 其实一直是 JS 的关键字（保留字），但是一直没有正式使用

直到 ES6 。 ES6 的 class 就是取代之前构造函数初始化对象的形式，从语法上更加符合面向对象的写法。



**JS 构造函数的写法**

```js
function MathHandle(x, y) {
  this.x = x;
  this.y = y;
}

MathHandle.prototype.add = function () {
  return this.x + this.y;
};

var m = new MathHandle(1, 2);
console.log(m.add())
```



**用 ES6 class 的写法**

```js
class MathHandle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add() {
        return this.x + this.y;
    }
}
const m = new MathHandle(1, 2);
console.log(m.add())
```



**注意以下几点，全都是关于 class 语法的：**

:::tip

- class 是一种新的语法形式，是`class Name {...}`这种形式，和函数的写法完全不一样
- 构造函数函数体的内容要放在 class 中的`constructor`函数中，`constructor`即构造器，初始化实例时默认执行
- class 中函数的写法是`add() {...}`这种形式，并没有`function`关键字

:::

使用 class 来实现继承就更加简单了，至少比构造函数实现继承简单很多



**JS 构造函数实现继承**

```js
// 动物
function Animal() {
    this.eat = function () {
        console.log('animal eat')
    }
}
// 狗
function Dog() {
    this.bark = function () {
        console.log('dog bark')
    }
}
Dog.prototype = new Animal()
// 哈士奇
var hashiqi = new Dog()
```


**ES6 class 实现继承**

```js
class Animal {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
        this.name = name
    }
    say() {
        console.log(`${this.name} say`)
    }
}
const dog = new Dog('哈士奇')
dog.say()
dog.eat()
```



**注意以下两点：**

:::tip

- 使用`extends`即可实现继承，更加符合经典面向对象语言的写法，如 Java
- 子类的`constructor`一定要执行`super()`，以调用父类的`constructor`

:::



### 题目：ES6 中新增的数据结构有哪些？

#### Set 和 Map

Set 和 Map 都是 ES6 中新增的数据结构，是对当前 JS 数组和对象这两种重要数据结构的扩展。

由于是新增的数据结构，目前尚未被大规模使用，但是作为前端程序员，提前了解是必须做到的。先总结一下两者最关键的地方：

- Set 类似于数组，但数组可以允许元素重复，Set 不允许元素重复
- Map 类似于对象，但普通对象的 key 必须是字符串或者数字，而 Map 的 key 可以是任何数据类型



#### Set

**Set 实例不允许元素有重复**,可以通过一个数组初始化一个 Set 实例，或者通过`add`添加元素，元素不能重复，重复的会被忽略。

```js
const set = new Set([1, 2, 3, 4, 4]);
set.add(4);
console.log(set) // Set(4) {1, 2, 3, 4}
```

**Set 实例的属性和方法有**

- `size`：获取元素数量。
- `add(value)`：添加元素，返回 Set 实例本身。
- `delete(value)`：删除元素，返回一个布尔值，表示删除是否成功。
- `has(value)`：返回一个布尔值，表示该值是否是 Set 实例的元素。
- `clear()`：清除所有元素，没有返回值。

```js
const s = new Set(); //需要使用new Set()初始化一个实例  里面接受原生可遍历的元素作为参数
s.add(1).add(2).add(2); // 添加元素

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2);
s.has(2) // false

s.clear();
console.log(s);  // Set(0) {}
```



**Set 实例的遍历，可使用如下方法**

```js
let set = new Set(['aaa', 'bbb', 'ccc']);

for (let item of set.keys()) {
  console.log(item);
}
// aaa
// bbb
// ccc

for (let item of set.values()) {
  console.log(item);
}
// aaa
// bbb
// ccc

for (let item of set.entries()) {
  console.log(item);
}
// ["aaa", "aaa"]
// ["bbb", "bbb"]
// ["ccc", "ccc"]

set.forEach((value, key) => console.log(key + ' : ' + value))
// aaa : aaa
// bbb : bbb
// ccc : ccc
```



#### Map

Map 的用法和普通对象基本一致，先看一下它能用非字符串或者数字作为 key 的特性。

```js
const map = new Map(); //需要使用new Map()初始化一个实例  里面接受二维数组作为参数
const obj = {p: 'Hello World'};

map.set(obj, 'OK')
map.get(obj) // "OK"

map.has(obj) // true
map.delete(obj) // true
map.has(obj) // false
```



**Map 实例的属性和方法如下：**

- `size`：获取成员的数量
- `set`：设置成员 key 和 value
- `get`：获取成员属性值
- `has`：判断成员是否存在
- `delete`：删除成员
- `clear`：清空所有

```js
const map = new Map();
map.set('aaa', 100);
map.set('bbb', 200);

map.size // 2

map.get('aaa') // 100

map.has('aaa') // true

map.delete('aaa')

map.has('aaa') // false

map.clear()
```



**Map 实例的遍历方法有：**

- `keys()`：返回键名的遍历器。
- `values()`：返回键值的遍历器。
- `entries()`：返回所有成员的遍历器。
- `forEach()`：遍历 Map 的所有成员。

```js
const map = new Map();
map.set('aaa', 100);
map.set('bbb', 200);

for (let key of map.keys()) {
  console.log(key);
}
// "aaa"
// "bbb"

for (let value of map.values()) {
  console.log(value);
}
// 100
// 200

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// aaa 100
// bbb 200

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// aaa 100
// bbb 200
```



### Promise

`Promise` 可以将回调地狱的写法变成链式调用写法，流程更加清晰，代码更加优雅。

简单归纳下 Promise：**三个状态、两个过程、一个方法**，快速记忆方法：**3-2-1**

**三个状态**：`pending`、`fulfilled`、`rejected`

**两个过程：**

- pending→fulfilled（resolve）
- pending→rejected（reject）

**一个方法**：`then`

当然还有其他概念，如`catch`、 `Promise.all/race`，这里就不展开了。自己去复习下我的课件吧.