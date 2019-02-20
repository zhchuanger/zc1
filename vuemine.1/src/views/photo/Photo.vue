<template>
    <div class="photo">
        <img v-for=" (photoSrc,index) in $store.state.photos" :key="index" :src="photoSrc.src" @click="godetail(index)" alt="">

    </div>
</template>

<script>
    import axios from "axios"
    export default {
        data() {
            return {
                // photo:[]
            }
        },
        created() {
            axios.get("/data/photodata.json")
            .then((result)=>{
                // this.photo = [...result.data.photoData];
                this.$store.commit('addphoto',result.data.photoData)

            })
            .catch()
        },
        methods: {
            godetail(index){
                this.$router.push("/photodetail/"+ index)
            }
        },
        
    }
</script>

<style scoped>
.photo img{
    width: 50%;
}


</style>