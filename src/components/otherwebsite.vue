<template>
    <div class="otherwebsite">
        <a class="target_a" v-for="(item,index) in websitesdata" :key="index" :href="item.url" target="_blank">
            <img v-if="item.icon" :src="item.icon" :alt="item.name">
            <span>{{item.name}}</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "otherwebsite",
        data(){
            return{
                websitesdata:[
                    {
                        url:'http://www.ooo0o.com',
                        name:'老款',
                        icon:'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>