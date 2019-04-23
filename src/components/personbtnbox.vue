<template>
    <div class="personbtnbox" @mouseover="mouseover()" @mouseout="mouseout()">
        <p v-if="!iflogin&&!ismouseover">{{userdata.nickname}}</p>
        <p v-else-if="iflogin&&!ismouseover">{{userdata.nickname}}</p>

        <div class="btn" :class="{active:!iflogin && this.ismouseover}" @click="login">登录</div>
        <div class="btn" :class="{active:iflogin && this.ismouseover}" @click="logout">退登</div>
    </div>
</template>

<script>
    // todo:设置默认状态为未登录,同时配置vuex
    import eventbus from './../eventbus'
    import {removelocalstorage,getlocalstorage, setlocalstorage} from "../usefuljs";
    export default {
        name: "personbtnbox",
        data(){
            return{
                // nickname:'小庞',
                // isloginstatus:false,
                ismouseover:false,
            }
        },
        methods:{
            mouseover(){
                this.ismouseover = true;
            },
            mouseout(){
                this.ismouseover = false;
            },
            login(){
                // eventbus实现如下
                // eventbus.$emit('mengbanstatus',true)
                // eventbus.$emit('loginregistboxstatus',true)

                this.$store.dispatch('mengbanstatus',true)
                this.$store.dispatch('loginregistboxstatus',true)

            },
            logout(){
                let tuichudenglu = confirm('确定退出登录吗?');
                if(tuichudenglu){
                    removelocalstorage('checkiflogin');
                    removelocalstorage('settuserdata');

                    this.$store.dispatch('checkiflogin',false);
                    let settuserdata = {nickname:'游客'};
                    this.$store.dispatch('settuserdata',settuserdata);
                }
            },
            checkiflogin(){
                if(getlocalstorage('checkiflogin')){
                    this.$store.dispatch('checkiflogin',true);
                    this.$store.dispatch('settuserdata',getlocalstorage('settuserdata'));
                }
            }
        },
        computed:{
            iflogin(){
                return this.$store.state.iflogin
            },
            userdata(){
                return this.$store.state.userdata
            }
        },
        mounted() {
            this.checkiflogin()
        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/common";
    @btnwidthheight:40px;
    .personbtnbox{
        background: @hoverbgcolorr;

        position: fixed;
        right: 5px;
        top: 5px;
        width: @btnwidthheight;
        height: @btnwidthheight;
        border-radius: 50%;
        overflow: hidden;
        p{
            text-align: center;
            line-height: 40px;
            font-size: @fontsizesmall;
            color: #fff;
        }
        div.btn{
            height: 100%;
            width: 100%;
            line-height: @btnwidthheight;
            color: @linkcoloractive;
            position: absolute;
            left: 100%;
            top: 0;
            transition: left 0.3s ease;
            &.active{
                left: 0;
            }
        }
        cursor: pointer;
    }
</style>