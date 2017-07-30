<template>
    <div id="tmpl">
      <mt-header title="资讯详情">
        <div slot="left">
          <router-link to='/home'><mt-button  icon="back"></mt-button></router-link>
          <mt-button>返回</mt-button>
        </div>
      </mt-header>
<h2>{{ids}}</h2>
      <comment :id='ids'></comment>
    </div>
</template>
<script type='es6'>
  import comment from '../../subcom/comment.vue'
     export default {
     data(){
         return {
           //获取父组件通
           ids:this.$route.query.id
         }
     },
       components:{
         comment
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
