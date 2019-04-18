<template>
    <div class="personbtn">
<!--        <p v-if="nickname==null||nickname==''||nickname==undefined">游客</p>-->
        <p v-if="!nickname">游客</p>
        <p v-else>{{nickname}}</p>
    </div>
</template>

<script>
    export default {
        name: "personbtn",
        data(){
            return{
                nickname:'小庞'
            }
        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/common";
    .personbtn{
        background: @hoverbgcolorr;

        position: fixed;
        right: 5px;
        top: 5px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        p{
            text-align: center;
            line-height: 40px;
            font-size: @fontsizesmall;
            color: #fff;
        }
        cursor: pointer;
    }
</style>