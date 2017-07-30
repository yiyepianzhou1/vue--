<template>
    <div id="comment">
      <h1>公共组件评论组件{{ids}}</h1>
    </div>
</template>
<!---->
<script type='es6'>
  import { Header } from 'mint-ui';
  import  Vue from  'vue'
  Vue.component(Header.name, Header);
     export default {
     //通过props来获取由父组件传递过来的值；
       props:['id'],
     data(){
         return {
           ids:this.id
         }
     }
   }

</script>
<style lang='less' scoped>
  #comment{
  }
</style>
