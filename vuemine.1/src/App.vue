<template>
  <div id="app">
    <c-header></c-header>
    <div id="content">

      <router-view></router-view>
      
    </div>
    <c-footer :menu="menu"></c-footer>

  </div>
</template>
<script>
    import CHeader from '@/components/CHeader.vue';
    import CFooter from '@/components/CFooter.vue';
    import {mapMutations} from "vuex";
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
              bgColor:"#4abce8"
            },
            {
              path:"/book",
              name:"图书",
              bgColor:"#f4b245"
            },
            {
              path:"/photo",
              name:"图片",
              bgColor:"#66d516"

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
      methods: mapMutations(["change"]),
      created(){
        let result =  this.menu.filter((obj,index)=>{
          return obj.path == this.$route.path;

        });
        if(result.length){
          this.change(result[0]);
        }
      },
    };
</script>

<style>
#content{
  margin: 1rem 0;
}
</style>
