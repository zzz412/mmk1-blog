import { DefaultTheme } from 'vitepress'

const navbar: DefaultTheme.NavItem[] = [
  { text: '学习路线', link: '/learn/notes/web.md' },
  {
    text: '知识手记',
    items: [
      // { text: 'Vue', link: '/framework/vue/' },
      { text: 'React', link: '/framework/react/aribnb/01- 项目初始化搭建.md' },
      { text: 'MiniApp', link: '/framework/mini/notes/小程序基础.md' },
      { text: 'UniApp', link: '/framework/uniapp/base/' },
    ]
  },
  { 
    text: '面试手记', 
    items: [
      { text: '面试宝典', link: '/audition/ms/' },
      // { text: '初级开发篇', link: '/audition/base/' },
      // { text: '中高进阶篇', link: '/audition/adv/' },
      { text: '葵花宝典', link: '/audition/kh/' }
    ] 
  },
  { text: '开源项目', link: '/source-list/' },
  { text: '项目接口', link: '/api/notes/vueshopAPI接口文档' },
  { text: '作者简介', link: '/resume/' }
  // { text: 'B站视频', link: 'https://space.bilibili.com/100388195' }
]

export default navbar