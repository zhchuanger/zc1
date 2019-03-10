import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Cart from './views/Cart.vue'
import Mine from './views/Mine.vue'
import Ajax from "./views/Ajax.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', 
      name: 'home',
      component: Home
    },{
      path:'/category',
      name:'category',
      component:Category
    },{
      path:'/cart',
      name:'category',
      component:Cart
    },{
      path:'/mine',
      name:'mine',
      component:Mine

    },{
      path:'/ajax',
      name:'ajax',
      component:Ajax
    }
    
  ]
})
