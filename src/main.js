// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入依赖部分
import Vue from 'vue'
import App from './App'
import VueRoute from  'vue-router'
import Mintui from 'mint-ui'
import resource from 'vue-resource'
Vue.use(VueRoute)
Vue.use(Mintui)
Vue.use(resource)
//组件的导入

import Apps from './components/Apps.vue'
import buycars from './components/shopcar/shopcar.vue'
import  newsmain from './components/newsmain/newsmain.vue'
import  newsDetails from  './components/newsmain/newsDetails.vue'
import imgshare from './components/imgshare/imgshare.vue'
import imgshareDetails from './components/imgshare/imgshareDetails.vue'
import shoping from './components/shoping/shoping.vue'
import shopingDetails from './components/shoping/shopingDetails.vue'
import video from './components/video/video.vue'
import videoDetails from './components/video/videoDetails.vue'
//实例化路由；
var router = new VueRoute({
  mode:'history',
  base:__dirname,
  linkActiveClass:"mui-active",
  routes:[
    {path:'/home',component:Apps},
    {path:'/shopcar',component:buycars},
    {path:'/newsmain',component:newsmain},
    {path:'/newsDetails',component:newsDetails},
    {path:'/imgshare',component:imgshare},
    {path:'/imgshareDetails',component:imgshareDetails},
    {path:'/shoping',component:shoping},
    {path:'/shopingDetails',component:shopingDetails},
    {path:'/video',component:video},
    {path:'/videoDetails',component:videoDetails},
    {path:'/',redirect:'/home'},
  ]
})
//样式的导入
import '../static/mui/css/mui.css'
import '../static/css/site.css'
import  'mint-ui/lib/style.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
