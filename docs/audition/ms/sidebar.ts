import { DefaultTheme } from 'vitepress'

const auditionMsSidebar: DefaultTheme.SidebarItem [] = [
  {
    text: '基础面试',
    collapsed: true,
    items: [
      { text: '01-面试准备', link: '/audition/ms/基础面试/01- 面试准备.md' },
      { text: '02-HTML&CSS', link: '/audition/ms/基础面试/02- HTML&CSS.md' },
      { text: '03-JS异步进阶', link: '/audition/ms/基础面试/03- JS异步进阶.md' },
      { text: '04-JS基础', link: '/audition/ms/基础面试/04- JS基础.md' },
      { text: '05-JS-Web-API', link: '/audition/ms/基础面试/05- JS-Web-API.md' },
      { text: '06-HTTP', link: '/audition/ms/基础面试/06- HTTP.md' },
      { text: '07-开发环境', link: '/audition/ms/基础面试/07- 开发环境.md' },
      { text: '08-运行环境', link: '/audition/ms/基础面试/08- 运行环境.md' },
      { text: '09-真题模拟', link: '/audition/ms/基础面试/09- 真题模拟.md' }
    ]
  },
  {
    text: '框架面试',
    collapsed: true,
    items: []
  },
  {
    text: '面试刷题',
    collapsed: true,
    items: []
  },
  {
    text: '模拟面试',
    collapsed: true,
    items: []
  }
]

export default auditionMsSidebar
