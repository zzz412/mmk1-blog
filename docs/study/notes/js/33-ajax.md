

# 课程简介

**学什么**

> Ajax基础
>
> JSON
>
> 跨域
>
> XHR对象
>
> Ajax进阶
>
> Ajax应用
>
> Ajax扩展

## Ajax基础

> 初识 Ajax
>
> **Ajax的基本用法**
>
> **GET请求**
>
> **POST请求**

## JSON

> 初识JSON
>
> **JSON的3种形式**
>
> **JSON的常用方法**

## 跨域

> 初识跨域
>
> CORS跨域资源共享
>
> JSONP

## XHR 对象

> XHR的属性
>
> XHR的方法
>
> XHR的事件

## Ajax进阶

> FormData
>
> 封装Ajax
>
> 使用Promise改造封装好的Ajax

## Ajax应用

> 搜索提示
>
> 二级菜单
>
> 多个Ajax请求的并发执行

## Ajax扩展

> axios
>
> Fetch

# 1.初识ajax

> Ajax是什么
>
> 搭建Ajax开发环境

### 1.Ajax 是什么

> Ajax 是 Asynchronous JavaScript and XML（**异步 JavaScript 和 XML**）的简写
>
> Ajax 中的异步：可以异步地向服务器发送请求，在等待响应的过程中，不会阻塞当前页面，浏览器可以做自己的事情。直到成功获取响应后，浏览器才开始处理响应数据
>
> XML（可扩展标记语言）是前后端数据通信时传输数据的一种格式

```xml
xml标记语言
<person>
    <name>张三</name>
    <age>18</age>
    <sex>男</sex>
</person>
<person>
    <name>李四</name>
    <age>28</age>
    <sex>女</sex>
</person>
```

>  XML 现在已经不怎么用了，现在比较**常用的是 JSON**
>
>  
>
>  Ajax 其实就是浏览器与服务器之间的一种异步通信方式
>
>  
>
>  使用 Ajax 可以在不重新加载整个页面的情况下，对页面的某部分进行更新

比如

> ① B站注册检测
>
>  ② B站搜索提示

[![rCagYT.png](https://i.loli.net/2020/12/15/2opfGxZNMWstQd4.png)](https://imgchr.com/i/rCagYT)

[![rCah6J.png](https://s3.ax1x.com/2020/12/09/rCah6J.png)](https://imgchr.com/i/rCah6J)









### 2.搭建 Ajax 开发环境

> Ajax 需要服务器环境，非服务器环境下，很多浏览器无法正常使用 Ajax
>
> windows phpStudy
>
> Mac MAMP

[![BoyQx0.png](https://s1.ax1x.com/2020/11/08/BoyQx0.png)](https://imgchr.com/i/BoyQx0)

# 2.Ajax的基本用法

- XMLHttpRequest

- Ajax的使用步骤

- 使用Ajax完成前后端通信

### 1.XMLHttpRequest

```js
console.log(Ajax); ×
// Ajax 想要实现浏览器与服务器之间的异步通信，需要依靠 XMLHttpRequest，它是一个构造函数
// 不论是 XMLHttpRequest，还是 Ajax，都没有和具体的某种数据格式绑定
```

### 2.Ajax 的使用步骤

####  2.1.创建 xhr 对象

```js
const xhr = new XMLHttpRequest();
```

####  2.2.监听事件，处理响应

>  当获取到响应后，会触发 xhr 对象的 readystatechange 事件，可以在该事件中对响应进行处理

```js
xhr.addEventListener('readystatechange', () => {}, fasle);
//readystatechange 事件也可以配合 addEventListener 使用，不过要注意，IE6~8 不支持 addEventListener
//为了兼容性，readystatechange 中不使用 this，而是直接使用 xhr
//由于兼容性的原因，最好放在 open 之前

//xhr.readyState 是xhr的自身的状态码
// 0：未初始化。尚未调用 open()
// 1：启动。已经调用 open()，但尚未调用 send()
// 2：发送。已经调用 send()，但尚未接收到响应
// 3：接收。已经接收到部分响应数据
// 4：完成。已经接收到全部响应数据，而且已经可以在浏览器中使用了

xhr.onreadystatechange = () => {
    
    
    if (xhr.readyState !== 4) return;

    // HTTP CODE
    // 获取到响应后，响应的内容会自动填充 xhr 对象的属性
    // xhr.status：HTTP  200 404
    // xhr.statusText：HTTP 状态说明 OK Not Found
    if ((xhr.status >= 200) && (xhr.status < 300) || xhr.status === 304) {
        // console.log('正常使用响应数据');
        console.log(xhr.responseText);
    }
};

```

#### 2.3.准备发送请求

> 调用 open 并不会真正发送请求，而只是做好发送请求前的准备工作

```js
xhr.open(
    'HTTP 方法 GET、POST、PUT、DELETE',
    '地址 URL https://www.imooc.com/api/http/search/suggest?words=js ./index.html ./index.xml ./index.txt',
    true
);
//由于兼容性的原因，最好放在 open 之前
```

#### 2.4.发送请求

> 调用 send() 正式发送请求
>
> send() 的参数是通过请求体携带的数据

```js
xhr.send(null);
 //传递null兼容
```

### 3.使用 Ajax 完成前后端通信

```js
const url = "https://www.imooc.com/api/http/search/suggest?words=js";

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.responseText);
        console.log(typeof xhr.responseText);
    }
};

xhr.open("GET", url, true);

xhr.send(null);
```







# 3.GET请求

- 携带数据
- 数据编码

### 1.携带数据

> GET 请求不能通过请求体携带数据，但可以通过请求头携带

```js
const url = "https://www.imooc.com/api/http/search/suggest?words=js&username=yunmu&age=18";

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.responseText);

    }
};

xhr.open("GET", url, true);
//不会报错，但不会发送数据
xhr.send("sex=female");
```

[![rCwKrd.png](https://s3.ax1x.com/2020/12/09/rCwKrd.png)](https://imgchr.com/i/rCwKrd)



```html
//类似与form表单的提交方式
<form action="https://www.imooc.com/api/http/search/suggest" method="get">
    <input type="text" name="username" />
    <input type="text" name="words" />
    <input type="password" name="password" />
    <input type="submit" value="提交" />
</form>
```





###  2.数据编码

>  如果携带的数据是非英文字母的话，比如说汉字，就需要编码之后再发送给后端，不然会造成乱码问题
>
> 可以使用 encodeURIComponent() 编码

```js
const url = `https://www.imooc.com/api/http/search/suggest?words=${encodeURIComponent(
    "前端"
)}`;

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.responseText);
    }
};

xhr.open("GET", url, true);
//不会报错，但不会发送数据
xhr.send();
```


# 4.POST请求

- 携带数据
- 数据编码

### 1.携带数据

> POST 请求主要通过请求体携带数据，同时也可以通过请求头携带

```js
// POST 请求主要通过请求体携带数据，同时也可以通过请求头携带
const url = 'https://www.imooc.com/api/http/search/suggest?words=js';

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.responseText);
    }
};

xhr.open("POST", url, true);

// 如果想发送数据，直接写在 send() 的参数位置，一般是字符串 保持与form表单传递数据格式一致
xhr.send('username=yunmu&age=18');
```



[![rCBtBj.png](https://s3.ax1x.com/2020/12/09/rCBtBj.png)](https://imgchr.com/i/rCBtBj)



```html
<form
      action="https://www.imooc.com/api/http/search/suggest?words=js"
      method="post"
      >
    <input type="text" name="username" />
    <input type="password" name="password" />
    <input type="submit" value="提交" />
</form>
```

**不能直接传递对象，需要先将对象转换成字符串的形式**

```js
xhr.send({
    username: "yunmu",
    age: 18
});
// [object Object]
```

### 2.数据编码

```js
xhr.send(`username=${encodeURIComponent('云牧')}&age=18`);
```

# 5.JSON

## 1.初识JSON

- JSON是什么
- 为什么需要JSON

###  1.JSON 是什么

> JSON 全称是 JavaScript Object Notation
>
> Ajax 发送和接收数据的一种格`式

```js
{"code":200,"data":[{"word":"jsp"},{"word":"js"},{"word":"json"},{"word":"js \u5165\u95e8"},{"word":"jstl"}]}
```

### 2.为什么需要 JSON

> JSON 有 3 种形式，每种形式的写法都和 JS 中的数据类型很像，可以很轻松的和 JS 中的数据类型互相转换

```js
// JS->JSON->PHP/Java
// PHP/Java->JSON->JS
```

## 2.JSON的3种形式

- 简单值形式
- 对象形式
- 数组形式

### 1.简单值形式

> json文件后缀为.json
>
> JSON 的简单值形式就对应着 JS 中的基础数据类型
>
> 数字、字符串、布尔值、null

```js
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.responseText);
        console.log(typeof xhr.responseText);
    }
};

//请求本地的json数据
xhr.open("GET", "./plain.json", true);

xhr.send(null);
```

```json
6
true
false
"str"
null
```



 **注意事项**

> ① JSON 中没有 undefined 值
>
> ② JSON 中的字符串必须使用双引号
>
> ③ JSON 中是不能注释的



### 2.对象形式

> JSON 的对象形式就对应着 JS 中的对象

**注意事项**

>  JSON 中对象的属性名必须用双引号，属性值如果是字符串也必须用双引号
>
> JSON 中只要涉及到字符串，就必须使用双引号
>
>  不支持 undefined

```js
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.responseText);
        console.log(typeof xhr.responseText);
    }
};


xhr.open("GET", "./obj.json", true);


xhr.send(null);
```



```json
{
	"name":"云牧",
	"age":18,
	"hobbies":["唱歌","看电影"],
	"family":{
		"brother":"夕颜"
	}
}
```



### 3.数组形式

>  JSON 的数组形式就对应着 JS 中的数组

**注意事项**

> 数组中的字符串必须用双引号
>
>  JSON 中只要涉及到字符串，就必须使用双引号
>
> 不支持 undefined

```js
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.responseText);
        console.log(typeof xhr.responseText);
    }
};


xhr.open("GET", "./arr.json", true);


xhr.send(null);
```



```js
[6,null,true,false,"yunmumu"]
//这里不能写undefined 虽然能够获取到  但是后期转换成js对应的数据类型会有问题
```



```js
[
    {
        "id": 1,
        "username": "夕颜",
        "comment": "666"
    },
    {
        "id": 2,
        "username": "云牧",
        "comment": "999 6翻了"
    }
]
```



## 3.JSON的常用方法



- JSON.parse()
- JSON.stringify()
- 使用JSON.parse()和JSON.stringify()封装localStorage



### 1.JSON.parse()

> JSON.parse() 可以将 JSON 格式的字符串解析成 JS 中的对应值
>
> 一定要是合法的 JSON 字符串，否则会报错

```js
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(JSON.parse(xhr.responseText));
        console.log(JSON.parse(xhr.responseText).data);
        console.log(xhr.responseText);
    }
};

xhr.open("GET", "https://www.imooc.com/api/http/search/suggest?words=js", true);
xhr.open("GET", "./index.json", true);

xhr.send(null);
```





###  2.JSON.stringify()

> JSON.stringify() 可以将 JS 的基本数据类型、对象或者数组转换成 JSON 格式的字符串

```JS
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {

        console.log(xhr.responseText);
    }
};

xhr.open("POST", "https://www.imooc.com/api/http/search/suggest?words=js", true);

//xhr.send({
    //username:"yunmu",
//age:18
//});
console.log(
    JSON.stringify({
        username: "yunmu",
        age: 18,
    })
);

xhr.send(
    JSON.stringify({
        username: "yunmu",
        age: 18,
    })
);
```

### 3.使用 JSON.parse() 和 JSON.stringify() 封装 localStorage

```js
const Storage = window.localStorage;
// 设置
const set = (name,value) => {
	Storage.setItem(name, JSON.stringify(value));
}

// 获取
const get = (name) => {
	return JSON.parse(Storage.getItem(name))
}

// 删除
const remove = (name) => {
	Storage.removeItem(name)
}

// 清空
const clear = () => {
	Storage.clear();
}

export {set, get, remove, clear};
```



```js
import {set, get, remove, clear} from "./localStorage.js";

set("user1",{
    name:"夕颜",
    school:"中心小学",
    feature:"憨憨"
})
set("user2",{
    name:"云牧",
    school:"中心大学",
    feature:"比憨憨聪明"
})


console.log(get("user1"));
console.log(get("user2"));
```





# 6.跨域

- 跨域是什么
- 什么是不同域，什么是同域
- 跨域请求为什么会被阻止
- 跨域解决方案



## 1.跨域是什么

```js
// 同域，不是跨域
//const url = './index.html';


// 不同域，跨域，被浏览器阻止
const url = 'https://www.baidu.com';
const xhr = new XMLHttpRequest();


// 向一个域发送请求，如果要请求的域和当前域是不同域，就叫跨域
// 不同域之间的请求，就是跨域请求

xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.responseText);
    }
};

xhr.open('GET', url, true);

xhr.send(null);
```



## 2.什么是不同域，什么是同域

>  https（协议）://www.shiguangkey.com（域名）:443（端口号）/course/list（路径）
>
> 协议、域名、端口号，任何一个不一样，就是不同域
>
> 与路径无关，路径一不一样无所谓



**不同域**

```js
https://www.shiguangkey.com:443/course/list
http://www.shiguangkey.com:80/course/list
```



```js
http://www.shiguangkey.com:80/course/list
http://m.shiguangkey.com:80/course/list
http://shiguangkey.com:80/course/list
```



**同域**

```js
http://shiguangkey.com:80
http://shiguangkey.com:80/course/list
```





##  3.跨域请求为什么会被阻止



> 阻止跨域请求，其实是浏览器本身的一种安全策略--同源策略
>
> 
>
> 其他客户端或者服务器都不存在跨域被阻止的问题



### 4.跨域解决方案

>  ① CORS 跨域资源共享
>
> 
>
> ② JSONP
>
> 
>
> 优先使用 CORS 跨域资源共享，如果浏览器不支持 CORS 的话，再使用 JSONP



## 4.CORS 跨域资源共享

- CORS 是什么
- 使用CORS 跨域的过程
- CORS的兼容性

### 1.CORS 是什么

```js
//const url = 'https://www.baidu.com';

const url = 'https://www.imooc.com/api/http/search/suggest?words=js';
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.responseText);
    }
};

xhr.open('GET', url, true);

xhr.send(null);
```





 **Access-Control-Allow-Origin: ***

> 表明允许所有的域名来跨域请求它，* 是通配符，没有任何限制

[![rPuMP1.png](https://s3.ax1x.com/2020/12/09/rPuMP1.png)](https://imgchr.com/i/rPuMP1)

**只允许指定域名的跨域请求**

> Access-Control-Allow-Origin: http://127.0.0.1:5500





### 2.使用 CORS 跨域的过程

> ① 浏览器发送请求
>
> ② 后端在响应头中添加 Access-Control-Allow-Origin 头信息
>
> ③ 浏览器接收到响应
>
> ④ 如果是同域下的请求，浏览器不会额外做什么，这次前后端通信就圆满完成了
>
> ⑤ 如果是跨域请求，浏览器会从响应头中查找是否允许跨域访问
>
> ⑥ 如果允许跨域，通信圆满完成
>
> ⑦ 如果没找到或不包含想要跨域的域名，就丢弃响应结果



### 3.CORS 的兼容性

> IE10 及以上版本的浏览器可以正常使用 CORS



## 5.JSONP

- JSONP的原理
- 使用JSONP 实现跨域



### 1.JSONP 的原理

> script 标签跨域不会被浏览器阻止
>
> JSONP 主要就是利用 script 标签，加载跨域文件



###  2.使用 JSONP 实现跨域

> 服务器端准备好 JSONP 接口

```js
 https://www.imooc.com/api/http/jsonp?callback=handleResponse
```



[![rPKamF.png](https://s3.ax1x.com/2020/12/09/rPKamF.png)](https://imgchr.com/i/rPKamF)





> 手动加载 JSONP 接口或动态加载 JSONP 接口

```html
<script>
    //声明函数
    const handleResponse = (data) => {
        console.log(data);
    } 
    //  动态加载 JSONP 接口
    //  const script = document.createElement("script");
    // script.src =
    //  "https://www.imooc.com/api/http/jsonp?callback=handleResponse";
    // document.body.appendChild(script);

</script>

//手动加载 JSONP接口
<script src="https://www.imooc.com/api/http/jsonp?callback=handleResponse"></script>
```



# 7.XHR对象



## XHR的属性

- responseType和response属性
- timeout属性
- withCredentials 属性

### 1.responseType 和 response 属性

```js
const url =
      "https://www.imooc.com/api/http/search/suggest?words=js";
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        // 文本形式的响应内容
        //  responseText 只能在没有设置 responseType 或者 responseType = "" 或 "text" 的时候才能使用
        // console.log('responseText:', xhr.responseText);

        //可以用来替代 responseText
        console.log('response:', xhr.response);
    }
};

xhr.open("GET", url, true);

//默认的响应类型
//xhr.responseType = "";
//xhr.responseType = "text";
xhr.responseType = 'json';

xhr.send(null);
```

> IE6~9 不支持，IE10 开始支持



### 2.timeout 属性

> 设置请求的超时时间（单位 ms）

```js
const url = 'https://www.imooc.com/api/http/search/suggest?words=js';
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {

        console.log(xhr.response);
    }
};

xhr.open("GET", url, true);

xhr.timeout = 10000;

xhr.send(null);
```

> IE6~7 不支持，IE8 开始支持





### 3.withCredentials 属性

> 指定使用 Ajax 发送请求时是否携带 Cookie
>
>  使用 Ajax 发送请求，默认情况下，同域时，会携带 Cookie；
>
> 跨域时，不会       如果要跨域携带 xhr.withCredentials = true;
>
> 最终能否成功跨域携带 Cookie，还要看服务器同不同意

```js
//const url = './index.html';
const url = 'https://www.imooc.com/api/http/search/suggest?words=js';


const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {

        console.log(xhr.response);
    }
};

xhr.open("GET", url, true);

xhr.withCredentials = true;

xhr.send(null);
```

>  IE6~9 不支持，IE10 开始支持

## XHR的方法

- abort()
- setRequestHeader()



### 1.abort()

> 终止当前请求
>
> 一般配合 abort 事件一起使用

```js
const url = 'https://www.imooc.com/api/http/search/suggest?words=js';


const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {

        console.log(xhr.response);
    }
};

xhr.open("GET", url, true);

xhr.abort();//这里不能终止请求

xhr.send(null);

xhr.abort();
```



### 2.setRequestHeader()

> 可以设置请求头信息
>
> xhr.setRequestHeader(头部字段的名称, 头部字段的值);

```js
//const url = 'https://www.imooc.com/api/http/search/suggest?words=js';
const url = 'https://www.imooc.com/api/http/json/search/suggest?words=js';

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {

        console.log(xhr.response);
    }
};

xhr.open("POST", url, true);

//请求头中的 Content-Type 字段用来告诉服务器，浏览器发送的数据是什么格式的
//xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('Content-Type', 'application/json');

//xhr.send('username=alex&age=18');
xhr.send(
    JSON.stringify({
        username: "yunmu"
    })
);
```



## XHR的事件

- load事件
- error 事件
- abort事件
- timeout 事件

###  1.load 事件

> 响应数据可用时触发

```js
const url = "https://www.imooc.com/api/http/search/suggest?words=js";
const xhr = new XMLHttpRequest();

// xhr.onload = () => {
//   if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
//     console.log(xhr.response);
//   }
// };

xhr.addEventListener(
    "load",
    () => {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            console.log(xhr.response);
        }
    },
    false
);

xhr.open("GET", url, true);

xhr.send(null);
```

> IE6~8 不支持 load 事件





###  2.error 事件

> 请求发生错误时触发

```js
const url = "https://www.imooc.com/api/http/search/suggest?words=js";
//const url = "https://www.iimooc.com/api/http/search/suggest?words=js";

const xhr = new XMLHttpRequest();

xhr.addEventListener(
    "load",
    () => {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            console.log(xhr.response);
        }
    },
    false
);
xhr.addEventListener(
    "error",
    () => {
        console.log("error");
    },
    false
);

xhr.open("GET", url, true);

xhr.send(null);
```

> IE10 开始支持





### 3.abort 事件

>  调用 abort() 终止请求时触发

```js
const url = "https://www.imooc.com/api/http/search/suggest?words=js";

const xhr = new XMLHttpRequest();

xhr.addEventListener(
    "load",
    () => {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            console.log(xhr.response);
        }
    },
    false
);
xhr.addEventListener(
    "abort",
    () => {
        console.log("abort");
    },
    false
);

xhr.open("GET", url, true);

xhr.send(null);

xhr.abort();
```

>  IE10 开始支持





### 4.timeout 事件

> 请求超时后触发

```js
const url = 'https://www.imooc.com/api/http/search/suggest?words=js';

const xhr = new XMLHttpRequest();

xhr.addEventListener(
    'load',
    () => {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            console.log(xhr.response);
        }
    },
    false
);
xhr.addEventListener(
    'timeout',
    () => {
        console.log('timeout');
    },
    false
);

xhr.open('GET', url, true);

xhr.timeout = 10;

xhr.send(null);
```

> IE8 开始支持






# 8.封装ajax



## 1.使用 Ajax 提交表单

```html
<form
      id="login"
      action="https://www.imooc.com/api/http/search/suggest?words=js"
      method="POST"
      enctype="multipart/form-data"
      >
    <input type="text" name="username" placeholder="用户名" />
    <input type="password" name="password" placeholder="密码" />
    <input id="submit" type="submit" value="登录" />
</form>

<script>
    const login = document.getElementById('login');
    // console.log(login.username);
    // console.log(login.password);
    const { username, password } = login;
    const btn = document.getElementById('submit');

    const url = 'https://www.imooc.com/api/http/search/suggest?words=js';

    btn.addEventListener(
        "click",
        e => {
            // 阻止表单自动提交
            e.preventDefault();

            // 表单数据验证

            // 发送 Ajax 请求
            const xhr = new XMLHttpRequest();

            xhr.addEventListener(
                'load',
                () => {
                    if (
                        (xhr.status >= 200 && xhr.status < 300) ||
                        xhr.status === 304
                    ) {
                        console.log(xhr.response);
                    }
                },
                false
            );

            xhr.open('POST', url, true);

            // 组装数据
            // const data = `username=${username.value}&password=${password.value}`;

            // FormData 可用于发送表单数据
            const data = new FormData(login);
            // console.log(data);
            data.append('age', 18);
            data.append('sex', 'male');
            // for (const item of data) {
            //   console.log(item);
            // }

            // xhr.setRequestHeader(
            //   'Content-Type',
            //   'application/x-www-form-urlencoded'
            // );

            xhr.send(data);

        },
        false
    );

</script>
```





## 2.FormData 的基本用法

```js
// 通过 HTML 表单元素创建 FormData 对象
// const fd = new FormData(表单元素);
// xhr.send(fd);

// 通过 append() 方法添加数据
// const fd = new FormData(表单元素);
// fd.append("age", 18);
// fd.append("sex", "male");
// xhr.send(fd);

// IE10 及以上可以支持
```



## 3.封装ajax

### ajax

```js

//默认参数
import DEFAULTS from "./deafaults.js";
//工具函数
import { serialize, addURLData, serializeJSON} from "./utils.js";
//常量
import {
    HTTP_GET,
    COTENT_TYPE_FORM_URLENCODED,
    COTENT_TYPE_JSON,
} from "./constants.js";

//Ajax类
class Ajax {
    constructor(url, options) {
        this.url = url;
        this.options = Object.assign({}, DEFAULTS, options);

        //初始化
        this.init();
    }

    //初始化
    init() {
        const xhr = new XMLHttpRequest();

        this.xhr = xhr;

        //绑定事件的响应程序
        this.bindEvent();

        //准备发送请求
        xhr.open(this.options.method, this.url + this.addParam(), true);

        //设置responseType
        this.setResponseType();

        //设置超时
        this.setTimeout();

        //设置跨域是否携带 cookie
        this.setCookie();

        //发送请求
        this.sendData();
  }

    //绑定事件的响应程序
    bindEvent() {
        const xhr = this.xhr;

        const { success, httpCodeError, error, abort, timeout } = this.options;

        //load
        xhr.addEventListener("load", () => {
            if (this.ok()) {
                success(xhr.response, xhr);
            } else {
                httpCodeError(xhr.status, xhr);
            }
        });

        //  error
        xhr.addEventListener("error", () => {
            error(xhr);
        });

    //abort
    xhr.addEventListener("abort", () => {
      abort(xhr);
    });

    //  timeout
    xhr.addEventListener("timeout", () => {
      timeout(xhr);
    });
  }

    //检测状态码是否正常
    ok() {
        const xhr = this.xhr;
        return (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304;
    }

    //  在地址上添加数据
    addParam() {
        const { params } = this.options;

        if (!params) return "";

        return addURLData(this.url, serialize(params));
    }

    //  设置responseType
    setResponseType() {
        this.xhr.responseType = this.options.responseType;
    }

    //设置超时
    setTimeout() {
        const { timeoutTime } = this.options;

        if (timeoutTime > 0) {
            this.xhr.timeout = timeoutTime;
        }
    }

    //设置跨域是否携带 cookie
    setCookie() {
        if (this.options.withCredentials) {
            this.xhr.withCredentials = true;
        }
    }

    //发送请求
    sendData() {
        const xhr = this.xhr;

        if (!this.isSendData()) {
            return xhr.send(null);
        }

      let resultData = null;
      const { data } = this.options;

      // 发送 FormData 数据
      if(this.isFormData()){
          resultData = data;

      }else if(this.isFormURLEncodedData()){
          //发送form-urlencoded格式的数据
          this.setContentType(COTENT_TYPE_FORM_URLENCODED)
          resultData = serialize(data);

      }else if(this.JSONData()){
          this.setContentType(COTENT_TYPE_JSON)
          //发送JSON格式的数据
          resultData = serializeJSON(data);
      }else{
          this.setContentType();
          //其他格式的数据
          resultData = data;
      }


      return xhr.send(resultData)
  }

    //  是否需要使用sendData发送数据
    isSendData() {
        const { data, method } = this.options;

        if (!data) return false;

        if (method.toLowerCase() === HTTP_GET.toLowerCase()) return false;

        return true;
    }

    //判断是否 发送 FormData格式的数据
    isFormData(){
        return this.options.data instanceof  FormData;
    }

    //判断是否发送 application/x-www-form-urlencoded 格式的数据
    isFormURLEncodedData(){
        return this.options.cotentType.toLowerCase().includes(COTENT_TYPE_FORM_URLENCODED);
    }

    //判断是否发送的是否是 JSON 格式的数据
    JSONData(){
        return this.options.cotentType.toLowerCase().includes(COTENT_TYPE_JSON);
    }

    // 设置发送的数据格式ContentType
    setContentType(contentType = this.options.conetntType){
        if(!contentType) return;

        this.xhr.setRequestHeader("Content-Type", contentType);
    }

    //获取XHR对象
    getXHR(){
        return this.xhr;
    }
}

export default Ajax;

//new Ajax()
```

### deafaults

```js
//默认参数
import {HTTP_GET, COTENT_TYPE_FORM_URLENCODED, COTENT_TYPE_JSON} from "./constants.js";
const DEFAULTS = {
    method: HTTP_GET,

    //请求头携带的数据
    params: null,
    //params:{
    //	username:yunmu,
    //	age:18
    //}

    //username=yunmu&age=18

    //请求体携带数据
    data: null,

    //data:{
    //	username:yunmu,
    //	age:18
    //}

    //data: FormData数据

    // 属性
    cotentType: COTENT_TYPE_FORM_URLENCODED,
    responseType:"",
    timeoutTime:0,
    withCredentials:false,

    //方法
    success(){},
    httpCodeError(){},
    error(){},
    abort(){},
    timeout(){}
}

export default DEFAULTS;
```

### utils

```js
// 工具函数
const serialize = param => {
    const results = [];

    for(const [key, value] of Object.entries(param)){

        results.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);

    }

    return results.join("&");

    //["username=yunmu","age=18"]
    //"username=yunmu"&"age=18"
}

//www,baidu.com&

//给URL添加参数
const addURLData = (url, data) => {
    if(!data) return "";

    const mark = url.includes("?") ? "&" : "?";

    return `${mark}${data}`;
}



//序列化成JSON格式的字符串
const serializeJSON = (data) => {
    return JSON.stringify(data);
}

export {serialize, addURLData, serializeJSON};
```



### constants

```js
//常量模块
export const HTTP_GET = "GET";

export const COTENT_TYPE_FORM_URLENCODED = "application/x-www-form-urlencoded";

export const COTENT_TYPE_JSON = "application/json";



export const ERROR_HTTP_CODE = 1;
export const ERROR_HTTP_CODE_TEXT = 'HTTP 状态码异常';
export const ERROR_REQUEST = 2;
export const ERROR_REQUEST_TEXT = '请求被阻止';
export const ERROR_TIMEOUT = 3;
export const ERROR_TIMEOUT_TEXT = '请求超时';
export const ERROR_ABORT = 4;
export const ERROR_ABORT_TEXT = '请求终止';
```



### index

```js
import Ajax from "./ajax.js";

//常量
import {
    ERROR_HTTP_CODE,
    ERROR_HTTP_CODE_TEXT,
    ERROR_REQUEST,
    ERROR_REQUEST_TEXT,
    ERROR_TIMEOUT,
    ERROR_TIMEOUT_TEXT,
    ERROR_ABORT,
    ERROR_ABORT_TEXT,
} from "./constants.js";

const ajax = (url, options) => {
    //return new Ajax(url, options).getXHR();
    let xhr;
    const p = new Promise((resolve, reject) => {
        xhr = new Ajax(url, {
            ...options,
            ...{
                success(response) {
                    resolve(response);
                },
                httpCodeError(status) {
                    reject({
                        type: ERROR_HTTP_CODE,
                        text: `ERROR_HTTP_CODE_TEXT:${status}`,
                    });
                },

                error() {
                    reject({
                        type: ERROR_REQUEST,
                        text: ERROR_REQUEST_TEXT,
                    });
                },

                abort() {
                    reject({
                        type: ERROR_ABORT,
                        text: ERROR_ABORT_TEXT,
                    });
                },

                timeout() {
                    reject({
                        type: ERROR_TIMEOUT,
                        text: ERROR_TIMEOUT_TEXT,
                    });
                },
            },
        }).getXHR();
    });


    p.xhr = xhr;
    p.ERROR_HTTP_CODE = ERROR_HTTP_CODE;
    p.ERROR_REQUEST = ERROR_REQUEST;
    p.ERROR_TIMEOUT = ERROR_TIMEOUT;
    p.ERROR_ABORT = ERROR_ABORT;

    return p;
};

const get = (url, options) => {
    return ajax(url, { ...options, method: "GET" });
};

const post = (url, options) => {
    return ajax(url, { ...options, method: "POST" });
};

const getJSON = (url, options) => {
    return ajax(url, { ...options, method: "GET", responseType: "json" });
};

export { ajax, get, post, getJSON };

```



# 9.ajax的应用



### 搜索提示

```html
<input id="search" type="text" />
<ul id="result"></ul>

<script type="module">
    import { getJSON } from './ajax/index.js';

    const searchInput = document.getElementById('search');
    const resultList = document.getElementById('result');

    const url = 'https://www.imooc.com/api/http/search/suggest?words=';

    const handleInputEvent = () => {
        if (searchInput.value.trim() !== '') {
            getJSON(`${url}${searchInput.value}`)
                .then(response => {
                console.log(response);
                // [{word: "jsp"}]

                let html = '';
                for (const item of response.data) {
                    html += `<li>${item.word}</li>`;
                }

                resultList.innerHTML = html;

                resultList.style.display = '';

                // resultList.innerHTML = '<li>jsp</li><li>js</li>';
            })
                .catch(err => {
                console.log(err);
            });
        } else {
            resultList.innerHTML = '';
            resultList.style.display = 'none';
        }
    };

    let timer = null;
    // IE9 开始支持
    searchInput.addEventListener(
        'input',
        () => {
            // handleInputEvent();

            if (timer) {
                clearTimeout(timer);
            }
            // jsa
            timer = setTimeout(handleInputEvent, 500);
        },
        false
    );
    </script>
```



### 二级菜单

```html

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>二级菜单</title>
        <style>
            /* css reset */
            * {
                padding: 0;
                margin: 0;
            }
            li {
                list-style: none;
            }

            /* menu */
            .menu {
                width: 100px;
                background-color: rgba(0, 0, 0, 0.1);
                margin: 10px;
            }
            .menu-item {
                position: relative;
                padding: 5px;
                cursor: pointer;
            }
            .menu-content {
                display: none;
                position: absolute;
                left: 100%;
            top: 0;
                width: 200px;
                height: 100px;
                padding: 0 5px;
                background-color: rgba(0, 0, 0, 0.1);
            }
            .menu-item:hover {
                background-color: rgba(0, 0, 0, 0.4);
            }
            .menu-item:hover .menu-content {
                display: block;
            }
            .menu-loading {
                margin: 45px 0 0 92px;
            }
        </style>
    </head>
    <body>
        <ul id="menu" class="menu">
            <!-- <li class="menu-item" data-key="hot" data-done="done">
<span>热门</span>
<div class="menu-content">
<p><img class="menu-loading" src="./loading.gif" alt="加载中" /></p>
</div>
</li> -->
        </ul>

        <script type="module">
            // https://www.imooc.com/api/mall-PC/index/menu/hot
            // https://www.imooc.com/api/mall-PC/index/menu

            import { getJSON } from './ajax/index.js';
            const menuURL = 'https://www.imooc.com/api/mall-PC/index/menu';
            const menuEl = document.getElementById('menu');

            getJSON(menuURL)
              .then(repsonse => {
              // console.log(repsonse);

              let html = '';

              for (const item of repsonse.data) {
                  html += `
<li class="menu-item" data-key="${item.key}">
<span>${item.title}</span>
<div class="menu-content">
<p><img class="menu-loading" src="./loading.gif" alt="加载中" /></p>
          </div>
          </li>
`;
              }

              menuEl.innerHTML = html;

              // [{key: "hot", title: "热门出发地", subTitles: Array(5)}]

              // ...
          })
              .then(() => {
              const items = menuEl.querySelectorAll('.menu-item');

              for (const item of items) {
                  item.addEventListener(
                      'mouseenter',
                      () => {
                          // console.log(item.getAttribute('data-key'));

                      // IE11 开始支持
                      // console.log(item.dataset.key);

                      if (item.dataset.done === 'done') return;

                      getJSON(
                          `https://www.imooc.com/api/mall-PC/index/menu/${item.dataset.key}`
                      )
                     .then(repsonse => {
                     // console.log(repsonse);

                     // [{title: "内地热门城市", cities: Array(27)}]

                     item.dataset.done = 'done';

                     let html = '';

                     for (const item of repsonse.data) {
                         html += `<p>${item.title}</p>`;
                     }

                          item.querySelector('.menu-content').innerHTML = html;
                      })
                          .catch(err => {
                          console.log(err);
                      });
                      },
                      false
                  );
              }
            })
                .catch(err => {
                console.log(err);
            });
        </script>
    </body>
</html>

```

### 多个ajax请求并发执行

```html

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>多个 Ajax 请求的并发执行</title>
        <style>
            /* css reset */
            * {
                padding: 0;
                margin: 0;
            }
            li {
                list-style: none;
            }

            /* menu */
            .menu {
                width: 100px;
                background-color: rgba(0, 0, 0, 0.1);
                margin: 10px;
            }
            .menu-item {
                position: relative;
                padding: 5px;
                cursor: pointer;
            }
            .menu-content {
                display: none;
                position: absolute;
                left: 100%;
                top: 0;
                width: 200px;
                height: 100px;
                padding: 0 5px;
                background-color: rgba(0, 0, 0, 0.1);
            }
            .menu-item:hover {
                background-color: rgba(0, 0, 0, 0.4);
            }
            .menu-item:hover .menu-content {
                display: block;
            }
            .menu-loading {
                margin: 45px 0 0 92px;
            }

            /* loading-page */
            .loading-page {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 1000;
                background-color: #eee;
                text-align: center;
            }
            .loading-img {
                position: absolute;
                top: 50%;
            }
            .ad img {
                display: inline-block;
                width: 25%;
            }
            .none {
                display: none;
            }
      </style>
    </head>
    <body>
        <div id="loading-page" class="loading-page">
            <img class="loading-img" src="./loading.gif" alt="加载中" />
        </div>

        <div id="ad" class="ad"></div>

        <ul id="menu" class="menu">
            <!-- <li class="menu-item" data-key="hot" data-done="done">
<span>热门</span>
<div class="menu-content">
<p><img class="menu-loading" src="./loading.gif" alt="加载中" /></p>
</div>
</li> -->
        </ul>
        <script type="module">
            import { getJSON } from './ajax/index.js';

            const menuURL = 'https://www.imooc.com/api/mall-PC/index/menu';
            const adURL = 'https://www.imooc.com/api/mall-PC/index/ad';

            const loadingPageEl = document.getElementById('loading-page');
            const adEl = document.getElementById('ad');
            const menuEl = document.getElementById('menu');

          const p1 = getJSON(menuURL)
          .then(repsonse => {
              // console.log(repsonse);

              let html = '';

              for (const item of repsonse.data) {
                  html += `
<li class="menu-item" data-key="${item.key}">
<span>${item.title}</span>
<div class="menu-content">
<p><img class="menu-loading" src="./loading.gif" alt="加载中" /></p>
          </div>
          </li>
`;
              }

              menuEl.innerHTML = html;

            // [{key: "hot", title: "热门出发地", subTitles: Array(5)}]

            // ...
        })
      .then(() => {
          const items = menuEl.querySelectorAll('.menu-item');

          for (const item of items) {
              item.addEventListener(
                  'mouseenter',
                  () => {
                      // console.log(item.getAttribute('data-key'));

                      // IE11 开始支持
                      // console.log(item.dataset.key);

                        if (item.dataset.done === 'done') return;

                        getJSON(
                            `https://www.imooc.com/api/mall-PC/index/menu/${item.dataset.key}`
                        )
                            .then(repsonse => {
                            // console.log(repsonse);

                            // [{title: "内地热门城市", cities: Array(27)}]

                            item.dataset.done = 'done';

                            let html = '';

                    for (const item of repsonse.data) {
                        html += `<p>${item.title}</p>`;
                    }

                    item.querySelector('.menu-content').innerHTML = html;
                })
                    .catch(err => {
                    console.log(err);
                });
              },
                false
            );
          }
        })
      .catch(err => {
          console.log(err);
      });

        const p2 = getJSON(adURL)
        .then(response => {
            // console.log(response);
            // [{ url: 'http://alimc.img.imooc.com/class/' }];

            let html = '';
            for (const item of response.data) {
                html += `<img src="${item.url}" alt="" />`;
            }
            adEl.innerHTML = html;
        })
        .catch(err => {
            console.log(err);
        });

        Promise.all([p1, p2]).then(() => {
            // loadingPageEl.style.display = 'none';

            // IE10 开始支持
            loadingPageEl.classList.add('none');
            // loadingPageEl.classList.remove('none');
        });
      </script>
    </body>
</html>

```





```js
// 1.axios 是什么
// axios 是一个基于 Promise 的 HTTP 库，可以用在浏览器和 node.js 中
// 第三方 Ajax 库

// http://www.axios-js.com/zh-cn/docs/

// 2.axios 的基本用法
// 引入 axios
// console.log(axios);

const url = 'https://www.imooc.com/api/http/search/suggest?words=js';
// axios(url, {
//   method: 'post',

//   // 请求时的头信息
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//     // 'Content-Type': 'application/json'
//   },

//   // 通过请求头携带的数据
//   params: {
//     username: 'alex'
//   },

//   // 通过请求体携带的数据

//   // application/json
//   // data: {
//   //   age: 18,
//   //   sex: 'male'
//   // }

//   // application/x-www-form-urlencoded
//   data: 'age=18&sex=male'

//   // timeout: 10

//   // withCredentials: true
// })
//   .then(response => {
//     console.log(response);
//     console.log(response.data.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// axios
//   .get(url, {
//     params: {
//       username: 'alex'
//     }
//   })
//   .then(response => {
//     console.log(response);
//   });

// axios
//   .post(url, 'username=alex&age=18')
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

axios
    .post('https://www.imooc.com/api/http/json/search/suggest?words=js', {
    username: 'alex'
})
    .then(response => {
    console.log(response);
})
    .catch(err => {
    console.log(err);
});

// axios.put()
// axios.delete()
```





```js
// 1.Fetch 是什么
// Fetch 也是前后端通信的一种方式
// Fetch 是 Ajax（XMLHttpRequest）的一种替代方案，它是基于 Promise 的

// Ajax 的兼容性比 Fetch 好

// abort timeout

// 2.Fetch 的基本用法
// console.log(fetch);
// console.log(ajax);

// fetch() 调用后返回 Promise 对象
const url = 'https://www.imooc.com/api/http/search/suggest?words=js';

// body: (...)
// bodyUsed: false
// ok: true
// status: 200
// statusText: "OK"
// type: "cors"
// url: "https://www.im

// 第二个参数是对象，用来配置 fetch
const fd = new FormData();
fd.append('username', 'alex');
fetch(url, {
    method: 'post',
    // body: null
    // body: 'username=alex&age=18',
    // body: JSON.stringify({ username: 'alex' })
    body: fd,
    // headers: {
    //   // 'Content-Type': 'application/x-www-form-urlencoded'
    //   'Content-Type': 'application/json'
    // }
    mode: 'cors'
    // credentials:'include'
})
    .then(response => {
    console.log(response);

    // body/bodyUsed
    // body 只能读一次，读过之后就不让再读了

    // ok
    // 如果为 true，表示可以读取数据，不用再去判断 HTTP 状态码了

    if (response.ok) {
        // console.log(response.json());

        return response.json();
              // return response.text();
          } else {
              throw new Error(`HTTP CODE 异常 ${response.status}`);
          }
      })
          .then(data => {
          console.log(data);
      })
          .catch(err => {
          console.log(err);
        });
```

