import { DefaultTheme } from 'vitepress'

const studySidebar: DefaultTheme.SidebarGroup [] = [
  // HTML
  {
    text: 'HTML',
    items: [
      { text: '互联网基本原理', link: '/study/notes/html/互联网基本原理' },
      { text: '基本标签', link: '/study/notes/html/02-基本标签' },
      { text: '表单元素', link: '/study/notes/html/11-表单.md' },
    ],
  },
  // CSS
  {
    text: 'CSS',
    collapsible: true,
    items: [
      {
        text: '01-CSS基本样式和选择器',
        link: '/study/notes/css/03-CSS基本样式和选择器.md',
      },
      { text: '02-CSS盒模型', link: '/study/notes/css/04-盒模型.md' },
      { text: '03-行内盒模型', link: '/study/notes/css/05-行内盒模型.md' },
      { text: '04-显示样式', link: '/study/notes/css/06-显示样式.md' },
      { text: '05-背景样式', link: '/study/notes/css/07-背景样式.md' },
      { text: '06-圆角渐变', link: '/study/notes/css/08-圆角渐变.md' },
      { text: '07-浮动', link: '/study/notes/css/09-浮动.md' },
      { text: '08-定位', link: '/study/notes/css/10-定位.md' },
      {
        text: '09-css样式书写顺序和命名规范',
        link: '/study/notes/css/css样式书写顺序和命名规范.md',
      },
      {
        text: '11-高级选择器和伪元素',
        link: '/study/notes/css/13-高级选择器和伪元素.md',
      },
      { text: '12-动画样式', link: '/study/notes/css/14-动画样式.md' },
      { text: '13-transform', link: '/study/notes/css/15-transform.md' },
      {
        text: '14-3D盒阴影和遮罩',
        link: '/study/notes/css/16-3d和盒阴影和遮罩.md',
      },
      { text: '15-弹性盒模型', link: '/study/notes/css/17-弹性盒模型.md' },
      {
        text: '16-阿里图标 组件化 swiper',
        link: '/study/notes/css/18-阿里图标 组件化 swiper.md',
      },
      { text: '17-响应式', link: '/study/notes/css/19-响应式.md' },
      { text: 'less', link: '/study/notes/css/less.md' },
    ],
  },
  // JavaScript
  {
    text: 'JavaScript',
    collapsible: true,
    items: [
      { text: '01-认识javaScript', link: '/study/notes/js/01-认识javaScript.md' },
      {
        text: '02-变量与数据类型介绍',
        link: '/study/notes/js/02-变量与数据类型介绍.md',
      },
      { text: '03-基础dom操作', link: '/study/notes/js/03-基础dom操作.md' },
      { text: '04-表达式和操作符', link: '/study/notes/js/04-表达式和操作符.md' },
      { text: '05-判断', link: '/study/notes/js/05-判断.md' },
      { text: '06-循环', link: '/study/notes/js/06-循环.md' },
      { text: '07-算法拓展', link: '/study/notes/js/07-算法拓展.md' },
      { text: '08-函数', link: '/study/notes/js/08-函数.md' },
      {
        text: '09-作用域,闭包,预解析',
        link: '/study/notes/js/09-作用域,闭包,预解析.md',
      },
      { text: '10-数组', link: '/study/notes/js/10-数组.md' },
      { text: '11-字符串', link: '/study/notes/js/11-字符串.md' },
      { text: '12-类型转换', link: '/study/notes/js/12-类型转换.md' },
      { text: '13-DOM进阶', link: '/study/notes/js/13-DOM进阶.md' },
      { text: '14-dom事件与机制', link: '/study/notes/js/14-dom事件与机制.md' },
      { text: '15-bom', link: '/study/notes/js/15-bom.md' },
      { text: '16-面向对象', link: '/study/notes/js/16-面向对象.md' },
      {
        text: '17-内置数学和时间对象',
        link: '/study/notes/js/17-内置数学和时间对象.md',
      },
      {
        text: '18-各种距离宽高获取',
        link: '/study/notes/js/18-各种距离宽高获取.md',
      },
      { text: '19-正则表达式', link: '/study/notes/js/19-正则表达式.md' },
      { text: '20-箭头函数', link: '/study/notes/js/21-箭头函数.md' },
      { text: '21-解构赋值', link: '/study/notes/js/22-解构赋值.md' },
      {
        text: '22-对象字面量增强和函数默认参数',
        link: '/study/notes/js/23-对象字面量增强和函数默认参数.md',
      },
      {
        text: '23-剩余参数和展开运算符',
        link: '/study/notes/js/24-剩余参数和展开运算符.md',
      },
      {
        text: '24-Set 和 Map数据结构和Symbol',
        link: '/study/notes/js/25-Set 和 Map数据结构和Symbol.md',
      },
      {
        text: '25-遍历器和for-of循环',
        link: '/study/notes/js/26-遍历器和for-of循环.md',
      },
      { text: '26-Promise', link: '/study/notes/js/27-Promise.md' },
      { text: '27-Clsss类', link: '/study/notes/js/28-Clsss类.md' },
      { text: '28-module模块', link: '/study/notes/js/29-module模块.md' },
      { text: '29-Babel', link: '/study/notes/js/30-Babel.md' },
      {
        text: '30-前后端通信和HTTP协议',
        link: '/study/notes/js/31-前后端通信和HTTP协议.md',
      },
      { text: '31-本地存储', link: '/study/notes/js/32-本地存储.md' },
      { text: '32-ajax', link: '/study/notes/js/33-ajax.md' },
    ],
  },
  // HTML&CSS练习
  {
    text: 'HTML&CSS练习',
    collapsible: true,
    items: [
      { text: '01-基本标签', link: '/study/notes/htmlcsswork/01-基本标签.md' },
      { text: '02-列表标签', link: '/study/notes/htmlcsswork/02-列表标签.md' },
    ],
  },
  // JavaScript练习
  {
    text: 'Javascipt练习',
    collapsible: true,
    items: [
      {
        text: '01-认识javaScript',
        link: '/study/notes/jswork/01-认识javascript.md',
      },
      {
        text: '02-变量与数据类型',
        link: '/study/notes/jswork/02-变量与数据类型.md',
      },
      { text: '03-DOM', link: '/study/notes/jswork/03-DOM.md' },
      {
        text: '04-表达式和操作符',
        link: '/study/notes/jswork/04-表达式和操作符.md',
      },
      { text: '05-判断', link: '/study/notes/jswork/05-判断.md' },
      { text: '06-循环', link: '/study/notes/jswork/06-循环.md' },
      // { text: '07-暂无.md', link: '' },
      { text: '08-函数', link: '/study/notes/jswork/08-函数.md' },
      { text: '09-案例', link: '/study/notes/jswork/09-案例.md' },
      { text: '10-数组', link: '/study/notes/jswork/10-数组.md' },
      { text: '11-字符串', link: '/study/notes/jswork/11-字符串.md' },
      { text: '12-DOM', link: '/study/notes/jswork/12-DOM.md' },
      { text: '13-BOM', link: '/study/notes/jswork/13-BOM.md' },
      { text: '14-面向对象', link: '/study/notes/jswork/14-面向对象.md' },
      {
        text: '15-Js阶段测试组卷',
        link: '/study/notes/jswork/15-Js阶段测试组卷.md',
      },
      {
        text: '16-模板字符串箭头函数变量声明',
        link: '/study/notes/jswork/16-模板字符串箭头函数变量声明.md',
      },
      { text: '17-解构赋值', link: '/study/notes/jswork/17-解构赋值.md' },
      {
        text: '18-对象字面量增强和函数默认参数',
        link: '/study/notes/jswork/18-对象字面量增强和函数默认参数.md',
      },
      {
        text: '19-剩余参数和数组展开',
        link: '/study/notes/jswork/19-剩余参数和数组展开.md',
      },
      { text: '20-Map Set', link: '/study/notes/jswork/20-Map Set.md' },
      {
        text: '21-iterator和for...of循环',
        link: '/study/notes/jswork/21-iterator和for...of循环.md',
      },
      {
        text: '22-Promise和class',
        link: '/study/notes/jswork/22-Promise和class.md',
      },
      { text: '23-module', link: '/study/notes/jswork/23-module.md' },
      { text: '24-ES6测评题目', link: '/study/notes/jswork/24-ES6测评题目.md' },
      {
        text: '25-本地存储和http',
        link: '/study/notes/jswork/25-本地存储和http.md',
      },
      { text: '26-ajax选择题', link: '/study/notes/jswork/26-ajax选择题.md' },
    ],
  },
]

export default studySidebar
