##     DOM简介 

> **◆ DOM是JS操控HTML和CSS的桥梁**
>
> ◆ DOM (Document Object Model,文档对象模型)是JavaScript操作HTML文档的接口,DOM赋予我们添加、移除和修改页面元素(使文档操作变得非常优雅、简便。(元素的文字也是DOM的一个节点)
>
> **◆ DOM最大的特点就是将文档表示为节点树。**

**访问元素节点**

> ◆ 所谓“访问”元素节点，就是指"得到”、"获取”页面上的元素节点
>
> ◆ 对节点进行操作，第一步就是要得到它
>
> ◆ 访问元素节点主要依靠document对象

 **认识document对象**

> ◆ document对象是DOM中最重要的东西，几乎所有DOM的功能都封装在了document对象中
>
> ◆ document对象也表示整 个HTML文档，它是DOM节点树的根

## 获取元素的方式

> 可以不通过获取id名字而在js里面直接使用

### document.getElmentById()

> **通过id获取元素**
>
> ◆ 如果页面上有相同id的元素，则只能得到第一个
>
> ◆ 不管元素藏的位置有多深,都能通过id把它找到 

```css
document.getElmentById()
```

### getElementsByClassName()

> **通过class类名获取元素数组**
>
> 不兼容IE8及以下

```css
document.getElementsByClassName() 
```

### getElementsByTagName()

> **通过标签名获取元素数组**
>
> ◆ 数组方便遍历，从而可以批量操控元素节点
>
> ◆ 即使页面上只有一个指定标签名的节点，也将得到长度为1的数组
>              
> ◆ 任何一个节点元素也可以调用getElementsByTagName()方法，从而得到其内部的某种类的元素节点

```css
document.getElementsByTagName()
```

### getElementsByName()

> 通过name获取

```css
document.getElementsByName()
```

###  querySelector()

> 通过选择器获取元素^
>
> ◆ querySelector()方法只能得到页面上一个元素，如果有多个元素符合条件，则只能得到第一个元素            
>
> ◆ querySelector()方法从IE8开始兼容， 但从IE9开始支持CSS3的选择器，如:nth-child() 、 :[src^= 'dog']等CSS3选择器形式都支持良好

```js
document.querySelector()       
//不支持 IE7 及以下
```

### querySelectorAll()

>  **通过选择器获取元素数组**
>
> ◆ querySelectorAll()方法的功能是通过选择器得到元素数组
>
> ◆ 即使页面上只有一个符合选择器的节点，也将得到长度为1 的数组,

```js
document.querySelectorAll()
// 不支持 IE7 及以下
```

```js
document.querySelectorAll("[class^='text-']") 
// 获取所有class 以 text开头的元素
```

>  我们常用的方法中，getElementById和 getElementsByName（通过name属性获取元素）是必须以document开头的。

```html
<body>
	<p>我是段落</p>
    <p>我是段落</p>
    <p>我是段落</p>
    <p>我是段落</p>
    <p>我是段落</p>


    <div id="box">
        <p>1</p>
        <p>2</p>
        <p>3</p>
    </div>
	<script>
         // 得到p标签的数组
        let aP = document.getElementsByTagName("p");
        console.log(aP);

        let box = document.getElementById("box");
        let box_p = box.getElementsByTagName("p");
        console.log(box_p);
    </script>
</body>
```

### 特殊元素的获取

```js
console.log (document.head);//head
console.log (document.body);//body
console.log(document.title);////title标签的文字内容，可以赋值修改title
console.log(document.documentElement);//html
```

```js
 document.title = "我修改后的title";
```

### 延迟运行

>  在测试DOM代码时，通常JS代码一定要写到HTML节点的后面，否则JS无法找到相应HTML节点
>
>  可以使用window.onload = function(){} 事件，使页面加载完毕后，再执行指定的代码

```html
<script>
    // 给window对象添加onload事件监听.  onload表示页面都加载完毕了
    window.onload = function () {
        //得到盒子1
        let box1 = document.getElementById("box1");

        //得到盒子2
        let box2 = document.getElementById("box2");
        console.log(box1);
        console.log(box2);
    }
</script>
<div id="box1"></div>
<div id="box2"></div>
```

**主要记住以下三种方式**

> **通过id去获取**
>
> -  document.getElementById
>
> **通过选择器获取节点(列表)**
>
> - document.querySelector()
> - document.querySelectorAll()

## 类数组对象

> 如果一个对象的所有键名都是正整数或零，并且有`length`属性，那么这个对象就很像数组，语法上称为“类似数组的对象”（array-like object）。

```js
let obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};
console.log(obj[0]); // 'a'
console.log(obj[1]); // 'b'
console.log(obj.length);//3
obj.push('d'); //// TypeError: obj.push is not a function

//对象obj就是一个类似数组的对象。但是，“类似数组的对象”并不是数组，因为它们不具备数组特有的方法。
//对象obj没有数组的push方法，使用该方法就会报错。
```

类似数组的对象”的根本特征，就是**具有`length`属性**。

只要有`length`属性，就可以认为这个对象类似于数组。

但是有一个问题，这种`length`属性不是动态值，不会随着成员的变化而变化。

```js
let obj = {
    length: 0
};

obj[3] = "云牧有点飒";
console.log(obj.length);

//对象obj添加了一个数字键，但是length属性没变。这就说明了obj不是数组。
```

典型的“类似数组的对象”

> 函数的`arguments`对象
>
> 大多数 DOM 元素集
>
> 字符串

## DOM事件

> **什么是事件?**
>
> 事件就是文档或浏览器窗口中发生的一些特定的交互瞬间。
>
> 比如用户在一个网页上所做出的某些操作动作, 操作动作就是事件

**DOMO级事件**

> **语法: ele.事件=执行脚本**
>
> 功能:在DOM对象上绑定事件
>
>  说明:执行脚本可以是一个匿名函数,也可以是一个函数的调用

**注册事件**

>  onclick  鼠标点击
>
>  onmouseenter  鼠标移入 ( 只触发一次 )
>
> onmouseleave 鼠标移出

**DOM事件的使用方式：**

```js
<div id="Wrap"></div>

let oWrap = document.getElementById( "wrap" );

oWrap.onclick = function() {
    	// wrap容器被点击时执行的内容
           console.log("已被点击");
        }

oWrap.onmouseenter = function() {
            console.log("鼠标移入了");
        }
```

## 操作标签的内容

> **如何改变元素节点中的内容？**
>
> 改变元素节点中的内容可以使用两个相关属性:
>
> ​                                      ①innerHTML 
>
> ​                                      ②innerText
>
>  ◆innerHTML属性能以HTML语法设 置节点中的内容
>
>  ◆innerText属性只能以纯文本的形式设置节点中的内容

```js
<div id="Wrap"></div>

//获取wrap节点对象
let oWrap = document.getElementById( "wrap" );

oWrap.innerText= "<ul><li>黛玉</li><li>黛玉</li></ul>";
//innerText不会解析标签
//大部分就是字符串和数字，数字本身也是转化为字符串再赋值进来
oWrap.innerText = 云牧DSB;//此时报错 没有这个变量



oWrap.innerHTML = "<ul><li>黛玉</li><li>宝钗</li></ul>";
//innerHTML会解析标签

//  取值
console.log(oWrap.innerText);
console.log(oWrap.innerHTML);
```

## 操作元素的css样式

### 外部样式表

> 无法通过js操控，js只对当前这一个html文档有控制能力，别的文件是不能控制的

### 内联样式

> js可以操作style标签,但是不常用,因为不好控制选择器优先级（不常用）

```html
 <style>
     #wrap{
         width: 100px;
         height: 100px;
         background-color: pink;
     }
</style>
<style id="style"></style>

<div id="wrap"></div>

<script>
    let oStyle = document.getElementById("style");

    oStyle.innerText = "#wrap{background-color:green;}" 

    oStyle.innerText = "div{background-color:green;}"
    //这样就无法修改了  因为权重问题

</script>
```

###  行内CSS样式

> 这个才是我们通过会使用js操作样式的方法
>
> 元素.style.样式名 = 

```js
oBox.style.color = "red";
oBox.style.backgroundColor = 'red' ; //css属性名要设置成完整驼峰形式
oBox.style.fontSize = "20px";  //注意写单位
oBox.style.cssFloat = "left";
//不会覆盖内部或外部样式表
```

## 操作元素属性

### 改变标签合法属性

```js
<div id="wrap"></div>

let oWrap = document.getElementById("wrap");

oWrap.title = "这是提示";
console.log(oWrap.title)
console.log(oWrap.yunmu);//只有合法标签属性才提供直接.操作
oWrap.id = "list";
oWrap.className = "box"; //class比较特殊
```

class ：使用 className （推荐使用H5中新增classList操作class）

###  自定义标签属性的操作

> .getAttribute()
>
> .setAttribute()
>
> .removeAttribute()
>
> （也可操作合法标签属性）

```js
// 获取getAttribute()
<div id="wrap" yunmu="dsb">div</div>

console.log( oWrap.getAttribute("yunmu") );
```

```js
// 设置setAttribute()
oWrap.setAttribute("daiyu" , "黛玉");
console.log(wrap);
```

```js
// 删除removeAttribute()
oWrap.removeAttribute("daiyu")
```

自定义属性不建议添加（团队开发时可能添加相同的自定义属性）

## 操作元素的类名来控制CSS样式

如果操作元素多个样式

```js
#wrap{
    width: 200px;
    height: 200px;
    background-color: green;
}
<div id="wrap"></div>

let oWrap = document.getElementById("wrap");
oWrap.onclick = function(){
    oWrap.style.width = "300px";
    oWrap.style.height = "300px";
    oWrap.style.backgroundColor  = "pink";
}
//改写
oWrap.onclick = function(){
oWrap.style = "width: 300px; height:300px; background-color:purple"
   }
//字符串赋值给了对象  不合理的写法   最好写到cssText
oWrap.onclick = function(){
	oWrap.style.cssText = "width:300px;height:300px;background-color:purple"
}
```

最终我们可以写为

```css
#wrap.active{
            width : 300px;
             height:300px; 
             background-color:purple
        }
oWrap.onclick = function(){
           oWrap.className = "active"
        }
```

**小案例(点击展开)**

```js
#nav{
    width: 150px;
    height: 50px;
    background-color: pink;
    text-align: center;
    line-height: 50px;
    color: #fff;
    cursor: pointer;
    transition: 1s;
}
        
#nav.show{
    height: 200px;
}

<div id="nav">文字</div>

let oNav = document.getElementById("nav");

oNav.onclick = function() {
    oNav.className = "show"
}
```

## classList

```js
<div id="wrap" class="con"></div>


let oWrap = document.getElementById("wrap");
oWrap.className = "aa bb";//通过className添加两个类名  会覆盖原有的类名

oWrap.className = oWrap.className + " aa bb"//如此添加太过生硬
```

**推荐使用H5中新增classList来代替className操作名字**

```js
 oWrap.classList.add("aa")//能自动处理空格和辨别相同类名
```

 **添加多个类名**

> 元素.classList.add()

```js
oWrap.classList.add("aa" , "bb")
```

**移除类名**

> 元素.classList.remove()

```css
oWrap.classList.remove("aa" , "bb")
```

**切换名字**

> 元素.classList.toggle()
>
> (有类名则添加,没有则删除) 
>
> 不支持两个参数

```css
oWrap.classList.toggle("con")
```

## 小案例（点击展开收起）

```html
<style>
    #nav{
        width: 150px;
        height: 50px;
        background-color: pink;
        text-align: center;
        line-height: 50px;
        color: #fff;
        cursor: pointer;
        transition: 1s;
    }

    #nav.show{
        height: 200px;
    }
</style>

<div id="nav">文字</div>

<script>
    let oNav = document.getElementById("nav");
    oNav.onclick = function() {
        oNav.classList.toggle("show");
    }
</script>
```

## 弹出层案例

```html
<style>
#cover{
    /* display: none; */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.4);
    transform: scale(0);
    transition: .6s;
    }
    #cover.show{
        transform: scale(1);
    }

    #cover.hidden{
        transform: scale(0);
    }

    #cover .content{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 200px;
        height: 80px;
        text-align: center;
        background-color: #fff;
        font-size: 14px;
        line-height: 80px;
        font-weight: bold;
    }
</style>

<body>
    <div id="btn">
        <button class="tips">弹出按钮</button>
    </div>

    <div id="cover">
        <div class="content">我是弹窗内容</div>   
    </div>
</body>

<script>
    let otips  = document.querySelector("#btn .tips"),
        oCover = document.querySelector("#cover");

    otips.onclick = function() {
        // oCover.style.display="block";
        oCover.classList.add("show");
    }

    oCover.onclick = function() {
        // oCover.style.display="none";
        oCover.classList.remove("show");
    }
</script>

```

## this初识

```js
<div id="wrap1"> 如果云曾是天空的一封信</div>

let oWrap = document.getElementById("wrap1");

//事件函数
oWrap.onclick = function(){
    // oWrap.style.color = "skyblue"; 

    /*事件是添加给wrap , 事件函数里面又在操控wrap*/

    this.style.color = "pink"
    // 使用this关键字可以代替,你触发的是owrap的点击事件这个this就指向oWrap
    // 涉及到js的垃圾回收,后面会说.这个this只在事件函数里面使用
}
```

**示例**

```js
<div id="wrap1"> 如果云曾是天空的一封信</div>
<div id="wrap2"> 如果云曾是天空的一封信</div>


let oWrap1 = document.getElementById("wrap1");
let oWrap2 = document.getElementById("wrap2");
oWrap1.onclick = function () {
    this.style.color = "pink"
}

oWrap1.onclick = function () {
    this.style.color = "pink"
}

//使用this可以改写为
function changeColor(){
    this.style.color = "pink"
}

oWrap1.onclick = changeColor;
oWrap2.onclick = changeColor;
//函数的上下文(this关键字）由调用函数的方式决定，function是“运行时上下文”策略,函数如果不调用，则不能确定函数的上下文
//规则1:对象打点调用它的方法函数，则函数的上下文是这个打点的对象


//事件处理函数的上下文是绑定事件的DOM元素
```

作业

> [hover伪类做不了的效果](https://afeifeifei.github.io/class-demo/js-demo/2-01-01/)
>
> 图片显示和隐藏
>
> [动态菜单](https://gitrty.github.io/js-work/03-%E5%8A%A8%E6%80%81%E8%8F%9C%E5%8D%95.html)

