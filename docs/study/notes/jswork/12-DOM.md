### 1.在DOM的HTML事件中，下列哪个事件是当用户单击鼠标时触发的？（选择一项）

**A.**onload

**B.**onclick

**C.**onblur

**D.**onmouseout

**本题考查DOM中的HTML事件。**

A：onload 事件会在页面或图像加载完成后立即触发；

B：onclick事件会在对象被单击时触发；

C：onblur 事件会在对象失去焦点时触发；

D：onmouseout 事件会在鼠标指针移出指定的对象时触发；

本题要求单击鼠标时触发，**所以答案为B。**

### 2.DOM中的哪个事件会在网页中的所有元素（文本、图像、CSS样式等）加载完后才触发执行？（选择一项）

**A.**onload

**B.**onclick

**C.**onblur

**D.**onmouseout

**本题考查DOM的onload事件。**

A：onload事件是在网页中的元素（图片、外部关联文件等）都完全加载到浏览器之后才触发执行。

B：onclick是在点击的时候触发。

C：onmouseover 事件会在鼠标指针移动到指定的元素上时触发。

D：onblur事件是失去焦点时触发。

本题要求在网页中所有元素加载完后触发执行，**所以答案为A。**

### 3.观察截图中的代码，选项中说法正确的是？（选择两项）

[![BF6I2V.png](https://s1.ax1x.com/2020/10/22/BF6I2V.png)](https://imgchr.com/i/BF6I2V)

**A.**页面打开时会弹出“云牧好帅好帅“

**B.**点击按钮，会弹出“云牧好帅好帅“

**C.**系统报错，设置的onclick事件为空

**D.**页面要顺利执行脚本弹出“云牧好帅好帅“，需加上onload事件



本题考查DOM的onload事件。

onload事件是在网页中的元素（图片、外部关联文件等）都完全加载到浏览器之后才执行。

本题代码中，当浏览器读到js脚本（代码）时，body中的元素还未解析，所以找不到对应的DOM元素，系统会报错。需要把js脚本放在onload事件中，这样让页面中的元素加载完之后，再执行js代码。

**所以本题答案为CD。**

### 4.下列选项中哪个是按下键盘事件？（选择一项）

**A.**onkeydown 

**B.**onmousedown

**C.**onmouseover

**D.**onkeyup

**本题考查DOM的键盘事件。**

A：onkeydown事件会在按下键盘时触发；

B： onmousedown是鼠标按下事件；

C： onmouseover是鼠标经过事件；

D：onkeyup是键盘松开事件；

本题要选择按下键盘的事件，**所以答案为A。**



### 5.下列事件属性中，哪个表示键盘事件触发时的键的字符代码？（选择一项）

**A.**onkeydown 

**B.**onkeyCode

**C.**keyCode

**D.**onclick



参考解析：

**本题考查keyCode属性。**

A：onkeydown事件在键盘按下的时候触发。

B：keyCode不需要添加on。

C：keyCode 属性返回某个事件触发的键的值的字符代码

D：onclick是在单击的时候触发。

本题选择键盘事件触发时，键的字符代码**，所以答案为C。**



### 6.关于onfocus和onblur事件下列说法正确的是？（选择两项）



**A.**onfocus和onblur事件常用在表单元素中

**B.**onfocus事件是失去焦点时触发

**C.**onblur事件是获得焦点时触发

**D.**onfocus事件是获得焦点时触发



本题考查onfocus事件和onblur事件。

onfocus事件和onblur事件常和表单配合使用，onfocus事件是获得焦点时触发，onblur事件是失去焦点时触发。

**所以本题答案为AD。**



### 7.关于鼠标位置，以下说法中错误的是？（选择两项）



**A.**pageX表示鼠标指针相对于浏览器窗口的水平坐标

**B.**pageX表示鼠标指针相对于整个网页的水平坐标

**C.**offsetY表示鼠标指针相对于事件源元素的垂直坐标

**D.**offsetY表示鼠标指针相对于浏览器窗口的垂直坐标



**本题考查pageX和offsetY两个属性的作用。**

pageX表示鼠标指针相对于整个网页的水平坐标，所以A错误，B正确。

offsetY表示鼠标指针相对于事件源元素的垂直坐标，所以C正确，D错误。

本题选择错误的说法，**所以答案为AD。**



### 8.观察以下代码，假如鼠标在div的正中心点击一下，那么输出的结果是？（选择一项）

**A.**150,150

**B.**200,100

**C.**350,250

**D.**300,300

本题考查clientX和clientY。

clientX表示鼠标指针相对于浏览器窗口的水平坐标，clientY表示鼠标相对于浏览器窗口的垂直坐标，即两个属性表示鼠标距离浏览器左上角的坐标。

本题中，鼠标点击的是元素正中心，那么鼠标距离浏览器左上角的坐标如下图所示：

![//img.mukewang.com/climg/5f5332fd2960391305001000.jpg](https://img.mukewang.com/climg/5f5332fd0960391306670425.jpg)

鼠标水平坐标（clientX）=150（元素宽度的一半）+200（左间距）=350；

鼠标水平坐标（clientY）=150（元素高度的一半）+100（上间距）=250；

所以本题答案为C。

### 9.下列关于事件委托说法正确的是？（选择两项）



**A.**利用冒泡的原理，把事件加到父级上，触发执行效果

**B.**使用事件委托的可以提高性能

**C.**利用冒泡的原理，把事件加到子级上，触发执行效果

**D.**使用事件委托的代码量会增大、不利于性能优化

本题考查事件委托。

事件委托是利用冒泡的原理，把事件加到父级上，触发执行效果。A说法正确，C说法错误；

使用事件委托的可以提高性能，B说法正确，D说法错误；

所以本题答案为AB。

### 10.编程题

[![BFWBX6.gif](https://s1.ax1x.com/2020/10/22/BFWBX6.gif)](https://imgchr.com/i/BFWBX6)

```html
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;
    }
    
    ul {
        list-style: none;
    }

    #wrap {
        width: 100%;
        height: 800px;
        background-image: linear-gradient(#8cc1de, #f9a886);
    }

    #wrap .content {
        display: flex;
        width: 800px;
        height: 600px;
        margin: 0 auto;
        padding-top: 50px;
    }

    #wrap .content .left {
        flex: 1;
        padding: 60px 20px;
        background-color: #fff;
    }

    #wrap .content .right {
        flex: 1;
        padding: 60px 20px;
        background-color: rgba(0, 0, 0, 0.5);
    }

    #wrap .content .left-top {
        color: #f60;
    }

    #wrap .content .left-top a {
        color: #000;
        text-decoration: none;
        margin-left: 10px;
    }

    #wrap .content .left-bottom {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    #wrap .content .left-bottom li {
        padding: 5px 10px;
        margin: 5px;
        border: 1px solid #aaa;
        color: #aaa;
        cursor: pointer;
    }

    #wrap .content .left-bottom li i {
        cursor: pointer;
        font-size: 24px;
        margin-left: 5px;
        padding: 5px;
    }

    #wrap .content .left-bottom li:hover i {
        color: red;
    }

    #wrap .content .right ul {
        display: flex;
        flex-wrap: wrap;
    }

    #wrap .content .right li {
        color: #fff;
        padding: 5px 10px;
        margin: 10px;
        border: 1px solid #fff;
    }
</style>
</head>
<body>
    <div id="wrap">
        <div class="content">
            <div class="left">
                <p class="left-top">
                    热门目的地
                    <!--<a href="#">马来西亚</a>
<a href="#">泰国</a>
<a href="#">三亚</a>
<a href="#">新西兰</a>
<a href="#">云南</a>-->
                </p>

                <ul class="left-bottom">
                    <!--<li>马来西亚 | <i>x</i></li>
<li>马来西亚 | <i>x</i></li>
<li>马来西亚 | <i>x</i></li>
<li>马来西亚 | <i>x</i></li>-->
                </ul>
            </div>

            <div class="right">
                <ul>
                    <!--<li>马来西亚</li>
<li>云南</li>-->
                </ul>
            </div>
        </div>
    </div>

    <script>
        (function () {
            let arr = ["马来西亚", "泰国", "三亚", "新西兰", "云南"];
            let left_top = document.querySelector(".left-top");
            let frag = document.createDocumentFragment();
            let left_bottom_ul = document.querySelector(".left-bottom");
            let rigth_ul = document.querySelector(".right ul");

            //用于检测对应的标签有没有点击过
            let ifClickArr = [];

            arr.forEach(function (item, index) {
                let oA = document.createElement("a");
                oA.href = "javascript:;";
                oA.innerHTML = item;
                frag.appendChild(oA);
                oA.onclick = function () {
                    //先判断对应的内容有没有生成过
                    if (ifClickArr[index]) return;
                    ifClickArr[index] = true;
                    //// 给左边内容 ul  添加内容
                    //creatLeftUlNode(index);

                    ////给右边ul添加内容
                    //creatRightUlNode(index);

                    createNode(index);
                };

                left_top.appendChild(frag);
            });

            ////左边ul对应的函数
            //function creatLeftUlNode(index) {
            //  let li = document.createElement("li");
            //  let i = document.createElement("i");

            //  li.innerHTML = arr[index];

            //  i.innerHTML = "x";

            //  li.appendChild(i);
            //  left_bottom_ul.appendChild(li);

            //  //每一个i是有点击事件的
            //  i.onclick = function () {
            //    //left_bottom_ul.removeChild(li);
            //    //干掉自己的爸爸
            //    this.parentNode.parentNode.removeChild(this.parentNode);
            //  };
            //}
            ////右边ul对应的函数
            //function creatRightUlNode(index) {
            //  let li = document.createElement("li");
            //  li.innerHTML = arr[index];
            //  rigth_ul.appendChild(li);
            //}

            function createNode(index) {
                //左边ul对应的函数

                let leftLi = document.createElement("li");
                let rightLi = document.createElement("li");
                ~(function creatLeftUlNode() {
                    let i = document.createElement("i");

                    leftLi.innerHTML = arr[index];

                    i.innerHTML = "x";

                    leftLi.appendChild(i);
                    left_bottom_ul.appendChild(leftLi);

                    //每一个i是有点击事件的
                    i.onclick = function () {
                        //干掉自己的爸爸
                        //this.parentNode.parentNode.removeChild(this.parentNode);

                        left_bottom_ul.removeChild(leftLi);
                        rigth_ul.removeChild(rightLi);

                        ifClickArr[index] = false;
                    };
                })();

                //右边ul对应的函数
                ~(function creatRightUlNode() {
                    rightLi.innerHTML = arr[index];
                    rigth_ul.appendChild(rightLi);
                })();
            }
        })();
    </script>
</body>
```

