<template>
  <div class="container">
    <!-- 导航栏 -->
      <van-nav-bar title="首页" class="nav-title">
          <van-icon name="search" slot="left"></van-icon>
          <van-icon name="cart-o" slot="right"></van-icon>
      </van-nav-bar>
      <!-- 轮播图 -->
      <div class="carousel">
        <van-swipe :autoplay="3000">
          <van-swipe-item class="carousel-item" v-for="(item,index) in carouselItem" :key="index">
            <img v-lazy="item.imgSrc" alt="">

          </van-swipe-item>
        </van-swipe>
      </div>


      <!-- 热门商品 -->
      <div class="hot">
          <p class="hot-title">热门商品</p>
          <swiper class="hot-swiper" :options="swipeOption">
              <swiper-slide v-for="(item,index) in hotProduces" :key="index" >
                <div class="hot-swiper-content">
                  <img :src="item.img" alt="">
                  <div>{{ item.name }}</div>
                  <div>￥{{ item.price }}</div>
                  
                </div>
              </swiper-slide>
          </swiper>
      </div>
      <!-- 推荐商品 -->
      <div class="variety">
        <p>推荐商品</p>
        <ul>
          <li class="variety-item" v-for="(item,index) in varietyItem" :key="index">
              <img :src="item.img" alt="">
              <p>{{item.name}}</p>
              <p>￥{{item.price}}</p>
          </li>
        </ul>
      </div>

  </div>
    
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {
  data() {
    return {
      // 轮播图
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
      ],hotProduces:[
        {
          name:"老好吃了",
          img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551192174548&di=95689c26f3788cc0085ec13dc5b363c6&imgtype=0&src=http%3A%2F%2Fpic4.photophoto.cn%2F20070707%2F0042040244609065_b.jpg",
          price:"12",
          food:"大虾",
          city:"Italy"
        },{ 
          name:"老好吃了",
          img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551192174548&di=95689c26f3788cc0085ec13dc5b363c6&imgtype=0&src=http%3A%2F%2Fpic4.photophoto.cn%2F20070707%2F0042040244609065_b.jpg",
          price:"12",
          food:"大虾",
          city:"Italy"

        },{ 
          name:"老好吃了",
          img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551192174548&di=95689c26f3788cc0085ec13dc5b363c6&imgtype=0&src=http%3A%2F%2Fpic4.photophoto.cn%2F20070707%2F0042040244609065_b.jpg",
          price:"12",
          food:"大虾",
          city:"Italy"

        },{ 
          name:"老好吃了",
          img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551192174548&di=95689c26f3788cc0085ec13dc5b363c6&imgtype=0&src=http%3A%2F%2Fpic4.photophoto.cn%2F20070707%2F0042040244609065_b.jpg",
          price:"12",
          food:"大虾",
          city:"Italy"

        }
      ], swipeOption:{
        slidesPerView:3
      },
      //推荐商品
      varietyItem:[
        {
          name:"老好吃了",
          img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551192174548&di=95689c26f3788cc0085ec13dc5b363c6&imgtype=0&src=http%3A%2F%2Fpic4.photophoto.cn%2F20070707%2F0042040244609065_b.jpg",
          price:"12",
          food:"大虾",
          city:"Italy"
        },{ 
          name:"老好吃了",
          img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551192174548&di=95689c26f3788cc0085ec13dc5b363c6&imgtype=0&src=http%3A%2F%2Fpic4.photophoto.cn%2F20070707%2F0042040244609065_b.jpg",
          price:"12",
          food:"大虾",
          city:"Italy"

        },{ 
          name:"老好吃了",
          img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551192174548&di=95689c26f3788cc0085ec13dc5b363c6&imgtype=0&src=http%3A%2F%2Fpic4.photophoto.cn%2F20070707%2F0042040244609065_b.jpg",
          price:"12",
          food:"大虾",
          city:"Italy"

        },{ 
          name:"老好吃了",
          img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551192174548&di=95689c26f3788cc0085ec13dc5b363c6&imgtype=0&src=http%3A%2F%2Fpic4.photophoto.cn%2F20070707%2F0042040244609065_b.jpg",
          price:"12",
          food:"大虾",
          city:"Italy"

        }


      ]
    }
  },
  components:{
    swiper,
    swiperSlide

  },
  created() {
    
    
  }

};
</script> 
<style lang="scss">
.container{
  background-color: #eee;
}
body{
  height: 2000px;

}
.nav-title{
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  z-index:999 !important;

}
.carousel{
  margin-top: 1rem;
    height: 3rem;
    &-item{
      img{
        width: 100%;
        height: 3rem;
      }

    }
  }
.hot{
  margin-top: 0.2rem;
  background-color: #fff;

  &-title{
    width: 100%;
    height: 0.5rem;
    padding-left: 0.2rem;
    line-height: 0.5rem;
    box-sizing: border-box;//标准盒模型转换成怪异盒模型
  }
  &-swiper{
    &-content{
      width: 2rem;
      text-align: center;

    }
  }
}
  // 热门商品
  .variety{
    margin-top: 0.2rem;
    background-color: #fff;
    text-align: center;
    margin-bottom: 1rem; 
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    &-item{
      flex-basis: 45%;
    }
    img{
      width: 2rem;
      height: 2rem;
    }

  }
</style>
