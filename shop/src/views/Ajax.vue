<template>
    <div>
        <van-button type="primary" @click="getData">获取数据</van-button>
        <van-button type="danger">清空数据</van-button>


    </div>
</template>

<script>
    export default {
        methods: {

            ajax(){
                //ajax原理
                let movieUrl  = ""
                //创建XMLHttpRequest对象
            },
            getData(){
                this.ajax();

            }
        },
        
    }
</script>

<style scoped>

</style>