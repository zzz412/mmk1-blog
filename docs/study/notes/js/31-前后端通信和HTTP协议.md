

## 课程简介

**前后端通信**

> 初识前后端通信
>
> 前后端通信的过程与概念解释
>
> 前后端的通信方式

**HTTP 协议**

> 初识HTTP
>
> **HTTP报文**
>
> HTTP方法
>
> **GET和POST方法的对比**
>
> HTTP状态码

## 1.初识前后端通信

- 前后端通信是什么

- 后端向前端发送数据

- 前端向后端发送数据

### 1.前后端通信是什么

> 前端和后端数据交互的过程
>
> 浏览器和服务器之间数据交互的过程

### 2.后端向前端发送数据

> 访问页面

[![BTt6Ds.png](https://s1.ax1x.com/2020/11/08/BTt6Ds.png)](https://imgchr.com/i/BTt6Ds)

### 3.前端向后端发送数据

> 用户注册

[![BTNkIP.png](https://s1.ax1x.com/2020/11/08/BTNkIP.png)](https://imgchr.com/i/BTNkIP)

## 2.前后端通信的过程与概念解释

- 前后端通信的过程

- 概念解释

### 1.前后端通信的过程

>  前后端的通信是在‘请求-响应’中完成的

[![DHvYUH.png](https://s3.ax1x.com/2020/12/04/DHvYUH.png)](https://imgchr.com/i/DHvYUH)



[![DbeMRK.png](https://s3.ax1x.com/2020/12/04/DbeMRK.png)](https://imgchr.com/i/DbeMRK)



### 2.概念解释

> 前端：浏览器端
>
> 客户端：只要能和服务器通信的就叫客户端
>
> ​				命令行工具
> ​		
>
> 后端：服务器端

## 3.前后端的通信方式

- 使用浏览器访问网页

- HTML的标签

- Ajax和Fetch

### 1.使用浏览器访问网页

> 在浏览器地址栏输入网址，按下回车



### 2.HTML 的标签

> 浏览器在解析 HTML 标签的时候，遇到一些特殊的标签，会再次向服务器发送请求
>
>  **link / img / script / iframe**



[![BTUW1U.png](https://s1.ax1x.com/2020/11/08/BTUW1U.png)](https://imgchr.com/i/BTUW1U)



[![BTaF9f.png](https://s1.ax1x.com/2020/11/08/BTaF9f.png)](https://imgchr.com/i/BTaF9f)







**还有一些标签，浏览器解析的时候，不会向服务器发送请求，但是用户可以使用他们向服务器发送请求**

> a/form

```html
<a href="https://www.bilibili.com">bilibili一下</a>

<form action="https://www.shiguangkey.com/" method="POST">
    <input type="text" name="username" placeholder="用户名" />
    <input type="password" name="password" placeholder="密码" />
    <input type="submit" value="注册" />
</form>
```





### 3.Ajax 和 Fetch





## 4.初识HTTP

- HTTP是什么

- HTTP请求响应的过程

###  1.HTTP 是什么

>  HyperText Transfer Protocol  超文本传输协议
>
>  HTML：超文本标记语言
>
>  **超文本：原先一个个单一的文本，通过超链接将其联系起来。由原先的单一的文本变成了可无限延伸、扩展的超级文本、立体文本**
>
>  HTML、JS、CSS、图片、字体、音频、视频等等文件，都是通过 HTTP（超文本传输协议） 在服务器和浏览器之间传输
>
>  
>
>  每一次前后端通信，前端需要主动向后端发出请求，后端接收到前端的请求后，可以给出响应
>
>   HTTP 是一个请求-响应协议

### 2.HTTP 请求响应的过程

> https://www.bilibili.com

[![BTdoJx.png](https://s1.ax1x.com/2020/11/08/BTdoJx.png)](https://imgchr.com/i/BTdoJx)



## 5.HTTP 报文

- HTTP报文是什么

- **HTTP报文格式**

### 1.HTTP 报文是什么

> 浏览器向服务器发送请求时，请求本身就是信息，叫请求报文
>
> 服务器向浏览器发送响应时传输的信息，叫响应报文

### 2.HTTP 报文格式

> 请求
>
> 请求头：起始行+首部
>
> 请求体
> 
>
> 响应
>
> 响应头：起始行+首部
>
> 响应体

[![BTwXcT.png](https://s1.ax1x.com/2020/11/08/BTwXcT.png)](https://imgchr.com/i/BTwXcT)



[![B7bX59.png](https://s1.ax1x.com/2020/11/09/B7bX59.png)](https://imgchr.com/i/B7bX59)

> GET 请求，没有请求体，数据通过请求头携带
>
> POST 请求，有请求体，数据通过请求体携带

```html
<form action="https://www.baidu.com" method="get">
    <input type="text" name="username" placeholder="用户名" />
    <input type="password" name="password" placeholder="密码" />
    <input type="submit" value="注册" />
</form>

<form action="https://www.baidu.com" method="post">
    <input type="text" name="username" placeholder="用户名" />
    <input type="password" name="password" placeholder="密码" />
    <input type="submit" value="注册" />
</form>
```

## 6.HTTP方法

- 常用的HTTP方法
- HTTP方法的语义
- RESTful接口设计

### 1.常用的 HTTP 方法

> 浏览器**发送请求时采用的方法**，和响应无关
>
> **GET、POST、PUT、DELETE**
>
> 用来定义对于资源采取什么样的操作的，有各自的语义

### 2.HTTP 方法的语义

>  GET 获取数据   ===> (  获取资源（文件）)
>
> POST 创建数据      ====> 注册
>
>  PUT 更新数据    ===>  修改个人信息，修改密码
>
> DELETE 删除数据  ===> 删除一条评论
>
> **总结: 增删改查**
>
> 这些方法虽然有各自的语义，但是并不是强制性的

### 3.RESTful 接口设计

> 一种接口设计风格，充分利用 HTTP 方法的语义

**通过用户 ID 获取个人信息，使用 GET 方法**

```html
https://www.baidu.com/api/http/getUser?id=1
```

**注册新用户，使用 POST 方法**

```html
https://www.baidu.com/api/http/addUser
```

**修改一个用户，使用 POST 方法**

```
 https://www.baidu.com/api/http/modifyUser
```

**删除一个用户，使用 POST 方法**

```
https://www.baidu.com/api/http/deleteUser
```

**使用RESTful 接口设计**

```js
//GET
https://www.baidu.com/api/http/user?id=1

//POST
https://www.baidu.com/api/http/user

//PUT
https://www.baidu.com/api/http/user

//DELETE
https://www.baidu.com/api/http/user
```

## 7.GET和 POST方法的对比

- 语义
- **发送数据**
- 缓存
- **安全性**

### 1.语义

> GET：获取数据
>
>  POST：创建数据

### 2.发送数据

> GET 通过地址在请求头中携带数据
>
> 能携带的数据量和地址的长度有关系，一般最多就几K
>
> 

> POST 既可以通过地址在请求头中携带数据，也可以通过
>
> 请求体携带数据
>
> 能携带的数据量理论上是无限的

**携带少量数据，可以使用 GET 请求，大量的数据可以使用 POST 请求**

### 3.缓存

>  GET 可以被缓存，POST 不会被缓存

### 4.安全性

> GET 和 POST 都不安全
>
> 发送密码或其他敏感信息时不要使用 GET，主要是避免直接被他人窥屏或通过历史记录找到你的密码

## 8.HTTP状态码

- HTTP状态码是什么
- HTTP状态码的语义

### 1.HTTP 状态码是什么

> 定义服务器对请求的处理结果，是服务器返回的

###  2.HTTP 状态码的语义

> **100~199 消息**：代表请求已被接受，需要继续处理
>
> ​	websocket 全双工通信的协议
>
> **200~299 成功**
>
> **300~399 重定向 ** 
>
> 301 Moved Permanently  
>
> 302 Move Temporarily  
>
> 304 Not Modified
>
> http://www.baidu.com/
>
> https://www.baidu.com/
>
> **400~499 请求错误**  404 Not Found
>
> **500~599 服务器错误**  500 Internal Server Error



## 课程总结



### 前后端通信

[![DHvYUH.png](https://s3.ax1x.com/2020/12/04/DHvYUH.png)](https://imgchr.com/i/DHvYUH)



### 前后端的通信方式

> 使用浏览器访问网页
>
> link、img. script、a、form 等HTML的标签
>
> Ajax和Fetch





### HTTP协议

> HTML、JS、CSS、图片等文件，都是通过HTTP在服务器和浏览器之间传输
>
> HTTP是一个请求-响应协议



### HTTP请求响应的过程

[![BTdoJx.png](https://s1.ax1x.com/2020/11/08/BTdoJx.png)](https://imgchr.com/i/BTdoJx)



### HTTP 报文

[![BTwXcT.png](https://s1.ax1x.com/2020/11/08/BTwXcT.png)](https://imgchr.com/i/BTwXcT)





### HTTP方法

> GET 获取数据
>
> PUT更新数据
>
> POST创建数据
>
> DELETE删除数据



### GET和POST方法的对比

> GET 表示获取数据，POST 表示创建数据
>
> GET通过地址在请求头中携带数据
>
> POST既可以通过地址在请求头中携带数据，也可以通过请求体携带数据
>
> GET可以被缓存，POST不会被缓存
>
> 发送密码或其他敏感信息时不要使用GET





### HTTP状态码

> 100~199消息:代表请求已被接受，需要继续处理
>
> 200~299成功
>
> 300~399重定向
>
> 400~499请求错误
>
> 500~599服务器错误