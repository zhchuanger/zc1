import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Mine from './views/Mine.vue'
import Test from './views/Test.vue'
import A from "./views/A.vue"
import B  from "./views/B.vue"
import Error from "./views/Error.vue"
import Count from "./views/Count.vue"

Vue.use(Router)

export default new Router({
  mode:'history',
  base:process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'home',
      component: Home,
      beforeEnter(to, from, next){
        console.log(to, from, next);

        next();
        
      }
      
    },
    {
      path: '/about/:name/:id',
      name: 'about',
      component:About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },{
      path:'/mine',
      name:'mine',
      component:Mine
    },{
      path:'/test',
      component:Test,
      children:[
        {
          path:'/a',
          component:A
        },
        {
          path:'/b',
          component:B

        }
      ]
    },{
      path:'/bb/:name/:id',
      redirect:'/about/:name/:id'
    },{
      path:'/',
      component:Home,
      alias:'/abc'
    },{
      path:'/count',
      component:Count
    },{
      path:'*',
      component:Error
    }
  ]
})
