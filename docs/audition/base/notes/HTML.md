# HTML&CSS基础面试

**前端一面大致需要掌握的知识框架**

![前端面试课-思维导图](https://i.loli.net/2020/12/30/dJ68KyVnQYOjmzL.png)

## 先来看面试题

- 如何理解HTML语义化?
- 默认情况下,哪些HTML标签是块级元素、哪些是内联元素?
- 盒子模型的宽度如何计算?
- margin 纵向重叠的问题
- margin 负值的问题
- BFC 理解和应用
- float 布局的问题,以及clearfix
- flex 画色子
- absolute 和 relative分别依据什么定位?
- 如何实现一个元素的水平垂直居中
- line-height 的继承问题
- rem是什么?
- 如何实现响应式?
- 关于CSS3动画





## 如何理解 HTML 语义化

**用正确的标签做正确的事情**

先看这个

![image-20201230212835167](https://i.loli.net/2020/12/30/M4HctolnfRdXjWB.png)

再看这个

![image-20201230212925992](https://i.loli.net/2020/12/30/VJ6ve98AxZmWM2p.png)



- 让人更容易读懂(增加代码可读性)
- 让搜索引擎更容易读懂( SEO )



## 块状元素&内联元素?

- display: block/table;有div h1-h6  ul ol li p dl dt dd table等
- display: inline/inline-block;有span img strong  i b video audio input button等





## 每个 HTML 文件里开头都有个很重要的东西，Doctype，知道这是干什么的吗？

- 声明位于文档中的最前面的位置，处于 标签之前。此标签可告知浏 览器文档使用哪种 HTML 或 XHTML 规范。（重点：告诉浏览器按照何种规范解析页面）








## 为什么利用多个域名来存储网站资源会更有效？

- CDN 缓存更方便
- 突破浏览器并发限制
- 节约 cookie 带宽
- 节约主域名的连接数，优化页面响应速度
- 防止不必要的安全问题





## 简述一下 src 与 href 的区别

src 用于替换当前元素，href 用于在当前文档和引用资源之间确立联系。





## 知道的网页制作会用到的图片格式有哪些？

- png-8，png-24，jp(e)g，gif，svg。
- 但是上面的那些都不是面试官想要的最后答案。面试官希望听到是 Webp。

