<template>
    <div class="loginregistbox" v-if="loginregistboxstatus">
        <div class="loginregist">
            <transition name="scale-fade">
                <div class="loginbox" v-if="leftstatus">
                    <h3>用户登录</h3>
                    <div class="clearfloat"><span>注册邮箱:</span><input type="email" v-model="email"></div>
                    <div class="clearfloat"><span>密码:</span><input type="password" v-model="password"></div>
                    <hr style="visibility: hidden;">
                    <div class="submitbtn" @click.stop="login()">登录</div>
                    <hr style="visibility: hidden;">
                    <div class="tips clearfloat"><span>还没有账号吗?来<i @click="leftstatus=false;rightstatus=true">注册一下</i>吧</span></div>
                </div>
            </transition>
            <transition name="scale-fade">
                <div class="registbox" v-if="rightstatus">
                    <h3>用户注册</h3>
                    <div class="clearfloat"><span>注册邮箱:</span><input type="email" v-model="regist_email"></div>
                    <div class="clearfloat" style="position: relative;"><span>验证码:</span><input type="text" v-model="regist_keyword"><span @click="get_keyword" style="position: absolute;right: 0;top: 0;margin: 0;width: auto;cursor: pointer;background-color: #ccc;color: #fff;padding: 0 0.4em;">获取验证码</span></div>
                    <div class="clearfloat"><span>密码:</span><input type="password" v-model="regist_password"></div>
                    <hr style="visibility: hidden;">
                    <div class="submitbtn" @click.stop="regist()">注册</div>
                    <hr style="visibility: hidden;">
                    <div class="tips clearfloat"><span>已有账号?快来<i @click="leftstatus=true;rightstatus=false">登录</i>吧</span></div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    // import eventbus from './../eventbus'
    import {removelocalstorage,getlocalstorage, setlocalstorage} from "../usefuljs";
    export default {
        name: "loginregist",
        data(){
            return{
                leftstatus:true,
                rightstatus:false,

                // loginregistboxstatus:false,
                // 登录数据
                email:'',
                password:'',

                // 注册数据
                regist_email:'',
                regist_keyword:'',
                regist_password:'',
            }
        },
        methods:{
            login(){
                let _this=this;
                this.axios.post('/blog/public/index.php/login',{
                    email:this.email,
                    password:this.password,
                }).then(function (response) {
                    if(response.data.code==0){
                        alert(response.data.msg);
                        return;
                    }
                    setlocalstorage('checkiflogin',true);
                    // setlocalstorage('settuserdata',{nickname:response.data.nickname});
                    setlocalstorage('settuserdata',{nickname:'已登陆',id:response.data.data.id});
                    _this.$store.dispatch('checkiflogin',true);
                    _this.$store.dispatch('settuserdata',{nickname:response.data.nickname});
                    _this.$store.dispatch('mengbanstatus',false);
                    _this.$store.dispatch('loginregistboxstatus',false);
                }).catch(function (response) {
                    console.log(response)
                })

                // let dengluchenggong = confirm('确定登陆成功?');
                // if(dengluchenggong){
                //     // this.loginregistboxstatus =false
                //     setlocalstorage('checkiflogin',true);
                //     setlocalstorage('settuserdata',{nickname:'小明'});
                //
                //     this.$store.dispatch('checkiflogin',true);
                //     this.$store.dispatch('settuserdata',{nickname:'小明'});
                //     this.$store.dispatch('mengbanstatus',false);
                //     this.$store.dispatch('loginregistboxstatus',false);
                // }
            },
            regist(){
                let _this = this;
                this.axios.post('/blog/public/index.php/register',{
                    email:this.email,
                    verify_code:this.regist_keyword,
                    password:this.password,
                    repassword:this.password,
                }).then(function (res) {
                    debugger;
                    console.log(res)
                    setlocalstorage('checkiflogin',true);
                    // setlocalstorage('settuserdata',{nickname:res.data.nickname});
                    setlocalstorage('settuserdata',{nickname:'已登陆',id:res.data.id});

                    _this.$store.dispatch('checkiflogin',true);
                    _this.$store.dispatch('settuserdata',{nickname:'已登陆'});
                    _this.$store.dispatch('mengbanstatus',false);
                    _this.$store.dispatch('loginregistboxstatus',false);
                });
                // let zhucechenggong = confirm('模拟注册成功?');
                // if(zhucechenggong){
                //     this.loginregistboxstatus =false
                //     setlocalstorage('checkiflogin',true);
                //     setlocalstorage('settuserdata',{nickname:'小明'});
                //
                //     this.$store.dispatch('checkiflogin',true);
                //     this.$store.dispatch('settuserdata',{nickname:'小明'});
                //     this.$store.dispatch('mengbanstatus',false);
                //     this.$store.dispatch('loginregistboxstatus',false);
                // }
            },
            get_keyword(){
                // todo: 此处的获取验证码还不通,需调试
                // debugger;
                this.axios.post('/blog/public/index.php/sendMail',{
                    email:this.regist_email
                }).then(function (res) {
                    // debugger;
                    // if(res.data.code==0){
                    //     alert(res.data.msg);
                    //     return;
                    // }
                    alert(res.data.msg);
                })
            }
        },
        computed:{
            loginregistboxstatus(){
                return this.$store.state.loginregistboxstatus
            },
            mengbanstatus(){
                return this.$store.state.mengbanstatus
            }
        },
        created() {
            // eventbus.$on('loginregistboxstatus',(val)=>{
            //     // 监听s设置显示当前组件的状态loginregistboxstatus
            //     this.loginregistboxstatus = val;
            // })
        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/common";
    .loginregistbox{

        /*loginregist参照的定位对象为wrap必要时需要给wrap设置relative*/
        .loginregist{
            /*width: 30vw;*/
            /*min-width: 450px;*/
            /*height: 30vw;*/
            /*min-height: 450px;*/
            height: 450px;
            width: 450px;
            border-radius: 50%;
            overflow: hidden;
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 1001;
            transform: translate(-50%,-50%);
            border: 1px solid @bordercolor;
            background-color: @white;



            .loginbox,.registbox{
                position: absolute;
                width: 100%;
                height: 100%;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                box-sizing: border-box;

                padding-top: 7.88em;
                h3{
                    display: block;
                    margin-bottom: 1em;
                }
                &>div{
                    line-height: 2em;
                    margin: 0 auto 1em;
                    display: inline-block;
                    &>*{
                        float: left;
                    }
                    &>span{
                        width: 4.3em;
                        text-align: right;
                        margin-right: 4px;
                    }
                    input{
                        outline: none;
                        height: 2em;
                        border: none;
                        padding: 2px 4px;
                        box-sizing: border-box;
                    }

                    //为了防止登录或注册按钮和别的元素并排了 用了hr元素并隐藏来解决
                    &.submitbtn{
                        padding: 0 2em;
                        border-radius: 0.2em;
                        cursor: pointer;
                        border: 1px solid @bordercolor;
                        background-color: @white;
                        min-width: auto;
                    }
                    &.tips{
                        width: 100%;
                        text-align: center;
                        span{
                            float: none;
                            color: @linkcolor;
                            i{
                                color: @linkcoloractive;
                                cursor: pointer;
                                padding: 0 0.35em;
                            }
                        }
                    }
                }
            }
            .loginbox{
                background: @hoverbgcolorr;

            }
            .registbox{
                background: @hoverbgcolorl;
            }
        }
    }


    .scale-fade-enter-active,.scale-fade-leave-active{
        transition: all 0.6s ease;
    }
    .scale-fade-enter,.scale-fade-leave-to{
        opacity: 0;
    }
    .scale-fade-enter-to,.scale-fade-leave{
        opacity: 1;
    }
</style>