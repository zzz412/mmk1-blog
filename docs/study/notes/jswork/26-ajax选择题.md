### 1.下列关于readyState状态值，描述正确的选项是？（选择两项）



**A.**状态值为0：此时尚未创建xhr对象，也没有调用open方法

**B.**状态值为1：此时open方法已被调用，但是尚未调用send方法

**C.**状态值为2：send方法已被调用，但是尚未接收到响应数据

**D.**状态值为3：已经接收完响应数据了



**本题主要考查readyState状态值表示的含义。**

readyState状态值一共有5个值，分别代表的含义如下：

0：未初始化，已经创建了xhr对象，但是尚未调用open方法。

1：启动，open方法已被调用，但是尚未调用send方法。

2：发送，send方法已被调用，但是尚未接收到响应数据。

3：接收，已经接收到部分响应数据，还未接受完。

4：完成，已经接收到全部响应数据。

readyState值为0时，已经创建了xhr对象，A选项错误。

根据前面对readyState状态值的解析可以BC选项正确。

readyState值为3时，只接受到了部分响应数据，C选项错误。

**所以本题答案为BC.**



### 2.当readyState等于4之后，可以获取到响应数据的选项是？（选择一项）



**A.**状态值为0：此时尚未创建xhr对象，也没有调用open方法

**B.**状态值为1：此时open方法已被调用，但是尚未调用send方法

**C.**状态值为2：send方法已被调用，但是尚未接收到响应数据

**D.**状态值为3：已经接收完响应数据了



参考解析：

**本题考查正常获取响应数据的条件。**

当满足xhr.status>= 200 && xhr.status < 300或者满足xhr.status=== 304时，可以正常获取响应数据。

A选项：xhr.status > 300条件是错误的。

C选项：xhr.status <200 条件是错误的

D选项： xhr.status<=200 并且xhr.status>300条件是错误的。

**本题正确的选项是B**



### 3.观察下图，代码中有几处错误？（选择一项）

![image-20201215191209703](https://i.loli.net/2020/12/15/qS941rClAHDLg5t.png)



**A.**1处

**B.**2处

**C.**3处

**D.**4处



**本题考查Ajax的使用步骤。**

Ajax请求可以分为四个步骤，第一步创建xhr 对象；第二步监听事件，处理响应；第三步准备发送请求；第四步发送请求。

第一处错误：创建xhr 对象时单词写错，正确的写法为XMLHttpRequest

第二处错误：绑定readystatechange事件时，没有加on，正确的写法为onreadystatechange

第三处错误：获得字符串形式的响应数据，responseText的t小写了，正确的写法是responseText

第四处错误：先使用了send方法，后使用open方法，正确的步骤是先使用open方法，后使用send方法。

**一共有四处错误，本题正确的选项是D**



### 4.下列json数据，格式书写正确的选项是？（选择一项）



**A.**

```js
{
    "username" : "xm",//用户名
    "age": 18//年龄
}
```

**B.**

```js
{
    ' username ' : 'xm',
      'age' : 16
}
```

**C.**

```js
{
    "username" :"xm",
     "age" : "undefined"
}
```

**D.**

```js
{
    username :"xm",
    age: 18
}
```



**本题主要考查JSON格式。**

JSON格式必须满足以下几个条件：

1、JSON中的字符串必须使用双引号。

2、JSON中没有undefined值，使用时要用引号包裹起来。

3、JSON中不能添加注释。

代码中添加了注释，不符合条件，A选项错误。

代码中字符串使用单引号包裹，不符合条件，B选项错误。

JSON中没有undefined值，但是代码中使用双引号包裹了undefined，属于字符串，C选项正确。

代码中没有使用双引号包裹属性名，属于对象格式的写法，而不是JSON格式，D选项错误。

**所以本题答案为C.**





### 5.下列选项中，描述错误的是？（选择一项）



**A.**JSON.stringify()的作用是将 JavaScript 对象转换为JSON字符串

**B.**JSON.stringify()方法让localStorage/sessionStorage可以存储对象

**C.**JSON.parse()作用是将字符串转为一个对象

**D.**JSON.stringify()方法可以判断两个数组或对象中的值是否相等



参考解析：

**本题主要考查JSON的常用方法。**

JSON中常用的方法是stringify和parse。

JSON.stringify()的作用是将 JavaScript 对象转换为JSON字符串，A选项正确。

JSON.stringify()方法让localStorage/sessionStorage可以存储对象，B选项正确。

JSON.parse()作用是将JSON字符串转为一个对象，字符串必须符合JSON格式，即键值都必须使用双引号包裹，而不是说任意一个字符串就可以使用JSON.parse方法转成字符串。C选项错误。

两个对象（或数组），值相同，由于地址不同，直接比较是不相等的，而使用JSON.stringify方法将对象（或数组）转成字符串之后，就可以只比较值了，D选项正确。示例：





### 6.下列描述正确的选项是？（选择两项）



**A.**responseType属性值为空时，不可以使用reponse属性接收

**B.**responseType属性值为json时，不可以使用reponseText属性接收

**C.**responseType属性值为text时，只能使用reponseText属性接收

**D.**没有设置reponseType属性时，可以使用reponseText或reponse属性接收



**本题主要考查reponseText和reponse属性**。

满足以下三个条件中的任意一个，才可以使用reponseText接收响应的数据。

（1）没有设置reponseType。

（2）reponseType = “”

（3）reponseType = “text”

不管reponseType设置任意值，都可以使用reponse接收响应的数据。

responseType属性值为空时，可以使用reponse属性接收， A选项错误。

responseType属性值为json时，不满足条件，所以不可以使用reponseText属性接收。B选项正确。

responseType属性值为text时，reponseText和reponse属性都可以接收，C选项错误。

没有设置reponseType属性时，可以使用reponseText或reponse属性接收，D选项正确。

**所以本题答案为BD.**



### 7.地址为http://www.baidu.com的页面， 向下列哪个地址发送请求时，不属于跨域的是？（选择一项）

**A.**http://www.baidu.com:8080

**B.**http://www.m.baidu.com

**C.**https://www.baidu.com/less

**D.**http://www.baidu.com/course/list



**本题主要考查“域”的概念。**

http（协议）://class.imooc.com（域名）:443(端口号)/course（路径），当协议、域名和端口号，任何一个不一样，就是不同域， 与路径无关。

http://www.imooc.com和http://www.imooc.com:8080端口号不同，A选项错误。

www.imooc.com和www.m.imooc.com 域名不同，B选项错误。

http和https协议不同，C选项错误。

只要协议、域名和端口号相同，就属于同一个域，不受路径影响，D选项正确。

**所以本题答案为D.**





### 8.如果想要发送json格式的数据，setRequestHeader()和send()方法该如何设置？（选择一项）



**A.**![image-20201215192352467](https://i.loli.net/2020/12/15/eGfWdJp3scTOPHi.png)

**B.**![image-20201215192401262](https://i.loli.net/2020/12/15/GIav9T8yj4mhkPJ.png)

**C.**![image-20201215192412482](https://i.loli.net/2020/12/15/2ZVqQ4ONreTkYwa.png)

**D.**![image-20201215192424503](https://i.loli.net/2020/12/15/t3s9Cb4QOKYzE8B.png)



**本题考查使用setRequestHeader()和send()方法，来发送json格式的数据**

setRequestHeader()方法中，Content-Type设置为application/x-www-form-urlencoded，表示要发送名值对格式的数据，send()方法中，写成username=alex&age=18格式。BC不符合题意。

Content-Type设置为application/json，表示要发送json格式的数据

send()方法中，数据需要使用JSON.stringify()方法转换一下。

**本题正确的选项是D**

