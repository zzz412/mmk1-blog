# dom事件

## 事件监听

> DOM允许我们书写JavaScript代码以让 **HTML元素对事件作出反应**

**什么是事件**

> **用户与网页的交互动作**

> 当用户点击元素时
>
> 当鼠标移动到元素上时
>
> 当文本框的内容被改变时
>
> 当键盘在文本框中被按下时
>
> 当网页已加载完毕时........

**什么是监听**

> “监听”，顾名思义，就是让**计算机随时能够发现这个事件发生了**，从而执行程序员预先编写的一些程序

## DOMO级事件

> 最简单的给元素设置事件监听的方法就是**设置它们的onxxx属性**，像这样:

```js
oBox.onclick = function(){
	//点击盒子,将执行这里的语句
}
```

**举例**

```html
<style>
    #box{
        width: 100px;
        height: 100px;
        background-color: #333;
    }
</style>
</head>
<body>
    <div id="box"></div>
    <script>
        let oBox = document.getElementById("box");

        oBox.onclick = function(){
            alert("您好,我是点击函数");
        };
    </script>
```

## 常见的鼠标事件监听

|      鼠标事件       |                                                              |
| :-----------------: | :----------------------------------------------------------: |
|       onclick       |                           鼠标单击                           |
|     ondblclick      |                           鼠标双击                           |
|    oncontextmenu    | 鼠标右击 ( 通常需要在触发函数中添加 ev.preventDefault()来阻止浏览器默认行为 ) |
| onmouseenter(常用)  |                   鼠标移入 ( 只触发一次 )                    |
| onmouseleave(常用)  |                           鼠标移出                           |
| onmouseover(不常用) |          鼠标移入( 进入触发,进入 子元素 继续触发 )           |
| onmouseout(不常用)  |           鼠标移出 ( 移出时触发,遇到子元素也触发 )           |
|     onmousedown     |                          鼠标按下时                          |
|      onmouseup      |                          鼠标松开时                          |
|     onmousemove     |                      鼠标在区域内移动时                      |
|       onwheel       |                      滚轮在区域内滚动时                      |

[![0d85Fg.png](https://s1.ax1x.com/2020/10/07/0d85Fg.png)](https://imgchr.com/i/0d85Fg)

**举例**

```html
<style>
    #box {
        width: 100px;
        height: 100px;
        background-color: #333;
    }
</style>
</head>
<body>
    <div id="box"></div>
    <script>
        let oBox = document.getElementById("box");

        oBox.onclick = function () {
            console.log("我是onclick");
        };

        oBox.ondblclick = function () {
            console.log("我是ondblclick");
        };

        oBox.onmousedown = function () {
            console.log("我是onmousedown");
        };

        oBox.onmouseup = function () {
            console.log("我是onmouseup");
        };

        //触发一个click事件会依次先后触发： mousedown  ==>  mouseup  ==>  click
        oBox.onmouseenter = function () {
            console.log("我是onmouseenter");
        };

        oBox.onmouseleave = function () {
            console.log("我是onmouseleave");
        };

        oBox.onmouseover = function () {
            console.log("我是onmouseover");
        };

        oBox.onmouseout = function () {
            console.log("我是onmouseout");
        };

        oBox.onmousemove = function () {
            console.log("我是onmousemove");
        };
    </script>
```

## 常见的键盘事件监听

[![0dJLIU.png](https://s1.ax1x.com/2020/10/07/0dJLIU.png)](https://imgchr.com/i/0dJLIU)

**举例**

```html
    姓名
    <input type="text" id="name-field">

    <script>
        let nameField = document.getElementById("name-field");

        //顺序为：keydown -> keypress ->keyup
        nameField.onkeydown = function(){
            console.log("我是onkeydown");
        }

        nameField.onkeypress = function(){
            console.log("我是onkeypress");
        }
    
        nameField.onkeyup = function(){
            console.log("我是onkeyup");
        }

    </script>
```

## 常见的表单事件监听

[![0dYsW4.png](https://s1.ax1x.com/2020/10/07/0dYsW4.png)](https://imgchr.com/i/0dYsW4)

```html
<body>
    <form action="#" id="myform">
        <p>
            姓名:
            <input type="text" id="name-field" />
        </p>
        <p>
            年龄
            <input type="text" id="age-field" />
        </p>
        <input type="submit">
        <input type="reset">
    </form>

    <script>
        let myForm = document.getElementById("myform");
        let nameField = document.getElementById("name-field");
        let ageField = document.getElementById("age-field");

        nameField.onchange = function () {
            console.log("你已经修改完姓名了");
        };

        nameField.oninput = function () {
            console.log("你正在修改姓名");
        };

        ageField.onfocus = function () {
            console.log("年龄框已经得到焦点");
        };

        ageField.onblur = function () {
            console.log("年龄框已经失去焦点");
        };

        myForm.onsubmit = function(){
            console.log("表单正在提交");
        }
        
        myForm.onreset = function(){
            console.log("表单正在重置");
        }
    </script>
</body>
```

## 常见的页面事件监听

[![0da3Bn.png](https://s1.ax1x.com/2020/10/07/0da3Bn.png)](https://imgchr.com/i/0da3Bn)

### 文档的加载

> 浏览器在加载一个页面时，是按照**自上向下的顺序加载的**，读取到一行就运行一行。
>
> 如果将**script标签写到页面的上边**，在代码执行时，页面还没有加载，页面没有加载DOM对象也没有加载，会导致**无法获取到DOM对象**。

**onload 事件**：

> onload 事件会在整个页面加载完成之后才触发。为 window 绑定一个onload事件，该事件对应的响应函数将会在页面加载完成之后执行，这样可以确保我们的代码执行时所有的DOM对象已经加载完毕了。

```html
<script type="text/javascript">
    // 【方式一：先加载，后执行】这段 js 代码是写在 <head> 标签里的，所以建议放在 window.onload 里面。
    window.onload = function() {
        // 获取id为btn的按钮
        let btn = document.getElementById("btn");
        // 为按钮绑定点击事件
        btn.onclick = function() {
            alert("hello");
        };
    };
</script>
</head>
<body>
    <button id="btn">点我一下</button>

    <script type="text/javascript">
        // 【方式二：后加载，后执行】这段 js 代码是写在 <body> 标签里的，代码的位置是处在页面的下方。这么做，也可以确保：在页面加载完毕后，再执行 js 代码。

        // 获取id为btn的按钮
        let btn = document.getElementById("btn");
        // 为按钮绑定点击事件
        btn.onclick = function() {
            alert("hello");
        };

        
        //上方代码中，方式一和方式二均可以确保：在页面加载完毕后，再执行 js 代码。
    </script>
</body>

```

## 事件传播

**思考一个问题**

> [![0dadc4.png](https://s1.ax1x.com/2020/10/07/0dadc4.png)](https://imgchr.com/i/0dadc4)

**研究:当盒子嵌套时事件监听的执行顺序**

```html
<style>
      div {
        display: flex;
        margin: auto;
      }
    #box1 {
        width: 200px;
        height: 200px;
        border: 1px solid black;
    }
    #box2 {
        width: 150px;
        height: 150px;
        border: 1px solid black;
    }
    #box3 {
        width: 100px;
        height: 100px;
        border: 1px solid black;
    }
</style>
</head>
<body>
    <div id="box1">
        <div id="box2">
            <div id="box3"></div>
        </div>
    </div>

    <script>
        let oBox1 = document.getElementById("box1");
        let oBox2 = document.getElementById("box2");
        let oBox3 = document.getElementById("box3");

        oBox1.onclick = function () {
            console.log("我是box1的onclick");
        };
        oBox2.onclick = function () {
            console.log("我是box2的onclick");
        };
        oBox3.onclick = function () {
            console.log("我是box3的onclick");
        };


        //冒泡只会触发同等类型的事件
        oBox2.onclick = function(){
            console.log("我是box2的onclick");
        }
        oBox3.onmouseenter = function(){
            console.log("我是box3的onmouseenter");
        }
        //即使打乱顺序 也是由Box3到Box1传递  我们感觉事件传递是由内往外
    </script>
```

实际上

事件的传播是 **先从外到内  然后再从内到外**

[![0dd7L9.png](https://s1.ax1x.com/2020/10/07/0dd7L9.png)](https://imgchr.com/i/0dd7L9)

**onxxx这样的写法只能监听冒泡阶段**

## DOM2级事件

> 高级事件处理方式, 一个事件可以绑定多个监听函数
>
> DOM 2级时添加了一种新的绑定事件的方式：`addEventListener`

```js
oBox.addEventListener("click", function () {
    alert("这是dom2级绑定方式", false)
})
//参数1：事件名的字符串(注意，没有on)
//参数2：回调函数：当事件触发时，该函数会被执行
//参数3：true表示捕获阶段触发，false表示冒泡阶段触发（默认）。如果不写，则默认为false。【重要】
```

```html
<style>
    div {
        display: flex;
        margin: auto;
    }
    #box1 {
        width: 200px;
        height: 200px;
        border: 1px solid black;
    }
    #box2 {
        width: 150px;
        height: 150px;
        border: 1px solid black;
    }
    #box3 {
        width: 100px;
        height: 100px;
        border: 1px solid black;
    }
</style>
</head>
<body>
    <div id="box1">
        <div id="box2">
            <div id="box3"></div>
        </div>
    </div>

    <script>
        let oBox1 = document.getElementById("box1");
        let oBox2 = document.getElementById("box2");
        let oBox3 = document.getElementById("box3");

        oBox1.addEventListener("click", function () {
            console.log("我是box1的捕获阶段");
        },true);
        oBox2.addEventListener("click", function () {
            console.log("我是box2的捕获阶段");
        },true);
        oBox3.addEventListener("click", function () {
            console.log("我是box3的捕获阶段");
        },true);

        oBox1.addEventListener("click", function () {
            console.log("我是box1的冒泡阶段");
        },false);
        oBox2.addEventListener("click", function () {
            console.log("我是box2的冒泡阶段");
        },false);
        oBox3.addEventListener("click", function () {
            console.log("我是box3的冒泡阶段");
        },false);
        //先捕获再冒泡  
        //最内层的元素不区分捕获还是冒泡 受顺序影响
    </script>
</body>
```

> **最内部元素不再区分捕获和冒泡阶段**，会先执行写在前面的监听，然后执行后写的监听

## 事件解绑

**语法**

```js
element.removeEventListener(event, function, useCapture)
```

**举例**

```js
<input type="button" id="btn" value="按钮">


    let btn = document.getElementById("btn"); 
btn.addEventListener("click"  , function(){
    alert("事件绑定");
},false)

btn.removeEventListener("click" , function(){
    alert("事件绑定")
},false)//此时不能解绑


//此时可以解绑
function clickme(){
    alert("事件绑定")
}
btn.addEventListener("click" , clickme);
btn.removeEventListener("click" , clickme);

```

**注意事项**

> 如果给元素设置相同的**两个或多个同名事件**，则**DOM0级写法后面写的会覆盖先写的**;
>
> 而**DOM2级会按顺序执行**

```js
oBox3.onclick = function(){
    console.log("A");
}
oBox3.onclick = function(){
    console.log("B");
}
oBox3.addEventListener("click" , function(){
    console.log("C");
})
oBox3.addEventListener("click" , function(){
    console.log("D");
})
//弹出BCD
```

## 事件对象event

**什么是事件对象**

> 事件处理函数提供一个形式参数，它是一个对象，**封装了本次事件的细节**
>
> 这个参数通常用**单词event或字母e**来表示

```js
oBox.onclick = function(e){
    //对象e就是这次事件的"事件对象"
}
```

### 获取 event 对象(兼容)

所有浏览器都支持event对象，但支持的方式不同

（1）普通浏览器的写法是 `event`。

（2）ie 678 的写法是 `window.event`。此时，事件对象 event 是作为window对象的属性保存的。

于是，我们可以采取一种兼容性的写法。如下：

```js
 event = event || window.event; // 兼容性写法
```

**举例**

```html
<script>
    document.onclick = function(event){
    event = event || window.event;
    console.log(event);
    console.log(event.type);
}
</script>
```

### 鼠标位置

[![0dBebj.png](https://s1.ax1x.com/2020/10/07/0dBebj.png)](https://imgchr.com/i/0dBebj)

**举例**

```html
<style>
    *{margin: 0; padding: 0;}
    body{
        height: 3000px;
    }
    #box{
        width: 200px;
        height: 200px;
        background-color: #333;
        padding: 50px;
        margin: 100px;
    }

    #info{
        font-size: 30px;
    }
</style>
</head>
<body>
    <div id="box">
        <!-- offsetX注意内部的盒子 计算最内层盒子指针到边界的距离-->
        <div style="width: 100px; height: 100px; background-color: green;"></div>
    </div>
    <div id="info"></div>
    <script>
        let oBox = document.getElementById("box");
        let oInfo = document.getElementById("info");

        oBox.onmousemove = function(e){
            oInfo.innerHTML = `offsetX值: ${e.offsetX}  offsetY值: ${e.offsetY}<br>
clientX值: ${e.clientX}  clientY值: ${e.clientY}<br>
pageX值: ${e.pageX}  pageY值: ${e.pageY} `
        }
    </script>
</body>
```

### e.charCode和e.keyCode属性

> **e.charCode**属性通常**用于onkeypress事件**中，表示用户`输入的字符的**“字符码**”
>
> **e.keyCode**属性通常用于**onkeydown事件和onkeyup**中，表示用户按下的按键的“**键码"**

[![0dWINF.png](https://s1.ax1x.com/2020/10/07/0dWINF.png)](https://imgchr.com/i/0dWINF)

[![0dWqj1.png](https://s1.ax1x.com/2020/10/07/0dWqj1.png)](https://imgchr.com/i/0dWqj1)

```html
<body>
    <input type="text" id="field1">
    <h1 id="info1"></h1>

    <input type="text" id="field2">
    <h1 id="info2"></h1>
    <script>
        let oField1 = document.getElementById("field1");
        let oField2 = document.getElementById("field2");
        let oInfo1 = document.getElementById("info1");
        let oInfo2 = document.getElementById("info2");

        oField1.onkeypress = function(e){
            oInfo1.innerText = `您输入的字符的字符码是 ${e.charCode}`;
        }
        oField2.onkeydown = function(e){
            oInfo2.innerText = `您按下的按键的键码是 ${e.keyCode}`;
        }
    </script>
</body>
```

![dx4eVf.jpg](https://s1.ax1x.com/2020/09/01/dx4eVf.jpg)

#### 小案例

> **制作一个特效:按方向键可以控制页面上的盒子移动**

```html
<style>
    #box{
        position: relative;
        top: 200px;
        left: 200px;
        width: 50px;
        height: 50px;
        background-color: orange;
    }        

</style>
</head>
<body>

    <div id="box"></div>

    <script>
        let oBox = document.getElementById("box");

        //全局变量t , l 分贝表示盒子的top和let属性值
        let t = 200;
        let l = 200;

        //监听document对象的键盘按下事件监听  表示当用户在整个网页上按下按键的时候
        /*37 左
          38 上
          39 右
          40 下
         */
        document.onkeydown = function(e){
            switch (e.keyCode) {
                case 37:
                    l -= 3;
                    break;
                case 38:
                    t -= 3;
                    break;
                case 39:
                    l += 3;
                    break;
                case 40:
                    t += 3;
                    break;
            }
            //更改样式
            oBox.style.left = l + "px";
            oBox.style.top = t + "px";
        };
    </script>
```

### e.preventDefault(方法

> e.preventDefault()方法用来**阻止事件产生的“默认动作”**
>
> —些特殊的业务需求，需要阻止事件的“默认动作”

**举例**

```js
<a href="https://www.baidu.com" id="a">我是a</a>

let a = document.getElementById("a");
    a.addEventListener("click" , function(e){
    e.preventDefault();
    alert("11")
})
```

#### 小案例1

> 制作一个**文本框，只能让用户在其中输入小写字母和数字**，其他字符输入没有效果

```HTML
<body>
    <p>
        <input type="text" id="field" />
    </p>

    <script>
        let oField = document.getElementById("field");

        oField.onkeypress = function(e){
            //根据用户输入的字符的字符码(e.charCode)
            //数字0~9  字符 码48~57
            //小写字母a~z 字符码是97~122

 if(!(e.charCode >= 48 && e.charCode <= 57 || e.charCode >= 97 && e.charCode <= 122)){		 		//阻止浏览器的默认行为
                e.preventDefault();
            }

            console.log(e.charCode);
        };
       
    </script>
</body>
```

#### 小案例2

> 制作鼠标滚轮事件:当鼠标在盒子中向下滚动时，数字加1,反之，数字减1.
>
> 鼠标滚轮事件是**onmousewheel**，它的事件对象e提供**deltaY属性表示鼠标滚动方向**，向下滚动时返回正值，向上滚动时返回负值

```html
<style>
    #box{
        width: 200px;
        height: 200px;
        background-color: #333;
    }
    body{
        height: 3000px;
    }

</style>
</head>
<body>
    <div id="box"></div>
    <h1 id="info">0</h1>
    <script>
        let oBox = document.getElementById("box");
        let oInfo = document.getElementById("info");

        //全局变量就是info中显示的数字
        let a = 0;

        oBox.onmousewheel = function(e){
            if(e.deltaY > 0){
                a++;
            }else{
                a--;
            }
            oInfo.innerText = a;
            //阻止默认事件 用户在盒子里面滚动鼠标滚轮的时候,此时不会引发页面的滚动条的滚动
            e.preventDefault();
        }
    </script>
```

### e. stopPropagation()方法

> e.stopPropagation()方法用来**阻止事件继续传播**
>
> 在一些场合，**非常有必要切断事件继续传播**，否则会造成页面特效显示出bug

**用法**

```html
<style>
    #box {
        width: 100px;
        height: 100px;
        background-color: #333;
    }
</style>
</head>
<body>
    <div id="box">
        <input type="button" value="按钮" id="btn" />
    </div>
    <script>
        let oBox = document.getElementById("box");
        let oBtn = document.getElementById("btn");

        oBox.onclick = function () {
            console.log("我是盒子");
        };
        oBtn.onclick = function (e) {
            //阻止事件传播
            e.stopPropagation();
            console.log("我是按钮");
        };


        oBox.addEventListener("click" , function(e){
            //阻止事件传播
            e.stopPropagation();
            console.log("我是盒子");
        },true)
        oBtn.addEventListener("click" , function(e){
            console.log("我是按钮");
        },true)
    </script>
```

**小案例**

```html
<style>
    #content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 200px;
        height: 100px;
        background-color: #333;
        text-align: center;
        line-height: 100px;
        transition: 0.5s;
        transform: scale(0);
    }

    #content.show {
        transform: scale(1);
    }
</style>
</head>
<body>
    <input type="button" value="点我试试" id="tips" />
    <div id="content">弹窗内容</div>

    <script>
        let oButton = document.getElementById("tips"),
            oCotent = document.getElementById("content");

        // 点击按钮的时候 弹出层显示
        oButton.onclick = function (e) {
            //  阻止事件继续传播到document上
            e.stopPropagation();
            oCotent.classList.add("show");
        };

        // 点击页面的任何部分的时候 弹出层关闭
        document.onclick = function () {
            oCotent.classList.remove("show");
        };

        //  点击弹出层内部的时候 不能关闭弹出层的 应该阻止事件继续传播
        oCotent.onclick = function (e) {
            //阻止事件继续传播到docuemnt身上
            e.stopPropagation();
        };
    </script>
</body>
```

## 事件委托

> （原理就是事件冒泡）

**批量添加事件监听**

> 题目:页面上有一个无序列表`<ul>`，它内部共有**20个`<li>`元素**，请**批量**给它们添加点击事件监听，实
>
> 现效果:**点击哪个`<li>`元素，哪个`<li>`元素就变红**

```html
<body>
  <ul id="list">
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
  </ul>

  <script>
      let oList = document.getElementById("list");
      let aLi = oList.getElementsByTagName("li");
	
      // 书写循环语句 批量给元素添加事件监听
      for(let i = 0; i < aLi.length; i++){
        aLi[i].onclick = function(){
          this.style.color = "red";
        }
      }
  </script>
```

**批量添加事件监听的性能问题**

> 每一个事件监听注册都会消耗一定的系统内存，而批量添加事件会导致监听数量太多，**内存消耗会非常大**
>
> 实际上，**每个`<li>`的事件处理函数都是不同的函数**，这些函数本身也会占用内存

再看一个例子

**新增元素动态绑定事件**

> 题目:页面上有一个无序列表`<ul>`，它内部没有`<li>`元素，请制作一个按钮，点击这个按钮就能增加
>
> 一个`<li>`元素。并且**要求每个增加的`<li>`元素也要有点击事件监听**，实现效果点击哪个`<li>`元素，
>
> 哪个`<li>`元素就变红

```html
<body>
    <input type="button" value="点击添加列表项" / id="btn">
    <ul id="list"></ul>
    <script>
        let oBtn = document.getElementById("btn");
        let oList = document.getElementById("list");

        // 按钮的点击事件
        oBtn.onclick = function () {
            // 创建一个新的li列表项 孤儿节点
            let oLi = document.createElement("li");
		   // 写内容
            oLi.innerText = "列表项";
            // 上树
            oList.appendChild(oLi);
            // 给新创建的li节点添加事件
            oLi.onclick = function () {
                this.style.color = "red";
            };
        };
    </script>
</body>
```

**动态绑定事件的问题**

> 新增元素必须分别添加事件监听，不能自动获得事件监听
>
> 大量事件监听、大量事件处理函数都会产生大量消耗内存

**事件委托**

> 利用**事件冒泡机制**，将**后代元素**事件委托给**祖先元素**

```html
<ul id="list">   <!--监听onclick事件-->
    <li>列表项</li>
    <li>列表项</li> <!--不管点击任何一个li元素,事件就会通过事件冒泡传到祖先元素-->
    <li>列表项</li>
    <li>列表项</li>
</ul>
```

### e.target和e.currentTarget属性

> 事件委托通常需要**结合使用e.target属性**

[![0wo8iV.png](https://s1.ax1x.com/2020/10/08/0wo8iV.png)](https://imgchr.com/i/0wo8iV)

### 解决之前的批量监听和动态绑定

```html
<body>
    <input type="button" id="btn" value="点我生成新的列表项">
    <ul id="list">
        <li>列表项</li>
        <li>列表项</li>
        <li>列表项</li>
        <li>列表项</li>
    </ul>

    <script>
        let oList = document.getElementById("list");

        oList.onclick = function (e) {
            //e.target表示用户真正点击的那个元素 点击谁谁就是target  事件源
            e.target.style.color = "red";

            console.log(e.target);
            console.log(e.currentTarget);
            //e.currentTarget 事件绑定在谁身上  就是指向谁 相当于this
        };

        let oBtn = document.getElementById("btn");

        oBtn.onclick = function(){
            // 创建新的li元素
            let oLi = document.createElement("li");
            // 写内容
            oLi.innerText = "列表项";
            // 上树
            oList.appendChild(oLi);
        }
    </script>
```

### 事件委托的使用场景

> **当有大量类似元素需要批量添加事件监听时**，使用事件委托可以减少内存开销
>
> **当有动态元素节点上树时**，使用事件委托可以让新上树的元素具有事件监听

### 使用事件委托时需要注意的事项

onmouseenter和onmouseover都表示“鼠标进入”，它们有什么区别呢?

> **onmouseenter不冒泡，onmouseover冒泡。**

使用事件委托时要注意:**不能委托不冒泡的事件给祖先元素**

```html
<body>
    <input type="button" id="btn" value="点我生成新的列表项">
    <ul id="list">
      <li>列表项</li>
      <li>列表项</li>
      <li>列表项</li>
      <li>列表项</li>
    </ul>

    <script>
      let oList = document.getElementById("list");
		
       // onmouseenter这个属性天生就是不冒泡的 , 相当于你事件处理函数附加了哪个Dom节点
       //就是哪个Dom节点自己触发的事件 没有冒泡的过程
      oList.onmouseenter = function (e) {
        e.target.style.color = "red";
      };

      let oBtn = document.getElementById("btn");

      oBtn.onclick = function(){
        let oLi = document.createElement("li");
        oLi.innerText = "列表项";
        oList.appendChild(oLi);
      }
    </script>
```

最内层元素**不能再有额外的内层元素**了，比如:

```html
<ul id="list">
    <li><span>ABCD</span>列表项</li>
    <li><span>ABCD</span>列表项</li>
    <li><span>ABCD</span>列表项</li>
    <li><span>ABCD</span>列表项</li>
</ul>

<script>
    let oList = document.getElementById("list");
	
    //点击span只要span变色
    oList.onclick = function (e) {
        e.target.style.color = "red";
    };
</script>
```

**以下事件不冒泡**

> blur、focus、load、unload、onmouseenter、onmouseleave。意思是，事件不会往父元素那里传递。

我们检查一个元素是否会冒泡，可以通过事件的以下参数：

```js
event.bubbles
//如果返回值为true，说明该事件会冒泡；反之则相反。
```

**举例：**

```js
box1.onclick = function (event) {
    event = event || window.event;
    console.log(event.bubbles); //打印结果：true。说明 onclick 事件是可以冒泡的
}
```

## event对象跨浏览器兼容性写法

```js
let eventUtil = {
    addHandler: function (element, type, handler) {
        //绑定事件
        // chrome、firefox、 IE9等addEventListener
        // IE8及IE8以下的浏览器attachEvent
        if (element.addEventListener) {
            element.addEventListener(type, handler, false)
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler)
        } else {
            element["on" + type] = handler;
        }
    },

    getTarget: function (event) {
        return event.target || event.srcElement;
    },

    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    removeHander: function (element, type, handler) {
        //移除事件
        //chrome、firefox、 IE9等removeEventListener
        //E8及IE8以下的浏览器detachEvent
        if (element.addeventListener) {
            element.removeEventListener(type, handler, false)
        } else if (element.attachEvent) {
            element.detachEvent("on" + type, handler)
        } else {
            element["on" + type] = null;
        }
    }
}
```

## 事件汇总

|       标事件        |                                                              |
| :-----------------: | :----------------------------------------------------------: |
|       onclick       |                           鼠标单击                           |
|     ondblclick      |                           鼠标双击                           |
|    oncontextmenu    | 鼠标右击 ( 通常需要在触发函数中添加 ev.preventDefault()来阻止浏览器默认行为 ) |
| onmouseenter(常用)  |                   鼠标移入 ( 只触发一次 )                    |
| onmouseleave(常用)  |                           鼠标移出                           |
| onmouseover(不常用) |          鼠标移入( 进入触发,进入 子元素 继续触发 )           |
| onmouseout(不常用)  |           鼠标移出 ( 移出时触发,遇到子元素也触发 )           |
|     onmousedown     |                          鼠标按下时                          |
|      onmouseup      |                          鼠标松开时                          |
|     onmousemove     |                      鼠标在区域内移动时                      |
|       onwheel       |                      滚轮在区域内滚动时                      |

|  键盘事件  |                                                            |
| :--------: | :--------------------------------------------------------: |
| onkeydown  |                         键盘按下时                         |
|  onkeyup   |                         键盘弹起时                         |
| onkeypress | 键盘按下并弹起后触发,但系统按钮无法识别( 箭头键/功能键等 ) |
|  oninput   |         当input框内输入时触发(有兼容问题,但是好用)         |

|   表单元素事件   |                            |
| :--------------: | :------------------------: |
| `<input>`.onchange | 内容改变后且焦点离开后触发 |
| `<input>`.onfocus  |       获得焦点时触发       |
|  `<input>`.onblur  |       失去焦点时触发       |
| `<input>`.onselect |  当select下拉框选择后触发  |
| `<form>`.onsubmit  |        当表单提交时        |
|  `<form>`.onreset  |        当表单重置时        |

| 系统事件 |                      |
| :------: | :------------------: |
|  onload  |    页面加载完成后    |
| onerror  |    页面加载出错后    |
| onresize | 浏览器窗口大小改变时 |
| onscroll |   页面滚动条滚动时   |

```js
eventUtil.addHandler(myBtn, "mousedown", function (event) {
	console.log("mousedown");
	console.log(event.button) //区分浏览器
    // event.button == 0 鼠标左键
    //event.button == 1 鼠标中键
    //event.button == 2 鼠标右键
```

### resize 事件

> 当浏览器窗口被调整到一个新的高度或宽度时，就会触发resize事件。

```js
eventUtil.addHandler(window, "resize", function(event){
	alert("Resized");
});
```

### scroll事件

```js
body{
    height:2000px;
}
eventUtil.addHandler(window, "scroll", function (event) {
    alert("scrolled")
});
```

### mouseenter

> 光标从元素外部首次移动到元素范围之内时触发，这个事件**不冒泡**，而且在鼠标移动到后代元素上也不会触发

```js
var div = document.getElementById("div");
eventUtil.addHandler(div, "mouseenter", function(event){
	console.log("mouseenter")
})
//只能进入目标元素时候才去触发
```

### mouseleave

> 鼠标光标移动到元素范围之外时触发。这个事件**不冒泡**，而且在鼠标移动到后代元素上也不会触发

```js
eventUtil.addHandler(div, "mouseleave", function (event) {
	console.log("mouseleave ")
})
//只能离开目标元素时候才去触发
```

### mouseover

> 在鼠标指针位于一个元素外部，然后用户将其首次移入另一个元素边界之内时触发

```js
eventUtil.addHandler(div, "mouseover", function(event){
	console.log("mouseover")
})
//进入目标元素或者其子元素的时候执行
```

### mouseout

> 在鼠标指针位于一个元素上方，然后用户将其移动到另一个元素时触发

```js
eventUtil.addHandler(div, "mouseout", function(event){
	console.log("mouseout")
})
//离开目标元素或者其子元素的时候执行
```

### mousemove

> 当鼠标指针在元素内部移动时重复地触发

```js
EventUtil.addHandler(myBtn, "mousemove", function(event){
    console.log("mousemove")
})
```

### focusin

> 同focus一样 但是它支持冒泡

```js
eventUtil.addHandler(input, "focusin", function(event){
	console.log("元素获取焦点的时候触发,支持事件浏览器是IE5.5+,Safari5.1+，chrome等");
});
```

### focuout

> 同blur一样 支持冒泡

```js
EventUtil.addHandler(input, "focuout", function(event){
	console.log("元素失去焦点的时候触发,支持事件浏览器是IE5.5+,Safari5.1+，chrome等");
});
```

### 元素增删事件

```html
<input type="text" id="Input">

<ul id="myList">
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ul>

<script>
    let Input = document.getElementById("Input");
    let li = document.getElementsByTagName("li");
    let myList = document.getElementById('myList');

    eventUtil.addHandler(document, "DOMNodeRemoved", function (event) {
        console.log(1111);
    })
    document.body.removeChild(myInput);
    // document中任意元素被删除就会触发


    // myList任意元素被删除都会触发
    eventUtil.addHandler(myList , "DOMNodeRemoved" , function(event){
        console.log(1111);
    })
    myList.removeChild(li[1])
</script>
```

```js
//DOM结构中发生任何变化都会触发
eventUtil.addHandler(document, "DOMSubtreeModified", function(event) {
    console.log(111111);
})
document.body.removeChild(Input)
```

```js
// 从文档中移除之前被触发
eventUtil.addHandler(myInput, "DOMNodeRemovedFromDocument", function (event) {
	console.log(111111);
})
document.body.removeChild(Input);
```

```js
//document中任意元素被添加就会触发
let item = document.createElement("li");
eventUtil.addHandler(document, "DOMNodeInserted", function(event) {
    console.log(111111);
})
document.body.append(item);

eventUtil.addHandler(myList, "DOMNodeInserted", function (event) {
    console.log(111111);
})
myList.append(item);
```

```js
//在DOM树结构之后就会触发

eventUtil.addHandler(document, "DOMContentLoaded", function (event) {
    console.log("DOMContentLoaded速度一定快于load事件");
})
```

```js
//readstatechange 支持IE、firfox、opera，提供文档或者元素加载过程，但是很难预料与load事件一起使用时候
//1、document.readState == uninitialized  尚未初始化
//2、loading 对象正在加载数据
//3、interactive  可以操作对象，单还没有完全加载
//4、对象已经加载完毕

eventUtil.addHandler(document, "readstatechange", function (event) {
    console.log(111111);
    //情绪化，限制IEfox.很难预料
})
```

```js
//hashchange事件 只能给window添加 , #后面的值变化
eventUtil.addHandler(window, "hashchange", function (event) {
    console.log(event.oldURL + "这是新地址" + event.newURL);
})
```

```js
let div = document.getElementById("myDiv");
eventUtil.addHandler(div, "click", function (event) {
    var keys = new Array();
    if (event.shiftKey) {
        keys.push("shift");
    }
    if (event.ctrlKey) {
        keys.push("ctrl");
    }
    if (event.altKey) {
        keys.push("alt");
    }
    if (event.metaKey) {
        keys.push("meta");
    }
    console.log("keys:" + keys.join(","));
});

//监测点击时候是不是按下了这些键位
```

