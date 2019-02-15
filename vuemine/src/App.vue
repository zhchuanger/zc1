<template>
  <div id="app">
    <c-header :obj = "obj"></c-header>
    <div id="content">

      <router-view></router-view>
      
    </div>
    <c-footer :menu="menu" @changeBg="color" :color="obj.bgColor"></c-footer>

  </div>
</template>
<script>
    import CHeader from '@/components/CHeader.vue';
    import CFooter from '@/components/CFooter.vue';
    export default {
      data(){
        return {
          menu:[
            {
              path:"/movie",
              name:"电影",
              bgColor:"#ff0036"
            },
            {
              path:"/music",
              name:"音乐",
              bgColor:"#e9f460"
            },
            {
              path:"/book",
              name:"图书",
              bgColor:"#4abce8"
            },
            {
              path:"/photo",
              name:"图片",
              bgColor:"#46f14d"

          }
          ],
          obj:{
            path:"/movie",
              name:"电影",
              bgColor:"#ff0036"

          }
        }
      },
      components: {
        CHeader,
        CFooter
      },
      methods: {
        color(obj){
          //bg是footer中传过来的颜色  bg放到data中  再传给header
          // console.log(bg);
          this.obj = obj;

        }
      },
      created(){
        console.log(this.$route.path);//  /book
        //过滤出menu数组中path值是  this.$route.path 的，filter返回的是一个新数组
        let result =  this.menu.filter((obj,index)=>{
          return obj.path == this.$route.path;

        });
        //如果匹配到了 才修改obj的值，否则用obj的默认值
        if(result.length){
          this.obj = result[0];
        }
      },
    };
</script>

<style>
#content{
  margin: 1rem 0;
}
</style>
