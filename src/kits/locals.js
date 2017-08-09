/**
 * Created by Administrator on 2017/8/3.
 */
//  这里使用了gooscay,问题是为什么使用goos时会报错，且数据不能正常存储到浏览器中，问题待解决
export var keys = 'gooscay'
export function setitem(values){
  var value = localStorage.getItem(keys) || '[]';
  var newvalues = JSON.parse(value)
  newvalues.push(values)
  localStorage.setItem(keys,JSON.stringify(newvalues));
}
//获取数据方法
export  function getitems(){
  var values = localStorage.getItem(keys) || "[]";
  return JSON.parse(values)
}
//将获取的数据进行处理：{88:2}
export function changecounts(){
  var objs = getitems();
  var countobjs = {}
  for(var i=0;i<objs.length;i++){
    var item = objs[i]
      //将ids添加至counobjs中
      if(!countobjs[item.ids]){
        countobjs[item.ids]=item.counts;
      }
      else{
      //  将已有的数据进行追加成的形式;
        var counts = countobjs[item.ids];
        countobjs[item.ids] = counts+item.counts
      }
  }
  return countobjs
}
//添加删除数据功能
export function removes(){

}
