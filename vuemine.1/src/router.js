import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Movie from './views/movie/Movie.vue'
import Music from './views/music/Music.vue'
import Book from './views/book/Book.vue'
import Photo from './views/photo/Photo.vue'
import musiclist from './views/music/musiclist.vue'
import moviedetail from './views/movie/moviedetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/movie",
      component:Movie
    },
    {
      path:"/music",
      component:Music

    },
    {
      path:"/book",
      component:Book
    },
    {
      path:"/photo",
      component:Photo
    },
    {
      path:"/musiclist",
      component:musiclist
    },{
      path:"/moviedetail/:movieId",
      component:moviedetail
    }
  ]
})
