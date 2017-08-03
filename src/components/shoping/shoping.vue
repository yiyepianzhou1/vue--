<template>
  <div id="tmpl">
    <div class="mui-content" style="background-color:#fff">
      <ul class="mui-table-view mui-grid-view">
        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in list">
          <router-link :to="{path:'/shopingDetails',query:{id:item.id,newprice:item.sell_price,oldprice:item.market_price}}">
            <img class="mui-media-object" :src="item.img_url">
            <h4 class="mui-media-body">{{item.title}}</h4>
            <div class="shoping_main">
              <p><span>￥{{item.sell_price}}</span><span>￥{{item.market_price}}</span></p>
              <p>热卖中 <span>剩余{{item.stock_quantity}}</span></p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="shoping_btn">
    <mt-button type="default" @click="goTop">上一页</mt-button>
    <mt-button type="default" @click="goBttom">下一页</mt-button>
    </div>
  </div>
</template>
<script type='es6'>
  export default {
    data(){
      return {
        list: [],
        ids: '',
        num: 1,
      }
    },
    created(){
      this.getshopings()
    },
    methods: {
      getshopings(){
        var url = 'http://182.254.146.100:8899/api/getgoods?pageindex=';
        this.$http.get(url + this.num).then(function (datas) {
          //console.log(datas.body);
          this.list = datas.body.message
        })
      },
      goTop:function(){
        this.num--;
        if(this.num<=1){
          this.num=1
        }
        this.getshopings()
      },
      goBttom: function () {
        this.num++;
        if(this.num>=2){
          this.num=2
        }
        this.getshopings()
      }
    }
  }
</script>
<style lang='less' scoped>
  #tmpl {

  .mui-content {

  .mui-media {
    padding: 10px;

  a {
    margin: 0;
    box-shadow: 0 0 30px #ccc;
    border-radius: 8px;
  white-space: inherit;
    .mui-media-body{
      height: inherit;
    }
.shoping_main{
  p:nth-of-type(1){
    span:nth-of-type(1){
      color: red;
    }
    span:nth-of-type(2){

    }

  }
}
  }
  }
  }
  .shoping_btn{
    text-align: center;
  }
  }
</style>
