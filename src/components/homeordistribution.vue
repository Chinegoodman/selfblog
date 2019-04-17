<template>
    <div class="homeordistributionbox">
        <router-link v-if="$route.meta.name=='makenewcontent'" :to="{name:'contents'}">返回首页</router-link>
        <router-link v-if="$route.meta.name=='contentdetails'" :to="{name:'contents'}">返回首页</router-link>
        <router-link v-if="$route.meta.name=='contents'" :to="{name:'makenewcontent'}">发布新内容</router-link>
    </div>
</template>

<script>
    export default {
        name: "homeordistribution",
        data(){
          return{
              pagemark:'',
          }
        },
        mounted() {
            // if(this.$router.name=='contents'){
            //     this.pagemark = 'makenewcontent'
            // }
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/common.less";
    .homeordistributionbox{
        position: fixed;
        right: -50px;
        top: 30%;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: @hoverbgcolorr;
        line-height: 100px;
        text-align: center;
        transition: all linear @transtime;
        &:hover{
            right:3px;
        }
        a{
            display: block;
            width: 100%;
            height: 100%;
        }
    }
</style>