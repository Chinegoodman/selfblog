<template>
  <div class="home">
      <tags @getnewtagarr="getnewtagarr" :tagsdata="tagsdata"></tags>
      <div class="edit_container">
          <quill-editor
                  v-model="content"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                  @change="onEditorChange($event)">
          </quill-editor>
          <button v-on:click="saveHtml">保存</button>
      </div>
      <div class="hoverbgcolorl">
        <p>daf</p>
        <p>daf</p>
        <p>daf</p>
        <p>daf</p>
        <p>daf</p>
        <p>daf</p>
        <p>daf</p>
        <p>daf</p>
    </div>
      <div class="hoverbgcolorr">
          <p>daf</p>
          <p>daf</p>
          <p>daf</p>
          <p>daf</p>
          <p>daf</p>
          <p>daf</p>
      </div>
      <psf-changepage class="zidingyiclassname2" @changenumber="getchangenumber" :pagesallnumber="pagesall_number"></psf-changepage>

      <psf-uploadfile @getchilddata="saveupfiledata" :upfilesize="psf_upfileresetdata.upfilesize" :labetext="psf_labetext" :filetype="psf_upfileresetdata.filetype" :fileIdName="psf_upfileresetdata.fileIdName" :upfileurl="psf_upfileresetdata.upfileurl"></psf-uploadfile>

      <musicbox :musicdata="musicdata"></musicbox>

      <newmusicbox></newmusicbox>

      <div style="position: fixed;left: 20px; top: 20px; width: 40vw;height: 40vw;">
          <canvas id="abcd"></canvas>
      </div>

      <div id="musiccvsbox" ref="musiccvsbox" style="position: fixed;right: 20px; top: 20px; width: 40vw;height: 40vw;">
          <canvas ref="musiccvs" id="musiccvs"></canvas>
      </div>
      <audio style="position: fixed;right: 20px; bottom: 20px;" controls ref="musicsrc" preload="true" src="https://www.ooo0o.com/music/WhenIsawyouIfellinlove.mp3"></audio>
      <!-- <audio style="position: fixed;right: 20px; bottom: 20px;" controls ref="musicsrc" preload="true" src="./../../public/ttt.mp3"></audio> -->
  </div>
</template>
<script>
    // @ is an alias to /src
  export default {
    name: 'home',
    components: {
      // HelloWorld
    },
    data(){
        return{
            // quilleditor数据
            content: `<p>hello world</p>`,
            editorOption: {},
            // tags标签组件
            tagsdata:[],
            // 翻页组件
            pagesall_number:18,//总页数
            // 文件上传组件的参数
            psf_upfileresetdata:{
                // 可能的6种文件类型
                // image/png,image/jpeg,image/gif
                // text/html
                // application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
                // application/vnd.openxmlformats-officedocument.wordprocessingml.document
                // text/plain 比如txt文档
                // application/x-zip-compressed 比如.zip压缩文件
                filetype:'*',
                fileIdName:'fileinputWEIYIDEIdName',
                upfileurl:'https://www.ooo0o.com/tp5/public/home/index/qiniuUpload',
                upfilesize:20,
            },
            psf_labetext:'请选择要上传的文件',
            // 音乐模块
            musicdata:{
                title:'😆😳你好，这是我自己收藏的音乐🎶(暂时为第三方的音乐列表)',
                musilistapi:'https://www.egtch.com/t_works/Vuedata/data.php'
            },
            cvsparams:{
                // 选择器==画布宽高值==中间的字==中间字大小==时间字体大小==圆盘背景色==背景图片==中间字颜色==时间字体颜色==画布背景色(默认透明)==圆盘的outline色
                selectdom:'#abcd',      //选择器
                cvswh:'760',      //画布宽高值
                word:'庞',      //中间的字
                wordsize:'',      //中间字大小
                timesize:'',      //时间字体大小
                bgclolr:'',      //圆盘背景色
                bgpic:'',      //背景图片
                wordcolor:'',      //中间字颜色
                timecolor:'',      //时间字体颜色
                boxbgclolr:'',      //画布背景色(默认透明)
                outlinecolor:'',      //圆盘的outline色
                currentboxcolor:''      //当前时间框的填充色
            },
            // musiccvsparams : {
            //     cvsdom:this.$refs.musiccvs,//画布节点元素
            //     size:800,//画布原始默认宽高
            //     sourcedom:this.$refs.musicsrc,//音频源节点元素
            //     bgcolor:'rgba(255,255,0,1)'//画布圆圈背景颜色
            // }
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
            this.tagsdata.tagsarr = val;
        },

        // quilleditor配置
        onEditorReady(editor) { // 准备编辑器
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
        saveHtml:function(event){
            alert(this.content);
        },

        // 翻页组件
        getchangenumber(pagenumber){
            // console.log('父级获取到了')
            console.log(pagenumber)
        },

        // 文件上传组件
        saveupfiledata(fileDataObj){
            console.log('父级获取到了')
            console.log(fileDataObj)
            // console.log(fileDataObj.fileIdName)
            this.psf_labetext=fileDataObj.fileData.name
        }
    },
    mounted() {
        this.fashionclock(this.cvsparams);
        let _this=this;
        _this.cvsgetready(_this.$refs.musiccvs,800,_this.$refs.musicsrc,'rgba(255,255,0,0.8)')
    }
  }
</script>
<style lang="less" scoped>
    @import "./../assets/common.less";
    .hoverbgcolorl{
        background: @hoverbgcolorl
    }
    .hoverbgcolorr{
        background: @hoverbgcolorr
    }


    /* 自定义翻页组件的自定义样式 */
    .zidingyiclassname2{
        background:green;
    }
    // 自定义文件上传组件
    .psf-upfile-box{
        width: 800px;
        height: 150px;
        background: red;
    }
    .zidingyiclassname{
        width: 300px;
        height: 350px;
        background: #0ff;
    }


    // 自定义画布实现音频显示
    #musiccvsbox {
        margin: 0 auto;
        position: relative;
        /* background-color: royalblue; */
        background: url('http://ooo0o.com/4eafc201905200012388758.jpg') center center no-repeat;
        background-size: cover;
    }
    
    #musiccvs {
        display: block;
        /* animation: rotate 6s linear infinite; */
        position: absolute;
        left: 0;
        top: 0;
        transform-origin: 0 0;
    }
    
    @keyframes rotate {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }
</style>
