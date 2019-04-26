<template>
    <div class="wrap">
        <div class="left" :class="{widthzero:!leftstatus}" @mouseover="lefthidebgnstatus=true" @mouseout="lefthidebgnstatus=false">
            <showtime></showtime>
            <usefulwebsite></usefulwebsite>
            <otherwebsite></otherwebsite>

            <div v-if="!leftstatus" class="leftshowbgn" @click="leftstatus=!leftstatus"></div>
            <div v-if="leftstatus" :class="{active:lefthidebgnstatus}" class="lefthidebgn" @click="leftstatus=!leftstatus"></div>
        </div>
        <div class="right" :class="{widthbigger:!leftstatus}">
            <div class="right_toptitle">{{right_toptitle}}</div>
            <div class="rightwrap">
                <div class="righthiddenscroll">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div style="clear: both;"></div>
        <!-- 音乐播放模块-->
        <newmusicbox></newmusicbox>

<!--        用户登录及退出按钮-->
        <personbtnbox></personbtnbox>
        <loginregist></loginregist>
        <!-- 登录用户才有的权限,通过vuex去做登陆判断后来控制他是否显示-->
        <homeordistribution></homeordistribution>
        <!--反馈模块-->
        <feedback></feedback>

<!--        添加一个蒙板 组件-->
        <mengban :mengbanstatus="mengbanstatus"></mengban>
    </div>
</template>

<script>
    import otherwebsite from './../components/otherwebsite'
    import usefulwebsite from './../components/usefulwebsite'
    import newmusicbox from './../components/selfcommon/newmusicbox'
    import showtime from './../components/selfcommon/showtime'
    import homeordistribution from './../components/homeordistribution'
    import feedback from './../components/feedback'
    import personbtnbox from './../components/personbtnbox'
    import loginregist from './../components/loginregist'
    import {removelocalstorage,getlocalstorage, setlocalstorage} from "../usefuljs";
    export default {
        props:['mengbanstatus'],
        name: "Home",
        components:{homeordistribution,feedback,showtime,usefulwebsite,newmusicbox,otherwebsite,personbtnbox,loginregist},
        data(){
            return{
                leftstatus:true,
                lefthidebgnstatus:false,
                right_toptitle:'你好,站点部分接口有待调试中,可以听一下我收藏的歌曲啊',
            }
        },
        methods:{
          // checkiflogin(){
          //     setlocalstorage('checkiflogin',true);
          //     if(console.log(getlocalstorage('checkiflogin'))){
          //         this.$store.dispath('checkiflogin',true);
          //         this.$store.dispath('settuserdata',getlocalstorage('settuserdata'));
          //     }
          // }
        },
        mounted() {
            // this.checkiflogin()
        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/common";
    .wrap{
        height: 100%;
        width: 100%;
        overflow: hidden;
        .left{
            width: 30%;
            box-sizing: border-box;
            border-right: 1px solid @bordercolor;
            height: 100%;
            float: left;
            position: relative;
            &.widthzero{
                /*width: 0;*/
                margin-left:-30%;
            }

            transition: margin-left @transtimeslow linear;

            .leftshowbgn,.lefthidebgn{
                position: absolute;
                top: 50%;
                width: 0px;
                height: 0px;
                border: 25px solid transparent;
                transform: translateY(-50%);
                cursor: pointer;
            }
            .leftshowbgn{
                border-left-color: @bordercolor;
                right: -50px;
            }
            .lefthidebgn{
                border-right-color: @bordercolor;
                right: 0px;
                display: none;
                &.active{
                    display: block;
                }
            }
        }
        .right{
            width: 70%;
            height: 100%;
            overflow: hidden;
            float: left;

            transition: width @transtimeslow linear;
            &.widthbigger{
                width: 100%;
            }
            font-size: @fontsizebig;
            .right_toptitle{
                font-weight: 500;
                background-color: @white;
                border: 1px solid @bordercolor;
                width: @rightwidth;
                padding: 0.5em 0;
                border-radius: 0.4em;
                margin: 1em auto;
                line-height: 32px;
            }
            .rightwrap{
                width: 100%;
                height: calc(100% - 62px - 56px);
                /*background-color: #ccc;*/
                overflow: hidden;

                .righthiddenscroll{
                    width: calc( 100% + 20px );
                    height: 100%;
                    border-top: 0.5em solid transparent;
                    border-bottom: 0.5em solid transparent;
                    box-sizing: border-box;
                    overflow-y: scroll;
                }
            }
        }
    }
</style>