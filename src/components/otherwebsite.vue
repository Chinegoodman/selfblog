<template>
    <div class="otherwebsite">
        <div class="otherwebsitetitle">老版本</div>
        <div class="linksbox">
            <a class="target_a" v-for="(item,index) in websitesdata" :key="index" :href="item.url" target="_blank">
                <img v-if="item.icon" :src="item.icon" :alt="item.name">
                <span>{{item.name}}</span>
            </a>
        </div>
        <div style="clear: both;"></div>
    </div>
</template>

<script>
    export default {
        name: "otherwebsite",
        data(){
            return{
                websitesdata:[
                    {
                        url:'http://www.bufulaidawo.com',
                        name:'N年前的备份',
                        // icon:'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super'
                    },
                    {
                        url:'http://www.ooo0o.com/old',
                        name:'ooo0o老版本',
                        // icon:'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/common";
    .otherwebsite{
        padding: 0;
        border: 1px solid @bordercolor;
        width: 94%;
        border-radius: 5px;
        background: @white;
        position: absolute;
        bottom: 5px;
        left: 0;
        transform: translateX((3/94)*100%);
        .otherwebsitetitle{
            float: left;
            /*width: 1.3em;*/
            padding: 0.3em;
            border-right: 1px solid @bordercolor;
            color: @linkcolor;
            line-height: 3em;
        }
        .linksbox{
            padding-left: 2.1em;
            min-height: 3.6em;
            display: flex;
            justify-content: space-around;
            align-items: center;
            a{
                /*margin-top: 10px;*/
                color: @linkcolor;
                font-size: @fontsizesmall;
            }
        }
    }
</style>