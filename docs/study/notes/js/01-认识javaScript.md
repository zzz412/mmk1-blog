## 认识Javascript

### javascript简史

> JavaScript 诞生于1995 年。
>
> JavaScript是一种基于对象和事件驱动的客户端脚本语言,
>
> 最初的设计是为了检验HTML表单输入的正确性,
>
> 起源于Netscape公司的LiveScript语言。

ECMAScript  欧洲计算机制造商协会

1997年1月  -  ECMAScript1诞生

1998年1月  -  ECMAScript2修正

1999年12月  -  ECMAScript3修正 

（ECMAscript4 由于关于语言的复杂性出现分歧,第4版本被放弃,其中的部分成为了第5版本的基础）

2009年  -  ECMAScript5修正

2015年  -  ECMAScript6修正（也称为ES2015）

从2015开始每年例行更新 

我们现在要学习的是ES5，之后会学习 ES6 。

ie等极少数浏览器不支持ES6     

*js 就是 javascript的简写*

### 什么是编程语言?

总结：编程语言就是让计算机执行一些任务的特殊指令

### 为什么学习 JavaScript？

> 全世界几乎所有网页都使用 JavaScript
>

#### 广泛的使用领域

>  **浏览器的平台化**
>
> 不再仅仅能浏览网页，而是越来越像一个平台，JavaScript 因此得以调用许多系统功能，比如操作本地文件、操作图片、调用摄像头和麦克风等等。
>
> **Node**
>
> Node 项目使得 JavaScript 可以用于开发服务器端的大型项目
>
> **数据库操作**
>
> JavaScript 甚至也可以用来操作数据库,大部分 NoSQL 数据库允许 JavaScript 直接操作
>
> **移动平台开发**
>
> JavaScript 也正在成为手机应用的开发语言
>
> **跨平台的桌面应用程序**
>
> 著名程序员 Jeff Atwood 甚至提出了一条 [“Atwood 定律”](http://www.codinghorror.com/blog/2007/07/the-principle-of-least-power.html)：
>
> “所有可以用 JavaScript 编写的程序，最终都会出现 JavaScript 的版本。”

#### 易学性

- **学习环境无处不在**

只要有浏览器，就能运行 JavaScript 程序；只要有文本编辑器，就能编写 JavaScript 程序。

- **简单性**

本身的语法特性并不是特别多。你完全可以只用简单命令，完成大部分的操作。

- **与主流语言的相似性**  

JavaScript 的语法很类似 C/C++ 和 Java，如果学过这些语言,JavaScript的入门会非常容易。

#### 强大的性能 

- **灵活的语法，表达力强**
- **支持编译运行**

> 在现代浏览器中，JavaScript 都是编译后运行。程序会被高度优化，运行效率接近二进制程序。

#### 社区支持和就业机会

> 全世界程序员都在使用 JavaScript，它有着极大的社区、广泛的文献和图书、丰富的代码资源。
>
> 作为项目负责人，你不难招聘到数量众多的 JavaScript 程序员；
>
> 作为开发者，你也不难找到一份 JavaScript 的工作。

### 主流浏览器

IE/Edge、Chrome、Firefox、Safari、Opera （国内各浏览器介绍).

常用的：chrome、Firefox、ie（系统自带） 

其他浏览器：360浏览器（chrome和ie的内核）、qq浏览器、搜狗浏览器。

 百度统计：[浏览器市场份额](https://tongji.baidu.com/data/browser)。 

- 浏览器组成-外壳

界面、菜单、网络、调试功能……

- 浏览器组成-内核

浏览器内核：

| 浏览器  | 渲染引擎        | JS引擎            |
| ------- | --------------- | ----------------- |
| IE      | Trident         | JScript -> Chakra |
| Firefox | Gecko           | Monkey系列        |
| Chrome  | Webkit -> Blink | V8                |
| Safari  | Webkit          | SquirrelFish系列  |
| Opera   | Presto -> Blink | Carakan           |

渲染引擎：将html和css代码渲染成图形界面

js引擎：解析js代码

V8引擎为解析js代码最快的js引擎

### V8引擎与nodejs

> 我们写javascript  ->  在chrome中通过 V8 引擎编译  ->  机器语言（用二进制代码表示的计算机能直接识别和执行的一种机器指令）
>
> Chrome浏览器中用来解析JavaScript的引擎就是V8引擎,有了V8引擎JavaScript才能在计算机上执行
>
> 所以，正是有了 V8引擎的解析， javascript才能在计算机上执行
>
> 那么，从本质上讲，javascript的执行需要的不是浏览器，而是V8引擎
>
> 所以，我们把 V8引擎 单独安装在系统上，那么javascript就可以直接在系统上运行 
>
> =>   也就获得了直接操作电脑本地数据的能力，也就可以完成后端的工作
>
> =>  这个独立出来的V8引擎，再加上一些其他的功能就变成了nodejs

### 基础问题

- **JavaScript是什么**

> 专业一点：JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言。
>
> 通俗一点：JS是前端代码中最重要的部分（行为层），常用来*操作HTML页面*，*响应用户的操作*，*验证传输数据*等。
>

- **Java和JavaScript有什么关系**

> 没有太大的关系……是两种不一样的语言,但是彼此存在联系。
>
> JavaScript 的基本语法和对象体系，是模仿 Java 而设计的。
>
> 它最初叫 Mocha， 接着改名为 LiveScript，最后才确定命名为 JavaScript，  目的之一就是“看上去像Java” 

- **jQuery（JQ）和 JS 有什么关系?**

> jQuery是由JS编写的……，js和jq可以同时编写
>

- **NodeJs 和 JS 有什么关系**

> NodeJs是后端语言，以JS代码来驱动C语言实现后端功能……，降低了前段人员学习后端的难度
>

- **ECMAScript 和 JavaScript 的关系**

> 前者是后者的规格，后者是前者的一种实现。在日常场合，这两个词是可以互换的。ECMAScript 只用来标准化 JavaScript 这种语言的基本语法结构。

### javascript的组成

- 核心（ECMAScript）：提供核心语言功能，规定语法规范。
- 文档对象模型（DOM）：提供访问和操作网页元素的方法和接口，由html页面中的标签组成  
- 浏览器对象模型（BOM）：提供与浏览器交互的方法与接口，即浏览器中前进、后退、刷新等功能 

### 开发工具

> 开发工具：WebStorm、sublime、HBuilder、vscode、atom 等（**推荐使用vscode**）
>
> vscode下载地址： https://code.visualstudio.com/ ，根据自己的操作系统下载相应的版本。
>
> 不推荐使用DW（Dreamweaver），EditPlus（没有提示功能，影响开发效率）
>

### vscode

> VS Code 这款软件本身，是用 JavaScript 语言编写的
>
> Jeff Atwood 在 2007 年提出了著名的 Atwood 定律：
>
> **任何能够用 JavaScript 实现的应用系统，最终都必将用 JavaScript 实现**。
>
> 如果你是做前端开发（JavaScript 编程语言为主),这款软件是为前端同学量身定制的。

#### vscode常用插件：

> **chinese**   汉化插件    
>
> **open in browser**     右键打开浏览器
>
> **Live Server**      开启自动刷新功能
>
> **Prettier**     代码格式化  让代码的展示更加美观
>
> **vscode-icons**     根据文件的后缀名来显示不同的图标
>
> **Bracket Pair Colorizer 2 **    以不同颜色显示成对的括号，并用连线标注括号范围。简称**彩虹括号**。
>
> **CSS Peak**  在HTML通过对应标签的名字快速跳转到对应的CSS
>
> **Image preview** 图片预览

#### 快捷键

**基操**

> **ctrl+c**  复制   **ctrl+V** 粘贴      **ctrl+s**  保存     **ctrl+x**剪切  也可以用于删除整行
>
> **ctrl+z**  返回上一步    **ctrl+y** 撤销返回上一步
>
> **ctrl + f** 查询/替换 
>
> ![wE6cz8.png](https://s1.ax1x.com/2020/09/05/wE6cz8.png)

**跳转操作**

> **Cmd +Pagedown/Pageup**   		在已经打开的多个文件之间进行   非常实用
>
> **Ctrl + Tab**    								在已经打开的多个文件之间进行

**移动光标**

> **方向键**        						在单个字符之间移动光标      地球人都知道
>
> **Alt＋鼠标点击任意位**			在任意位置，同时出现光标
>
> **Ctrl + D**                                  将全文中相同的词逐一加入选择

**工作区快捷键**

> **Cmd +B**   显示/隐藏侧边栏    很实用
>
> ***Ctrl + \\***     创建多个编辑器
>
> **Cmd + Shift+N**  重新开一个软件的窗口 
>
>  **Ctrl + W**     关闭当前文件

**其他快捷键**

>  **shift + alt + f**     代码格式化快捷键 
>
>  **shift + alt + ↓**     向下复制一份 ： 选中要复制的内容 

**鼠标操作**

> 在当前行的位置，鼠标三击，可以选中当前行。
>
> 用鼠标单击文件的**行号**，可以选中当前行。

**快捷键列表**

![wErkUx.png](https://s1.ax1x.com/2020/09/05/wErkUx.png)

### markdown文件

> 下载并安装 Typora/马克飞象 进行查看 .md 文件
>

### 引入javascript

#### 1.内部引入

```html
<head></head>
<body>
    html标签部分
	...
    ...
    
    
    <script type="text/javascript">
        js代码块部分
		...
        ...
        //script标签最好写在 head 标签 或 body 标签中，
        //如果放在head或body外，浏览器在解析时，也会将script标签放在head或body中。
        //script标签通常放在body的最后面。
        // 页面的解析是按顺序解析的，所以若在 body 前获取dom元素，则需要使用 window.onload
    </script>
</body>
```

#### 2.外部引入

```html
<body>
    
    <script src=""></script>    
    <!-- 注意不能是单标签
		若使用外部引入js文件的方式，script标签中的代码块不会被解析
	-->
  
</body>
```

#### 3.标签内引入

> 假设我们想响应用户的操作（比如点击）可以直接把is代码写在标签属性里面

```html
<head>
	<div onclick="alert('div被点击了')" >
        哈哈哈
    </div>
</head>


// 没有特殊情况，不建议使用此方法
```

### console 控制台输出

- console.log  普通输出 

`console.log`方法用于在控制台输出信息。它可以接受一个或多个参数，将它们连接起来输出。

```js
console.log('Hello World')
// Hello World
console.log('a', 'b', 'c')
// a b c
```

`console.log`方法会自动在每次输出的结尾，添加换行符。

```js
console.log(1);
console.log(2);
console.log(3);
// 1
// 2
// 3
```

> console.info   前面出现蓝色标记（ 在 chrome 上与 console.log 无区别）
>
> console.warn  输出背景为黄色，警告信息
>
> console.error  输出背景为红色，错误信息
>
> console.dir  可以显示一个对象所有的属性和方法。 
>
> console.log()可以取代alert()或document.write()，在网页脚本中使用console.log()时，会在浏览器控制台打印出信息。 

### 注释、弹窗

单引号和双引号需要配对，不能单引号配对双引号

```js
// 单行注释 （常用）    -->   注意不是返斜杠 \\    单行注释  浏览器自动换行也算单行   看行号

/*
 多行注释
*/

// 弹窗
//很少在一个发布的项目中使用弹窗 
//调试阶段会经常用到  遇到调试代码较多 建议使用console
alert("这是弹出的内容");
ALERT("错误写法，严格区分大小写");

// 输入弹窗  不会使用  了解一下
prompt("请输入内容");

// 确认弹窗
confirm("是否确认");
```

### js注意事项

- 严格区分大小写 ( x=1;X=1; x和X不是同一个变量)
- 语法字符使用英文字符，半角字符  
- 缩进对齐  ---     一层语义一层缩进
- 分号结尾 （可以不加，看个人或团队开发习惯而定）

```js
alert(1)alert(2)  // 报错
```





[火绒](./火绒杀毒弹窗拦截.exe)