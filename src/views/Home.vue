<template>
    <div class="wrap">
        <div class="left">
            <showtime></showtime>
            <usefulwebsite></usefulwebsite>
            <otherwebsite></otherwebsite>
        </div>
        <div class="right">
            <router-view></router-view>

        </div>

        <!-- 音乐播放模块-->
        <newmusicbox></newmusicbox>
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
    export default {
        name: "Home",
        components:{homeordistribution,feedback,showtime,usefulwebsite,newmusicbox,otherwebsite}
    }
</script>

<style scoped lang="less">

</style>