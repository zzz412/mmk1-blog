import { defineConfig } from 'vitepress'
import navbar from './navbar'
import sidebar from './sidebar'

export default defineConfig({
  // 主语言
  lang: 'zh-CN',
  // 主标题
  title: '趣学前端',
  // 描述信息
  description: '趣学前端，让前端更有趣！',
  // 头部标签  主要用于插入logo js【广告】 css
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['link', { rel: 'stylesheet', href: '/css/style.css' }],
  ],
  // 忽略死链接[不会因死链接而使构建失败]
  ignoreDeadLinks: true,
  // 最后更新时间
  lastUpdated: true,
  // 主题配置
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '趣学前端',
    outline: [2, 3],
    outlineTitle: '在此页面上',
    nav: navbar,
    sidebar: sidebar,
    // 底部
    footer: {
      message: '根据 MIT 许可证发布。',
      copyright: 'Copyright © 2022 Powered by mouzhacu'
    },
    lastUpdatedText: '最近更新时间',
    // 社交链接
    socialLinks: [
      { icon: 'discord', link: 'https://space.bilibili.com/100388195' },
    ]
  }
})
