<template>
  <div id="tmpl" class="imgshare">
    <!-- 头部滚动条开始-->
    <div class="imgshare_top" @load="loaded">
      <div id="wrapper" class="clearfix">
        <div id="scroller">
          <ul class="clearfix" id="scroller_main">
            <li class="active" v-for='(item,indenx) in list' :class="{'colors':navs==indenx}" @click='checks(indenx,item.id)'>{{item.title}}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 头部滚动条结束-->

    <!-- 图片部分开始-->
    <div id="imgshare">
      <ul>
        <li v-for="item in data" class="imgshare_lis" @click="imgsDetails">
          <router-link :to="{path:'/imgshareDetails',query:{ids:item.id}}">
          <img v-lazy="item.img_url">
          <div class="imgshare_text">
            <h4>{{item.title}}</h4>
            <span>{{item.zhaiyao}}</span>
          </div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 图片部分结束-->

  </div>
</template>
<script type='es6'>
  import IScroll from '../../../static/iscroll/iscroll.js'
  import '../../../static/iscroll/iscroll.css'
  import Vue from 'vue'
  import { Lazyload } from 'mint-ui';
  Vue.use(Lazyload);
  var myScroll;
  var url = 'http://182.254.146.100:8899/api/getimgcategory'
  var urls = 'http://182.254.146.100:8899/api/getimages/'

  export default {
    data(){
      return {
        ids:'',
        list: [],
        navs: 3,
        imgs: 17,
        data: []
      }
    },
    created(){
       this.getscrolltext();
       this.getimgs()
    },
    methods: {
      loaded: function () {
        myScroll = new IScroll('#wrapper', {
          eventPassthrough: true,
          scrollX: true,
          scrollY: false,
          preventDefault: false
        });
      },
      getscrolltext: function () {
        this.$http.get(url).then(function (data) {
          this.list = data.body.message
        })
      },
      getimgs:function(){
        this.$http.get(urls + this.imgs).then(function (datas) {
          this.data = datas.body.message
        })
      },
      checks: function (indenx,ids) {
        //alert(indenx);
        this.navs = indenx;
        //alert(ids)
        this.imgs = ids;
        this.getimgs()
      },
      imgsDetails: function () {
      },
    },
    mounted(){
      this.loaded()
    }
  }
</script>
<style lang='less' scoped>
.colors{
  background-color: rgba(233,22,222,.5);
}
.imgshare{
  .imgshare_lis{
    position: relative;
img{
      width: 100%;
    }
    .imgshare_text{
      width: 100%;
      position: absolute;
      background-color: rgba(0,0,0,.5);
      bottom: 5px;
      color: #ffffff;
      h4{
        font-size: 16px;
      }
      span{
        font-size: 14px;
      }
    }
  }
}
</style>
