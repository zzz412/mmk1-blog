### 1.下列选项中关于模块化描述错误的是?（选择一项）

**A.**每个模块有自己的独立作用域，避免命名冲突

**B.**导入模块使用关键字import

**C.**导出模块使用关键字export

**D.**html文件中在script标签中添加type="modules"属性加载模块



**本题主要考查ES Module模块。**

ES Module把一个文件当作一个模块，每个模块有自己的独立作用域，避免命名冲突；结合import和export关键字实现模块的导入导出， ABC描述正确。

type属性值为module结尾没有s，D选项错误。

**所以本题答案为D.**





### 2.已知当前目录下有两个文件，一个是第一张图片的index.js文件，一个是第二张图片的html文件，下列选项代码中，最终输出结果为3的选项是?（选择两项）

**A.**[![Dh2rRS.png](https://s3.ax1x.com/2020/12/01/Dh2rRS.png)](https://imgchr.com/i/Dh2rRS)

**B.**[![Dh2Waq.png](https://s3.ax1x.com/2020/12/01/Dh2Waq.png)](https://imgchr.com/i/Dh2Waq)

**C.**[![Dh2fI0.png](https://s3.ax1x.com/2020/12/01/Dh2fI0.png)](https://imgchr.com/i/Dh2fI0)

**D.**[![DhRSzD.png](https://s3.ax1x.com/2020/12/01/DhRSzD.png)](https://imgchr.com/i/DhRSzD)





**参考解析：**

本题主要考查ES Module模块的导出和导入。

代码中导入index.js，相应的就会执行index.js中的代码，输出num值3，A选项正确。

由于每个模块有自己的独立作用域，所以不能在导入index.js后，访问index.js中未导出的常量num，B选项错误。

index.js代码中使用export default导出num，html中引入index.js时，可以任意命名，此时a对应的就是num，值为3， C选项正确。

一个模块中只能有一个export default语句，代码中在一个模块中同时使用了两次export default语句，会出现报错，D选项错误。

**所以本题答案为AC.**



### 3.下列选项中关于模块的导出，描述错误的是？（选择两项）

**A.**在一个模块中，可以同时使用export default和export导出

**B.**export default方式导出，可以使用任意变量名来接收，接收时也可以添加{}

**C.**export方式导出，导入时必须添加{}，按照导出时候的名称和顺序接收

**D.**在一个模块中，export default只能有一个，export可以有多个





**本题主要考查export default和export使用时的区别。**

export default和export都是导出方式，在一个模块中，可以同时使用export default 和export 导出，A选项正确。

export default导出时，可以使用任意变量名接收，但是，导入时不可以添加{}，只有export 方式导出，导入时必须加{}，B选项是错误。

使用export导出，导入时必要添加{}，而且要按照导出时的名称接收，但是，接收顺序可以任意书写，C选项是错误。

export default只能导出单个变量，export导出多个变量，那么，在一个模块中export default只能使用一次，export可以使用多次，D选项正确。

**所以本题答案为BC.**





### 4.于Module使用时的注意事项，下列选项中说法正确的是？（选择一项）



**A.**导入导出的复合写法，等价于先导入，再导出，在当前模块中可以访问到导入的变量

**B.**import关键字可以结合if语句，满足if条件时再引入模块

**C.**export关键字可以结合if语句，满足if条件时再导出模块

**D.**模块顶层的this指向undefined





**本题主要考查Module的注意事项。**

导入导出的复合写法，在导入的同时将其导出出去，在当前模块是无法访问导入的变量，A选项错误。

import命令具有提升效果，默认会提升到整个模块的头部，先执行，所以无法结合if语句实现按需导入，B选项错误。

ES6语法规定，export命令不能在代码块之中（比如，if代码块，或者函数之中），否则会报句法错误，所以export不可以结合if语句使用，C选项错误。

模块顶层的this默认是指向undefined，D选项正确。

**所以本题答案为D.**