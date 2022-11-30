## 变化样式transform

**变形主体:页面中的元素(盒子)**,

**方式:旋转,平移,拉伸和压缩,倾斜.**

**核心概念**:

- **使其物体发生形状和位置的变化**

**过渡和2d变化的最本质的区别**

> **transition:描述了物体在变化过程中的方式.**
>
> **transform描述了物体形变的一个结果**

### 平移:translate(x,y)

> **两个参数,第一个参数为X轴的平移,第二个参数Y轴平移**
>
> **只写一个参数默认就是x轴的平移**
>
> **前端平面直角坐标系 左上为顶点  水平向右x+  竖直向下Y+**

```css
.box{
		width: 300px;
		height: 300px;
		background-color: skyblue;
		transform: translate(100px , 300px);
	}
/*自身初始位置为原点,盒子向右平移100px,向下平移300px.
  如果去写负值呢?*/
```

```css
.box{transform: translate(-200px , -200px);}
/*盒子此时往左平移200px,往上平移200px;
 我想单独给X轴设置偏移,可以只写一个值.如果我们就想单独给Y轴偏移呢?
 tranlate有单例型写法 translateX  translateY*/
```

```css
.box{transform: translateY(200px);}
/*这时候我们就能单独给元素设置Y轴的平移量
 这时候我们再想平移是不是直接再后面再写上translateX*/
```

```css
transform: translateY(200px);
transform: translateX(100px);
/*两个transform样式相互覆盖,那我们现在这么办呢?
 tranform里面可以接受多个平移*/
```

```CSS
transform: translateY(100px) translateX(200px);

transform: translateX(100px) translateX(200px)
/*并且我们写上同一个方向值的话,不会后写的覆盖先写的,同个方向值会相互叠加
  这里面还可以去接受百分比*/
```

```css
transform: translate(50%,50%);
/*此时向左向右偏移了150px,这时候的百分比相对于谁呢?
  这个百分比相对于自己的宽高.  
  这时候我们就可以改改我们以前的代码了来实现水平垂直居中了*/
```

```css
	.bigbox{
			position: relative;
			width: 600px;
			height: 600px;
			border:3px solid skyblue;
		}
		.smallbox{
			position: absolute;
			top: 50%;
			left: 50%;
			margin-left: -150px;
			margin-top: -150px;
      /*向左向上移动小盒子一半的宽高,但是一改小盒子的宽高就会崩掉*/
			width: 300px;
			height: 300px;
			background-color: pink;
		}
```

```css
.smallbox{transform: translate(-50%,-50%);}  
/*不用知道宽高,百分之百就是当前的宽度和高度.
 我们只需要让元素沿着X和Y轴的反方向移动-50%的子元素宽高;就能水平垂直居中了.
 此时无论怎么改小盒子的宽高,依然会在大盒子中水平垂直居中.*/
```

***居中方式的改进***

​      *position:absolute;*

​      *left:50%;*

​      *top:50%;*

​      *transform:translate(-50%,-50%);*

我们继续回到translate

> **这个实现功能性质和定位(相对定位)一摸一样**
>
> 都是参照自己原来的位置去进行移动.
>
> 这个盒子脱离了文档流没有,是不是灵魂出窍,对后面的元素的有没有影响呢?
>

```css
	.box{
			width: 300px;
			height: 300px;
			background-color: skyblue;
			transform: translate(300px, 100px);
		}
	<div class="box"></div>
		我要忘了你的样子	
/*文字还是能感觉到这个盒子,所以它也不会脱离文档流,和我们相对定位一样.*/
```

**定位和transfrom里的translate有什么区别**

> **1.定位是有层级的,是有参照物的,相对定位参照于自身的坐标系**

**2,本质上的区别**

​	**游览器渲染的底层原理**

> **1.读取代码,语义分析,在游览器底层理解代码的功能**
>
> 比如读取元素宽高是什么,以及背景颜色等.解析游览器所理解的代码格式.
>
> **2.HTML语法解析器解析HTML部分形成一个DOM(document object model)文档对象模型树**.
>
> 游览器在加载一个网站的时候,首先会受到网址对应的html文件.
>
> 然后游览器把这个html文件解析为一个对象(节点树).这样的从上到下的树形结构.
>
> 比如body节点是html节点的后代等等.
>
> 我们就可以顺着这颗树去进行很多的操作.
>
> 这样的对象模型决定了节点之间都有一定的关联,它们关系可能有父子、有兄弟.
>
> 这就是文档对象模型.
>
> **3.CSS解析器解析CSS部分(:生成一张配置表(CSSOM层叠样式表对象模型)**.
>
> 不仅是外部CSS,内部style元素或行内style属性中的CSS也会被剖析并添加CSSOM中.
>
> 和DOM类似,CSSOM也是一个树形节点,包含页面中样式的层次结构.
>
> 这样的上面写满了我们的样式.然后将这些样式分别放到对应的DOM树节点上.
>
> 得到一颗带有样式属性的DOM树.
>
> **4.DOM加CSSOM==>render树**
>
> 渲染树里面包括了元素,元素结构和CSS样式.
>
> 这个结构很像DOM,但也不完全一样,被隐藏的DOM节点不会出现在这里,
>
> 在构建完成的渲染树中,节点都应该知道了自己是什么颜色,文字使用哪种字体显示,以及是否有明确的宽度等等.
>
> **5.render树==>生成渲染的组织架构painting(绘制).**
>
> 游览器引擎开始布局**将页面中元素所有盒子一个需要的尺寸数据全部计算出来**.
>
> 因为页面元素的位置都是相对的,其中的一个元素位置发生变化,会引起其他元素位置变化.这个过程叫**reflow（重排）**或者也叫**布局(layout)**
>
> **6.根据七层层级结构,*(块级元素 浮动元素 行内元素 定位层级)*从低到高依次绘制展示效果**
>
> 但是当render树中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如background-color。则就叫称为**repaint重绘**。

**重绘和重排的区别**

- **重排必将引起重绘,重绘不一定会引起重排**,比如：只有颜色改变的时候就只会发生重绘而不会引起回流.

> **定位是一个危险样式,会引起重绘重排,可能会对也页面大部分元素造成位置结构的破坏**.
>
> 只要是我们通过定位去移动盒子就会让页面所有的元素位置等属性重新去进行计算(重排,重绘)
>
> 消耗的游览器资源也高.会引起**性能问题,**游览器处理定位是非常谨慎的.
>
> **tranform不是一条危险的样式,页面不需要重新去进行计算.只需在渲染的时候渲染出来,**
>
> **性能优秀,是定位的10倍左右甚至更多,消耗资源低**
>
> **position:relative,这个为移动盒子**,虽然没有脱离文档流,但是盒子确实是移动了.
>
> **tansform:translate这个为移动盒子的投影, 正常情况下基本没有区别.**
>
> 这个盒子的位置没有改变,**只是显示的时候位置发生了偏差**

**特殊情况下,它们区别就很大**

> **特殊情况:需要有大量的高密度的位置控制的时候,transform:translate非常优秀**
>
> 游览器在计算CSS效果时,会在某些情况下多花些时间,比如,如果修改文本大小,那么生成的行内盒子里的文本可能会换行,元素本身也会变高,而这个变高的元素又会推下面的元素.这样你挤我我挤你.就会迫使游览器进一步重新计算布局.
>
> 在使用CSS变换时,相应的计算只会影响相关元素的坐标系统,既不会改变元素内部的布局,也不会影响外部的其他元素.
>
> 这时候的计算基本可以独立于页面上的其他计算.变换不会影响其他元素,多数游览器也会尽量安排图形处理器来做这些计算,毕竟图形处理器专门设计来做这种数学计算.
>
> 换句话说变换的性能很好,比如你想要的效果可以用变换来做,那么变换的性能一定更好,连续多重的变换性能更佳.
>
> **结论:计算资源消耗较低 性能提升**
>
> **我们推荐使用变换**

------



我们深入去看看两者的不同

```css
	.box{
		position: relative;
		left: 0;
		width: 300px;
		height: 300px;
		background-color: skyblue;
		animation:relativeMove 1s infinite;
	}
	@keyframes relativeMove{
		from{
			left: 0;
		}
		to{
			left: 500px;/*打开游览器进行性能分析   rendering计算*/
		}
	}
	@keyframes transformMove{
		from{
			transform: translate(0,0);
		}
		to{
			transform: translate(500px,0);
		}
	}
	<div class="box"></div>
```

### 旋转（rotate）

> **绕着盒子自身中心参照点(宽高一半的地方)位置进行旋转**
>
> **角度为正,顺时针旋转,角度为负,逆时针.**
>
> **旋转的过程中,这块盒子里的所有内容都会一起旋转**
>
> **取值:**
>
>    1. deg 度数
>
> ​    2.rad 弧度 1rad约等于57.3度
>
> ​    3.turn 圈

```css
.box{
	width: 300px;
	height: 300px;
  	margin: 100px auto 0;
	background-color: skyblue;
	transform: rotate(45deg);
}
<div class="box"></div>
```

```css
<div class="box">我要忘了你的样子</div>
/*文字也会跟着旋转,*/
```

> 如果它要旋转后和以前一样,最少要旋转多少度,假如是180度,这时候写上文字,文字会变反了.
>
> 也就是,如果你添加一张照片旋转180度他绝对是反着的**
>
> **所以旋转360度才是一个完整的一圈**
>
> 我们这时候就可以去做一些好玩的hover效果了

```css
	.box{
			width: 300px;
			height: 300px;
			margin: 100px auto 0;
			background-color: skyblue;
			transition: .6s;
		}
		.box:hover{
			transform: rotate(90deg);
		}
```

**复合样式**

```css
.box{
	width: 300px;
	height: 300px;
	background-color: skyblue;
	transform: translateX(300px) rotate(30deg);
    /*先向右平移300px再向右旋转30度,如果把这两个换个位置呢*/
	transform: rotate(30deg) translateX(300px);
    /*这时候为什么移动的位置不一样?坐标轴发生了变化,X轴朝向因为旋转发生了改变.*/
}
<div class="box"></div>
```

```css
	.box{
			width: 300px;
			height: 300px;
			background-color: skyblue;
			transform: translateX(300px) rotate(30deg); 
			animation: move 3s linear infinite;
		}
		@keyframes move{
			0%{
				transform: translateX(0px) rotate(0deg); 
			}
			50%{
				transform: translateX(300px) rotate(0deg); 
			}
			100%{
				transform: translateX(300px) rotate(30deg); 
			}
		}
/*第二个动画*/
	@keyframes move{
			0%{
				transform: rotate(0deg) translateX(0px);
			}
			50%{
				transform: rotate(30deg) translateX(0px);
			}
			100%{
				transform: rotate(30deg) translateX(300px);
			}
		}
```

**tansform的多值写法相当于输出指令,游览器会一条条的去执行,**

**平移的时候盒子的中心点会移动变化样式内多个样式值顺序的不同会导致完全不一样的结果**

```css
.box{transform: rotate(30deg) translateX(100px) rotate(20deg) translateY(100px);}
/*这个怎么去理解,写一个动画看看*/
```

```css
.box{
		width: 300px;
		height: 300px;
		background-color: skyblue;
		animation:trans 5s linear infinite;
		}
	@keyframes trans{
		0%{
			transform: rotate(0deg) translateX(0px) rotate(0deg) translateY(0px);
		}
		25%{
			transform: rotate(30deg) translateX(0px) rotate(0deg) translateY(0px);
		}
		50%{
			transform: rotate(30deg) translateX(100px) rotate(0deg) translateY(0px);
		}
		75%{
			transform: rotate(30deg) translateX(100px) rotate(20deg) translateY(0px);
		}
		100%{
			transform: rotate(30deg) translateX(100px) rotate(20deg)translateY(100px);
		}
	}
```

### 变换基点  transform-origin(x y)

> **第一个x轴相对于盒子宽度,第二个y轴相对于盒子的高度**
>
> **默认盒子绕着中心点来旋转*center center (50%,50%)*,**
>
> **盒子可以不绕着中心点进行旋转,可以调整.**
>
> **单位**	
>
>   **1.关键词 center top left right bottom***
>
> ​    **2.像素值 px**
>
> ​    **3.百分比 %**
>
> ​    **还可以设置负数**
>
> ***2个值 x轴和y轴***
>
> ***1个值 x轴设置 y轴默认是50%***


```css
	.box{
			width: 300px;
			height: 300px;
			margin: 100px auto 0;
			background-image: linear-gradient(skyblue,pink);
       		animation: roll 2s linear;
		}
	@keyframes roll {
			from{
				transform: rotate(0deg);
			}
			to{
				transform: rotate(90deg);
			}
		}
	<div class="box"></div>
/*默认绕着中心点旋转*/
```

```css
transform-origin: 0 0;
/*变换基点左上角*/
```

```css
transform-origin:100% 100%;
 /*变换基点在右下角,相当于这里钉了一个钉子,这里不动,其他点就绕着这个钉子进行旋转
  还可以去写关键字的形式*/
```

```css
transform-origin: left top;
/*此时就是在左上角*/
```

```css
transform-origin: top;
/*第二个值不写默认center.
  还支持我们的px像素值为单位.*/
```

```css
transform-origin: 150px 150px;
/*绕着中心点旋转,是以我们盒子左上角为基点.*/
```

**变化原点在元素的外面**

```css
transform-origin: -100% -100%;
```

### 缩放scale

**中心点为基点,盒子里的内容所有内容都会放大和缩小**

  ***取值 正数 小数 0 负数***

​    *>1 放大*

​	0<x<1 缩小

​    *0 盒子存在,只是看不到*

​	-1~0, 倒置缩小,  小于-1, 倒置放大

一个值 x轴和y轴都缩放

二个值  第一个x轴 第2个y轴

```css
.box{
		width: 200px;
		height: 200px;
  		margin:30px auto;
		background-color: skyblue;
		transform: scale(1);
   /*默认是1, 默认中心点基点.
     如果为负数可以不可以呢?我们去写上一些文字
 	 */
}
<div class="box">我要忘了你的样子</div>
/*可以看到文字进行了方向颠倒*/
```

**scale支持单轴放大和缩小**

> **scaleX    scaleY**	

**小姐姐之缩放反转**

```css
.box{
		width: 300px;
		height: 300px;
		margin:200px auto;
		background: url(1.jpg) center/cover;
		transform:scale(2,1);
  /*等于tranform:scaleX(2) scaleY(1);*/
  
  
  	transform:scaleX(0.5)
    /*等于transform:scale(0.5,1)*/
  }
    /*scale可以写两个,分别是X轴的放缩和Y轴的放缩  
      X轴负数就是水平颠倒  Y轴负数就是竖直颠倒*/
	
<div class="box">我要忘了你的样子</div>
```

### 倾斜(skew)

**1个值 表示水平方向的倾斜***

 **2个值 第一个值是x轴 第二个值y轴**

​    *x轴 逆时针为正*

​    *y轴 顺时针为正*

​    可以为负数

**可以进行拆分**

​     skewx()

​     skewy()

```css
.box{
		width: 300px;
		height: 300px;
		margin:200px auto;
		background: url(1.jpg) center/cover;
		transform:skew(45deg);
  }
    /*只写一个值代表设置skewX,可写两个值(角度1,角度2).
    也可单独倾斜skew-X轴和skew-Y轴.
    这个也会改变我们X轴和Y轴的朝向.*/
```

