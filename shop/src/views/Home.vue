<template>
  <div>
      <van-nav-bar title="首页">
          <van-icon name="search" slot="left"></van-icon>
          <van-icon name="cart-o" slot="right"></van-icon>
      </van-nav-bar>
      <!-- 轮播图 -->
      <div class="carousel">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(item,index) in carouselItem" :key="index">
            <img :src="item.imgSrc" alt="">

          </van-swipe-item>
        </van-swipe>
      </div>

  </div>
    
</template>

<script>


export default {
  data() {
    return {
      carouselItem:[
        {
          name:'img1',
          imgSrc:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551104645&di=fc03ea5e2c9eea7ca95d4072aec4942d&src=http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193329_rjWfs.jpeg'
        },{
          name:'img2',
          imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551114779473&di=2e070a7bba9ba34372563fa8f3822925&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140516%2F0042040249212199_b.jpg'
        },{
          name:'img3',
          imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551114779460&di=ebb9ca0312aa9df4e4425e3df8820951&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1312%2F11%2Fc0%2F29510695_29510695_1386708897121.jpg'
        }
      ]
    }
  },

}
</script>


<style lang="scss">

  
</style>
