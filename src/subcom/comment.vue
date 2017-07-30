<template>
  <div id="comment">
    <h1>公共组件评论组件{{ids}}</h1>

    <div class="comment_tops">
      <h4>提交评论<span>返回</span></h4>

      <div class="text">
        <textarea placeholder="请输入您的评论" v-model="texts"></textarea>
      </div>
      <div class="comment_btn">
        <mt-button type="primary" @click='submits'>提交</mt-button>
      </div>
      <div class="comment_lists">
        <h4>评论列表<span>100条评论</span></h4>
        <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-media" v-for="item in list">
            <div class="mui-media-body">
              {{item.user_name}}
              <p class='mui-ellipsis'>{{item.content}} <span>{{item.add_time}}</span></p>
            </div>
          </li>
        </ul>
        <div class="comment_more">
          <button @click='comment_more'>加载更多</button>
        </div>
      </div>
    </div>
  </div>
</template>
<!---->
<script type='es6'>
  import { Toast } from 'mint-ui';
  import  Vue from  'vue'
  export default {
    //通过props来获取由父组件传递过来的值；
    props: ['id'],
    data(){
      return {
        ids: this.id,
        texts: '',
        list: null,
        nums: 1,
        flage: true,
        url: 'http://182.254.146.100:8899/api/getcomments/'
      }
    },
    created(){
      this.gets()
    },
    methods: {
      gets: function () {
        this.$http.get(this.url + this.id + '?pageindex=' + this.nums).then(function (datas) {
          if (datas.body.message.length < 10) {
            this.flage = false
            return
          };
          //console.log(datas.body);
          this.list = datas.body.message;
          //console.log(this.list.length)
        })
      },
      comment_more: function () {
        if (this.flage) {
          this.nums++;
          //console.log(this.nums)
          this.gets()
        }
      },
      submits: function () {
        var url = 'http://182.254.146.100:8899/api/postcomment/'
        if (this.texts) {
          this.$http.post(url + this.ids, {content: this.texts}, {emulateJSON: true}).then(function (datas) {
            console.log(datas.body)
            Toast({
              message: datas.body.message,
              position: 'bottom',
              duration: 5000
            });
            this.texts = ''
            this.gets()
          })
        }
      }
    }
  }

</script>
<style lang='less' scoped>
  .comment_tops {

  h4 {
    line-height: 64px;
    font-size: 20px;
    font-weight: 550;
    border-bottom: 1px solid #cccccc;

  span {
    font-size: 14px;
    float: right;
    font-weight: 400;
    padding-right: 50px;
    color: #26A2FF;
  }

  }
  .text {
    padding: 0 20px;

  textarea {
    height: 97px;
  }

  }
  .comment_btn {
    padding: 0 20px;

  .mint-button {
    width: 100%;
  }

  }
  .comment_lists {

  h4 {
    line-height: 64px;
    font-size: 20px;
    font-weight: 550;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;

  span {
    font-size: 14px;
    float: right;
    font-weight: 400;
    padding-right: 50px;
    color: #26A2FF;
  }

  }
  .comment_more {
    padding: 0 50px;
    margin: 0 auto;
    text-align: center;

  button {
    width: 100%;
    background-color: #ffffff;
    border: 1px solid red;
    color: red;
    height: 40px;
  }

  }
  .mui-table-view {

  .mui-table-view-cell {

  .mui-media-body {
  }

  .mui-ellipsis {

  span {
    float: right;
    color: #cccccc;
  }

  }
  }
  }
  }
  }

</style>
