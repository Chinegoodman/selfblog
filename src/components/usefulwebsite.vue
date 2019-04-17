<template>
    <div class="usefulwebsite">
        <a v-for="(item,index) in websitesdata" :key="index" :href="item.url" target="_blank">
            <img v-if="item.icon" :src="item.icon" :alt="item.name">
            <span>{{item.name}}</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "usefulwebsite",
        data(){
            return{
                websitesdata:[
                    {
                        url:'https://www.baidu.com',
                        name:'百度',
                        icon:'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super'
                    },
                    {
                        url:'https://www.baidu.com',
                        name:'百度',
                        icon:'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super'
                    },
                    {
                        url:'https://www.baidu.com',
                        name:'百度',
                        icon:'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super'
                    },
                    {
                        url:'https://www.baidu.com',
                        name:'百度',
                        icon:'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super'
                    },
                    {
                        url:'https://www.baidu.com',
                        name:'百度',
                        icon:'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/common";
    .usefulwebsite{
    }
</style>