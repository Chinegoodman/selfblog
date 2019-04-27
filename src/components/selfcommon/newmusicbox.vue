<template>
    <div class="newmusicbox" :class="{hide:!musicboxdata.musicboxstatus}">

        <div class="title"><span>{{musicboxdata.currentname}}</span><span>>>>>{{musicboxdata.currentsinger}}</span></div>
        <div class="musiccontrols">
            <p @click="musicboxdata.musiclistbox=!musicboxdata.musiclistbox">歌单</p>
            <p @click="prevsong(musicboxdata.musicindex)">上一首</p>
            <p v-if="!musicboxdata.musicstatus" @click="playmusic">播放</p>
            <p v-else @click="pausemusic">暂停</p>
            <p @click="nextsong(musicboxdata.musicindex)">下一首</p>
            <p>
                <span @click="musicboxdata.voicestatus=!musicboxdata.voicestatus">音量</span>
                <span class="voicecontrol" v-show="musicboxdata.voicestatus">
                    <i @click="changevoice(item)" v-for="(item,index) in musicdefaultcontrols.voicelevel" :key="index" :class="{active:parseFloat(item)<=parseFloat(musicboxdata.voicelevel)}">{{item}}</i>
                </span>
            </p>
        </div>
        <div class="musiclistbox" v-show="musicboxdata.musiclistbox">
            <div class="musiclistboxscroll">
                <div class="title">自己存数据库的歌曲</div>
                <div class="clearfloat">
                    <p>状态</p>
                    <p>歌名</p>
                    <p>歌手</p>
                </div>
                <div class="clearfloat" v-for="(item,index) in musicdata" :key="index">
                    <p v-if="item.musicurl != musicboxdata.musicurl" @click="musicplaythis(index)" style="cursor: pointer;">听一下</p>
                    <!--                <p v-else style="background:#fafafa;color:#003567;">正听..</p>-->
                    <p v-else style="background:#003567;color:#fafafa;">正听..</p>
                    <p>{{item.name}}</p>
                    <p>{{item.singer}}</p>
                </div>
                <div class="tips">没有你想听的歌吗?快点击右侧的"有意见..."来反馈吧</div>
            </div>
        </div>

        <div @click="musicboxdata.musicboxstatus=!musicboxdata.musicboxstatus" class="musicstatus" :class="{active:musicboxdata.musicstatus}"></div>
        <audio @ended="musicend" autoplay preload="auto" controls ref="audio" class="musicaudio" :src="musicboxdata.musicurl"></audio>
    </div>
</template>

<script>
    export default {
        name: "newmusicbox",
        data(){
            return{
                musicdefaultcontrols:{
                  voicelevel:[
                      '100%','90%','80%','70%','60%','50%','40%','30%','20%','10%','5%','0%'
                  ]
                },
                musicboxdata:{
                    musicboxstatus:false,
                    musicstatus:false,
                    // currentname:'偏爱',
                    // currentsinger:'张芸京',
                    // musicurl:'http://ooo0o.com/7dbc5201904151803365420.mp3',
                    // musicindex:3,
                    currentname:'',
                    currentsinger:'',
                    musicurl:'',
                    musicindex:'',

                    voicestatus:false,
                    musiclistbox:false,
                    voicelevel: '20%',
                },
                musicdata:[],
            }
        },
        methods:{
            getsetmusicdata:function () {
                let _this=this;
                this.changevoice('5%');
                this.axios.get('/json/musiclist.json').then((data)=>{
                    _this.musicdata = data.data.listarr;
                    let randomnum = data.data.listarr.length;
                    let randomindex = parseInt(Math.random()*randomnum);
                    // console.log(randomindex);
                    _this.musicboxdata.currentname = _this.musicdata[randomindex].name;
                    _this.musicboxdata.currentsinger = _this.musicdata[randomindex].singer;
                    _this.musicboxdata.musicurl = _this.musicdata[randomindex].musicurl;
                    _this.musicboxdata.musicindex = randomindex;
                    setTimeout(this.pausemusic,10)
                })
            },
            playmusic(){
                this.$refs.audio.play();
                this.musicboxdata.musicstatus=true;
            },
            pausemusic(){
                this.$refs.audio.pause();
                this.musicboxdata.musicstatus=false;
            },
            prevsong(index){
                this.pausemusic();
                let _this = this;
                let newindex ='';
                if(index==0){
                    newindex = _this.musicdata.length-1;
                }else {
                    newindex = index - 1;
                }
                _this.musicboxdata.currentname = _this.musicdata[newindex].name;
                _this.musicboxdata.currentsinger = _this.musicdata[newindex].singer;
                _this.musicboxdata.musicurl = _this.musicdata[newindex].musicurl;
                _this.musicboxdata.musicindex = newindex;
                _this.playmusic();
            },
            nextsong(index){
                this.pausemusic();
                let _this = this;
                let newindex ='';
                if(index==_this.musicdata.length-1){
                    newindex = 0;
                }else {
                    newindex = index + 1;
                }
                _this.musicboxdata.currentname = _this.musicdata[newindex].name;
                _this.musicboxdata.currentsinger = _this.musicdata[newindex].singer;
                _this.musicboxdata.musicurl = _this.musicdata[newindex].musicurl;
                _this.musicboxdata.musicindex = newindex;
                _this.playmusic();
            },
            musicend(){
                this.nextsong(this.musicboxdata.musicindex)
            },
            changevoice(voicelevel){
                this.musicboxdata.voicelevel = voicelevel;
                this.$refs.audio.volume = parseFloat(voicelevel)/100;
            },
            musicplaythis(index){
                this.pausemusic();
                let _this=this;
                console.log(index);
                _this.musicboxdata.currentname = _this.musicdata[index].name;
                _this.musicboxdata.currentsinger = _this.musicdata[index].singer;
                _this.musicboxdata.musicurl = _this.musicdata[index].musicurl;
                _this.musicboxdata.musicindex = index;
                this.playmusic()
            }
        },
        mounted() {
            this.getsetmusicdata()
        }
    }
</script>

<style scoped lang="less">
    @import "./../../assets/common";
    .newmusicbox{
        audio.musicaudio{
            display: none;
        }
        font-size: 15px;
        position: fixed;
        left: 0;
        bottom: 135px;
        z-index: 100;
        padding: 0.4em;
        border: 1px solid @bordercolor;
        width: 24em;
        height: 4em;
        border-radius: 5px;
        border-bottom-right-radius: 2.2em;
        border-top-right-radius: 2.2em;
        background: @white;


        transition: x @transtimeslow;
        &.hide{
            left: -23em;
        }
        .title,.musiccontrols{
            width: 20em;
            line-height: 2em;
        }
        .title{
            height: 2em;
            overflow: hidden;
            width: 100%;
        }
        .musiccontrols{
            display: flex;
            justify-content: space-around;
            &>p{
                cursor: pointer;
                border: 1px solid @bordercolor;
                padding: 0.1em 0.4em;
                line-height: 1.2em;
                height: 1.2em;

                position: relative;
                z-index: 100;
                &>.voicecontrol{
                    position: absolute;
                    left: 0;
                    bottom: 100%;
                    width: 100%;
                    border: 1px solid @bordercolor;
                    background-color: @white;
                    i{
                        display: block;
                        background:@white;
                        &.active{
                            background: @hoverbgcolorl;
                        }
                    }
                }
            }
        }
        .musiclistbox{
            font-size: @fontsizesmall;
            position: absolute;
            bottom: 7em;
            left: 1em;
            width: 93%;
            border: 1px solid @bordercolor;
            &:after{
                content: '';
                width: 0px;
                height: 0px;
                border: 1em solid transparent;
                border-top-width: 4em;
                border-top-color: @bordercolor;
                position: absolute;
                top: 100%;
                left: 2%;
            }
            .musiclistboxscroll{
                max-height: calc( 100vh - 9em - 145px );
                width: 100%;
                overflow-y: scroll;
                padding: 0 1em;
                background: @white;
                box-sizing: border-box;
            }
            .title{
                font-weight: 600;
                line-height: 2em;
                border-bottom: 1px solid @bordercolor;
                padding: 1em 0;
            }
            .tips{
                line-height: 1.2em;
                border-bottom: 1px solid @bordercolor;
                padding: 0.4em 0 1em;

            }
            &>div{
                width: 100%;
                p{
                    float: left;
                    line-height: 2em;
                    height: 2em;
                    overflow: hidden;
                    box-sizing: border-box;
                }
                p:nth-child(1){
                    width: 16%;
                    border-right: 1px solid @bordercolor;
                    border-bottom: 1px solid @bordercolor;
                    border-left: 1px solid @bordercolor;
                }
                p:nth-child(2){
                    width: 42%;
                    border-right: 1px solid @bordercolor;
                    border-bottom: 1px solid @bordercolor;
                }
                p:nth-child(3){
                    width: 42%;
                    border-bottom: 1px solid @bordercolor;
                    border-right: 1px solid @bordercolor;
                }
            }
        }

        .musicstatus{
            width: 4em;
            height: 4em;
            border-radius: 50%;
            background: @hoverbgcolorr;
            background: url("./../../assets/music.png") center transparent;
            background-size: cover;
            position: absolute;
            right: 2px;
            bottom: 50%;
            transform: translateY(50%);
            cursor: pointer;

            &.active{
                animation: scale 2.3s linear infinite;
            }
        }
    }
    @keyframes rotate {
        from{
            transform: translateY(50%) rotate(0deg);
        }
        to{
            transform: translateY(50%) rotate(360deg);
        }
    }
    @keyframes scale {
        0%{
            transform: translateY(50%) scale(1,1) rotate(0deg);
        }
        25%{
            transform: translateY(50%) scale(0.9,0.9) rotate(90deg);
        }
        50%{
            transform: translateY(50%) scale(1,1) rotate(180deg);
        }
        75%{
            transform: translateY(50%) scale(1.1,1.1) rotate(270deg);
        }
        100%{
            transform: translateY(50%) scale(1,1) rotate(360deg);
        }
    }
</style>