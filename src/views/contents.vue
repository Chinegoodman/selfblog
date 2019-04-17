<template>
    <div>
        <p @click="godetail(1)">首页内容列表展示</p>
        <p @click="godetail(2)">首页内容列表展示</p>
        <p @click="godetail(3)">首页内容列表展示</p>
        <p @click="godetail(4)">首页内容列表展示</p>
        <p @click="godetail(5)">首页内容列表展示</p>
        <p @click="godetail(6)">首页内容列表展示</p>
    </div>
</template>

<script>
    export default {
        name: "contents",
        methods:{
            godetail(id){
                this.$router.push({path:`/home/contentdetails/${id}`})
            }
        }
    }
</script>

<style scoped>

</style>