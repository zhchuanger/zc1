<template>
    <div>
        <!-- detail photo -->
        {{photos[$route.params.index]}}
        <div class="bg" :style="{background:'url('+ photos[$route.params.index].src +')'}"></div>


    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        computed: {
            ...mapState(["photos"])
            
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
    background: black;
}

</style>