import { DefaultTheme } from 'vitepress'

const frameworkReactSidebar: DefaultTheme.SidebarItem [] = [
  {
    text: '爱彼迎',
    collapsed: true,
    items: [
      { text: '1-项目初始化搭建', link: '/framework/react/aribnb/01- 项目初始化搭建.md' },
      { text: '2-Layout布局', link: '/framework/react/aribnb/02- Layout布局.md' },
      { text: '3-首页', link: '/framework/react/aribnb/03- 首页.md' },
      { text: '4-全部页', link: '/framework/react/aribnb/04- 全部页.md' },
      { text: '5-详情页', link: '/framework/react/aribnb/05- 详情页.md' },
      { text: '6-头部动画', link: '/framework/react/aribnb/06- 头部动画.md' },
    ]
  },
  {
    text: '进阶知识',
    collapsed: false,
    items: [
      { text: '1-如何实现前端监控', link: '/framework/react/adv/01- 前端监控.md' },
      { text: '2-如何写好一份简历', link: '/framework/react/adv/02- 如何写好一份简历.md' },
    ]
  }
]

export default frameworkReactSidebar

