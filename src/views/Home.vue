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
            <router-view></router-view>

        </div>
        <div style="clear: both;"></div>
        <!-- 音乐播放模块-->
        <newmusicbox></newmusicbox>

<!--        用户登录及推出按钮-->
        <personbtn></personbtn>
        <!-- 登录用户才有的权限,通过vuex去做登陆判断后来控制他是否显示-->
        <homeordistribution></homeordistribution>
        <!--反馈模块-->
        <feedback></feedback>
    </div>
</template>

<script>

    import otherwebsite from './../components/otherwebsite'
    import usefulwebsite from './../components/usefulwebsite'
    import newmusicbox from './../components/selfcommon/newmusicbox'
    import showtime from './../components/selfcommon/showtime'
    import homeordistribution from './../components/homeordistribution'
    import feedback from './../components/feedback'
    import personbtn from './../components/personbtn'
    export default {
        name: "Home",
        components:{homeordistribution,feedback,showtime,usefulwebsite,newmusicbox,otherwebsite,personbtn},
        data(){
            return{
                leftstatus:true,
                lefthidebgnstatus:false
            }
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
                width: 100vw;
            }
        }
    }
</style>