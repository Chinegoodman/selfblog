<template>
    <div class="usefulwebsite">
        <h4>开发人员经常用到的站点,欢迎参与扩充</h4>
        <a class="target_a" v-for="(item,index) in websitesdata" :key="index" :href="item.url" target="_blank">
            <img v-if="item.icon" :src="item.icon" :alt="item.name">
            <span>{{item.name}}</span>
        </a>
        <div style="clear: both"></div>
    </div>
</template>

<script>
    export default {
        name: "usefulwebsite",
        data(){
            return{
                websitesdata:[],
            }
        },
        methods:{
            getsetdata(){
                let _this=this;
                this.axios.get('/json/usefulwebsite.json').then((data)=>{
                    _this.websitesdata=data.data.usefulwebsitearr
                })
            }
        },
        mounted() {
            this.getsetdata()
        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/common";
    .usefulwebsite{
        padding: 15px 15px;
        border: 1px solid @bordercolor;
        /*width: 300px;*/
        width: 94%;
        box-sizing: border-box;
        margin: 8vw auto;
        border-radius: 5px;
        background: @white;
        h4{
            margin-bottom: 10px;
        }
        a{
            float: left;
            margin-bottom: 0.5px;
            margin-top: 5px;
            img{
                margin-right: 1em;
            }
        }
    }
</style>