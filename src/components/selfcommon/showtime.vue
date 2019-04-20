<template>
    <div class="showtime">
        <h3><span>{{nickname|nicknamemax}},</span>你好,今天周{{timedata.xingqi|zhouji}}</h3>
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
                timeinterval:'',
                nickname:''
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
        filters:{
            zhouji:function(val){
                switch (val) {
                    case 1:
                        return '一';
                    case 2:
                        return '二';
                    case 3:
                        return '三';
                    case 4:
                        return '四';
                    case 5:
                        return '五';
                    case 6:
                        return '六';
                    case 7:
                        return '日';
                }
            },
            nicknamemax:function (val) {
                if(val.length>6){
                    return val.substr(0,4)+'...'
                }else if(!val){
                    return  '游客'
                }else{
                    return  val;
                }
            }
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

<style scoped lang="less">
    @import "./../../assets/common";
    .showtime{
        padding: 15px 15px;
        border: 1px solid @bordercolor;
        /*width: 300px;*/
        width: 94%;
        box-sizing: border-box;
        margin: 35px auto;
        border-radius: 5px;
        background: @white;
        h3>span{
            color: @blue;
            font-size: @fontsizebig;
        }
        h3,p{
            margin-bottom: 5px;
        }
    }
</style>