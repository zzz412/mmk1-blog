# 遍历

> lterator的作用
>
> 寻找lterator
>
> 使用lterator
>
> 什么是lterator

## 1.Iterator初识

### 1.Iterator 的作用

> Iterator：遍历器（迭代器）

```js
for(){}
[1,2].forEach
new Set().forEach

//Iterator 也是用来遍历的
```

### 2.寻找 Iterator

```js
console.log(Iterator);


console.log([1, 2][Symbol.iterator]());


const it = [1, 2][Symbol.iterator]();
console.log(it);
```

### 3.使用 Iterator

```js
const it = [1, 2][Symbol.iterator]();
console.log(it.next()); // {value: 1, done: false}
console.log(it.next()); // {value: 2, done: false}
console.log(it.next()); // {value: undefined, done: true}
console.log(it.next()); // {value: undefined, done: true}
// it：可遍历对象（可迭代对象）
//Symbol.iterator：可遍历对象的生成方法
```

###  4.什么是 Iterator

```js
// Symbol.iterator（可遍历对象的生成方法） -> it（可遍历对象） -> it.next() -> it.next() -> ...（直到 done 为 true）
```

## 2.lterator解惑

> 为什么需要lterator遍历器
>
> 如何更方便的使用lterator

### 1.为什么需要 Iterator 遍历器

> 遍历数组：for 循环和 forEach 方法
>
>  遍历对象：for in 循环
>
>  Iterator 遍历器是一个**统一的遍历方式**

```js
console.log([][Symbol.iterator]()); //数组有 对象没有
console.log({}[Symbol.iterator]);
```

**我们先来看看ES6之前的 3 种 for 循环有什么缺陷：**

> forEach 不能 break 和 return
>
> for-in 缺点更加明显，它不仅遍历数组中的元素，还会遍历自定义的属性，甚至原型链上的属性都被访问到。而且，遍历数组元素的顺序可能是随机的。
>
> 所以，鉴于以上种种缺陷，我们需要改进原先的 for 循环。但 ES6 不会破坏你已经写好的 JS 代码

 **for-of 到底可以干什么呢？**

> 它既比传统的for循环简洁，同时弥补了forEach和for-in循环的短板。
>
> 跟 forEach 相比，可以正确响应 break, continue, return。
>
> for-of 循环不仅支持数组，字符串遍历，还支持大多数类数组对象，例如 DOM nodelist 对象。
>
> for-of 也支持 Map 和 Set （两者均为 ES6 中新增的类型）对象遍历。

**for-of 循环有以下几个特征：**

> 这是最简洁、最直接的遍历数组元素的语法。
>
> 这个方法避开了 for-in 循环的所有缺陷。
>
> 与 forEach 不同的是，它可以正确响应 break、continue 和 return 语句。
>
> 其不仅可以遍历数组，还可以遍历类数组对象和其他可迭代对象
>
> 但需要注意的是，for-of循环不支持普通对象，但如果你想迭代一个对象的属性，你可以用 for-in 循环（这也是它的本职工作）。



### 2.如何更方便的使用 Iterator

>  Symbol.iterator->it->next()
>
> 我们一般不会**直接使用 Iterator 去遍历**
>
> 比如 Iterator 封装好的 for..of

## 3.for...of 的用法

> 认识for..of
>
> break、continue一起使用
>
> 在for...of 中取得数组的索引

### 1.认识 for...of

```js
const arr = [1, 2, 3]；
const it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//通过while循环判断next.done 去遍历

//for of 循环的本质是下面代码
let next = it.next();

console.log(next);

while(next.done == false){
    console.log(next.value);

    next = it.next();

    console.log(next);
}

for (const item of arr) {
    // for...of 循环只会遍历出那些 done 为 false 时，对应的 value 值
    console.log(item);
}
```

### 2.与 break、continue 一起使用

```js
onst arr = [1, 2, 3];
for (const item of arr) {
    if (item === 2) {
        // break;
        continue;
    }
    console.log(item);
}
```

### 3.在 for...of 中取得数组的索引

```js
 const arr = [1, 2, 3];

//keys() 得到的是索引的可遍历对象，可以遍历出索引值
console.log(arr.keys());
for (const key of arr.keys()) {
    console.log(key);
}
//values() 得到的是值的可遍历对象，可以遍历出值
for (const value of arr.values()) {
    console.log(value);
}
//相当于
for (const value of arr) {
    console.log(value);
}

//entries() 得到的是索引+值组成的数组的可遍历对象
for (const entries of arr.entries()) {
    console.log(entries);
}

//搭配解构赋值
for (const [index, value] of arr.entries()) {
    console.log(index, value);
}
```

## 4.原生可遍历和非原生可遍历

> 什么是可遍历
>
> 原生可遍历的有哪些
>
> 非原生可遍历的有哪些

###  1.什么是可遍历

> 只要有 Symbol.iterator 方法，并且这个方法可以生成可遍历对象，就是可遍历的,具备Iterator接口的
>
> 数据结构
>
> 只要可遍历，就可以使用 for...of 循环来统一遍历

### 2.原生可遍历的有哪些

> 数组
>
> 字符串
>
>  Set
>
> Map
>
> arguments
>
> NodeList

```js
for (const item of [1, 2, 3]) {
    console.log(item);
}

for (const item of 'hi') {
    console.log(item);
}

for (const item of new Set([1, 2])) {
    console.log(item);
}

for (const item of document.querySelectorAll("p")) {
    console.log(item);

    item.style.color = "green";
}
```

###  3.非原生可遍历的有哪些

> 一般的对象

```js

// 自定义Iterator  要理解几个概念

//可迭代协议:Symbol.iterator
//迭代器协议符合几个条件    return { next(){ return{value,done} } }
//首先，它是一个对象
//其次，这个对象包含一个无参函数 next
//最后，next 返回一个对象，对象包含 done 和 value 属性。其中 done 表示遍历是否结束，value 返回当前遍历的值。

const person = { sex: 'male', age: 18 };
//console.log(person[Symbol.iterator]()); //报错

//for (const item of person) {
//console.log(item);
//}

//我们手动添加一个iterator
person[Symbol.iterator] = () => {
    let index = 0;

    return {
        next() {
            index++;
            if (index === 1) {
                return {
                    value: person.sex,
                    done: false,
                };
            } else if (index === 2) {
                return {
                    value: person.age,
                    done: false,
                };
            } else {
                return {
                    value:undefined,
                    done: true,
                };
            }
        },
    };
};

console.log( person[Symbol.iterator]().next())

for (const item of person) {
    console.log(item);
}




//有 length 和索引属性的对象
const obj = {
    0: '云牧',
    1: 'male',
    length: 2
};


//这样有规律的类数组可以直接借用数组的iterator
//obj[Symbol.iterator] = Array.prototype[Symbol.iterator];

//自己写的话
obj[Symbol.iterator] = () => {

    let index = 0;

    return {
        next(){
            let value , done;


            if(index < obj.length){
                value = obj[index];
                done = false;
            }else{
                value = undefined;
                done = true
            }

            index ++;

            return{value , done}
        }
    }
}

const it = obj[Symbol.iterator]();


for (const item of obj) {
    console.log(item);
}

```

## 5.使用了lterator的场合

> 数组的展开运算符
>
> 数组的解构赋值
>
> Set和Map的构造函数

**原生可遍历的**

> Array 数组
>
> String 字符串
>
> Set
>
> Map
>
> 函数的 arguments 对象
>
> NodeList 对象

### 1.数组的展开运算符

```js
console.log(...[1, 2, 3]);
console.log(1, 2, 3);
console.log(...'str');
console.log(...new Set([1, 2, 3]));
console.log(...new Map([["云牧","大帅逼"]]));
console.log(...document.querySelectorAll("p"));
console.log(...{}); ×
```

###  2.数组的解构赋值

> 所有可遍历的都可以使用数组的解构赋值

```js
const [a, b] = [1, 2];
//相当于
const [a, b] = [...[1, 2]];

const [a, b] = 'hi';
//相当于
const [a, b] = [...'hi'];

const [a, b] = [...new Set([3, 4])]
console.log(a, b);
```

### 3.Set 和 Map 的构造函数参数

```js
//一般可以遍历的
new Set(iterator)

//Map不仅要满足可以遍历的  还要凸显键和值 所以一般是二维数组以及二维数组形成的Set Map
new Map(iterator)
```



# 课程总结

> lterator遍历器
>
> for...of 循环



## lterator 遍历器

> lterator是统一的遍历方式
>
> Symbol.iterator(可遍历对象的生成方法) -> it (可遍历对象)- >it.next() -> it.next() -> ...(直到done为true停止遍历)
>
> —般不直接使用Iterator，而是通过for...of 循环间接使用



## for...of 循环

> for...of循环内部使用了lterator
>
> for...of循环可以与break、continue一起使用
>
> 在for..of 中可以通过keys()或entries()取得数组的索引



## 可遍历

> 只要有Symbol.iterator方法，并且这个方法可以生成可遍历对象，就是可遍历的
>
> 只要可遍历，就可以使用for...of 循环来统─遍历
>
> 数组、字符串、Set、Map、arguments、NodeList是原生可遍历的
>
> —般的对象不是原生可遍历的



## 使用了Iterator的场合

> 数组的展开运算符使用了lterator
>
> 数组的解构赋值使用了lterator
>
> Set和Map的构造函数使用了lterator