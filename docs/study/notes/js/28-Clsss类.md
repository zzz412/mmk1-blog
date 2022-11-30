

# 课程简介



## 学什么

> 初识Class
>
> Class的属性和方法
>
> Class的继承
>
> Class的应用



### 初识 Class

> **Class是什么**
>
> Class的两种定义形式



### Class的属性和方法

> 实例属性、静态方法和静态属性
>
> 私有属性和方法



### Class的继承

> **extends**
>
> super



### Class的应用

> **幻灯片**



# 1.初识class

- 认识Class
- Class的基本用法
- Class 与构造函数

## 1.Class是什么

### 1.认识 Class

> 人类：类
>
> 具体的人：实例、对象
>
>  类可以看做是对象的模板，用一个类可以创建出许多不同的对象

### 2.Class 的基本用法

> 类名一般大写  不需要圆括号和分号

```js
class Person {} √
class Person() {} ×
class Person {}; ×
```

```js
class Person {
    // 实例化时执行构造方法，所以必须有构造方法
    constructor(name, age) {
        console.log('实例化时执行构造方法');
        //this 代表实例对象，上面定义的是实例属性/方法
        this.name = name;
        this.age = age;

        // 一般在构造方法中定义属性，方法不在构造方法中定义
        //this.speak = () => {};
    }

    //speak:function(){}

    speak() {
        console.log('speak');
    }
}


const zs = new Person('ZS', 18);
const ls = new Person('LS', 28);
console.log(zs.name);
console.log(zs.age);
console.log(zs.speak;
console.log(ls.name);
console.log(ls.age);
console.log(ls.speak);
zs.speak();
console.log(zs.speak === ls.speak); //false
```

###  3.Class 与构造函数

```js
//Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log('speak');
    }
}

console.log(typeof Person);
console.log(Person.prototype.speak);  //本质上是函数并且方法是绑定在原型之上



//构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
    //不在这里声明
    //this.speak = () => {};
}
Person.prototype.speak = function () {};
```

## 2.Class的两种定义形式

- 声明形式

- 表达式形式

### 1.声明形式

```js
class Person {
    constructor() {}

    speak() {}
}
```

### 2.表达式形式

```js
function Person(){}
const Person = function () {};
//构造函数声明与表达式的形式

//匿名的类赋值给常量
const Person = class {
    constructor() {
        console.log('constructor');
    }
    speak() {}
}
new Person();


//立即执行函数
(function () {
    console.log('fn');
})();

new (class {
    constructor() {
        console.log('constructor');
    }
})();
```

# 2.属性与方法

## 1.实例属性和方法



```js
class Person {
    age = 0;
	sex = 'male';
	//方法就是值为函数的特殊属性
	getSex = function () {
    	return this.sex;
	};

	constructor(name, sex) {
 	   this.name = name;
        //如果用户没有传递sex值，那么就是用默认值的
        //实例化时传入的值，那么就使用传入的值
        //实例化时没有传入值，那么就使用默认的值
        this.sex = sex || this.age;
	}
	//实例方法
	speak() {
    	console.log("speak")
	}
}

const p = new Person('"yunmu"',"male");
console.log(p.name);
console.log(p.age);
```

## 2.静态方法

> 类的方法

```js
class Person {
    age = 0;
	sex = 'male';

	constructor(name, sex) {
 	    this.name = name;
    	this.sex = sex;
	}

	speak() {
    	this.age = 18;
         console.log(this); //指向对象
	}

	//静态方法  建议这一种 
	static speak() {
   		console.log('人类可以说话');
        console.log(this);  // this 指向类
 	}
}

//静态方法 第二种定义
Person.speak = function () {
    console.log('人类可以说话');
    console.log(this);
};

const p = new Person('Alex');
p.speak();
Person.speak(); //不会冲突
```

##  3.静态属性

> 类的属性

```js
class Person {
    constructor(name) {
        this.name = name;
    }

    //  不要这么写，目前只是提案，有兼容性问题
    // static version = '1.0';

    static getVersion() {
        return '1.0';
    }
}
// Person.version = '1.0';

const p = new Person('Alex');
console.log(p.name);
// console.log(Person.version);
console.log(Person.getVersion());
```

## 4.私有属性和方法

### 1.为什么需要私有属性和方法

>  一般情况下，类的属性和方法都是公开的
>
> 公有的属性和方法可以被外界修改，造成意想不到的错误

```js
class Person {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log('speak');
    }
    //通过方法去获取name  不通过属性
    getName() {
        return this.name;
    }
}
const p = new Person('yunmu');
console.log(p.name);
p.speak();

// ....
// p.name = 'zs';
// console.log(p.name);
```

### 2.模拟私有属性和方法

> 1.开头表示私有

```js
class Person {
    constructor(name) {
        this._name = name;
    }

    speak() {
        console.log('speak');
    }

    getName() {
        return this._name;
    }
}
const p = new Person('yunmu');
// console.log(p._name);
p.name = 'zd';
console.log(p.getName());
```

> 2.将私有属性和方法移出类

```js
(function () {
    let name = '';

    class Person {
        constructor(username) {
            // this.name = name;
            name = username;
        }

        speak() {
            console.log('speak');
        }

        getName() {
            return name;
        }
    }

    window.Person = Person;
})();

(function () {
    const p = new Person('yunmu');
    console.log(p.name);
    //只能通过这样访问
    console.log(p.getName());
})();
```

# 3.继承



## extends

- 子类继承父类
- 改写继承的属性或方法

### 1.子类继承父类

```js
  //父类
class People {
    constructor(name) {
        this.name = name;
    }

    eat(){
        console.log(`${this.name} eat something`);
    }

    static speak(){
        console.log(`人类的本质都是复读机`);
    }
}

//子类
class Student extends People{
    constructor(name, number) {
        super(name);
        //this.name = name;
        this.number = number;

        //this.gender = "female";
    }
    sayHi() {
        console.log(`姓名${this.name} 学号${this.number}`);
    }
}

//子类
class Teacher extends People{
    constructor(name,major){
        super(name);
        this.major = major;
    }

    teach(){
        console.log(`${this.name} 教授 ${this.major}`);
    }
}

//学生实例
const liyujiao = new Student("李玉俏", 100);
console.log(liyujiao);
console.log(liyujiao.name);
console.log(liyujiao.number);
liyujiao.sayHi();

//学生实例
//const lindaiyu = new Student("林黛玉", 101);
//console.log(lindaiyu);
//console.log(lindaiyu.name);
//console.log(lindaiyu.number);
//lindaiyu.sayHi();


//老师实例
const jiayucun = new Teacher("贾雨村", "诗词格律");
console.log(jiayucun);
console.log(jiayucun.name);
console.log(jiayucun.major);
jiayucun.teach();
jiayucun.eat();
```

### 2.改写继承的属性或方法

```js
//父类
class People {
    constructor(name) {
        this.name = name;
    }

    eat(){
        console.log(`${this.name} eat something`);
    }

    static speak(){
        console.log(`人类的本质都是复读机`);
    }
}

//子类
class Student extends People{
    constructor(name, number) {
        super(name);
        //this.name = name;
        this.number = number;

        //this.gender = "female";
    }
    sayHi() {
        console.log(`姓名${this.name} 学号${this.number}`);
    }
}

//子类
class Teacher extends People{
    constructor(name,major){
        super(name);
        //this 操作不能放在 super 前面
        this.major = major;
    }

    teach(){
        console.log(`${this.name} 教授 ${this.major}`);
    }

    //同名覆盖
    eat(){
        console.log(`${this.name} 在吃饭`);
    }

    //同名覆盖
    static speak(){
        console.log("学者必求师 为师不可不谨也");
    }
}

//学生实例
const liyujiao = new Student("李玉俏", 100);
console.log(liyujiao);
console.log(liyujiao.name);
console.log(liyujiao.number);
liyujiao.sayHi();

//学生实例
//const lindaiyu = new Student("林黛玉", 101);
//console.log(lindaiyu);
//console.log(lindaiyu.name);
//console.log(lindaiyu.number);
//lindaiyu.sayHi();


//老师实例
const jiayucun = new Teacher("贾雨村", "诗词格律");
console.log(jiayucun);
console.log(jiayucun.name);
console.log(jiayucun.major);
jiayucun.teach();
jiayucun.eat();
Teacher.speak()
```

## super

- 作为函数调用
- 作为对象使用
- 注意事项

###  1.作为函数调用

> 代表父类的构造方法，只能用在子类的构造方法中，用在其他地方就会报错
>
> super 虽然代表了父类的构造方法，但是内部的 this 指向子类的实例

```js
//父类
class People {
    constructor(name) {
        console.log(this);
        this.name = name;
    }

    eat() {
        console.log(`${this.name} eat something`);
    }

    static speak() {
        console.log(`人类的本质都是复读机`);
    }
}

//子类
class Student extends People {
    constructor(name, number) {
        super(name);
        this.number = number;
    }

    sayHi() {
        //super(); // ×
        console.log(`姓名${this.name} 学号${this.number}`);
    }
}

//学生实例
const liyujiao = new Student("李玉俏", 100);
console.log(liyujiao.name);
console.log(liyujiao.number);
liyujiao.sayHi();
```

### 2.作为对象使用

#### 

```js
//父类
class People {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this);
        console.log(`${this.name} eat something`);
    }

    static speak() {
        console.log(this);
        console.log(`人类的本质都是复读机`);
    }
}
/* 
        1.在构造方法中使用或一般方法中使用

        super 代表父类的原型对象 Person.prototype

        所以定义在父类实例上的方法或属性，是无法通过 super 调用的

        通过 super 调用父类的方法时，方法内部的 this 指向当前的子类实例

      */
//子类
class Student extends People {
    constructor(name, number) {
        super(name);
        this.number = number;

        //作为对象在构造方法中调用
        //super.eat();
    }

    sayHi() {
        console.log(`姓名${this.name} 学号${this.number}`);
    }

    eat() {
        //作为对象在一般方法中调用
        super.eat();
        console.log("吃大口");
    }
    //2.在静态方法中使用
    //指向父类，而不是父类的原型对象
    //通过 super 调用父类的方法时，方法内部的 this 指向当前的子类，而不是子类的实例
    static speak(){
        super.speak();
        console.log(`我是${this.name} 我正在学习!`);
    }
}

//学生实例
const liyujiao = new Student("李玉俏", 100);
console.log(liyujiao.name);
console.log(liyujiao.number);
liyujiao.sayHi();
liyujiao.eat();
Student.speak();
```

###  3.注意事项

> 使用 super 的时候，必须显式指定是作为函数还是作为对象使用，否则会报错

```js
//父类
class People {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this);
        console.log(`${this.name} eat something`);
    } 

    static speak() {
        console.log(this);
        console.log(`人类的本质都是复读机`);
    }
}

//子类
class Student extends People {
    constructor(name, number) {
        super(name);
        this.number = number;

        //console.log(super); // ×
        //console.log(super());
        //console.log(super.speak);
    }
}
```

# 4.Class的应用

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Class 的应用</title>
        <style>

            /* css reset */
            * {
                padding: 0;
                margin: 0;
            }
            a {
                text-decoration: none;
                outline: none;
            }
            img {
                vertical-align: top;
            }

            /* layout */
            .slider-layout {
                width: 80%;
                height: 420px;
                margin: 100px auto;
            }

            /* slider */
            .slider,
            .slider-content,
            .slider-item,
            .slider-img {
                width: 100%;
                height: 100%;
            }
            .slider {
                overflow: hidden;
            }
            .slider-item {
                float: left;
            }
            .slider-animation {
                transition-property: transform;
                transition-duration: 0ms;
            }


        </style>
    </head>
    <body>
        <div class="slider-layout">
            <div class="slider">
                <div class="slider-content">
                    <div class="slider-item">
                        <a href="javascript:;"
                           ><img src="./imgs/1.jpg" alt="1" class="slider-img"
                                 /></a>
                    </div>
                    <div class="slider-item">
                        <a href="javascript:;"
                           ><img src="./imgs/2.jpg" alt="1" class="slider-img"
                                 /></a>
                    </div>
                    <div class="slider-item">
                        <a href="javascript:;"
                           ><img src="./imgs/3.jpg" alt="1" class="slider-img"
                                 /></a>
                    </div>
                    <div class="slider-item">
                        <a href="javascript:;"
                           ><img src="./imgs/4.jpg" alt="1" class="slider-img"
                                 /></a>
                    </div>
                </div>
            </div>
        </div>

        <script>
            // 默认参数
            const DEFAULTS = {
                // 初始索引
                initialIndex: 0,
                // 切换时是否有动画
                animation: true,
                // 切换速度，单位 ms
                speed: 300
            };
            // base
            const ELEMENT_NODE = 1;
            const SLIDER_ANIMATION_CLASSNAME = 'slider-animation';

            class BaseSlider {
                constructor(el, options) {
                    console.log(options)
                    if (el.nodeType !== ELEMENT_NODE)
                        throw new Error('实例化的时候，请传入 DOM 元素！');

                    // 实际参数
                    this.options = {
                        ...DEFAULTS,
                        ...options
                    };

                    const slider = el;
                    const sliderContent = slider.querySelector('.slider-content');
                    const sliderItems = sliderContent.querySelectorAll('.slider-item');

                    // 添加到 this 上，为了在方法中使用
                    this.slider = slider;
                    this.sliderContent = sliderContent;
                    this.sliderItems = sliderItems;

                    this.minIndex = 0;
                    this.maxIndex = sliderItems.length - 1;
                    this.currIndex = this.getCorrectedIndex(this.options.initialIndex);

                    // 每个 slider-item 的宽度（每次移动的距离）
                    this.itemWidth = sliderItems[0].offsetWidth;

                    this.init();
                }

                // 获取修正后的索引值
                // 随心所欲，不逾矩
                getCorrectedIndex(index) {
                    if (index < this.minIndex) return this.maxIndex;
                    if (index > this.maxIndex) return this.minIndex;
                    return index;
                }

                // 初始化
                init() {
                    // 为每个 slider-item 设置宽度
                    this.setItemsWidth();

                    // 为 slider-content 设置宽度
                    this.setContentWidth();

                    // 切换到初始索引 initialIndex
                    this.move(this.getDistance());

                    // 开启动画
                    if (this.options.animation) {
                        this.openAnimation();
                    }
                }

                // 为每个 slider-item 设置宽度
                setItemsWidth() {
                    for (const item of this.sliderItems) {
                        item.style.width = `${this.itemWidth}px`;
                    }
                }

                // 为 slider-content 设置宽度
                setContentWidth() {
                    this.sliderContent.style.width = `${
                    this.itemWidth * this.sliderItems.length
                }px`;
                }

                // 不带动画的移动
                move(distance) {
                    this.sliderContent.style.transform = `translate3d(${distance}px, 0px, 0px)`;
                }

                // 带动画的移动
                moveWithAnimation(distance) {
                    this.setAnimationSpeed(this.options.speed);
                    this.move(distance);
                }

                // 设置切换动画速度
                setAnimationSpeed(speed) {
                    this.sliderContent.style.transitionDuration = `${speed}ms`;
                }

                // 获取要移动的距离
                getDistance(index = this.currIndex) {
                    return -this.itemWidth * index;
                }

                // 开启动画
                openAnimation() {
                    this.sliderContent.classList.add(SLIDER_ANIMATION_CLASSNAME);
                }

                // 关闭动画
                closeAnimation() {
                    this.setAnimationSpeed(0);
                }

                // 切换到 index 索引对应的幻灯片
                to(index) {
                    index = this.getCorrectedIndex(index);
                    if (this.currIndex === index) return;

                    this.currIndex = index;
                    const distance = this.getDistance();

                    if (this.options.animation) {
                        return this.moveWithAnimation(distance);
                    } else {
                        return this.move(distance);
                    }
                }

                // 切换上一张
                prev() {
                    this.to(this.currIndex - 1);
                }

                // 切换下一张
                next() {
                    this.to(this.currIndex + 1);
                }

                // 获取当前索引
                getCurrIndex() {
                    return this.currIndex;
                }
            }


        </script>
        <script>
            // console.log(BaseSlider);

            class Slider extends BaseSlider {
                constructor(el, options) {
                    super(el, options);

                    this._bindEvent();
                }

                _bindEvent() {
                    document.addEventListener('keyup', ev => {
                        // console.log(ev.keyCode);
                        if (ev.keyCode ===  37) {
                            // ←
                            this.prev();
                        } else if (ev.keyCode === 39) {
                            // →
                            this.next();
                        }
                    });
                }
            }
            new Slider(document.querySelector('.slider'), {
                initialIndex: 1,
                animation: true,
                speed: 1000
            });
        </script>
    </body>
</html>

```

[![Dny8yV.jpg](https://s3.ax1x.com/2020/11/18/Dny8yV.jpg)](https://imgchr.com/i/Dny8yV)

[![DnytwF.jpg](https://s3.ax1x.com/2020/11/18/DnytwF.jpg)](https://imgchr.com/i/DnytwF)

[![      ](https://s3.ax1x.com/2020/11/18/DnyaFJ.jpg)](https://imgchr.com/i/DnyaFJ)

[![DnywWR.jpg](https://s3.ax1x.com/2020/11/18/DnywWR.jpg)](https://imgchr.com/i/DnywWR)





# 课程总结



## Class的基本用法

[![Dy2EHe.png](https://s3.ax1x.com/2020/11/28/Dy2EHe.png)](https://imgchr.com/i/Dy2EHe)



## Class的两种定义形式

### 声明形式

[![Dy2c59.png](https://s3.ax1x.com/2020/11/28/Dy2c59.png)](https://imgchr.com/i/Dy2c59)

### 表达式形式

[![Dy2IbD.png](https://s3.ax1x.com/2020/11/28/Dy2IbD.png)](https://imgchr.com/i/Dy2IbD)

[![DyRk2q.png](https://s3.ax1x.com/2020/11/28/DyRk2q.png)](https://imgchr.com/i/DyRk2q)



## 实例属性、静态方法和静态属性

[![DyRfij.png](https://s3.ax1x.com/2020/11/28/DyRfij.png)](https://imgchr.com/i/DyRfij)



## 私有属性和方法

> _开头表示私有
>
> 将私有属性和方法移出类

[![DyWFTe.png](https://s3.ax1x.com/2020/11/28/DyWFTe.png)](https://imgchr.com/i/DyWFTe)





## extends

> 使用extends可以实现继承
>
> 可以改写继承到的属性或方法，同名覆盖



## super

> 作为函数调用
>
> 作为对象使用
>
> 使用super的时候，必须显式指定作为函数还是作为对象使用





### super作为函数调用

> super代表父类的构造方法，只能用在子类的构造方法中
>
> 内部的this指向子类的实例



### super作为对象使用



**在构造方法和一般方法中使用**

> super代表父类的原型对象 
>
> 通过super调用父类的方法时，方法的this指向当前的子类实例



**在静态方法中使用**

> super代表父类
>
> 通过super调用父类的方法时，方法的this指向当前的子类