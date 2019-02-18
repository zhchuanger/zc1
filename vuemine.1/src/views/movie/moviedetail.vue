<template>
    <div>
        
        {{$route.params.movieId}}
        {{moviedetail.title}}

    </div>
</template>

<script>
    import Axios from "axios";
    export default {
        data(){
            return {
                moviedetail:{}
            }
        },
        created() {
            Axios.get(`https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}`)
            .then((result)=>{
                this.moviedetail = result.data;

            }).catch(()=>{

            })
            
        },
        
        
    }
</script>

<style scoped>

</style>