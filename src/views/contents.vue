<template>
    <div class="contents">
        <div class="contenli" v-for="(item,index) in contentsarr" :key="index">
            <p @click="godetail(item.id)" class="title">{{item.title}}</p>
            <ul class="clearfloat">
                <li v-for="(item2,index2) in item.tags" :key="index2">{{item2}}</li>
            </ul>
            <div class="shortcontent">
                <span @click="godetail(item.id)">简介:{{item.shortcontent}}</span>
            </div>
            <div class="author">by: <span>{{item.author}}</span></div>
        </div>
        <psf-changepage class="zidingyiclassname" @changenumber="getchangenumber" :pagesallnumber="pagesall_number"></psf-changepage>

    </div>
</template>

<script>
    export default {
        name: "contents",
        data(){
            return{
                contentsarr:[],
                // 翻页组件
                pagesall_number:44,//总页数
                currentpagenum:1,
            }
        },
        methods:{
            godetail(id){
                this.$router.push({path:`/home/contentdetails/${id}`})
            },
            getsetdata(){
                let _this=this;
                this.axios.get('/json/contentslist.json',{
                    params:{
                        pagenumber:_this.currentpagenum
                    }
                }).then((data)=>{
                    _this.contentsarr=data.data.contentsarr
                })
            },

            // 翻页组件
            getchangenumber(pagenumber){
                // console.log('父级获取到了')
                // console.log(pagenumber);
                this.currentpagenum = pagenumber;
                this.getsetdata()
            },
        },
        mounted() {
            // 因为翻页组件默认会执行一次回调,并请求一次数据并赋值.所以这里不需要执行getset
            // this.getsetdata();
        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/common";
    .contents{
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
            .shortcontent{
                width: 95%;
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
        /* 自定义翻页组件的自定义样式 */
        .zidingyiclassname{
            /*background:green;*/
        }
    }
</style>