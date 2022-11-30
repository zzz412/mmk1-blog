### 1.下列选项说法正确的是?（选择两项）

**A.**for…of可以与break和continue结合使用

**B.**keys方法是对键值的遍历

**C.**values方法是对键名的遍历

**D.**entries方法是对键值对的遍历

本题主要考查for…of方法遍历的相关知识。

js语法规定的，for…of可以结合break和continue使用，A选项正确。

**keys**方法是针对**键名**的遍历，B选项错误。

**values**方法是针对**键值**的遍历，C选项错误。

**entries**方法是针对**键值对**进行遍历，D选项正确。

所以本题答案为AD.



### 2.下列选项中的代码，可以正确输出内容的是?（选择两项）

**A.**[![DNr6pt.png](https://s3.ax1x.com/2020/11/24/DNr6pt.png)](https://imgchr.com/i/DNr6pt)

**B.**[![DNsknO.png](https://s3.ax1x.com/2020/11/24/DNsknO.png)](https://imgchr.com/i/DNsknO)

**C.**[![DNyeqU.png](https://s3.ax1x.com/2020/11/24/DNyeqU.png)](https://imgchr.com/i/DNyeqU)

**D.**[![DNcyVS.png](https://s3.ax1x.com/2020/11/24/DNcyVS.png)](https://imgchr.com/i/DNcyVS)

**本题主要考查原生可遍历对象。**

1、对象上默认有Symbol.iterator方法，那么就将该对象称作原生可遍历对象，否则就是非原生可遍历对象。

2、常见的原生可遍历对象：数组、字符串、Map、Set、arguments、Nodelist。

3、非原生可遍历对象：对象字面量或者Object声明的对象。

4、原生可遍历对象可以使用for…of方法遍历，非原生可遍历对象不可以使用for…of方法。

A选项代码中的obj和D选项代码中的arg参数，都是一个普通的对象，不属于原生可遍历对象，使用for…of方法会报错。

B选项代码中arguments属于原生可遍历对象，C选项代码中map对象也属于原生可遍历对象，可以使用for…of方法遍历，输出内容。

**所以本题答案为BC.**