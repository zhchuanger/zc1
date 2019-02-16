<template>
    <div>
        <ul class="container">
            <li v-for="(obj,index) in movieList" :key="index">
                <img :src="obj.images.small" alt="">
                <div class="info">
                    <h3>{{obj.title}}</h3>
                    <p> 
                        <span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}} | </span> 
                    
                    </p>
                    <p>{{obj.collect_count}}已观看</p>
                    <p>年份:{{obj.year}}</p>
                    <p>
                        <span v-for="(type,index) in obj.genres " :key="index">
                            {{type}}
                        </span>
                    </p>
                </div>
            </li>  
            
        </ul>
        <img  class="loading" v-show="ishow" src="@/assets/imgs/loading.gif" alt="">
        <div class="words" v-show="isbottom">亲亲，到底了，不要再拉啦~o( =∩ω∩= )m</div>


    </div>
</template>

<script>
    import Axios from "axios";
    export default {
        data(){
            return {
                movieList:[],
                ishow:false,
                isbottom:false

            }

        },
        created(){
            //jsonbird 服务器代理 解决跨域
            // Axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10")
            this.getMovie();
            window.onscroll = ()=>{
                //滚动条滚动的高度
                console.log(document.documentElement.scrollTop);
                //可视区的高度
                console.log(document.documentElement.clientHeight);
                //整个滚动区的高度
                console.log(document.documentElement.scrollHeight);
                if(Math.abs(document.documentElement.scrollTop + document.documentElement.clientHeight - document.documentElement.scrollHeight )< 1 && !this.isbottom){
                    this.getMovie();
                }
            }
        },
        methods: {
            getMovie(){
                // 豆掰接口的访问方式
                // Axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250?start="+this.movieList.length+"&count=10")
                // 本地json模拟
                this.ishow = true;
                Axios.get("/movie"+this.movieList.length+".json")
            .then((result)=>{
                setTimeout(()=>{
                        this.movieList = [...this.movieList,...result.data.subjects];
                        this.ishow = false;
                        if(this.movieList.length == result.data.total){
                            this.isbottom = true;
                        }
                },1000)
                
            })
            .catch();

            }
        },

        
    }
</script>

<style scoped>
.container{
    padding: 0.2rem;
}
li{
    display: flex;
    border-bottom: 1px solid #000;
    margin-top: 0.2rem;
    padding: 0 0 0.15rem; 
}
li img{
    width: 90px;
    height: 123px;

}
.info{
    flex-grow: 1;
    margin-left: 0.2rem;
}
h3{
    overflow: hidden;
    font-size:18px;

}
.loading{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 1rem;
    height: 1rem;
}
.words{
    text-align: center;
}



</style>