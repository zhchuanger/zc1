<template>
    <div id="footer" :style="{background:color}">
        <ul>
            <li v-for="(obj,index) in menu" :key="index">
                <router-link :to="obj.path" @click.native="change(obj)">{{obj.name}}</router-link>

                <!-- :表示取到元素 -->
            </li>
            
        </ul>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                bg:"#ff0036"
            }
        },
        props:["menu","color"],
        methods: {
            change(obj){
                this.bg = obj.bgColor;
                //通过emit向app父组件中传参this.Bg
                this.$emit("changeBg",obj);

            }
            
        },
        
    }
</script>

<style scoped>
#footer{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 1rem;
    background: #ff0036;
    width: 100%;
}
#footer ul{
    display: flex;
}
li{
    flex-grow: 1;
    color: #fff;
    line-height: 1rem;
    text-align: center;
}
#footer a{
    color: black;
    outline: none;

} 
#footer a.router-link-active{
    color:#fff;
}




</style>