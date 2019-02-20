<template>
    <div>
        <!-- detail photo -->
        <!-- {{photos[$route.params.index]}} -->
        <router-link to="/photo" v-if="ishow" > 
            <v-touch v-on:swipeleft="next()" class="bg" :style="{backgroundImage:'url('+ photos[iNow].src +')'}"></v-touch>
        </router-link>

    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Vue from "vue";
    import VueTouch from "vue-touch"; 
    Vue.use(VueTouch, {name: 'v-touch'})
    export default {
        data() {
            return {
                iNow:this.$route.params.index,
                ishow :false
            }
        },
        computed: {
            ...mapState(["photos"])
        },
        created() {
            if(this.photos.length==0){
                this.$router.push("/photo")

            }else{
                this.ishow = true;
            }
        },
        methods: {
            next(){
                this.iNow++;
            }
        },
    }
</script>

<style scoped>
.bg{
    position: absolute;
    top:1rem;
    left: 0px;
    bottom: 1rem;
    right: 0px;
    background: black no-repeat center;
    background-size: contain;

}

</style>