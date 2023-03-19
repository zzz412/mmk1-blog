import { DefaultTheme } from 'vitepress'
import auditionAdvSidebar from '../audition/adv/sidebar'
import auditionBaseSidebar from '../audition/base/sidebar'
import auditionKhSidebar from '../audition/kh/sidebar'

import frameworkMiniSidebar from '../framework/mini/sidebar'
import frameworkUniAppSidebar from '../framework/uniapp/sidebar'
import frameworkReactSidebar from '../framework/react/sidebar'

import learnSidebar from '../learn/sidebar'
import sourceListSidebar from '../source-list/sidebar'
import apiSidebar from '../api/sidebar'

// 各页面侧边栏配置
const sidebar: DefaultTheme.Sidebar = {
  // 学习路线
  '/learn/': learnSidebar,
  // 开源广场
  '/source-list/': sourceListSidebar,
  // 面试手记
  '/audition/base/': auditionBaseSidebar,
  '/audition/adv/': auditionAdvSidebar,
  '/audition/kh/': auditionKhSidebar,
  // 框架手记
  '/framework/react': frameworkReactSidebar,
  '/framework/mini/': frameworkMiniSidebar,
  '/framework/uniapp/': frameworkUniAppSidebar,
  // 项目接口
  '/api/': apiSidebar,
}

export default sidebar
