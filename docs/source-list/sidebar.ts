import { DefaultTheme } from 'vitepress'

const sourceListSidebar: DefaultTheme.SidebarItem [] = [
  {
    text: '前端优质开源库',
    items: [
      { text: 'JavaScript库', link: '/source-list/' },
      { text: 'CSS库', link: '/source-list/notes/css.md' },
      { text: 'NodeJS相关', link: '/source-list/notes/nodejs.md' },
      { text: 'React相关', link: '/source-list/notes/react.md' },
      { text: 'Vue相关', link: '/source-list/notes/vue.md' },
      { text: '优秀开源项目集合', link: '/source-list/notes/open.md' },
    ]
  }
]

export default sourceListSidebar
