<template>
    <div>
        <strong>星期{{timedata.xingqi}}</strong>
        <p>{{timedata.nian}}年{{timedata.yue}}月{{timedata.ri}}日</p>
        <span>{{timedata.shi}}时{{timedata.fen}}分{{timedata.miao}}秒</span>
    </div>
</template>

<script>
    export default {
        name: "showtime",
        data(){
            return{
                timedata:{
                    nian:'',
                    yue:'',
                    ri:'',
                    xingqi:'',
                    shi:'',
                    fen:'',
                    miao:'',
                },
                timeinterval:''
            }
        },
        methods:{
            getsetcurrenttime(){
                let time = new Date();
                this.timedata.nian = time.getFullYear();
                this.timedata.yue = time.getMonth()+1;
                this.timedata.ri = time.getDate();
                this.timedata.xingqi = time.getDay();
                this.timedata.shi = time.getHours();
                this.timedata.fen = time.getMinutes();
                this.timedata.miao = time.getSeconds();
            },
        },
        mounted() {
            let _this = this;
            this.timeinterval = setInterval(_this.getsetcurrenttime,500)
        },
        beforeDestroy() {
          clearInterval(this.timeinterval);
        }
    }
</script>

<style scoped>

</style>