<template>
  <div id="tmpl" class="imgshare">
    <div class="imgshare_top">

    </div>
    <div id="imgshare">
      <div class="mui-content" style="background-color:#fff">
        <ul class="mui-table-view mui-grid-view">
          <li class="mui-table-view-cell mui-media mui-col-xs-6">
            <router-link to="/imgshareDetails">
              <img class="mui-media-object" src="../../../static/imgs/f1.jpeg">

              <div class="mui-media-body">幸福就是可以一起睡觉</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type='es6'>  
  export default {
    data(){
      return {}
    }
  }

</script>
<style lang='less' scoped>

</style>
