<template>
    <div id="tmpl">
      <!--<h1>这是公共轮播通用组件{{this.url}}</h1>-->
      <div class="shopingDetails_lunbo">
        <mt-swipe :auto="0">
          <mt-swipe-item v-for="item in list"><img :src="item.img" alt=""/></mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
</template>
<script type='es6'>
     //公共的轮播图，根据传入的id值来分配图片
     export default {
       props:['url'],
     data(){
         return {
           list:[]
         }
     },
       mounted(){
         this.geturls()
       },
       methods:{
         geturls(){
           this.$http.get(this.url).then(function (datas) {
             //console.log(datas.body);
             this.list = datas.body.message
           })
         }
       }
   }

</script>
<style lang='less'>
#tmpl{
  .shopingDetails_lunbo{
    height: 260px;
    text-align: center;
    img {
      height: 100%;
    }
    .mint-swipe{
      padding: 10px;

.mint-swipe-items-wrap{
  border: 1px solid #cccccc;
  border-radius: 8px;
}
    }

  }
}
</style>
