import DefaultTheme from 'vitepress/theme'
import not from './404.vue'

export default {
  ...DefaultTheme,
   // this is a Vue 3 functional component
   NotFound: not
}