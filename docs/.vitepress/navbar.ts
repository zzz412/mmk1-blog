import { DefaultTheme } from 'vitepress'

const navbar: DefaultTheme.NavItem[] = [
  { text: '学习手记', link: '/study/' },
  {
    text: '框架手记',
    items: [
      { text: 'Vue', link: '/framework/vue/' },
      { text: 'React', link: '/framework/react/' },
      { text: '微信小程序', link: '/framework/mini/notes/小程序基础.md' },
      { text: 'uni-app', link: '/framework/uniapp/base/' },
    ]
  },
  { 
    text: '面试手记', 
    items: [
      { text: '初级开发篇', link: '/audition/base/' },
      { text: '中高进阶篇', link: '/audition/adv/' },
    ] 
  },
  { text: '项目接口', link: '/api/notes/vueshopAPI接口文档' },
  { text: '作者简介', link: '/resume/' }
  // { text: 'B站视频', link: 'https://space.bilibili.com/100388195' }
]

export default navbar