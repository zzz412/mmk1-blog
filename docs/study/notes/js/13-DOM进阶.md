# Dom节点操作

## JavaScript的组成

> ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。
>
> **DOM**：文档对象模型（Document object Model），操作**网页上的元素**的API。比如让盒子移动、变色、轮播图等。
>
> **BOM**：浏览器对象模型（Browser Object Model），操作**浏览器部分功能**的API。比如让浏览器自动滚动。

## 获取元素注意点

> `getElementsByClassName` 和`getElementsByTagName`和 `document.getElementsByName` 和`querySelector`获取的元素为动态获取，
>
> 而getElementById和querySelectorAll`为静态获取。
>
> 动态获取：当DOM元素有改变时，获取到的类数组也会随之变化。
>
> 静态获取：当获取到后，DOM的改变不会改变已获取到的类数组。
>

```html
<div id="wrap"></div>

<script>
    let oWrap = document.getElementById("wrap");

    oWrap.id = "box";

    oWrap.innerHTML = "我修改了";
    // 修改id后仍然能够修改内容
</script>
```

```html
<div class="wrap"></div>

<script>
    let aWrap = document.getElementsByClassName("wrap");

    aWrap[0].className = "box";

    aWrap[0].innerHTML = "我修改了"; //报错
    
    //变为不动态的
    let oW = aWrap[0];

    oW.className = "box";

    oW.innerHTML = "我修改了";
</script>
```

```html
<body>
    <div class="wrap">1</div>
    <div class="wrap">2</div>

    <script>
        let aWrap = document.querySelectorAll(".wrap");

        aWrap[0].className = "box";

        aWrap[0].innerHTML = "xxxx";
    </script>
</body>
```

**题目**

```html
<div class="wrap">1</div>
<div class="wrap">2</div>

<script>
    let aWrap = document.getElementsByClassName("wrap");

    aWrap[0].className = "box";

    aWrap[0].innerHTML = "xxxx";
</script>
```

## 节点初识

**节点（Node）**

> 构成 HTML 网页的最基本单元
>
> 网页中的**每一个部分**都可以称为**是一个节点**
>
> 比如**：html标签、属性、文本、注释、整个文档**等都是一个节点。

**DOM就是由节点组成的。**

**解析过程**：

> HTML加载完毕，渲染引擎会在内存中把HTML文档，生成一个DOM树

DOM的数据结构如下：

![](http://img.smyhvae.com/20180126_2105.png)

上图可知，**在HTML当中，一切都是节点**（非常重要）。

整个html文档就是一个文档节点。所有的节点都是Object。

**节点类型**

> DOM包含了多种节点，我们通常获取的标签，只是节点中的一种：

| 节点名称         | nodeType |
| ---------------- | -------- |
| 元素节点         | 1        |
| 属性节点         | 2        |
| 文本节点         | 3        |
| CDATA节点        | 4        |
| 实体引用名称节点 | 5        |
| 实体名称节点     | 6        |
| 处理指令节点     | 7        |
| 注释节点         | 8        |
| 文档节点         | 9        |
| 文档类型节点     | 10       |
| 文档片段节点     | 11       |
| DTD声明节点      | 12       |

**重点理解**

[![0tSa79.png](https://s1.ax1x.com/2020/10/05/0tSa79.png)](https://imgchr.com/i/0tSa79)

每个节点有`nodeName`属性，文本节点和属性节点的`nodeValue`属性。

## DOM节点的关系

DOM的节点并不是孤立的，因此可以通过DOM节点之间的相对关系对它们进行访问。如下：

![](http://img.smyhvae.com/20180126_2140.png)

[![0tpS3V.png](https://s1.ax1x.com/2020/10/05/0tpS3V.png)](https://imgchr.com/i/0tpS3V)

[![0tpAE9.md.png](https://s1.ax1x.com/2020/10/05/0tpAE9.md.png)](https://imgchr.com/i/0tpAE9)

### childNodes

```html
<body>
    <div class="box">
        <p>1</p>
        <p>2</p>
        <p>3</p>
    </div>

    <script>
        let oBox = document.querySelector('.box');
        let oPs = oBox.childNodes;

        // 空格会被解析为一个空字符串 的数组项
        console.log(oPs);   // NodeList(7) [text, p, text, p, text, p, text]
    </script>
</body>
```

**注意: 文本节点也属于节点**

> DOM中，文本节点也属于节点，在使用节点的关系时一定要注意
>
> **在标准的W3C规范中，空白文本节点也应该算作节点**，但是在IE8及以前的浏览器中会有一定的兼容问题，它们不把空文本节点当做节点
>
> 从IE9开始支持一些“**只考虑元素节点**”的属性

[![0tpt8P.png](https://s1.ax1x.com/2020/10/05/0tpt8P.png)](https://imgchr.com/i/0tpt8P)

### children

> 获取 元素节点的所有子元素节点

```html
<body>
    <div class="box">
        <p>1</p>
        <p>2</p>
        <p>3</p>
    </div>

    <script>
        let oBox = document.querySelector('.box');
        let oPs = oBox.children;
        
        // 获取到的为 HTMLCollection，不能进行forEach操作  
        console.log(oPs)   // HTMLCollection(3) [p, p, p]
    </script>
</body>
```

**举例**

```html
<body>
    <div id="box">
        <p>我是段落A</p>
        <p id="para">我是段落B</p>
        <p>我是段落C</p>
    </div>
    <script>
        let box = document.getElementById("box");
        let para = document.getElementById("para")
        // 所有子节点
        console.log(box.childNodes);
        // 所有的元素的子节点(IE9开始兼容)
        console.log(box.children);

        // 第一个子节点
        console.log(box.firstChild);//text
        console.log(box.firstChild.nodeType);//3
        //可使用
 		console.log(box.children[0]);
        //第一个元素子节点(IE9开始兼容)
        console.log(box.firstElementChild);
        console.log(box.firstElementChild.nodeType);
        
        

        //最后一个子节点
        console.log(box.lastChild);//text
        console.log(box.lastChild.nodeType);//3
        //最后一个元素子节点(IE9开始兼容)
        console.log(box.lastElementChild);
        console.log(box.lastElementChild.nodeType);
        //可使用
        console.log(box.children[box.children.length - 1]);
   

        // 父节点
        console.log(para.parentNode);
        // 获取"爷爷"节点
        console.log(para.parentNode.parentNode);

        // 前一个兄弟节点
        console.log(para.previousSibling);
        // 前一个元素兄弟节点(IE9开始兼容)
        console.log(para.previousElementSibling);
        

        // 后一个兄弟节点
        console.log(para.nextSibling);
        // 后一个元素兄弟节点(IE9开始兼容)
        console.log(para.nextElementSibling);
    </script>
</body>
```

### offsetParent

> 获取元素节点的最近的**带有定位**（包括 absolute、relative、fixed、sticky 定位）的**父元素节点**
>
> （ 若父节点都没有定位，则返回 body 节点 ）

```html
<body>
    <div id="wrap" style="position: absolute;">
        <div class="box">
            <p id="son">111</p>
        </div>
    </div>

    <script>
        let oP = document.getElementById('son');
        console.log(oP.offsetParent);   // 返回 #wrap 节点
        
        //fixed定位元素返回null  比较特殊
    </script>
</body>
```

## 封装节点关系的函数

> 书写IE6也能兼容的“寻找所有元素子节点”函数
>
> 书写IE6也能兼容的“寻找前一个元素兄弟节点”函数
>
> 如何编写函数，获得某元素的所有的兄弟节点?

**封装一个函数**

> 这个函数可以返回元素的所有子元素节点（兼容到IE6），类似children的功能

```js
function getChildren(node) {
    //结果数组
    let children = [];
    //遍历node这个节点所有子节点
    for (var i = 0; i < node.childNodes.length; i++) {
        // 如果node的节点类型是1 证明是元素节点  推入结果数组
        if (node.childNodes[i].nodeType == 1) {
            children.push(node.childNodes[i])
        }
    }
    return children;
}
```

**封装一个函数**

> 这个函数可以返回元素的前一个元素兄弟节点（兼容到IE6），类似previousElementSibling的功能

```js
function getElementPrevSibling(node) {
    let o = node;

    //使用while语句
    while (o.previousSibling != null) {
        if (o.previousSibling.nodeType == 1) {
            // 结束循环 找到了
            return o.previousSibling;
        }
        // 让o成为它的前一个节点,就有点“递归”的感觉
        o = o.previousSibling;
    }
    // 没有前一个兄弟节点返回null
    return null;
}
```

封装第三个函数，这个函数可以返回元素的所有元素兄弟节点

```html
<body>
    <div id="box">
        <p>1111</p>
        <p>2222</p>
        <p>3333</p>
        <p id="para">para</p>
        <p>5555</p>
        <p id="last-p">6666</p>
    </div>

    <script>
        let para = document.getElementById("para");
        let lastP = document.getElementById("last-p");

        function getAllElementSibling(node) {
            // 前面的元素兄弟节点
            let prevs = [];
	
            // 后面的元素兄弟节点
            let nexts = [];

            let o = node;
			//遍历node的前面的节点
            while (o.previousSibling != null) {
                if (o.previousSibling.nodeType == 1) {
                    prevs.unshift(o.previousSibling);
                }
                o = o.previousSibling;
            }

            o = node;
            
			//遍历node的后面的节点
            while (o.nextSibling != null) {
                if (o.nextSibling.nodeType == 1) {
                    nexts.push(o.nextSibling);
                }
                o = o.nextSibling;
            }
			// 将两个数组合并返回
            return prevs.concat(nexts);
        }

        console.log(getAllElementSibling(para));
        console.log(getAllElementSibling(lastP));
    </script>
```

## += 拼接会出现的问题

```html
<body>
    <div id="wrap">
        <p>1111111</p>
    </div>
    <script>
        let wrap = document.getElementById("wrap");
        
        document.querySelector("#wrap p").onclick = function () {
            alert(1);
        }

	// += 操作只会保留之前的html结构，不会保留之前节点上绑定的事件，导致点击p时点击弹窗事件不会触发
        wrap.innerHTML += `<a href="http://www.tanzhouedu.com">潭州教育</a>`;
    </script>
</body>
```

## 节点的创建

### document.createElement() 

> **创建一个指定tagname的HTML元素**
>
> **孤儿节点**
>
> ​        ◆ 新创建出的节点是 "孤儿节点”, 这意味着它**并没有被挂载到DOM树上**,我们无法看见它
>
> ​        ◆ 必须继续使用**appendChild()或insertBefore()方法**将孤儿节点插入到DOM树上

```js
let oDiv = document.createElement('div'); 
```

### createTextNode()   

> **创建一个文本节点**

```js
let oText = document.createTextNode("如果云层是天空的一封信");
```

createDocumentFragment()

> 创建一个文档碎片，先将多个节点整合到这里面再统一添加。
>
> 解决使用 appendChild 多次添加节点时，页面多次进行渲染的问题。
>
> **使用 DocumentFragment 处理节点，速度和性能远远优于直接操作 DOM。**

```html
<!-- 普通写法 - 页面多次渲染 -->
<body>
    <div class="box">

   	</div>
    <script>
        let oBox = document.querySelector('.box')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        oBox.appendChild(p1)
        oBox.appendChild(p2)
    </script>
</body>

<!-- 使用文档碎片 - 页面只进行一次渲染 -->
<body>
    <div class="box">
    </div>

    <script>
        let oBox = document.querySelector('.box');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');

        // 创建文档碎片
        let fragment = document.createDocumentFragment();
        
        // 先将所有节点添加到文档碎片中 - 不进行页面渲染
        fragment.appendChild(p1);
        fragment.appendChild(p2);
        // 将文档碎片再添加到文档中
        oBox.appendChild(fragment);
    </script>
</body>
```

## 添加节点

### appendChild()

> 任何已经在DOM树上的节点,都可以调用appendChild()方法，
>
> 它可以将孤儿节点挂载到它的内部,**成为它的最后一个子节点**
>
> **语法：**
> 			**父节点. appendChild(孤儿节点)**;

### insertBefore()

> 任何已经在DOM树上的节点,都可以调用insertBefore()方法
>
> 它可以将孤儿节点挂载到它的内部,**成为它的“标杆子节点”之前的节点**
>
> **语法：**
>
> ​		**父节点. insertBefore(孤儿节点，标杆节点);**

```html
</body>
    <div id="wrap">
        <p>我是原来的段落0</p>
        <p>我是原来的段落1</p>
        <p>我是原来的段落2</p>
    </div>
    <script>
        let aP = document.querySelectorAll("#wrap p");
        
        let oWrap = document.getElementById("wrap");
        //创建孤儿节点
        let oP = document.createElement("p");
        //设置内部的文字
        oP.innerText = "我是新来的";
        //设置内部的样式
        oP.style.color = "pink";
        //上树
        //oWrap.appendChild(oP);
        
        oWrap.insertBefore(oP, aP[1]);
    </script>
</body>
```

 **小练习**

> **请动态创建出一个20行12列的表格**

```html
<style>
    td {
        width: 20px;
        height: 20px;
        border: 1px solid black;
    }
    table {
        border-collapse: collapse;
    }
</style>
</head>

<body>
    <table id="my-table"></table>

    <script>
        // 小练习   请动态创建出一个20行12列的表格
        let myTable = document.querySelector("#my-table");

        for (let i = 0; i < 20; i++) {
            //创建新的tr标签
            let tr = document.createElement("tr");

            for (let j = 0; j < 12; j++) {
                //创建新的td标签
                let td = document.createElement("td");

                //tr里面追加td标签
                tr.appendChild(td);
            }

            //myTable追加tr标签
            myTable.appendChild(tr);
        }
    </script>
```

**九九乘法表**

```html
<style>
    td {
        width: 100px;
        height: 40px;
        border: 1px solid black;
    }
    table {
        border-collapse: collapse;
    }
</style>
</head>

<body>
    <table id="my-table"></table>

    <script>

        let myTable = document.querySelector("#my-table");

        for (let i = 1; i <= 9; i++) {
            //创建新的tr标签
            let tr = document.createElement("tr");

            for (let j = 1; j <= i; j++) {
                //创建新的td标签
                let td = document.createElement("td");

                td.innerText = `${i} 乘 ${j} = ${i*j}`;

                //tr里面追加td标签
                tr.appendChild(td);
            }

            //myTable追加tr标签
            myTable.appendChild(tr);
        }
    </script>
```

## 移动节点

> 如果将已经挂载到DOM树 上的节点成为appendChild()或insertBefore()的参数,**这个节点将会被移动** 
>
> ​	**语法： 新父节点.appendChild(已经有父亲的节点);**
>
> ​	**语法： 新父节点. insertBefore(已经有父亲的节点，标杆子节点);**
>
> ◆   这意味着一个节点不能同时位于DOM树的两个位置

```html
<body>
    <div id="box">
        <p>1111</p>
    </div>
    
     <div id="wrap">
        <p>我是原来的段落0</p>
        <p>我是原来的段落1</p>
        <p>我是原来的段落2</p>
    </div>
    <script>
        let oWrap = document.getElementById("wrap");
        let oBox = document.getElementById("box");
        let oBox_p = document.querySelector("#box p");
        let aP = document.querySelectorAll("#wrap p");
        //  oBox.append(aP[0]);
        oWrap.insertBefore(oBox_p, aP[0]);
    </script>
</body>
```

## 删除节点

### removeChild() 

> 从DOM中删除一个子节点
>
> ​		 **父节点. removeChild(要删除子节点);**
>
> 节点不能主动删除自己,必须由父节点删除它

```html
<div id="box1">
    <p>我是box2原有的p标签0</p>
    <p>我是box2原有的p标签1</p>
    <p>我是box2原有的p标签2</p>
</div>

<div id="box2"></div>
<script>
    let box1 = document.getElementById("box1"),
        box2 = document.getElementById("box2"),
        ps_inbox2 = document.querySelectorAll("#box1 p");

    box1.removeChild(ps_inbox2[1]);// 删除的节点依然在内存中可以访问到
    // 如果不想获取父级可以写成
    //  ps_inbox2[1].parentNode.removeChild(ps_inbox2[1]);
</script>
```

## 克隆节点

> ◆cloneNode() 方法可以克隆节点，克隆出的节点是“孤儿节点"
>
> ​        **let 孤儿节点 = 老节点.cloneNode();**
>
> ​          **let 孤儿节点= 老节点.cloneNode(true);**
>
> ◆**参数是一个布尔值 ,**
>
> 表示是否**采用深度克隆:**
>
> > 如果为true ,则该节点的所有后代节点也都会被克隆,
> >
> > 如果为false ,则只克隆该节点本身
>
> 浅克隆 ：不克隆该元素的子元素 ( 该元素内的文本也不保留 )   
>
> 深克隆 ：  克隆该元素以及元素中的所有子元素（包含文本内容）

```html
<body>
    <div id="box1">
        <ul>
            <li>牛奶</li>
            <li>咖啡</li>
            <li>可乐</li>
        </ul>
    </div>

    <div id="box2"></div>
    <script>
        let box1 = document.getElementById("box1"),
            box2 = document.getElementById("box2"),
            oUl = document.querySelector("#box1 ul");

        let newUl = oUl.cloneNode(true); //克隆节点

        box2.appendChild(newUl); //插入box2盒子
    </script>
</body>
```
