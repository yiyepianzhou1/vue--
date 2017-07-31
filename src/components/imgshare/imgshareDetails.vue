<template>
  <div id="tmpl">
    <div id="imgshareDetails">
      <!-- 头部标题-->
      <div class="imgsDetails_top">
        <h4>{{title}}</h4>
        <div><span>{{times}}</span>&nbsp;&nbsp;&nbsp;<span>{{click}}次浏览</span>&nbsp;&nbsp;<em>分类：经济民生</em></div>
      </div>
      <!--图片列表-->
      <div class="imgDetails_imgs">
        <ul class="clearfix">
          <li v-for="item in list"><img :src="item.src" alt=""/></li>
        </ul>
      </div>

      <!-- 描述-->
      <div class="imgDetails_texts">
         <p v-html="content"></p>
      </div>
    </div>
  </div>
</template>

<script type='es6'>
  export default {
    data(){
      return {
        list: [],
        //获取上一路由传递过来的值
        id: this.$route.query.ids,
        title:'',
        times:'',
        click:'',
        content:''
      }
    },
    created(){
        this.getthumimages();
      this.getimageInfo()
    },
    methods: {
      getthumimages: function () {
        var url = 'http://182.254.146.100:8899/api/getthumimages/'
        this.$http.get(url + this.id).then(function (data) {
          this.list = data.body.message
        })
      },
      getimageInfo:function(){
        var url = 'http://182.254.146.100:8899/api/getimageInfo/';
        this.$http.get(url+this.id).then(function(data){
          this.title = data.body.message[0].title;
          this.times = data.body.message[0].add_time;
          this.click = data.body.message[0].click;
          this.content = data.body.message[0].content;
        })
      }
    }
  }

</script>
<style lang='less' scoped>
  #imgshareDetails {

  .imgsDetails_top {

  h4 {
    font-size: 17px;
    color: #26a2ff;
  }

  div {
    color: #cccccc;
    font-size: 15px;

  em {
    font-style: normal;
  }

  }
  }
  .imgDetails_imgs {

  li {
    float: left;
    width: 33.3%;
    padding: 10px;

  img {
    width: 100%;
    display: block;
  }

  }
  }
  }

</style>
