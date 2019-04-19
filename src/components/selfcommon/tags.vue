<template>
    <div class="tagsbox">
        <input type="text" placeholder="输入自定义标签" v-model="newtag"><i class="addtagbtn" style="cursor:pointer;" @click="addtag()">添加</i>
        <span title="点击红点删除标签" v-for="(item,index) in tagsdata" :key="index">{{item}}<i class="deletetagbtn" style="cursor:pointer;" @click="deletetag(index)"></i></span>
        <div style="clear: both;"></div>
    </div>
</template>

<script>
    export default {
        props:[
            'tagsdata'
        ],
        name: "tags",
        data() {
            return {
                newtag:'',
                // newtagarr:[],
            }
        },
        methods: {
            addtag(){
                let _this=this;
                if(!_this.newtag)return;
                // debugger;
                this.tagsdata.unshift(this.newtag);
                _this.newtag='';
                this.$emit('getnewtagarr',this.tagsdata);
            },
            deletetag(index){
                this.tagsdata.splice(index,1);
            }
        },
        mounted() {

        }
    };
</script>

<style lang="less" scoped>
    @white:#fff;
    @bordercolor:rgba(0,0,0,.0975);
    @bgcolor:#fafafa;
    @red:#ff4757;
    @basesize:10px;
    .tagsbox{
        padding: @basesize/2 @basesize;
        background: @white;
        border: 1px solid @bordercolor;
        border-radius: 2px;
        display: flex;
        justify-content: flex-start;
        &>input{
            outline: none;
            border-color:@bordercolor;
            margin-right: 0.4em;
            padding: 0 4px;
        }
        &>i.addtagbtn{
            font-size: 12px;
            font-style: normal;
            border: 1px solid @bordercolor;
            padding: 0.1em 0.3em;
            line-height: 2em;
            margin-right: 1em;
        }
        &>span{
            font-size: 12px;
            border: 1px solid @bordercolor;
            padding: 0.1em 0.3em;
            line-height: 2em;
            position: relative;
            margin-right: 0.5em;
            i.deletetagbtn{
                position: absolute;
                left: 100%;
                bottom: 100%;
                width: @basesize;
                height: @basesize;
                border-radius: 50%;
                border: @basesize/4 solid @red;
                box-sizing: border-box;
                transform: translate(-@basesize/2,@basesize/2);
            }
        }
    }
</style>