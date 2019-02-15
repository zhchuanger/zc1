<template>
    <header :style="{background:obj.bgColor}">
        <span class="goHome">首页</span>
        {{obj.name}}
    </header>
</template>

<script>
    export default {
        props:["obj"]
        
    }
</script>

<style scoped>
header{
    height: 1rem;
    background: #ff0036;
    position: fixed;
    text-align: center;
    top: 0px;
    left: 0;
    width: 100%;
    line-height: 1rem;
    color: #fff;
}
.goHome{
    position: absolute;
    left: 0.1rem;
    top:50%;
    transform: translateY(-50%);
}

</style>