<template>
    <div class="feedback">
        <i>x</i>
        <p>有意见想反馈</p>
        <div class="box">
            <textarea :maxlength="maxlength" placeholder="欢迎提笔给予意见建议,谢谢">{{feedback}}</textarea>
            <div class="btns">
                <div @click="submitfeedback">提交反馈</div>
                <div @click="cancle">暂时没啥要说的</div>
                <div class="smallbtn" @click="feedbackhide">近期不再显示</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "feedback",
        data(){
            return{
                maxlength:80,
                feedback:''
            }
        },
        methods:{
            submitfeedback(){

            },
            cancle(){

            },
            feedbackhide(){

            }
        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/common.less";
    .feedback{
        position: fixed;
        right: -500px;
        bottom: 10%;
        width: 500px;
        height: 20px;
        border-radius: 5px;
        background: @hoverbgcolorr;
        transition: all linear @transtime;
        &:hover{
            height: 300px;
            right:1px;
        }
        &>i{
            position: absolute;
            left:0 ;
            top:0 ;
        }
        &>p{
            position: absolute;
            left:-8% ;
            top:0 ;
            background-color: rgba(255,255,255,0.8);
            border: 1px solid @bordercolor;
            font-size: @fontsizesmall;
            line-height: 2em;
            padding: 0 0.4em;
            border-radius: 5px;
        }
        .box{
            textarea{
                width: 400px;
                height: 190px;
                margin: 30px auto 0;
                padding: 10px;
                display: block;
                border-radius: 5px;
                outline: none;
            }
            .btns{
                display: flex;
                justify-content: space-around;
                padding: 15px 0 ;
                &>div{
                    background-color: @white;
                    border: 1px solid @bordercolor;
                    line-height: 1.6em;
                    padding: 0 0.6em;
                    border-radius: 0.5em;
                    cursor: pointer;
                    color: @blue;
                }
                &>div.smallbtn{
                    background-color: #ccc;
                    border: 1px dashed @bordercolor;
                    color: @white;
                }
            }
        }
    }
</style>