<template>
    <div class="contentdetails">
        <p>内容id :{{$route.params.id}}</p>
        <div class="contenli">
            <p class="title">{{itemdata.title}}</p>
            <ul class="clearfloat">
                <li v-for="(item,index) in itemdata.tags" :key="index">{{item}}</li>
            </ul>
            <div class="contentdetails">
                <div>{{itemdata.contentall}}</div>
            </div>
            <div class="author">by: <span>{{itemdata.author}}</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "contentdetails",
        data(){
            return{
                itemdata:''
            }
        },
        methods:{
            getsetdata(){
                let _this=this;
                this.axios.get('/json/contentdetails.json',{
                    params:{
                        listid:_this.$route.params.id
                    }
                }).then((data)=>{
                    _this.itemdata=data.data
                })
            },
        },
        mounted() {
            this.getsetdata();
        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/common";
    .contentdetails{
        width:@rightwidth;
        font-size: @fontsizedefault;
        background-color: @white;
        border: 1px solid @bordercolor;
        padding: 1.5em;
        border-radius: 0.4em;
        margin: 0 auto ;
        box-sizing: border-box;
        .contenli{
            box-sizing: border-box;
            padding: 1.2em 2em;
            width: 100%;
            background-color: @white;
            border: 1px solid @bordercolor;
            border-radius: 0.4em;
            margin: 0 auto 2em;
            .title{
                text-align: left;
                font-size: @fontsizedefault;
                font-weight: 600;
                text-decoration: underline;
                margin-bottom: 1em;
                cursor: pointer;
            }
            ul{
                li{
                    float: left;
                    margin-right: 1.5em;
                    font-size: @fontsizesmall;
                    font-style: italic;
                    border: 1px dashed @bordercolor;
                    padding: 0 1em;
                    line-height: 1.5em;
                    border-radius: 0.3em;
                    cursor: pointer;
                }
            }
            .contentdetails{
                width: 100%;
                min-height: 4em;
                border: 1px solid @bordercolor;
                padding: 1em;
                border-radius: 0.3em;
                text-align: left;
                margin-top: 0.7em;
                span{
                    text-decoration: underline;
                    font-size: @fontsizedefault;
                    line-height: 1.2em;
                    cursor: pointer;
                }
            }
            .author{
                margin-top: 0.4em;
                text-align: right;
                width: 95%;
                span{
                    font-style: italic;
                    font-weight: 600;
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
        }
    }
</style>