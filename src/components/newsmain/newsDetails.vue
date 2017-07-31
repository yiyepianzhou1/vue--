<template>
  <div id="tmpl">
    <mt-header title="资讯详情">
      <div slot="left">
        <router-link to='/home'>
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button @click="goback">返回</mt-button>
      </div>
    </mt-header>
    <!--<h2>{{ids}}</h2>-->
    <div class="newsDetails_main" v-for='item in list'>
      <h3 class="newsDetails_head">{{item.title}}</h3>
      <p><span>{{item.add_time}} &nbsp;{{item.click}}次浏览&nbsp;分类：经济，民生</span></p>
      <div v-html='item.content'></div>
    </div>
    <!--调用公共组件评论组件 -->
    <comment :id='ids'></comment>
  </div>
</template>
<script type='es6'>
  import comment from '../../subcom/comment.vue'
  export default {
    data(){
      return {
        //获取父组件通
        ids: this.$route.query.id,
        url: 'http://182.254.146.100:8899/api/getnew/',
        list:null
      }
    },
    components: {
      comment
    },
    created(){
      this.$http.get(this.url + this.ids).then(function (data) {
        //console.log(data.body)
        this.list = data.body.message
      })
    },
    methods:{
      goback: function () {
        this.$router.go(-1)
      }
    }
  }
  //import '../../../static/iscroll/iscroll.css';

</script>
<style lang='less' scoped>
  .mint-header {
    background-color: #ccc;
    color: #007aff;
    font-size: 17px;
  }
  .newsDetails_head {
    font-size: 18px;
    color: #26A2FF;
  }
</style>
