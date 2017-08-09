<template>
    <div id="tmpl">

      <div class="shopcar_main">
        <ul>
          <li class="shopcar_lis" v-for="(item,indenx) in list">
            <mt-switch v-model="value[indenx]"></mt-switch>
            <div class="shopcar_lis_img"><img :src="item.thumb_path" alt=""/></div>
            <div class="shopcar_lis_texts">
              <h4>{{item.title}}</h4>
              <div class="shopcar_lis_texts_btn">
                <span>￥{{item.sell_price}}</span>
                    <addsminus :counts="item.cou"></addsminus>
                <a href="javascript:;">删除</a>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 底部结算部分开始-->
      <div class="shopcarfooter">
      <div class="shopcar_footer clearfix">
        <div class="shopcar_footer_left">
          <p>总计（不含运费）：</p>
          <p>已选商品1件，总价：￥4799</p>
        </div>
        <div class="shopcar_footer_right">
          <mt-button size="large" type="danger">结算</mt-button>
        </div>
      </div>
      </div>
      <h2>{{value}}</h2>
      <!-- 底部结算部分结束-->
    </div>
</template>
<script type='es6'>
  import Vue from 'vue'
  import { Switch } from 'mint-ui';
  import addsminus from '../../subcom/addmiunscomt.vue'
  Vue.component(Switch.name, Switch);
  import {getitems,changecounts} from '../../kits/locals.js'
     export default {
     data(){
         return {
           value:[],
           counts:0,
           ids:'',
           list:[]
         }
     },
       components:{addsminus},
       created(){
         this.getsinfo()
         //console.log(objss)
         this.getcounobj()
       },
       methods:{
          getcounobj(){
            //console.log(this.ids)
          },
         getsinfo(){
           var countsobj = changecounts()
           var nums=''
           var self = this
           console.log(countsobj);
           for(var key in countsobj){
             nums+=key+','
           this.counts=countsobj[key]
           //alert(this.counts)
         }
          this.ids = nums.substring(0,nums.length-1)
           var url = 'http://182.254.146.100:8899/api/goods/getshopcarlist/'
           this.$http.get(url+this.ids).then(function(datas){
             this.list = datas.body.message
             datas.body.message.forEach(function(value){
               //value.cou = self.cous
               //将获取的countsobj的值赋值给数据中的cou以方便在v-for中将数据动态的渲染
               //
               value.cou = countsobj[value.id]
             })
           })
         },
       }

   }

</script>
<style lang='less' scoped>
  #tmpl{
    .shopcar_main{
      .shopcar_lis{
        max-width: 376px;
        margin: 0 auto;
        height: 96px;
        padding: 10px;
        border-bottom: 1px solid #cccccc;
        label {
          float: left;
          margin-top: 24px;
        }
        .shopcar_lis_img{
          float: left;
          width: 60px;
          height: 60px;
          img{
            width: 100%;
          }

        }
  .shopcar_lis_texts{
  h4{
    height: 40px;
    color: #26A2FF;
  }
span{
  color: red;
  font-size: 17px;
}
/*input,button{*/
  /*width: 30px;*/
  /*height: 30px;*/
  /*text-align: center;*/
  /*padding: 0;*/
/*}*/
a{
  font-size: 14px;
}
  }
      }
    }
  .shopcarfooter {
    width: 100%;
    position: fixed;
    background-color: #ccc;
    bottom: 0;
  margin-bottom: 50px;
  .shopcar_footer {
    max-width: 370px;
    margin: 0 auto;

  .shopcar_footer_left {
    float: left;

  p:nth-of-type(1) {
    font-size: 18px;
    font-weight: 700;
  }

  }
  .shopcar_footer_right {
    float: right;
    margin-top: 10px;
    margin-right: 20px;
  }

  }
  }
  }
  @media screen and(max-width: 360px) {
  }

</style>
