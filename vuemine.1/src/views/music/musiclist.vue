<template>
    <div>
        <aplayer :music="list[0]" :list="list" v-if="ishow" :showLrc="true"/>
        

    </div>
</template>

<script>
    import Aplayer from 'vue-aplayer';
    import Axios from "axios";
    export default {
        data(){
            return {
                list:[],
                ishow :false

            }
        },
        computed: {
            music(){
                return this.list[0];
            }
        },
        components:{
            Aplayer
        },
        created(){
            Axios.get('/data/musicdata.json')
            .then((result)=>{
                result.data.musicData.forEach(obj =>{
                    let obj1 ={
                        title:obj.title,
                        artist:obj.author,
                        src:obj.src,
                        pic:obj.musicImgSrc,
                        lrc:`http://localhost:8080/${obj.lrc}`
                    }
                    this.list.push(obj1);
                });
                this.ishow = true;

            })

        }
    }
</script>

<style scoped>

</style>