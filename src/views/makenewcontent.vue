<template>
    <div class="makenewcontent">
        <div class="submitbox">
            <div class="title clearfloat"><span>标题:</span><input maxlength="" type="text" v-model="submitdata.title"></div>

            <tags @getnewtagarr="getnewtagarr" :tagsdata="tagsdata"></tags>

            <div class="shortcontentbox clearfloat">
                <span>简介:</span>
                <textarea placeholder="请填写70字以内的简介" maxlength="140" type="text" v-model="submitdata.shortcontent"/>
            </div>
            <div class="contentbox clearfloat">
                <span>内容:</span>
                <div class="quilleditorbox">
                    <quill-editor
                            v-model="content"
                            ref="myQuillEditor"
                            :options="editorOption"
                            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                            @change="onEditorChange($event)">
                    </quill-editor>
<!--                    <div style="float: right;margin: 10px;border: 1px solid rgba(0,0,0,.0975);background: #fff;padding: 0 10px;line-height: 2em" v-on:click="saveHtml">保存编辑区内容</div>-->
                </div>
            </div>
            <div class="author">by: <input type="text" v-model="submitdata.author"></div>
        </div>
        <div class="makenewcontentbtns">
            <div @click="contentsubmit()">提交</div>
            <div @click="gobackindex()">返回首页</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "makenewcontent",
        data(){
            return{
                submitdata:{
                    title:'',
                    // tagsarr:[],
                    shortcontent:'',
                    contentall:'',
                    author:''
                },

                // tags标签组件
                tagsdata:[],

                // quilleditor数据
                content: `<p>你好啊.</p>`,
                editorOption: {},

                modules:{
                    toolbar:[
                        ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
                        ['blockquote', 'code-block'],     //引用，代码块


                        [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
                        // [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
                        [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
                        [{ 'direction': 'rtl' }],             // 文本方向


                        [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题


                        [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
                        [{ 'font': [] }],     //字体
                        [{ 'align': [] }],    //对齐方式


                        ['clean'],    //清除字体样式
                        ['image','video']    //上传图片、上传视频

                    ]
                },
                theme:'snow'
            }
        },
        computed:{
            // quilleditor配置
            editor() {
                return this.$refs.myQuillEditor.quill;
            }
        },
        methods:{
            // tags标签组件
            getnewtagarr(val){
                // this.tagsdata.tagsarr = val;

                this.submitdata.tags = val;
            },

            // quilleditor配置
            onEditorReady(editor) { // 准备编辑器
            },
            onEditorBlur(){}, // 失去焦点事件
            onEditorFocus(){}, // 获得焦点事件
            onEditorChange(){}, // 内容改变事件


            contentsubmit(){
                let _this=this;
                this.submitdata.contentall=this.content
                // debugger;
                if(!_this.submitdata.title){
                    alert('请填写标题');
                    return;
                }
                if(_this.submitdata.length<=0){
                    alert('请至少编辑与文章的相关一个标签');
                    return;
                }
                if(!_this.submitdata.shortcontent){
                    alert('请填写一段简短的文章简介');
                    return;
                }
                if(!_this.submitdata.contentall||_this.submitdata.contentall=='<p>你好啊.</p>'){
                    alert('请认真编辑一篇文章');
                    return;
                }
                if(!_this.submitdata.author){
                    alert('请输入您的笔名或者昵称');
                    return;
                }
                console.log(this.submitdata)
            },
            gobackindex(){
                let confirmstatus = confirm('是否确认要取消编辑并提交??')
                if(confirmstatus){
                    this.$router.push({name:'contents'})
                }
            }


        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/common";
    .makenewcontent{
        width:@rightwidth;
        font-size: @fontsizedefault;
        background-color: @white;
        border: 1px solid @bordercolor;
        padding: 1.5em;
        border-radius: 0.4em;
        margin: 0 auto ;
        box-sizing: border-box;
        .submitbox{
            box-sizing: border-box;
            padding: 1.2em 2em;
            width: 100%;
            background-color: @white;
            border: 1px solid @bordercolor;
            border-radius: 0.4em;
            margin: 0 auto;
            .title{
                text-align: left;
                font-size: @fontsizedefault;
                font-weight: 600;
                text-decoration: underline;
                margin-bottom: 1em;
                cursor: pointer;
                line-height: 1.2em;
                span{
                    float: left;
                    width: 10%;
                    line-height: 32px;
                    border: 1px solid @bordercolor;
                    border-right: none;
                    text-align: center;
                    font-weight: 600;
                }
                input{
                    float: left;
                    outline: none;
                    border-color:@bordercolor;
                    padding: 0 4px;
                    line-height: 30px;
                    width: calc( 90% - 1px ) ;
                    box-sizing: border-box;
                }
            }
            .shortcontentbox{
                margin: 15px 0;
                &>*{
                    float: left;
                    box-sizing: border-box;
                    line-height: 32px;
                }
                span{
                    width: 10%;
                    border: 1px solid @bordercolor;
                    border-right: none;
                }
                textarea{
                    width: calc( 90% - 2px );
                    height: 100px;
                    border-color:@bordercolor;
                    padding: 10px;
                }
            }
            .contentbox{
                margin: 15px 0;
                &>*{
                    float: left;
                    box-sizing: border-box;
                    line-height: 32px;
                }
                span{
                    width: 10%;
                    border: 1px solid @bordercolor;
                    border-right: none;
                }
                .quilleditorbox{
                    width: 90%;

                    .ql-editor{
                        min-height: 380px;
                    }
                }
            }
            .author{
                padding-right: 100px;
                text-align: right;
                input{
                    outline: none;
                    border-color:@bordercolor;
                    padding: 0 4px;
                    line-height: 1.5em;
                    width: 200px;
                }
            }
        }
        .makenewcontentbtns{
            margin: 15px auto 0;
            display: flex;
            justify-content: center;
            &>div{
                border: 1px solid @bordercolor;
                border-radius: 5px;
                padding: 5px 10px;
                cursor: pointer;
            }
            &>div:nth-child(1){
                margin-right: 20px;
                color: @linkcoloractive;
                font-weight: 600;
            }
        }

        @bordercolor:rgba(0,0,0,.0975);
    }
</style>