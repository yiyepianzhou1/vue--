<template>
    <div id="addmiunscomt">
        <button type="button" @click="miuns">-</button>
        <input type="text" :value="countes"/>
        <button type="button" @click="adds">+</button>
    </div>
</template>
<script type='es6'>
     export default {
       props:['counts'],
     data(){
         return {
           countes:0
         }
     },
       created(){
         this.countes = this.counts
       },
       methods:{
         adds(){
           this.countes++
         },
         miuns(){
           this.countes--;
           if(this.countes<=0){
             this.countes=0
           }
         }
       }
   }

</script>
<style lang='less'>
  #addmiunscomt {
display: inline-block;
  input, button {
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 0;
  }

  }
</style>
