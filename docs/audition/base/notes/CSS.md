# CSS
## 盒模型宽度计算

![image-20201230213546504](https://i.loli.net/2020/12/30/SRkrHAFecialQ1C.png)

- offsetWidth=(内容宽度+内边距+边框),无外边距
- 因此答案为122px

:::tip

注意:如果让offsetWidth 等于 100px  如何做

![image-20201230213640633](https://i.loli.net/2020/12/30/jJEcfAypq4Nn6ik.png)

:::



## margin纵向重叠问题

![image-20201230213822396](https://i.loli.net/2020/12/30/l8XGNbCmfJwzuT6.png)

- 相邻元素的margin-top和margin-bottom会发生重叠
-  空白内容的\<p> \</p>也会重叠
- 答案15px



## margin负值问题

**对margin的top left right bottom设置负值,有何效果?**



- margin-top 和margin-left负值，元素自身向上、向左移动
- margin-right 负值，右侧元素左移,自身不受影响
- margin-bottom 负值，下方元素上移,自身不受影响



## 什么是BFC?如何应用?

**定义**

- 块格式化上下文（block formatting context）
- 一块独立渲染区域,内部元素的渲染不会影响边界以外的元素

**形成BFC的常见条件**

- overflow 不为 visible
- float 属性不为 none
- position 为 absolute 或 fixed
- display 为 inline-block， table-cell， table-caption， flex， inline-flex



**开启BFC特点作用**

- 开启BFC的元素不会被浮动元素覆盖
- 开启BFC的元素父子外边距不会合并
- 开启BFC的元素可以包含浮动的子元素(解决浮动高度塌陷)



## float布局

float 用于网页布局比较多，使用起来也比较简单

### **误解和误用**

- float 被设计出来的初衷是用于**文字环绕效果**，即一个图片一段文字，图片`float:left`之后，文字会环绕图片。

```html
<div>
    <img src="image/1.png" style="float:left">
    一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字
</div>
```

但是，后来大家发现结合`float + div`可以实现之前通过`table`实现的网页布局，因此就被“误用”于网页布局了




### 并排一行

- **设置多个浮动的块级元素会并排一行**



### 破坏性

- **float 的破坏性** —  **被设置了 float 的元素会脱离文档流**，使得父标签无法包容子容器出现了坍塌现象。导致这一现象的最根本原因在于： float 的设计初衷是解决文字环绕图片的问题。大家要记住 float 的这个影响。



### 包裹性

- 普通的 div 如果没有设置宽度，它会撑满整个屏幕，而如果给 div 增加`float:left`之后宽度发生了变化，会由里面的内容——这就是包裹性。

:::tip

此时 div 虽然体现了包裹性，但是它的 display 样式是没有变化的，还是`display: block`。

:::



**手写clearfix**

- 清除浮动的影响，一般使用的样式如下，统称`clearfix`代码。所有 float 元素的父容器，一般情况下都应该加`clearfix`这个 class。

![image-20201230214601537](https://i.loli.net/2020/12/30/Kgc5zwZy6i7mLlT.png)



## flex布局

布局的传统解决方案基于盒子模型，依赖 `display` 属性 + `position` 属性 + `float` 属性。

它对于那些特殊布局非常不方便，比如，垂直居中（下文会专门讲解）就不容易实现。在目前主流的移动端页面中，使用 flex 布局能更好地完成需求，因此 flex 布局的知识是必须要掌握的。



### 基本使用

任何一个容器都可以使用 flex 布局，代码也很简单。

```html
<style type="text/css">
    .container {
        display: flex;
    }
    .item {
        border: 1px solid #000;
        flex: 1;
    }
</style>

<div class="container">
    <div class="item">aaa</div>
    <div class="item" style="flex: 2">bbb</div>
    <div class="item">ccc</div>
    <div class="item">ddd</div>
</div>
```

:::tip

第三个`<div>`的`flex: 2`，其他的`<div>`的`flex: 1`，这样第二个`<div>`的宽度就是其他的`<div>`的两倍。

:::




### 设计原理

设置了`display: flex`的元素，我们称为“容器”（flex container），其所有的子节点我们称为“成员”（flex item）。

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。

主轴的开始位置（与边框的交叉点）叫做 main start，结束位置叫做 main end；

交叉轴的开始位置叫做 cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做 main size，占据的交叉轴空间叫做 cross size。

![image-20201231221802920](https://i.loli.net/2020/12/31/VritkLd3u42qA9f.png)

### 设置主轴的方向

`flex-direction`可决定主轴的方向，有四个可选值：

- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。

```css
.box {
    flex-direction: column-reverse| column | row | row-reverse;
}
```


### 设置主轴的对齐方式

`justify-content`属性定义了项目在主轴上的对齐方式，值如下：

- flex-start（默认值）：向主轴开始方向对齐。
- flex-end：向主轴结束方向对齐。
- center： 居中。
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

```css
.box {
    justify-content: flex-start | flex-end | center | space-between | space-around;
}
```



### 交叉轴的对齐方式

`align-items`属性定义项目在交叉轴上如何对齐，值如下：

- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度

```css
.box {
    align-items: flex-start | flex-end | center | baseline | stretch;
}
```


**flex 实现一个三点的色子**

![image-20201230215250155](https://i.loli.net/2020/12/30/gX3T6YoBnrGEP1W.png)



## 实现左边定宽，右边自适应布局

- 左盒子左浮动，右盒子width=100%  margin-left=左盒子宽度
- 左盒子左浮动，右盒子右浮动，设置width: calc（100% - 左盒子宽度）
- 左盒子左浮动，右盒子右浮动，设置width: calc（100% - 左盒子宽度）


## CSS - 定位

absolute 和relative分别依据什么定位?

- relative 依据自身定位
- absolute 依据最近一层的定位元素( 有relative absolute  fixed这些定位其中一个  )定位



## 如何使一个元素水平垂直居中

### **行内元素**

![image-20201230215707304](https://i.loli.net/2020/12/30/OMCQHrWPKdSy82G.png)


### **定位元素**

![image-20201230215924997](https://i.loli.net/2020/12/30/JHfFdeoMbavPwWy.png)

![image-20201230220008590](https://i.loli.net/2020/12/30/b6UCK5avtsqArn8.png)

![image-20201230220058274](https://i.loli.net/2020/12/30/Mzdk8GvKI3W4nQe.png)


### **弹性盒模型**

![image-20201230220148491](https://i.loli.net/2020/12/30/n4zvls6SRW29wTX.png)

![image-20201230220213807](https://i.loli.net/2020/12/30/Bd2HVCGxg6sLJ8P.png)

![image-20201230220356200](https://i.loli.net/2020/12/30/rHpI2qPWBN6Ftei.png)


##  line-height如何继承

![image-20201230220528459](https://i.loli.net/2020/12/30/fheDyLPRnmKJZl8.png)

**line-height如何继承**

- 写具体数值,如30px,则继承该值(比较好理解)
- 写比例,如2/ 1.5 ,则继承该比例(比较好理解)
- 写百分比,如200% ,则继承计算出来的值(考点)

## 消除图片底部间隙的方法 

- 图片块状化 - 无基线对齐：`img { display: block; }`
- 图片底线对齐：`img { vertical-align: bottom; }`
- 父级设置 `font-size:0;`
- 行高足够小 - 基线位置上移：`.box { line-height: 0; }`


## 单行溢出隐藏

![image-20201230220719527](https://i.loli.net/2020/12/30/pwkV2PGzdlH45vc.png)


## CSS - 响应式

- 响应式设计是什么?原理?
- rem是什么?
- 响应式布局的常见方案?


### 响应式设计是什么?原理?

响应式网站设计(Responsive Web design)是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。

基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。

:::tip

页面头部必须有meta声明的viewport

:::


### rem是什么?

- px  像素(Pixel)。绝对单位。像素 px 是相对于显示器屏幕分辨率而言的
- em , 相对长度单位,相对于父元素,不常用
- rem(root em) , 相对长度单位,相对于根元素html的字体大小,常用于响应式布局


### 响应式布局的常用方案

- media-query ,根据不同的屏幕宽度设置根元素font-size
- rem ,基于根元素的相对单位

![image-20201230222317410](https://i.loli.net/2020/12/30/YyveORBZ736Pr5m.png)


## 使一个元素显示以及隐藏的方式?

### display:none

- 结构上:元素在页面上将彻底消失，元素不占据空间且无法点击
- 继承性:父元素设置了 display:none 子元素无论怎么设置都无法显示
- 性能:会引起浏览器重绘重排，性能消耗较大


### opacity:0

- 结构上:元素在页面上消失，元素占据空间可以点击

-  继承性:父元素设置了opacity:0  子元素无论怎么设置都无法显示

- 性能:重建图层，性能消耗小


### visibility:hidden

- 结构上:元素在页面消失，其占据的空间依旧会保留;无法点击
- 继承性:visibility: hidden 会被子元素继承，但是子元素可以通过 设置 visibility: visible; 来取消隐藏
- 性能:只会导致浏览器重绘,性能消耗相对小

**其他方式**

-  元素的border，padding，height和width，margin:0等影响元素盒模型的属性设置成0
- 如果元素内有子元素或内容，还应该设置其overflow:hidden来隐藏其子元素



- 设置元素的position与left，top，bottom，right等，将元素移出至屏幕外
- 设置元素的position与z-index，将z-index设置成尽量小的负数



## CSS3 动画

**CSS3 可以实现动画，代替原来的 Flash 和 JavaScript 方案。**

首先，使用`@keyframes`定义一个动画，名称为`testAnimation`，如下代码，通过百分比来设置不同的 CSS 样式，规定动画的变化。所有的动画变化都可以这么定义出来。

```css
@keyframes testAnimation
{
    0%   {background: red; left:0; top:0;}
    25%  {background: yellow; left:200px; top:0;}
    50%  {background: blue; left:200px; top:200px;}
    75%  {background: green; left:0; top:200px;}
    100% {background: red; left:0; top:0;}
}
```

然后，针对一个 CSS 选择器来设置动画，例如针对`div`元素设置动画，如下：

```css
div {
    width: 100px;
    height: 50px;
    position: absolute;

    animation-name: myfirst;
    animation-duration: 5s;
}
```

- `animation-name`对应到动画名称，
- `animation-duration`是动画时长
- `animation-timing-function`：规定动画的速度曲线。默认是`ease`
- `animation-delay`：规定动画何时开始。默认是 0
- `animation-iteration-count`：规定动画被播放的次数。默认是 1
- `animation-direction`：规定动画是否在下一周期逆向地播放。默认是`normal`
- `animation-play-state` ：规定动画是否正在运行或暂停。默认是`running`
- `animation-fill-mode`：规定动画执行之前和之后如何给动画的目标应用，默认是`none`，保留在最后一帧可以用`forwards`





### transition 和 animate 有何区别?

- transition：用于做过渡效果，没有帧概念，只有开始和结束状态，由一个状态过渡到另一个状态，比如高度`100px`过渡到`200px`性能开销较小,被动触发,
- animate：用于做动画，有帧的概念，可以重复触发且有中间状态，性能开销较大,主动触发



## 什么是选择器优先级 , 怎么计算?

- **！important>行内样式>id选择器>类选择器>标签选择器>通配符>继承**

权重算法：(0,0,0,0) ——> 第一个0对应的是important的个数，第二个0对应的是id选择器的个数，第三个0对应的类选择器的个数，第四个0对应的是标签选择器的个数，合起来就是当前选择器的权重。

比较：先从第一个0开始比较，如果第一个0大，那么说明这个选择器的权重高，如果第一个相同，比较第二个，依次类推。

(0,1,2,3)    >  (0,1,1,5)



## nth-child和nth-of-type的区别是什么?	

- "nth-child"选择的是父元素的子元素，这个子元素并没有指定确切类型，同时满足两个条件时方能有效果,其一是子元素，其二是子元素刚好处在那个位置
- "nth-of-type"选择的是某父元素的子元素，而且这个子元素是指定类型。



## CSS Sprites是什么？它的优势和劣势？

**CSS Sprite 精灵图 把一堆小的图片整合到一张大的图片上。**



**优势**

- 很好的减少网页的请求，大大提高页面的性能；
- 减少图片的字节
- .解决了网页设计师在图片命名上的困扰
- 更换风格方便

**劣势**

- 开发较麻烦，测量繁琐；（可使用样式生成器）
- 维护麻烦，背景少许改动有可能影响整张图片，使得字节增加还要改动css



## 重绘和回流

**重绘和回流是面试题经常考的题目，也是性能优化当中应该注意的点**

- **重绘**：指的是当页面中的元素不脱离文档流，而简单地进行样式的变化，比如修改颜色、背景等，浏览器重新绘制样式
- **回流**：指的是处于文档流中 DOM 的尺寸大小、位置或者某些属性发生变化时，导致浏览器重新渲染部分或全部文档的情况

相比之下，**回流要比重绘消耗性能开支更大**。另外，一些属性的读取也会引起回流，比如读取某个 DOM 的高度和宽度，或者使用`getComputedStyle`方法。在写代码的时候要避免回流和重绘。比如在笔试中可能会遇见下面的题目：

### 题目：找出下面代码的优化点，并且优化它

```js
var data = ['string1', 'string2', 'string3'];
for(var i = 0; i < data.length; i++){
    var dom = document.getElementById('list');
    dom.innerHTML += '<li>' + data[i] + '</li>';
}
```

上面的代码在循环中每次都获取`dom`，然后对其内部的 HTML 进行累加`li`，每次都会操作 DOM 结构，可以改成使用`documentFragment`或者先遍历组成 HTML 的字符串，最后操作一次`innerHTML`。



## 什么是 Css Hack？

- **解决各浏览器对 CSS 解释不同所采取的，区别不同浏览器制作不同CSS样式的设置就叫作 CSS Hack。**





## 描述下渐进增强和优雅降级

- 渐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能，达到更好的用户体验。
- 优雅降级：一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容





## 你做的页面在哪些流览器测试过？这些浏览器的内核分别是什么?

- IE: trident 内核

- Firefox：gecko 内核

- Safari:webkit 内核

- Opera:以前是 presto 内核，Opera 现已改用 Google Chrome 的 Blink 内核

- Chrome:Blink(基于 webkit，Google 与 Opera Software 共同开发)

  

## 介绍对浏览器内核的理解

**主要分成两部分：渲染引擎和JS引擎。**

- 渲染引擎：将代码转换成页面输出到浏览器界面。
- JS引擎：解析和执行javascript来实现网页的动态效果。

最开始渲染引擎和JS引擎并没有区分得很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。