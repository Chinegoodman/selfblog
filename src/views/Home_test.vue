<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="hoverbgcolorl">
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
                upfileurl:'http://www.ooo0o.com/tp5/public/home/index/qiniuUpload',
                upfilesize:20,
            },
            psf_labetext:'请选择要上传的文件',

            // 音乐模块
            musicdata:{
                title:'😆😳你好，这是我自己收藏的音乐🎶(暂时为第三方的音乐列表)',
                musilistapi:'http://www.egtch.com/t_works/Vuedata/data.php'
            }
        }
    },
    methods:{
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
</style>












<!--
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
-->
