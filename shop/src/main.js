import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

//vant 完全引用
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant);

//按需引用vant 推荐
import {Button,Icon,NavBar,Tabbar,TabbarItem,Swipe,SwipeItem} from 'vant'
Vue.use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
