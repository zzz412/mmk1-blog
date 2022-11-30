**样式还有书写顺序？**

> 样式还有书写顺序？样式这么简单的东西，不是随便写写就行的么。很多初学者，甚至有一定工作经验的人都会发出这种疑问。而样式的书写顺序到底对页面有没有影响呢？答案是肯定的。如何写出好的css样式也是一个优秀的开发者必须要知道的！而且应该养成习惯，融入到开发中！好的习惯不是一点养成的。

为什么要注意书写顺序？

> 减少浏览器reflow(重排），提升浏览器渲染dom树的性能    

`①:`解析html构建dom树，解析css构建css树：将html解析成树形的数据结构，将css解析成树形的数据结构

`②:`构建render树：DOM树和CSS树合并之后形成的render树。

`③:`布局render树：有了render树，浏览器已经知道那些网页中有哪些节点，各个节点的css定义和以及它们的从属关系，从而计算出每个节点在屏幕中的位置。

`④:`绘制render树：按照计算出来的规则，通过显卡把内容画在屏幕上。

css样式解析到显示至浏览器屏幕上就发生在`②③④`步骤，可见浏览器并不是一获取到css样式就立马开始解析而是根据css样式的书写顺序将之按照dom树的结构分布render样式，完成第`②`步，然后开始遍历每个树结点的css样式进行解析，此时的css样式的遍历顺序完全是按照之前的书写顺序。

样式的书写顺序是如何影响网页的？

> 比如如下代码：

```css
span{
    width:200px;
    height:200px;
    background:red;
    display:block;
}
```

当浏览器解析到`display`的时候，突然发现元素是块级元素，而之前是按照行内元素渲染的！这个时候不得不回头重新渲染，在按照块级元素解析span标签。正确的做法是`display`写在样式`最前面`，一开始就以块级元素渲染span标签。

在看一个例子：

```css
.box{
   
    width:50%;
    height:200px;
    background:blue;
     position:absolute;
}
```

这个例子 解析到`position`的时候，突然发现该元素是绝对定位元素需要脱离文档流，而之前却是按照普通元素进行解析的，所以不得不重新渲染，而绝对定位是根据已经定位的父元素定位的，如果父元素的大小不一样，就会出现.box大小会重新改变的结果，使页面闪动。定位又是脱离文档流的，浮起来之后可能会影响其他元素排列布局。
`一遍能过的非要渲染两遍 是很浪费性能的,大量的重绘页面会导致页面一闪一闪的，影响用户体验~`

比如这个也是一个典型例子

```css
.box{
  	display:none;
    width:200px;
    height:200px;
    background:blue;
  
}
```

这个例子已经把元素渲染了一遍,结果到最后发现不需要然后又需要去删除前面那些样式.

1）定位属性：

```css
   .list{
        display
        position
        float  
        left  
        top  
        right  
        bottom   
        overflow  
        clear   
        z-index
      	content
    	list-style
     	visibility
   } 
```

（2）自身属性：

```css
 .list{
        width
        height
      	padding  
   		border
        margin   
        background
   } 
```

（3）文字样式：

```css
.list{
        font-family   
        font-size   
        font-style   
        font-weight   
        font-varient   
        color   
   } 
```

（4）文本属性：

```css
 .list{
        text-align   
        vertical-align   
        text-wrap   
        text-transform   
        text-indent    
        text-decoration   
        letter-spacing    
        word-spacing    
        white-space 
        text-overflow
   }   
```

（5）css3中新增属性：

```css
 .list{  
         box-shadow
         cursor 
         border-radius  
         background:linear-gradient
         transform……
   }
```

```css
.cl {  
    display: ;  
    visibility: ;  
    float: ;  
    clear: ;  

    position: ;  
    top: ;  
    right: ;  
    bottom: ;  
    left: ;  
    z-index: ;  

    width: ;  
    min-width: ;  
    max-width: ;  
    height: ;  
    min-height: ;  
    max-height: ;  
    overflow: ;  

    margin: ;  
    margin-top: ;  
    margin-right: ;  
    margin-bottom: ;  
    margin-left: ;  

    padding: ;  
    padding-top: ;  
    padding-right: ;  
    padding-bottom: ;  
    padding-left: ;  

    border-width: ;  
    border-top-width: ;  
    border-right-width: ;  
    border-bottom-width: ;  
    border-left-width: ;  

    border-style: ;  
    border-top-style: ;  
    border-right-style: ;  
    border-bottom-style: ;  
    border-left-style: ;  

    border-color: ;  
    border-top-color: ;  
    border-right-color: ;  
    border-bottom-color: ;  
    border-left-color: ;  

    outline: ;  

    list-style: ;  

    table-layout: ;  
    caption-side: ;  
    border-collapse: ;  
    border-spacing: ;  
    empty-cells: ;  

    font: ;  
    font-family: ;  
    font-size: ;  
    line-height: ;  
    font-weight: ;  
    text-align: ;  
    text-indent: ;  
    text-transform: ;  
    text-decoration: ;  
    letter-spacing: ;  
    word-spacing: ;  
    white-space: ;  
    vertical-align: ;  
    color: ;  

    background: ;  
    background-color: ;  
    background-image: ;  
    background-repeat: ;  
    background-position: ;  

    opacity: ;  

    cursor: ;  

    content: ;  
    quotes: ;  
}
```

## css代码的行为规范

不要以完全没有语义的标签作为选择器,这会造成大面积污染

> 除非你可以断定现在或将来你的这个选择器不会污染其他同类

```css
/* 不推荐 */
.m-xxx div{ ... }
```

#### 简写css颜色属性值

```cs
/* 不推荐 */
.box{ color:#000000; background-color:#ddeeff; }
/* 推荐 */
.box{ color:#000; background-color:#def;}
```

#### 删除css属性值为0的单位

> 0就是0，任何单位都不需要,只要前面的数值为0,后面的单位都可以去掉 .

```css
/* 不推荐 */
.box{ margin:0px; padding:0px;}
/* 推荐 */
.box{ margin:0; padding:0;}
```

#### 删除无用CSS样式

> 第一，删除无用的样式后可以减少整个网页文档的体积，提升网页的加载速度；第二，对于浏览器而言，所有的样式规则的都会被浏览器检索并且解析，即使是当前页面没有匹配的样式规则 , 浏览器也会进行检索和解析 , 所以如果去除了没有匹配的样式规则，就能够减少浏览器的索引项 ，加快浏览器的检索速度；

```css
/* 不推荐 */
.box{ font-size:12px;}
.nav{}
.nav-item{ height:20px;}
/* 推荐 */
.box{ font-size:12px;}
.nav-item{ height:20px;}
```

#### 为单个css选择器或新申明开启新行

```css
/* 不推荐 */
.home-count .hd,.content-title,.select-game-title .title{}.nav{}
/* 推荐 */
.home-count .hd,
.content-title,
.select-game-title .title{}
.nav{}
```

## css代码的命名规范

> 1.必须以字母开头命名选择器，这样可保证在所有浏览器下都能兼容；
>
> 2.不允许单个字母的类选择器出现；
>
> 3.不允许命名带有广告等英文的单词，例如ad,adv,adver,advertising，已防止该模块被浏览器当成垃圾广告过滤掉。任何文件的命名均如此。
>
> 4.下划线 ’ _ ’ 禁止出现在class命名中，全小写,统一使用’-‘连字符.
>
> 5.见名知义

#### 命名应简约而不失语义

> 1.避免过度简写 , .ico足够表示这是一个图标 , 而.i不代表任何意思
>
> 2.使用有意义的名称，使用结构化或者作用目标相关的，而不是抽象的名称

### html命名示范

https://www.cnblogs.com/LifeiBoke/p/6791528.html