import { DefaultTheme } from 'vitepress'

const navbar: DefaultTheme.NavItem[] = [
  { text: '学习笔记', link: '/study/' },
  {
    text: '进阶笔记',
    items: [
      { text: 'Vue', link: '/framework/vue' },
      { text: 'React', link: '/framework/react' },
      { text: '微信小程序', link: '/framework/mini/notes/小程序基础.md' },
      { text: 'uni-app', link: '/framework/uniapp/notes/1- 基础篇.md' },
    ]
  },
  { 
    text: '面试手记', 
    items: [
      { text: '初级开发篇', link: '/audition/base/' },
      { text: '中高进阶篇', link: '/audition/adv/' },
    ] 
  },
  { text: '作者简介', link: '/resume/' },
  { text: 'B站视频', link: 'https://space.bilibili.com/100388195' }
]

export default navbar