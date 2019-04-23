<template>
    <div @click="clickmengban()" class="mengbanbox" v-if="mengbanstatus"></div>
</template>

<script>
    import eventbus from './../../eventbus/index.js'
    export default {
        name: "mengban",
        // props:['mengbanstatus'],
        data() {
            return {
                // mengbanstatus:false
            }
        },
        methods: {
            clickmengban:function () {
                // eventbus.$emit('loginregistboxstatus',false);
                // this.mengbanstatus=false;
                this.$store.dispatch('mengbanstatus',false);
                this.$store.dispatch('loginregistboxstatus',false);
            }
        },
        mounted() {

        },
        computed:{
            mengbanstatus(){
                return this.$store.state.mengbanstatus
            }
        },
        created() {
            // eventbus.$on('mengbanstatus',(val)=>{
            //     this.mengbanstatus = val;
            // })
        }
    };
</script>

<style lang="less" scoped>
    @import "./../../assets/common";
    .mengbanbox{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        /*background-color: rgba(0,0,0,0.3);*/
        /*background: linear-gradient(left,#f96,#ace);*/
        background: linear-gradient(left,rgba(170,204,238,0.9),rgba(255,153,102,0.9));
        z-index: @mengbanzIndex;
    }
</style>