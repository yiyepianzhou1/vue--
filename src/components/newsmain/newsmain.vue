<template>
    <div id="tmpl">
      <!-- 头部部分-->
      <mt-header title="新闻资讯">
        <div slot="left">
          <router-link to='/home'><mt-button  icon="back"></mt-button></router-link>
          <mt-button @click="handleClose">返回</mt-button>
        </div>
      </mt-header>
      <div class="main">
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell mui-media" v-for="item in list">
          <router-link class="mui-navigate-right" :to="{path:'/newsDetails',query:{id:item.id}}">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
             <h4> {{ item.title }}</h4>
              <p class='mui-ellipsis'><span>发表时间：{{item.add_time}}</span><span>点击：{{item.click}}</span></p>
            </div>
          </router-link>
        </li>
      </ul>
      </div>
      <!-- 向公共组件传递一个id值用来在评论的时候使用-->
      <!--<comment :id='id'></comment>-->
    </div>
</template>
<script type='es6'>
  //import comment from '../../subcom/comment.vue'
  var url = 'http://182.254.146.100:8899/api/getnewslist'
     export default {
     data(){
         return {
           id:'sasa',
           list:[]
         }
     },
       created(){
         this.$http.get(url).then(function(data){
           this.list=data.body.message
         })
       },
       components:{},
       methods:{
         handleClose:function(){
           this.$router.go(-1)
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
  .main{
  .mui-table-view{
  .mui-media-object{
    max-width: 90px;
    height: 90px;
  }
  .mui-ellipsis{
    position: absolute;
    bottom: 0;
    &>span:nth-of-type(2){
    float: right;
     }
  }

  }

  }
</style>
