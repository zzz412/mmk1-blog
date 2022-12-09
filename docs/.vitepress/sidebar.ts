import { DefaultTheme } from 'vitepress'
import auditionAdvSidebar from '../audition/adv/sidebar'
import auditionBaseSidebar from '../audition/base/sidebar'
import frameworkMiniSidebar from '../framework/mini/sidebar'
import frameworkUniAppSidebar from '../framework/uniapp/sidebar'
import studySidebar from '../study/sidebar'
import apiSidebar from '../api/sidebar'

// 各页面侧边栏配置
const sidebar: DefaultTheme.Sidebar = {
  // 学习手记
  '/study/': studySidebar,
  // 面试手记
  '/audition/base/': auditionBaseSidebar,
  '/audition/adv/': auditionAdvSidebar,
  // 框架手记
  '/framework/mini/': frameworkMiniSidebar,
  '/framework/uniapp/': frameworkUniAppSidebar,
  // 项目接口
  '/api/': apiSidebar,
}

export default sidebar
