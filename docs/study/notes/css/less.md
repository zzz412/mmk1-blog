

# 1.使用Less

1、安装node.js

2、安装less

　　npm install less -g

3、安装VS插件 `Easy LESS`

4、编辑保存.less文件，会在对应的目录下生成对应的.css文件

# 2.初识less

> less是一种动态样式语言，属于css预处理器的范畴，它扩展了CSS语言，
>
> less是一种动态样式语言，属于css预处理器的范畴，它扩展了CSS语言，
> 增加了变量、Mixin、函数等特性，使CSS更易维护和扩展,less既可以在客户端上运行，也可以借助Node. js在服务端运行。
>
> less既可以在客户端上运行，也可以借助Node. js在服务端运行。
>
> css增强版  通过less可以编写更少的代码实现更强大的样式
>
> 在less中添加了许多的新特性:像对变量的支持、对mixin的支持
>
> less的语法大体.上和css语法一致， 但是less中增添 了许多对css的扩展,
>
> 所以浏览器无法直接执行less代码，要执行必须向将less转换为css,然后再由浏览器执行

## 注释

```css
/* 这里注释会编译到css文件之中 */
//这是不会被编译到css文件的注释
```

## 变量

> 变量，在变量中可以存储一个任意的值
>
> 并且我们可以在需要时，任意的修改变量中的值
>
> 变量的语法: @变量名

```scss
@baseW:100px;
@xiaomiC:#ff6700;

/*使用变量时，如果是直接使用则以@变量名的形式使用即可,可以在变量声明声明前    使用变量*/
.wrap{
    width: @baseW;
    height: @baseW;
    background-color: pink;
}

@baseW:100px;
@baseW:300px;
@xiaomiC:#ff6700;
/*变量重名  优先使用比较近的变量*/
```

- **直接引用其他样式的值**

```css
div{
    width: 100px;
    height: $width;
    color: tomato;
    background-color: $color;
}
```

**作用域**

```less
@baseW:100px;
@baseW:300px;
@xiaomiC:#ff6700;
.wrap{
    @baseW:50px;//局部
    width: @baseW;
    height: @baseW;
    background-color: @xiaomiC;
}
.con{
    width: @baseW;找寻全局的变量
}
```

- **一部分变量作为类名，或者一部分值使用时必须以@{变量名}的形式使用**

```css
@ele:wrap;
@w : width;
@h:height;
@bgc:background-color;
@imgUrl:images;


.@{ele}{
    @{w}: @baseW;
    @{h}: @baseW;
    @{bgc}: @xiaomiC;
    background-image: url("../@{imgUrl}/1.png");
}
```

## 嵌套

```css
.wrap{
    width: 100px;
    height: 100px;
    background-color: pink;
    
    .con{
        width: 20px;
        height: 20px;
        background-color: red;
    }
}
/*这样嵌套会被解析成*/


.wrap {
  width: 100px;
  height: 100px;
  background-color: pink;
}
.wrap .con {
  width: 20px;
  height: 20px;
  background-color: green;
}
```

如果我们想使用其他关系选择器

```css
.wrap{
    width: 100px;
    height: 100px;
    background-color: pink;
    > .son{
        width: 20px;
        height: 20px;
        background-color: green;
    }
}
/*直接在选择器前面书写*/
```

如果我们想使用伪类伪元素或者高级选择器

&表示外层的父元素

```css
.wrap{
    width: 100px;
    height: 100px;
    background-color: pink;
    &:hover{
        width: 100px;
        height: 20px;
        background-color: red;
    }
}
```

响应式的书写

@ 规则（例如 `@media` 或 `@supports`）可以与选择器以相同的方式进行嵌套。@ 规则会被放在前面，同一规则集中的其它元素的相对顺序保持不变。这叫做冒泡（bubbling）。

```css
.wrap {
    width: 300px;
    @media (min-width: 768px) {
      width: 600px;
         @media (max-width: 1280px ) {
            width: 700px;
        }
    }
    @media (min-width: 1280px) {
      width: 800px;
    }
  }
  
  
  
.wrap {
  width: 300px;
}
@media (min-width: 768px) {
  .wrap {
    width: 600px;
  }
}
@media (min-width: 768px) and (max-width: 1280px) {
  .wrap {
    width: 700px;
  }
}
@media (min-width: 1280px) {
  .wrap {
    width: 800px;
  }
}

```

**扩展**

```css
.triangle{
    width: 0;
    height: 0;
    border: 100px solid transparent;
}

.top:extend(.triangle){
    border-bottom-color:tomato ;
    border-top: none;
}
```

## 混合mixin

> 将一系列的规则及引入另一个规则集
>
> 混合的定义在Less有明确的指定  使用.的形式来定义

```less
.triangle{
    width: 0;
    height: 0;
    border: 100px solid transparent;
  }
  
.top{
 //直接对指定的样式进行引用，这里就相当于样式在这里进行了复制
    .triangle();
    border-bottom-color:yellow ;
    border-top: none;
}
```

```less
.center{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

.top{
    width: 100px;
    height: 100px;
    background-color: pink;
    .center();
}
/*没带参数写不写括号都一样  不写参数为普通混合  带括号为不带参数的混合*/
//使用类选择器时可以在选择器后边添加一个括号，这时我们实际上就创建了一个mixins
```

带参数的混合

```css
.test(@w , @h , @bgcolor) {
    width: @w;
    height: @h;
    background-color: @bgcolor;
}


div {
    //调用混合函数，按顺序传递参数
    .test(200px, 300px, tomato);
    
    //不按顺序
     .test(@h:200px, @bgcolor:tomato, @w:300px );
}
```

- **参数指定默认值**

```css
.test(@w:100px , @h:100px , @bgcolor:pink) {
    width: @w;
    height: @h;
    background-color: @bgcolor;
}


div {
    .test(200px);
}
```

```less
.top-triangle(@w , @c){
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
    border-width: @w;
    border-bottom-color: @c;
    border-top: none;
}

.top{
    .top-triangle(200px , red)
}
```

```css
.center(@w , @h , @b){
    width: @w;
    height: @h;
    background-color: @b;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

.wrap{
    .center(100px , 100px , pink);
}
```

```css
.center(@w:100px , @h:100px , @b:transparent){/*默认值*/
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: @w;
    height: @h;
    background-color: @b;
}

.top{
    .top-triangle(200px  ,solid, red);
    .center(100px , 100px , pink);
}
```

- 当实参和形参不统一的时候


```css
.top-triangle(@w:10px , @c:#000){
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
    border-width: @w;
    border-bottom-color: @c;
    border-top: none;
}

.top{
    .top-triangle(@c:pink)
}
```

## 运算

```css
//在less中所有的数值都可以直接进行运算
.wrap{
    width: 100px+100px;
    height: 100px/2;
    background-color: pink;
}
```

导入其他less文件

```css
@import "index.less";
```

