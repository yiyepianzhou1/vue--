// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRoute from  'vue-router'
import Mintui from 'mint-ui'
Vue.use(VueRoute)
Vue.use(Mintui)

//组件的导入
import Apps from './components/Apps.vue'
import buycars from './components/shopcar/shopcar.vue'
import  newsmain from './components/newsmain/newsmain.vue'
import  newsDetails from  './components/newsmain/newsDetails.vue'
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