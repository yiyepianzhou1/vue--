<template>
  <div id="tmpl">
    <mt-swipe :auto="4000">
      <!-- 轮播图部分-->
      <mt-swipe-item v-for='item in list'><img :src="item.img" alt=""/></mt-swipe-item>
    </mt-swipe>
    <!-- 轮播图部分结束-->

    <!--导航部分开始-->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/newsmain">
            <span class="mui-icon mui-icon-home"></span>

            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/">
            <span class="mui-icon mui-icon-email"></span>

            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/">
            <span class="mui-icon mui-icon-chatbubble"></span>

            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/">
            <span class="mui-icon mui-icon-location"></span>

            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/">
            <span class="mui-icon mui-icon-search"></span>

            <div class="mui-media-body">视频专区</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/">
            <span class="mui-icon mui-icon-phone"></span>

            <div class="mui-media-body">联系我们</div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 导航部分结束-->
  </div>
</template>
<script type='es6'>
  var url='http://182.254.146.100:8899/api/getlunbo'
  export  default {
    data(){
      return {
        src:null,
        list: []
      }
    },
    created(){
      this.$http.get(url).then(function(data){
        this.list = data.body.message
      })
    }
  }
</script>
<style lang='less' scoped>
  #tmpl {
  .mint-swipe {
    height: 300px;
  .mint-swipe-items-wrap {
  .mint-swipe-item {
  img {
    width: 100%;
    height: 100%;
  }

  }

  }

  }
  }
  @media (min-width: 400px) {
    .mui-col-sm-3 {
      width: 33.3%;
    }
  }

  .mui-grid-view {
    background-color: white

  }

  .mui-grid-view .mui-table-view-cell {
    border: none;

  }

  .mui-icon:before {
    content: '';
    display: inline-block;
    width: 50px;
    height: 50px;
    background-size: cover;
  }

  .mui-icon-home:before {
    background-image: url("../../static/imgs/1.png");
  }

  .mui-icon-email:before {
    background-image: url("../../static/imgs/2.png");
  }

  .mui-icon-chatbubble:before {
    background-image: url("../../static/imgs/3.png");
  }

  .mui-icon-location:before {
    background-image: url("../../static/imgs/4.png");
  }

  .mui-icon-search:before {
    background-image: url("../../static/imgs/5.png");
  }

  .mui-icon-phone:before {
    background-image: url("../../static/imgs/6.png");
  }
</style>
