### 1.下列关于Set的描述，正确的选项是?（选择两项）

**A.**Set中的值不允许重复

**B.**可以通过字面量的方式创建Set

**C.**可以通过下标的方法访问Set中的值

**D.**Set是类似数组的数据集合



本题主要考查Set的基本概念。

Set是一系列无序、没有重复值的数据集合。

Set中不能有重复的成员，A选项正确。

Set是类似于数组的数据集合，但是不能像数组一样通过字面量的方式创建，也不能使用下标的方式访问成员，BC选项错误，D选项正确。

所以本题答案为AD.





### 2.下图代码中，输出this的值是?（选择一项）

[![DG3j91.png](https://s3.ax1x.com/2020/11/22/DG3j91.png)](https://imgchr.com/i/DG3j91)



**A.**window

**B.**undefined

**C.**obj

**D.**s



参考解析：

本题主要考查forEach方法遍历Set时，回调函数中的this指向。

forEach可用于遍历Set，该方法接收两个参数，第一个参数是回调函数，第二个参数指定了回调函数中的this指向，如果省略了第二个参数，或者其值为 null 或 undefined，this 则指向全局对象。

因为箭头函数中没有this，即使传入了第二个参数，也不会生效，相当于省略了第二个参数，所以输出的this值为全局对象window，本题答案为A.





### 3.下列所示代码中，会报错的选项是？（选择一项）



**A.**[![DG88Cn.png](https://s3.ax1x.com/2020/11/22/DG88Cn.png)](https://imgchr.com/i/DG88Cn)

**B.**[![DG8UDU.png](https://s3.ax1x.com/2020/11/22/DG8UDU.png)](https://imgchr.com/i/DG8UDU)

**C.**[![DG8B59.png](https://s3.ax1x.com/2020/11/22/DG8B59.png)](https://imgchr.com/i/DG8B59)

**D.**[![DG8ygx.png](https://s3.ax1x.com/2020/11/22/DG8ygx.png)](https://imgchr.com/i/DG8ygx)



参考解析：

本题考查Set构造函数的参数设置

Set构造函数的参数可以是数组、字符串、arguments、NodeList、Set实例等，不能直接传递数字。B选项传入的参数是数字，会出现报错。所以本题答案为B





### 4.下列选项中，变量s只添加了一条数据的是?（选择一项）

**A.**[![DG8gKK.png](https://s3.ax1x.com/2020/11/22/DG8gKK.png)](https://imgchr.com/i/DG8gKK)

**B.**[![DG8hUH.png](https://s3.ax1x.com/2020/11/22/DG8hUH.png)](https://imgchr.com/i/DG8hUH)

**C.**[![DG8IPA.png](https://s3.ax1x.com/2020/11/22/DG8IPA.png)](https://imgchr.com/i/DG8IPA)

**D.**[![DG87xP.png](https://s3.ax1x.com/2020/11/22/DG87xP.png)](https://imgchr.com/i/DG87xP)





### 5.下列选项中，Map和Set实例共有的方法和属性是?（选择两项）

**A.**add

**B.**forEach

**C.**size

**D.**get



本题主要考查Map和Set实例的属性和方法。

Set和Map实例共有的方法：forEach、has、clear、delete。

Set和Map实例共有的属性：size。

Set实例特有的方法：add。

Map实例特有的方法：set、get。

所以本题答案为BC.



### 6.下列关于Map对象，说法不正确的是？（选择一项）

**A.**Map是映射的意思

**B.**通过size属性，可以获取Map成员的长度

**C.**可以通过const m = new Map()得到一个具体的map实例

**D.**通过add方法，可以向Map中添加新成员