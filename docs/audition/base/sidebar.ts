import { DefaultTheme } from 'vitepress'

const auditionBaseSidebar: DefaultTheme.SidebarItem [] = [
  {
    text: '基础知识篇',
    items: [
      { text: 'HTML', link: '/audition/base/notes/HTML.md' },
      { text: 'CSS', link: '/audition/base/notes/CSS.md', },
      { text: 'ES基础', link: '/audition/base/notes/ES基础知识点与高频考题解析.md', },
      { text: 'JS-Web-API', link: '/audition/base/notes/JS-Web-API知识点与高频考题解析.md', },
      { text: '浏览器相关', link: '/audition/base/notes/浏览器相关知识点与高频考题解析.md', },
      { text: '开发环境相关', link: '/audition/base/notes/开发环境相关知识点与高频考题解析.md', },
    ]
  }
]

export default auditionBaseSidebar
