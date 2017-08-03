<template>
    <div  id="tmpl">
      <!-- 轮播图部分-->
      <lunbocomt :url="urls"></lunbocomt>
      <div class="gobuycar">
        <div class="gobuycar_main">
          <div class="gobuycar_main_top">
            <h4>{{title}}</h4>
            <div class="gobuycar_main_mains">
              <p><span>市场价：<em>￥{{oldprice}}</em></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>销售价: <em>￥{{newprice}}</em></span></p>
              <div class="buynums">
                <span>购买数量:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" @click="minus">-</button>
                <input type="text" v-model="counts"/>
                <transition
                  name="show"
                  @before-enter="beforeEnter"
                  @enter="Enter"
                  @after-enter="afterEnter"
                  >
                <div class="gobuycar_slide" v-show="isshow"></div>
                </transition>
                <button type="button" @click="adds">+</button>
              </div>
              <div class="gobuycargoos">
                <mt-button type="primary">立即购买</mt-button>
                <mt-button type="danger" @click="changego">加入购物车</mt-button>
              </div>
            </div>
          </div>
          <!--<div><div v-html='content'></div></div>-->
        </div>
      </div>
    </div>
</template>
<script type='es6'>
  import lunbocomt from '../../subcom/lunbocomment.vue'
  import {vm} from '../../kits/vms.js'
  import {setitem} from '../../kits/locals.js'
  export default {
     data(){
         return {
           ids:this.$route.query.id,
           newprice:this.$route.query.newprice,
           oldprice:this.$route.query.oldprice,
           urls:'',
           title:'',
           content:'',
           counts:1,
           isshow:false
         }
     },
       components:{lunbocomt},
       created(){
         this.urls = 'http://182.254.146.100:8899/api/getthumimages/'+this.ids;
         this.getcomments()
       },
       methods:{

       getcomments(){
           var url = 'http://182.254.146.100:8899/api/goods/getdesc/'+this.ids
           this.$http.get(url).then(function(datas){
             this.title = datas.body.message[0].title
             this.content = datas.body.message[0].content
           })
         },
         adds(){
           this.counts++;
         },
         minus(){
           this.counts--;
           if(this.counts<=1){
             this.counts=1
           }
           //this.$emit('add',this.counts)
         },
         changego(){
           this.isshow = !this.isshow;
           var gobuycar = {'ids':this.ids,'counts':this.counts};
           setitem(gobuycar)
         },
         beforeEnter(el){
           el.style.transform = "translate(0,0)"
         },
         Enter(el,done){
           el.offsetWidth;
           el.style.transform = "translate(47px, 136px)"
           //this.$emit('add',this.counts)
           vm.$emit('adds',this.counts)
           done();
         },
         afterEnter(el){
           this.isshow = !this.isshow
         },
       }
   }

</script>
<style lang='less'>
  #tmpl {
  .gobuycar {
    padding: 10px;

  .gobuycar_main {
    border: 1px solid #cccccc;
    padding: 10px 20px;
    border-radius: 8px;

.gobuycar_main_top{
  max-width: 360px;
  margin: 0 auto;

h4{
  height: 50px;
  color: #26A2FF;
  border-bottom: 1px solid #cccccc;
}
.gobuycar_main_mains{
  position: relative;
  padding-left: 20px;
.gobuycar_slide{
  transition: transform 0.5s;
  width: 20px;
  height:20px;
  top: 20px;
  left: 164px;
  z-index: 100;
  background-color: red;
  border-radius: 50%;
  position: absolute;
}
&>p{
  em{
    font-style: normal;
  }
  span:nth-of-type(2) em{
    color: red;
    font-size: 20px;
  }
  }
  .buynums{
  margin-top: 20px;
    button,input{
      width: 30px;
      height: 30px;
    }
    input{
      margin: 0;
      padding: 0;
      text-align: center;
    }
  }
  .gobuycargoos{
    margin-top: 20px;
  }
}
}
  p {
    margin: 0px;

  img {
    width: 100%;
    vertical-align: top;
  }

  }
  }
  }
  }
  h1{
    margin-bottom: 50px;
  }

</style>
