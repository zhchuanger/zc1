<template>
    <div class="slide-wrapper">
        <ul class="slide">
            <transition-group name="fade">  <!-- 动画套列表元素  做列表操作-动画 -->
                <li v-for="(value,index) in imgs"  :key="index"  v-show="index == iNow">
                    <img :src="value" alt="">
                </li>
            </transition-group>
            
        </ul>
        <ul class="btns">
            <li v-for="(i,index) in imgs.length" :key="index" :class="{active:index == iNow}"></li>
        </ul>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                iNow:0
            }
        },
        props:['imgs'],
        created() {
            setInterval(()=>{
                this.iNow++;
                if(this.iNow ==this.imgs.length){
                    this.iNow = 0;
                }
            },2000)
            
        },
        
    }
</script>

<style scoped>
.slide li{
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
}
.slide img{
    width: 100%;
    height: 6rem;
}
.btns li{
    width: 0.2rem;
    height: 0.2rem;
    background: #ddd;
    border-radius: 50%;
    float: left;
    margin-right: 0.1rem;

    
}
.btns li.active{
    background:#fbfbfb;
}
.btns{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.2rem;

}
.slide-wrapper{
    position: relative;
    height: 6rem;
    overflow: hidden;
}
.fade-enter{
    transform: translateX(100%)

}
.fade-enter-active{
    transition: transform 1s ease

}
.fade-enter-to{
    transform: translateX(0)

}
.fade-leave{
    transform: translateX(0)

}
.fade-leave-active{
    transition: transform 1s ease


}
.fade-leave-to{
    transform: translateX(-100%)



}

</style>