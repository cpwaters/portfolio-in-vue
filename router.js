import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'
import Blogs from './views/Blogs.vue'
import singleBlog from './views/singleBlog.vue'
import Work from './views/Work.vue'
import singleWork from './views/singleWork.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // default is 'hash'
  base: process.env.BASE_URL,
  routes: [
    {path:'/', name:'home', component:Home},
    {path:'/portfolio', name:'portfolio', component:Portfolio},
  /*{path:'/portfolio', name:'portfolio', component: () => import(// webpackChunkName: "portfolio" // './views/Portfolio.vue')},
  /*route level code-splitting  this generates a separate chunk (about.[hash].js) for this route  which is lazy-loaded when the route is visited.*/ 
    {path:'/blogs', name: 'blogs', component:Blogs}, 
    {path:'/blogs/:id', name:'singleBlog', component:singleBlog},
    {path:'/work', name: 'Work', component:Work},
    {path:'/work/:id', name:'singleWork', component:singleWork}
  ]
})
