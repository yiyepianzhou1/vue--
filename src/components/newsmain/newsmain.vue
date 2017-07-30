<template>
    <div id="tmpl">
      <mt-header title="新闻资讯">
        <div slot="left">
          <router-link to='/home'><mt-button  icon="back"></mt-button></router-link>
          <mt-button @click="handleClose">返回</mt-button>
        </div>
      </mt-header>
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell mui-media">
          <router-link class="mui-navigate-right" :to="{path:'/newsDetails',query:{id:id}}">
            <img class="mui-media-object mui-pull-left" src="">
            <div class="mui-media-body">
              CBD
              <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
            </div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
          <router-link class='mui-navigate-right' :to="{path:'/newsDetails',query:{id:id}}">
            <img class="mui-media-object mui-pull-left" src="">
            <div class="mui-media-body">
              远眺
              <p class='mui-ellipsis'>静静的看这个世界，最后终于疯了</p>
            </div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
          <router-link class="mui-navigate-right" :to="{path:'/newsDetails',query:{id:id}}">
            <img class="mui-media-object mui-pull-left" src="">
            <div class="mui-media-body">
              幸福
              <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
          </router-link>
        </li>
      </ul>
      <h1>新闻组件模块</h1>
      <!-- 向公共组件传递一个id值用来在评论的时候使用-->
      <!--<comment :id='id'></comment>-->
    </div>
</template>
<script type='es6'>
  //import comment from '../../subcom/comment.vue'
     export default {
     data(){
         return {
           id:'sasa'
         }
     },
       components:{
       },
       methods:{
         handleClose:function(){

         }
       }
   }

</script>
<style lang='less' scoped>
  .mint-header{
    background-color: #ccc;
    color: #007aff;
    font-size: 17px;
  }
</style>
