<template>
  <div id="app">
     <!--1头部部分-->
    <header id="header" class="mui-bar mui-bar-nav">
      <h1 class="mui-title">项目导航</h1>
    </header>
    <!--路由导航部分-->
    <router-view></router-view>
    <!-- 底部部分-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-email"><span class="mui-badge" id="countss">{{nums}}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script type='es6'>
  import {vm} from './kits/vms.js'
  vm.$on('adds', function (counts) {
    //alert(counts)
    var countss = document.querySelector('#countss');
    countss.innerText = parseInt(countss.innerText) + counts;

  })
  export default {
    name: 'app',
    data(){
      return {
        nums: 0
      }
    },
    mounted(){
      //this.getscounts()
      //console.log(this.nums)
    },
    methods: {
      //getscounts(){
      //  vm.$on('adds',function(counts){
      //    alert(counts)
      //    //var countss = document.querySelector('#countss');
      //    //countss.innerText = parseInt(countss.innerText)+counts
      //    this.nums = counts;
      //    console.log(this)
      //  })
      //}
      //adds(inout){
      //  this.nums = inout;
      //}

    }
  }
</script>

<style scoped>
</style>
