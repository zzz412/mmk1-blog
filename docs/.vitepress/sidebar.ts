import { DefaultTheme } from "vitepress";
import auditionAdvSidebar from "../audition/adv/sidebar";
import auditionBaseSidebar from "../audition/base/sidebar";
import frameworkMiniSidebar from "../framework/mini/sidebar";
import frameworkUniAppSidebar from "../framework/uniapp/sidebar";
import studySidebar from "../study/sidebar";

// 各页面侧边栏配置
const sidebar: DefaultTheme.Sidebar = {
  '/study': studySidebar,
  '/audition/base': auditionBaseSidebar,
  '/audition/adv': auditionAdvSidebar,
  '/framework/mini': frameworkMiniSidebar,
  '/framework/uniapp': frameworkUniAppSidebar,
}


export default sidebar