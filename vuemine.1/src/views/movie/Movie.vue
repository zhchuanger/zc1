<template>
    <div>
        <ul class="container">
            <li>
                <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2545472803.jpg" alt="">
                <div class="info">
                    <h3>流浪地球</h3>
                    <p>屈楚萧</p>
                    <p>已有208982观看</p>
                    <p>年份：2019</p>
                    <p>科幻/</p>
                </div>
            </li>
            
        </ul>

    </div>
</template>

<script>
    import Axios from "axios";
    export default {
        data(){
            return {
                movieList:[]
            }

        },
        created(){
            //jsonbird 服务器代理 解决跨域
            Axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10")
            .then((result)=>{
                console.log(result);
                this.movieList = result.data.subjects;


            })
            .catch();
        }

        
    }
</script>

<style scoped>
.container{
    padding: 0.2rem;
}
li{
    display: flex;
    border-bottom: 1px solid #000;
}
li img{
    width: 90px;
    height: 123px;

}
.info{
    flex-grow: 1;
    margin-left: 0.2rem;
    margin-top: -0.15rem;
}


</style>