<template>
  <div id="app">
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <router-view/>
  </div>
</template>
<script>
  import {checkdevice} from './usefuljs/checkdevice';
  export default {
    beforeCreate() {
      checkdevice();
    }
  }
</script>

<style lang="less">
@import "./assets/reset.css";
@import "./assets/common.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


html{
  width: 100%;
  height: 100%;
}
body{
  background: @bgcolor;
  width: 100%;
  height: 100%;
  min-width: 1200px;
}
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url('http://ooo0o.com/0e7b9201905192323168905.jpg');
  background-size: cover;
}

/*#nav {*/
/*  padding: 30px;*/
/*}*/

/*#nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*#nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>
