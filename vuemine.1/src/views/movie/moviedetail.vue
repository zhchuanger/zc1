<template>
    <div>
        
        {{$route.params.movieId}}
        {{moviedetail.title}}
        <img :src="moviedetail.images.small"/>

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
            Axios.get(`/data/moviedetail.json`)
            .then((result)=>{
                console.log(result.data);
                this.moviedetail = result.data;
            }).catch(()=>{

            })
            
        },
        
        
    }
</script>

<style scoped>

</style>